# UPP-1: useAI Provider Protocol Specification

**Version:** 1.0.0-draft
**Status:** Draft
**Authors:** UPP Working Group

---

## Abstract

UPP (useAI Provider Protocol) is a first-generation standard for simplifying LLM inference and enabling multi-provider interoperability. The protocol defines a uniform interface for interacting with Large Language Models, Image Generation Models, Video Generation Models, and other AI inference APIs through a single, consistent developer experience.

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Design Principles](#2-design-principles)
3. [Core Concepts](#3-core-concepts)
4. [Provider Protocol](#4-provider-protocol)
5. [useAI Interface](#5-useai-interface)
6. [Messages](#6-messages)
7. [Turns](#7-turns)
8. [Threads](#8-threads)
9. [Streaming](#9-streaming)
10. [Tools](#10-tools)
11. [Structured Outputs](#11-structured-outputs)
12. [Type Definitions](#12-type-definitions)
13. [Provider Implementation Guide](#13-provider-implementation-guide)
14. [Conformance](#14-conformance)

---

## 1. Introduction

### 1.1 Purpose

Modern AI development requires interacting with multiple providers (Anthropic, OpenAI, Google, etc.), each with distinct APIs, authentication schemes, and response formats. UPP-1 establishes a standard protocol that:

- Provides a single point of contact for all AI inference operations
- Enables provider switching without application code changes
- Maintains provider-native configuration to avoid abstraction leakage
- Supports text, image, video, audio, and future modalities

### 1.2 Scope

This specification covers:

- The `useAI` function interface
- Provider adapter requirements
- Message, Turn, and Thread data structures
- Streaming response handling
- Tool definition and execution

### 1.3 Terminology

| Term | Definition |
|------|------------|
| **Provider** | An adapter that wraps a specific AI vendor's API (e.g., Anthropic, OpenAI) |
| **Model** | A bound instance returned by a provider function |
| **Message** | A single message in a conversation (user, assistant, or tool result) |
| **Turn** | The complete result of one inference call, containing all messages produced |
| **MessageFragment** | A partial response during streaming (tokens, partial images, etc.) |
| **Thread** | A utility class for managing conversation history |
| **UPP** | useAI Provider Protocol |

---

## 2. Design Principles

### 2.1 Provider Transparency

Configuration passes through to providers unchanged. UPP does not impose its own defaults or transform model parameters. When no config is supplied, provider defaults apply.

**Rationale:** Developers should reference provider documentation directly. UPP avoids "morphic magic" that obscures what's actually sent to the API.

### 2.2 Explicit Over Magic

UPP favors explicit APIs over implicit behavior:

- `generate()` for complete responses, `stream()` for streaming—no await/non-await magic
- Users manage their own conversation history—no hidden state mutation
- System prompts declared at configuration, not buried in message arrays

### 2.3 Modality Agnostic

Messages are not bound to text. A `Message` can encapsulate:
- Text responses
- Images (complete or partial)
- Video frames
- Audio segments
- Tool calls and results
- Arbitrary binary data

### 2.4 Progressive Complexity

Simple use cases require minimal code. Advanced features (tools, custom strategies, provider config) are opt-in.

### 2.5 Interoperability Where Possible

UPP enables provider switching for common operations. However, provider-specific features may not translate. The protocol does not guarantee feature parity—it guarantees interface consistency.

### 2.6 HTTP-First Provider Implementation

UPP **strongly recommends** that providers wrap vendor REST APIs directly using native HTTP primitives (e.g., `fetch`) rather than depending on first-party vendor SDKs.

**Rationale:**

- **Minimal dependencies:** Avoid pulling in large SDK packages and their transitive dependencies
- **Full control:** Direct HTTP access allows providers to manage request/response transformation, streaming, retries, and timeouts without SDK abstractions interfering
- **Consistency:** All providers follow the same HTTP-based pattern
- **Transparency:** Developers can inspect exactly what's sent over the wire
- **Bundle size:** Critical for edge deployments and browser environments

Providers MAY use vendor SDKs if there's a compelling reason, but this should be the exception.

---

## 3. Core Concepts

### 3.1 The Inference Pipeline

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│   useAI()   │────▶│   Provider   │────▶│  Vendor API     │
│  (unified)  │◀────│  (adapter)   │◀────│  (Anthropic,    │
│             │     │              │     │   OpenAI, etc.) │
└─────────────┘     └──────────────┘     └─────────────────┘
       │                   │
       ▼                   ▼
     Turn               Transform
   (messages)          Request/Response
```

### 3.2 Data Flow

1. Developer calls `useAI` with a provider-bound model
2. Developer calls `generate()` or `stream()` with message history and new input
3. Provider transforms input to vendor-specific format
4. Provider handles tool execution loop (if tools configured)
5. Provider returns a `Turn` containing all messages from this inference
6. Developer appends turn messages to their history for future calls

### 3.3 Separation of Concerns

UPP separates configuration into distinct layers:

| Layer | Purpose | Example |
|-------|---------|---------|
| **Provider Config** | Infrastructure/connection settings | `apiKey`, `baseUrl`, `timeout`, `fetch` |
| **Model Config** | Model behavior parameters | `temperature`, `max_tokens`, `top_p` |
| **System Prompt** | Conversation-level instruction | `"You are a helpful assistant"` |
| **Tools** | Available tool definitions | `[getWeather, searchWeb]` |

---

## 4. Provider Protocol

A Provider is responsible for:

1. Binding a model identifier to a callable interface
2. Transforming UPP requests into vendor API format
3. Transforming vendor responses into UPP format

**Note:** Providers handle single request/response cycles only. The tool execution loop is managed by useAI core (see [Section 5.7](#57-tool-execution-loop)).

### 4.1 Provider Interface

```ts
interface Provider<TParams = unknown> {
  /** Unique identifier for this provider */
  readonly name: string;

  /** Provider version */
  readonly version: string;

  /** Supported modalities */
  readonly modalities: Modality[];

  /**
   * Create a bound model instance
   * @param modelId - The model identifier (e.g., 'claude-haiku-4.5')
   */
  (modelId: string): BoundModel<TParams>;
}

interface BoundModel<TParams = unknown> {
  /** The model identifier */
  readonly modelId: string;

  /** Reference to the parent provider */
  readonly provider: Provider<TParams>;

  /** Execute a single non-streaming inference request */
  complete(request: ProviderRequest<TParams>): Promise<ProviderResponse>;

  /** Execute a single streaming inference request */
  stream(request: ProviderRequest<TParams>): ProviderStreamResult;
}

/** Raw provider response (single cycle, no tool loop) */
interface ProviderResponse {
  message: AssistantMessage;
  usage: TokenUsage;
  stopReason: string;
}

/** Raw provider stream result */
interface ProviderStreamResult extends AsyncIterable<MessageFragment> {
  readonly response: Promise<ProviderResponse>;
}
```

### 4.2 Provider Request

The request passed from useAI core to providers:

```ts
interface ProviderRequest<TParams = unknown> {
  /** All messages for this request (history + new input) */
  messages: Message[];

  /** System prompt */
  system?: string;

  /** Model-specific parameters (passed through unchanged) */
  params?: TParams;

  /** Tools available for this request */
  tools?: Tool[];

  /** Structured output schema (if requested) */
  structure?: JSONSchema;

  /** Provider infrastructure config */
  config: ProviderConfig;

  /** Abort signal for cancellation */
  signal?: AbortSignal;
}
```

### 4.3 Provider Registration

Providers are imported directly from submodules:

```ts
import { anthropic } from 'useAI/anthropic';
import { openai } from 'useAI/openai';
import { google } from 'useAI/google';
```

### 4.4 Provider Responsibilities

#### 4.4.1 Request Transformation

The provider MUST transform UPP structures to vendor format:

- Convert `Message` subclasses to vendor message format
- Handle system prompt according to vendor requirements (top-level param vs message)
- Convert `Tool` definitions from JSON Schema to vendor tool format
- Convert binary data (images, audio) to vendor-required encoding (e.g., base64)
- Transform structured output schema to vendor format (if supported)

UPP provides standard mutators for common transformations:

```ts
import { toBase64, toDataUrl } from 'useAI/mutators';
```

#### 4.4.2 Response Transformation

The provider MUST transform vendor responses to UPP structures:

- Map vendor response to `AssistantMessage` (which may include `toolCalls`)
- Map streaming chunks to `MessageFragment` with fragment metadata
- Preserve vendor-specific metadata in `Message.metadata` under the provider's namespace

**Note:** The provider returns a single `ProviderResponse`. useAI core handles constructing the full `Turn` including tool loops.

#### 4.4.3 Metadata Handling

Providers MUST handle their own metadata namespace in `Message.metadata`:

**Extracting metadata from responses:**
```ts
// Google provider extracting thought_signature
const message = new AssistantMessage(content, toolCalls, {
  metadata: {
    google: {
      thought_signature: vendorResponse.thought_signature,
    },
  },
});
```

**Including metadata in requests:**
```ts
// When sending messages back to the API, providers extract their namespace
function transformToVendor(message: Message) {
  const googleMeta = message.metadata?.google;
  return {
    role: message.type,
    content: transformContent(message.content),
    // Include provider-specific fields
    ...(googleMeta?.thought_signature && {
      thought_signature: googleMeta.thought_signature,
    }),
  };
}
```

Providers SHOULD preserve unknown metadata fields during round-trips to support future API additions.

#### 4.4.4 System Prompt Handling

The provider MUST handle system prompts according to vendor requirements:

| Provider | System Prompt Handling |
|----------|----------------------|
| Anthropic | Top-level `system` parameter |
| OpenAI | Message with `role: 'system'` |
| Google | `systemInstruction` field |

UPP accepts system prompts at the `useAI` level and providers transform accordingly.

#### 4.4.5 Structured Output Handling

If `structure` is provided, the provider MUST:

1. Transform the JSON Schema to vendor-specific format (if different)
2. Enable structured output mode on the API request
3. If the vendor doesn't support native structured outputs, the provider is responsible for parsing and validating the response against the schema

#### 4.4.6 Error Handling

The provider MUST normalize errors to `UPPError`:

```ts
class UPPError extends Error {
  readonly code: ErrorCode;
  readonly provider: string;
  readonly statusCode?: number;
  readonly cause?: Error;
}

type ErrorCode =
  | 'AUTHENTICATION_FAILED'
  | 'RATE_LIMITED'
  | 'CONTEXT_LENGTH_EXCEEDED'
  | 'MODEL_NOT_FOUND'
  | 'INVALID_REQUEST'
  | 'INVALID_RESPONSE'      // Response failed validation (e.g., structured output)
  | 'PROVIDER_ERROR'
  | 'NETWORK_ERROR'
  | 'TIMEOUT'
  | 'CANCELLED';
```

---

## 5. useAI Interface

### 5.1 Function Signature

```ts
function useAI<TParams = unknown>(options: UseAIOptions<TParams>): AIInstance<TParams>;
```

### 5.2 Options

```ts
interface UseAIOptions<TParams = unknown> {
  /** A bound model from a provider */
  model: BoundModel<TParams>;

  /** Provider infrastructure configuration */
  config: ProviderConfig;

  /** Model-specific parameters (temperature, max_tokens, etc.) */
  params?: TParams;

  /** System prompt for all inferences */
  system?: string;

  /** Tools available to the model */
  tools?: Tool[];

  /** Tool execution strategy */
  toolStrategy?: ToolUseStrategy;

  /** Structured output schema (JSON Schema) */
  structure?: JSONSchema;
}

interface ProviderConfig {
  /**
   * API key - string, async function, or key strategy
   * @example 'sk-xxx'
   * @example () => fetchKeyFromVault()
   * @example new RoundRobinKeys(['sk-1', 'sk-2'])
   */
  apiKey?: string | (() => string | Promise<string>) | KeyStrategy;

  /** Override the base API URL (for proxies, local models) */
  baseUrl?: string;

  /** Request timeout in milliseconds */
  timeout?: number;

  /** Custom fetch implementation (for logging, caching, custom TLS) */
  fetch?: typeof fetch;

  /** API version override */
  apiVersion?: string;

  /** Retry configuration */
  retry?: RetryConfig;
}

interface RetryConfig {
  /** Maximum retry attempts (default: 3) */
  maxAttempts?: number;

  /** Backoff strategy */
  backoff?: 'exponential' | 'linear' | 'none';

  /** Initial delay in ms (default: 1000) */
  initialDelay?: number;

  /** Retry on these error codes (default: RATE_LIMITED, NETWORK_ERROR, TIMEOUT) */
  retryOn?: ErrorCode[];
}
```

### 5.3 Key Strategies

UPP provides built-in key strategies:

```ts
interface KeyStrategy {
  /** Get the next API key to use */
  getKey(): string | Promise<string>;
}

/** Round-robin through a list of API keys */
class RoundRobinKeys implements KeyStrategy {
  constructor(keys: string[]);
  getKey(): string;
}

/** Weighted random selection */
class WeightedKeys implements KeyStrategy {
  constructor(keys: Array<{ key: string; weight: number }>);
  getKey(): string;
}

/** Dynamic key selection based on custom logic */
class DynamicKey implements KeyStrategy {
  constructor(selector: () => string | Promise<string>);
  getKey(): Promise<string>;
}
```

### 5.4 AIInstance

```ts
interface AIInstance<TParams = unknown> {
  /**
   * Execute inference and return complete Turn
   *
   * @overload No history - single input
   * generate(input: InferenceInput): Promise<Turn>
   *
   * @overload No history - multiple inputs
   * generate(...inputs: InferenceInput[]): Promise<Turn>
   *
   * @overload With history
   * generate(history: Message[] | Thread, ...inputs: InferenceInput[]): Promise<Turn>
   */
  generate(
    historyOrInput: Message[] | Thread | InferenceInput,
    ...input: InferenceInput[]
  ): Promise<Turn>;

  /**
   * Execute streaming inference
   *
   * @overload No history - single input
   * stream(input: InferenceInput): StreamResult
   *
   * @overload No history - multiple inputs
   * stream(...inputs: InferenceInput[]): StreamResult
   *
   * @overload With history
   * stream(history: Message[] | Thread, ...inputs: InferenceInput[]): StreamResult
   */
  stream(
    historyOrInput: Message[] | Thread | InferenceInput,
    ...input: InferenceInput[]
  ): StreamResult;

  /** The bound model */
  readonly model: BoundModel<TParams>;

  /** Current system prompt */
  readonly system: string | undefined;

  /** Current parameters */
  readonly params: TParams | undefined;
}

type InferenceInput = string | Message | ContentBlock;
```

**History Detection:**

useAI determines if the first argument is history or input:
- `Message[]` or `Thread` → history
- `string`, `Message`, or `ContentBlock` → input (no history)

```ts
// No history - one-shot inference
await claude.generate('What is 2+2?');

// No history - multiple inputs
await claude.generate('Look at this:', image);

// With history
await claude.generate(history, 'Follow-up question');
await claude.generate(thread, 'Continue the conversation');
```

### 5.5 Basic Usage

```ts
import { useAI } from 'useAI';
import { anthropic } from 'useAI/anthropic';

const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: {
    apiKey: process.env.ANTHROPIC_API_KEY,
  },
  system: 'You are a helpful assistant.',
});

// Simple one-shot inference (no history needed)
const turn = await claude.generate('What is the capital of France?');
console.log(turn.response.text); // "The capital of France is Paris."
```

### 5.6 Full Configuration

```ts
import { useAI, RoundRobinKeys } from 'useAI';
import { anthropic, AnthropicParams } from 'useAI/anthropic';

const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: {
    apiKey: new RoundRobinKeys([
      process.env.ANTHROPIC_KEY_1!,
      process.env.ANTHROPIC_KEY_2!,
    ]),
    baseUrl: 'https://my-proxy.example.com',
    timeout: 30000,
    retry: {
      maxAttempts: 3,
      backoff: 'exponential',
    },
  },
  params: {
    max_tokens: 4096,
    temperature: 0.7,
  } as AnthropicParams,
  system: 'You are a friendly AI assistant.',
});
```

### 5.7 Tool Execution Loop

useAI core manages the tool execution loop. Providers only handle single request/response cycles.

**Loop Flow:**

```
┌─────────────────────────────────────────────────────────────┐
│  useAI.generate(history, input)                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  1. Convert input to UserMessage                            │
│  2. Append to messages array                                │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  provider.complete()     │◄────────────────┐
              │  (single request)        │                 │
              └─────────────────────────┘                  │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  response.hasToolCalls? │──── No ────┐     │
              │                         │            │     │
              └─────────────────────────┘            │     │
                            │                        │     │
                           Yes                       │     │
                            │                        │     │
                            ▼                        │     │
              ┌─────────────────────────┐            │     │
              │  iterations <           │── No ──►  Error  │
              │  maxIterations?         │                  │
              └─────────────────────────┘                  │
                            │                              │
                           Yes                             │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  Execute tools          │                  │
              │  (parallel if multiple) │                  │
              └─────────────────────────┘                  │
                            │                              │
                            ▼                              │
              ┌─────────────────────────┐                  │
              │  Append AssistantMsg    │                  │
              │  (with toolCalls)       │                  │
              │  Append ToolResultMsg   │                  │
              │  to messages            │──────────────────┘
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  Build Turn from        │
              │  accumulated messages   │
              └─────────────────────────┘
                            │
                            ▼
                        Return Turn
```

**Implementation Notes:**

1. Each cycle increments `Turn.cycles`
2. Token usage is aggregated across all cycles
3. All messages (user, tool calls, tool results, final response) are collected in `Turn.messages`
4. If `maxIterations` is reached, `onMaxIterations` callback fires and an error is thrown
5. Tool execution order follows provider/model behavior (parallel if model returns multiple calls)

### 5.8 Conversation Flow

```ts
const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
});

// User manages their own history
const history: Message[] = [];

// First turn
const turn1 = await claude.generate(history, 'My name is Alice.');
history.push(...turn1.messages);

// Second turn (history preserved)
const turn2 = await claude.generate(history, 'What is my name?');
history.push(...turn2.messages);

console.log(turn2.response.text); // "Your name is Alice."
```

---

## 6. Messages

### 6.1 Message Hierarchy

Messages are represented as a class hierarchy, allowing type-safe handling and provider-specific transformations:

```ts
/**
 * Base message class - all messages inherit from this
 */
abstract class Message {
  /** Unique message identifier */
  readonly id: string;

  /** Timestamp */
  readonly timestamp: Date;

  /**
   * Provider-specific metadata, namespaced by provider.
   * Providers are responsible for transforming their metadata to/from API format.
   *
   * @example
   * {
   *   google: { thought_signature: 'abc123...' },
   *   openai: { reasoning_encrypted: '...' },
   *   anthropic: { cache_control: { type: 'ephemeral' } }
   * }
   */
  readonly metadata?: MessageMetadata;

  /** Message type discriminator */
  abstract readonly type: MessageType;

  /**
   * Convenience accessor for text content
   * Concatenates all text blocks with '\n\n'
   */
  readonly text: string;
}

/**
 * Provider-namespaced metadata.
 * Each provider defines its own metadata shape.
 */
interface MessageMetadata {
  google?: {
    thought_signature?: string;
    [key: string]: unknown;
  };
  openai?: {
    reasoning_encrypted?: string;
    [key: string]: unknown;
  };
  anthropic?: {
    cache_control?: { type: 'ephemeral' };
    [key: string]: unknown;
  };
  /** Extensible for other providers */
  [provider: string]: Record<string, unknown> | undefined;
}

type MessageType =
  | 'user'
  | 'assistant'
  | 'tool_result';
```

### 6.2 Message Subclasses

```ts
/**
 * User input message
 */
class UserMessage extends Message {
  readonly type = 'user';
  readonly content: UserContent[];
}

type UserContent = TextBlock | ImageBlock | AudioBlock | VideoBlock | BinaryBlock;

/**
 * Assistant response message
 * May contain text, media, and/or tool calls
 */
class AssistantMessage extends Message {
  readonly type = 'assistant';
  readonly content: AssistantContent[];

  /** Tool calls requested by the model (if any) */
  readonly toolCalls?: ToolCall[];

  /** Check if this message requests tool execution */
  get hasToolCalls(): boolean {
    return this.toolCalls !== undefined && this.toolCalls.length > 0;
  }
}

type AssistantContent = TextBlock | ImageBlock | AudioBlock | VideoBlock;

interface ToolCall {
  toolCallId: string;
  toolName: string;
  arguments: Record<string, unknown>;
}

/**
 * Result of tool execution (sent back to model)
 */
class ToolResultMessage extends Message {
  readonly type = 'tool_result';
  readonly results: ToolResult[];
}

interface ToolResult {
  toolCallId: string;
  result: unknown;
  isError?: boolean;
}
```

**Note:** Models can return both text AND tool calls in a single response (e.g., "I'll check the weather for you." + tool call). `AssistantMessage` handles both cases - check `hasToolCalls` to determine if tool execution is needed.

### 6.3 Content Blocks

Content blocks represent discrete pieces of content within messages:

```ts
type ContentBlock =
  | TextBlock
  | ImageBlock
  | AudioBlock
  | VideoBlock
  | BinaryBlock;

interface TextBlock {
  type: 'text';
  text: string;
}

interface ImageBlock {
  type: 'image';
  source: ImageSource;
  mimeType: string;
  width?: number;
  height?: number;
}

type ImageSource =
  | { type: 'base64'; data: string }
  | { type: 'url'; url: string }
  | { type: 'bytes'; data: Uint8Array };

interface AudioBlock {
  type: 'audio';
  data: Uint8Array;
  mimeType: string;
  duration?: number;
}

interface VideoBlock {
  type: 'video';
  data: Uint8Array;
  mimeType: string;
  duration?: number;
  width?: number;
  height?: number;
}

interface BinaryBlock {
  type: 'binary';
  data: Uint8Array;
  mimeType: string;
  metadata?: Record<string, unknown>;
}
```

### 6.4 Message Construction

```ts
// Text user message
const userMsg = new UserMessage('Hello, world!');

// User message with image
const imageMsg = new UserMessage([
  Image.fromPath('diagram.png'),
  'Please explain this diagram',
]);

// User message with URL-based image
const urlImageMsg = new UserMessage([
  Image.fromUrl('https://example.com/image.png'),
  'What is this?',
]);

// Assistant message (text only)
const assistantMsg = new AssistantMessage('I can help with that!');

// Assistant message with tool calls (typically created by provider)
const assistantWithTools = new AssistantMessage(
  [{ type: 'text', text: "I'll check the weather for you." }],
  [{ toolCallId: 'call_123', toolName: 'getWeather', arguments: { location: 'Tokyo' } }]
);

// Tool result message (created by useAI core after tool execution)
const toolResultMsg = new ToolResultMessage([
  { toolCallId: 'call_123', result: '72°F, sunny' }
]);
```

### 6.5 Image Class

```ts
class Image {
  readonly source: ImageSource;
  readonly mimeType: string;
  readonly width?: number;
  readonly height?: number;

  private constructor(source: ImageSource, mimeType: string);

  /** Create from file path (loads data) */
  static fromPath(path: string): Promise<Image>;

  /** Create from URL (provider will fetch or pass URL based on support) */
  static fromUrl(url: string, mimeType?: string): Image;

  /** Create from raw bytes */
  static fromBytes(data: Uint8Array, mimeType: string): Image;

  /** Create from base64 string */
  static fromBase64(base64: string, mimeType: string): Image;

  /** Convert to base64 string (loads if needed) */
  toBase64(): Promise<string>;

  /** Convert to data URL */
  toDataUrl(): Promise<string>;

  /** Get raw bytes (loads if needed) */
  toBytes(): Promise<Uint8Array>;
}
```

### 6.6 Type Guards

UPP provides type guards for message handling:

```ts
function isUserMessage(msg: Message): msg is UserMessage;
function isAssistantMessage(msg: Message): msg is AssistantMessage;
function isToolResultMessage(msg: Message): msg is ToolResultMessage;

// Usage
for (const msg of turn.messages) {
  if (isAssistantMessage(msg)) {
    console.log('Response:', msg.text);
    if (msg.hasToolCalls) {
      console.log('Tool calls:', msg.toolCalls);
    }
  } else if (isToolResultMessage(msg)) {
    console.log('Tool results:', msg.results);
  }
}
```

---

## 7. Turns

### 7.1 Turn Structure

A `Turn` represents the complete result of one inference call, including all messages produced during tool execution loops.

```ts
interface Turn {
  /**
   * All messages produced during this inference, in chronological order.
   * Types: UserMessage, AssistantMessage (may include toolCalls), ToolResultMessage
   */
  readonly messages: Message[];

  /** The final assistant response (convenience accessor) */
  readonly response: AssistantMessage;

  /** Tool executions that occurred during this turn */
  readonly toolExecutions: ToolExecution[];

  /** Aggregate token usage for the entire turn */
  readonly usage: TokenUsage;

  /** Total number of inference cycles (1 + number of tool rounds) */
  readonly cycles: number;

  /** Structured output data (if structure was provided) */
  readonly data?: unknown;
}

interface ToolExecution {
  /** The tool that was called */
  toolName: string;

  /** Tool call ID */
  toolCallId: string;

  /** Arguments passed to the tool */
  arguments: Record<string, unknown>;

  /** Result returned by the tool */
  result: unknown;

  /** Whether the tool execution resulted in an error */
  isError: boolean;

  /** Execution duration in milliseconds */
  duration: number;

  /** Whether approval was required and granted */
  approved?: boolean;
}

interface TokenUsage {
  /** Input tokens across all cycles */
  inputTokens: number;

  /** Output tokens across all cycles */
  outputTokens: number;

  /** Total tokens */
  totalTokens: number;

  /** Per-cycle breakdown (if available) */
  cycles?: Array<{
    inputTokens: number;
    outputTokens: number;
  }>;
}
```

### 7.2 Turn Usage

```ts
const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'You are a helpful assistant.',
  tools: [getWeather],
});

const history: Message[] = [];

// This turn might involve tool calls
const turn = await claude.generate(history, 'What is the weather in Tokyo?');

// Turn contains ALL messages from this inference:
// 1. UserMessage: "What is the weather in Tokyo?"
// 2. AssistantMessage: { toolCalls: [{ toolName: 'getWeather', arguments: { location: 'Tokyo' } }] }
// 3. ToolResultMessage: [{ result: '72°F, sunny' }]
// 4. AssistantMessage: "The weather in Tokyo is 72°F and sunny!"

console.log(turn.messages.length); // 4
console.log(turn.response.text);   // "The weather in Tokyo is 72°F and sunny!"
console.log(turn.toolExecutions);  // [{ toolName: 'getWeather', ... }]
console.log(turn.cycles);          // 2 (initial + after tool)

// Append all messages to history for next turn
history.push(...turn.messages);
```

### 7.3 Turn Without Tool Calls

When no tools are called, the turn contains just the user input and assistant response:

```ts
const turn = await claude.generate('Hello!');

console.log(turn.messages.length);      // 2
console.log(turn.messages[0].type);     // 'user'
console.log(turn.messages[1].type);     // 'assistant'
console.log(turn.response.text);        // "Hello! How can I help you today?"
console.log(turn.response.hasToolCalls); // false
console.log(turn.toolExecutions);       // []
console.log(turn.cycles);               // 1
```

---

## 8. Threads

### 8.1 Thread as Utility

`Thread` is an **optional** utility class for managing conversation history. UPP does not manage threads internally—users control their own history.

```ts
class Thread {
  /** Create a new thread, optionally with initial messages */
  constructor(messages?: Message[]);

  /** Unique thread identifier */
  readonly id: string;

  /** All messages in the thread */
  readonly messages: readonly Message[];

  /** Number of messages */
  readonly length: number;

  /** Append messages from a turn */
  append(turn: Turn): this;

  /** Add raw messages */
  push(...messages: Message[]): this;

  /** Add a user message */
  user(content: string | ContentBlock[]): this;

  /** Add an assistant message */
  assistant(content: string | ContentBlock[]): this;

  /** Get messages by role */
  filter(role: 'user' | 'assistant'): Message[];

  /** Get the last N messages */
  tail(count: number): Message[];

  /** Create a new thread with a subset of messages */
  slice(start?: number, end?: number): Thread;

  /** Clear all messages */
  clear(): this;

  /** Convert to plain message array */
  toMessages(): Message[];

  /** Serialize to JSON */
  toJSON(): ThreadJSON;

  /** Deserialize from JSON */
  static fromJSON(json: ThreadJSON): Thread;

  /** Iterate over messages */
  [Symbol.iterator](): Iterator<Message>;
}
```

### 8.2 Thread Usage

```ts
const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  system: 'You are a helpful assistant.',
});

// Using Thread utility
const thread = new Thread();

const turn1 = await claude.generate(thread, 'My name is Bob.');
thread.append(turn1);

const turn2 = await claude.generate(thread, 'What did I just tell you?');
thread.append(turn2);

console.log(turn2.response.text); // "You told me your name is Bob."
console.log(thread.length);       // 4 messages

// Serialize for storage
const json = thread.toJSON();
localStorage.setItem('conversation', JSON.stringify(json));

// Restore later
const restored = Thread.fromJSON(JSON.parse(localStorage.getItem('conversation')!));
```

### 8.3 Using Raw Arrays

Threads are optional—you can use plain arrays:

```ts
const messages: Message[] = [];

const turn = await claude.generate(messages, 'Hello!');
messages.push(...turn.messages);
```

---

## 9. Streaming

### 9.1 StreamResult

Streaming returns a `StreamResult` that is both an async iterable and provides access to the final `Turn`:

```ts
interface StreamResult extends AsyncIterable<MessageFragment> {
  /**
   * Get the complete Turn after streaming finishes.
   * Resolves when the stream completes.
   */
  readonly turn: Promise<Turn>;

  /** Abort the stream */
  abort(): void;
}
```

### 9.2 MessageFragment

During streaming, providers emit `MessageFragment` objects:

```ts
interface MessageFragment {
  /** Fragment type */
  type: FragmentType;

  /** Index of the content block this fragment belongs to */
  index: number;

  /** Partial content (type-specific) */
  delta: FragmentDelta;
}

type FragmentType =
  | 'text_delta'           // Partial text token
  | 'reasoning_delta'      // Reasoning/thinking token
  | 'image_delta'          // Partial image data
  | 'audio_delta'          // Partial audio data
  | 'video_delta'          // Partial video data
  | 'tool_call_delta'      // Partial tool call
  | 'message_start'        // Stream started
  | 'message_stop'         // Stream complete
  | 'content_block_start'  // New content block started
  | 'content_block_stop';  // Content block complete

interface FragmentDelta {
  text?: string;
  data?: Uint8Array;
  toolCallId?: string;
  toolName?: string;
  argumentsJson?: string;
}
```

### 9.3 Streaming Usage

```ts
const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  system: 'You are a helpful assistant.',
});

const history: Message[] = [];

// Stream the response
const stream = claude.stream(history, 'Write a haiku about programming.');

for await (const fragment of stream) {
  if (fragment.type === 'text_delta') {
    process.stdout.write(fragment.delta.text ?? '');
  }
}

// Get the complete turn after streaming
const turn = await stream.turn;
history.push(...turn.messages);
```

### 9.4 Streaming with Tools

When tools are involved, streaming may pause while tools execute:

```ts
const stream = claude.stream(history, 'What is the weather in Paris?');

for await (const fragment of stream) {
  switch (fragment.type) {
    case 'text_delta':
      process.stdout.write(fragment.delta.text ?? '');
      break;
    case 'tool_call_delta':
      // Tool call being streamed
      console.log('[tool]', fragment.delta.toolName);
      break;
    case 'message_stop':
      // A message completed (might be tool call, will continue after tool runs)
      break;
  }
}

const turn = await stream.turn;
console.log('Tool executions:', turn.toolExecutions);
```

### 9.5 Aborting Streams

```ts
const stream = claude.stream(history, 'Write a very long story...');

setTimeout(() => {
  stream.abort(); // Cancel after 5 seconds
}, 5000);

try {
  for await (const fragment of stream) {
    process.stdout.write(fragment.delta.text ?? '');
  }
} catch (error) {
  if (error instanceof UPPError && error.code === 'CANCELLED') {
    console.log('Stream was cancelled');
  }
}
```

---

## 10. Tools

### 10.1 Tool Definition

Tools use **JSON Schema** for parameter definitions:

```ts
interface Tool<TParams = unknown, TResult = unknown> {
  /** Tool name (must be unique within a useAI instance) */
  name: string;

  /** Human-readable description for the model */
  description: string;

  /** JSON Schema defining parameters */
  parameters: JSONSchema;

  /** Tool execution function */
  run(params: TParams): TResult | Promise<TResult>;

  /** Optional approval handler for sensitive operations */
  approval?(params: TParams): boolean | Promise<boolean>;
}

type JSONSchema = {
  type: 'object';
  properties: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
};

type JSONSchemaProperty = {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
  description?: string;
  enum?: unknown[];
  items?: JSONSchemaProperty;
  properties?: Record<string, JSONSchemaProperty>;
  required?: string[];
  default?: unknown;
};
```

### 10.2 Tool Example

```ts
const getWeather: Tool<{ location: string; units?: string }> = {
  name: 'getWeather',
  description: 'Get current weather for a location',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'City name or coordinates',
      },
      units: {
        type: 'string',
        enum: ['celsius', 'fahrenheit'],
        default: 'celsius',
      },
    },
    required: ['location'],
  },
  async run({ location, units = 'celsius' }) {
    const weather = await fetchWeather(location, units);
    return `${weather.temp}° ${units}, ${weather.condition}`;
  },
};

const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  system: 'You are a weather assistant.',
  tools: [getWeather],
});
```

### 10.3 Tool Approval

For sensitive operations, tools can require approval:

```ts
const deleteFile: Tool<{ path: string }> = {
  name: 'deleteFile',
  description: 'Delete a file from the filesystem',
  parameters: {
    type: 'object',
    properties: {
      path: { type: 'string', description: 'File path to delete' },
    },
    required: ['path'],
  },
  async approval({ path }) {
    // UI prompt, admin check, path validation, etc.
    return await promptUser(`Allow deletion of ${path}?`);
  },
  async run({ path }) {
    await fs.unlink(path);
    return `Deleted ${path}`;
  },
};
```

### 10.4 Tool Execution Flow

By default, useAI handles tool execution automatically:

1. Model returns a message with `ToolCallBlock`
2. useAI validates parameters against JSON Schema
3. If `approval` is defined, it's called first (rejected = error result sent to model)
4. Tool's `run` function is executed
5. Result (or error) is sent back to the model as `ToolResultBlock`
6. Loop continues until model returns without tool calls OR max iterations reached

### 10.5 ToolUseStrategy

For custom control over tool execution:

```ts
interface ToolUseStrategy {
  /** Maximum tool execution rounds (default: 10) */
  maxIterations?: number;

  /** Called when the model requests a tool call */
  onToolCall?(tool: Tool, params: unknown): void | Promise<void>;

  /** Called before tool execution, return false to skip */
  onBeforeCall?(tool: Tool, params: unknown): boolean | Promise<boolean>;

  /** Called after tool execution */
  onAfterCall?(tool: Tool, params: unknown, result: unknown): void | Promise<void>;

  /** Called on tool execution error */
  onError?(tool: Tool, params: unknown, error: Error): void | Promise<void>;

  /** Called when max iterations reached */
  onMaxIterations?(iterations: number): void | Promise<void>;
}
```

### 10.6 Strategy Example

```ts
const strategy: ToolUseStrategy = {
  maxIterations: 5,

  async onBeforeCall(tool, params) {
    console.log(`Calling ${tool.name} with`, params);
    return true; // Allow execution
  },

  async onAfterCall(tool, params, result) {
    await logToolUsage(tool.name, params, result);
  },

  async onError(tool, params, error) {
    await alertOps(`Tool ${tool.name} failed: ${error.message}`);
  },

  async onMaxIterations(iterations) {
    console.warn(`Tool loop hit max iterations: ${iterations}`);
  },
};

const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  tools: [getWeather, searchWeb],
  toolStrategy: strategy,
});
```

### 10.7 Disabling Automatic Tool Execution

To handle tool calls manually:

```ts
const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  tools: [getWeather],
  toolStrategy: { maxIterations: 0 }, // Disable auto-execution
});

const turn = await claude.generate([], 'What is the weather?');

if (turn.response.hasToolCalls) {
  // Handle manually
  for (const toolCall of turn.response.toolCalls) {
    console.log('Model wants to call:', toolCall.toolName);
    // Execute yourself, then continue conversation
  }
}
```

---

## 11. Structured Outputs

### 11.1 Overview

Structured outputs allow you to constrain model responses to a specific JSON schema, ensuring valid, parseable data.

```ts
const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'Extract structured data from text.',
  structure: {
    type: 'object',
    properties: {
      name: { type: 'string', description: 'Person name' },
      age: { type: 'integer', description: 'Person age' },
      email: { type: 'string', format: 'email' },
    },
    required: ['name', 'age'],
  },
});

const turn = await claude.generate([], 'John Doe is 30 years old, email: john@example.com');

// turn.data contains the structured response
console.log(turn.data);
// { name: 'John Doe', age: 30, email: 'john@example.com' }

// turn.response.text may contain raw JSON or be empty depending on provider
```

### 11.2 Schema Definition

Structured outputs use standard JSON Schema:

```ts
interface JSONSchema {
  type: 'object';
  properties: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
  description?: string;
}

interface JSONSchemaProperty {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'null';
  description?: string;
  enum?: unknown[];
  const?: unknown;
  default?: unknown;

  // String-specific
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: 'email' | 'uri' | 'date' | 'date-time' | 'uuid';

  // Number-specific
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;

  // Array-specific
  items?: JSONSchemaProperty;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;

  // Object-specific
  properties?: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
}
```

### 11.3 Provider Handling

Providers handle structured outputs according to their capabilities:

| Provider | Implementation |
|----------|----------------|
| Anthropic | Uses tool_choice with schema |
| OpenAI | Uses response_format with json_schema |
| Google | Uses responseSchema |

If a provider doesn't natively support structured outputs:
1. The provider MUST still attempt to get JSON output
2. The provider MUST validate the response against the schema
3. Invalid responses should throw a `UPPError` with code `INVALID_RESPONSE`

### 11.4 Complex Schema Example

```ts
const weatherSchema: JSONSchema = {
  type: 'object',
  properties: {
    location: {
      type: 'object',
      properties: {
        city: { type: 'string' },
        country: { type: 'string' },
        coordinates: {
          type: 'object',
          properties: {
            lat: { type: 'number' },
            lon: { type: 'number' },
          },
          required: ['lat', 'lon'],
        },
      },
      required: ['city', 'country'],
    },
    current: {
      type: 'object',
      properties: {
        temperature: { type: 'number' },
        unit: { type: 'string', enum: ['celsius', 'fahrenheit'] },
        conditions: { type: 'string' },
        humidity: { type: 'integer', minimum: 0, maximum: 100 },
      },
      required: ['temperature', 'unit', 'conditions'],
    },
    forecast: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          date: { type: 'string', format: 'date' },
          high: { type: 'number' },
          low: { type: 'number' },
          conditions: { type: 'string' },
        },
        required: ['date', 'high', 'low'],
      },
      maxItems: 7,
    },
  },
  required: ['location', 'current'],
};

const weatherAI = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  system: 'Provide weather information in the requested format.',
  structure: weatherSchema,
});

const turn = await weatherAI.generate([], 'Weather in Tokyo for the next 3 days');
const weather = turn.data as WeatherResponse; // Type assertion
console.log(weather.location.city); // 'Tokyo'
console.log(weather.forecast.length); // 3
```

### 11.5 Structured Output with Tools

Structured outputs can be combined with tools. The final response will be structured:

```ts
const claude = useAI({
  model: anthropic('claude-haiku-4.5'),
  config: { apiKey: process.env.ANTHROPIC_API_KEY },
  tools: [getWeatherTool],
  structure: {
    type: 'object',
    properties: {
      summary: { type: 'string' },
      temperature: { type: 'number' },
      recommendation: { type: 'string' },
    },
    required: ['summary', 'temperature', 'recommendation'],
  },
});

// Model may call tools, but final response will be structured
const turn = await claude.generate([], 'Should I bring an umbrella in Tokyo today?');
console.log(turn.data);
// { summary: 'Sunny and warm', temperature: 72, recommendation: 'No umbrella needed' }
```

---

## 12. Type Definitions

### 12.1 Complete Type Reference

```ts
// Core types
type Modality = 'text' | 'image' | 'audio' | 'video' | 'embedding';
type MessageType = 'user' | 'assistant' | 'tool_result';

// Re-exports from sections above
export {
  // Provider
  Provider,
  BoundModel,
  ProviderConfig,
  ProviderRequest,
  ProviderResponse,
  ProviderStreamResult,
  KeyStrategy,
  RoundRobinKeys,
  WeightedKeys,
  DynamicKey,
  RetryConfig,

  // useAI
  UseAIOptions,
  AIInstance,
  InferenceInput,

  // Messages (hierarchy)
  Message,           // Base class
  UserMessage,       // User input
  AssistantMessage,  // Assistant response (may include tool calls)
  ToolResultMessage, // Tool execution results
  MessageMetadata,   // Provider-namespaced metadata
  MessageType,       // Message type discriminator

  // Message content
  ContentBlock,
  TextBlock,
  ImageBlock,
  AudioBlock,
  VideoBlock,
  BinaryBlock,
  ImageSource,
  ToolCall,
  ToolResult,

  // Message utilities
  Image,
  isUserMessage,
  isAssistantMessage,
  isToolResultMessage,

  // Turns
  Turn,
  ToolExecution,
  TokenUsage,

  // Threads
  Thread,
  ThreadJSON,

  // Streaming
  StreamResult,
  MessageFragment,
  FragmentType,
  FragmentDelta,

  // Tools
  Tool,
  ToolUseStrategy,

  // Structured Outputs
  JSONSchema,
  JSONSchemaProperty,

  // Errors
  UPPError,
  ErrorCode,
};
```

### 12.2 Provider-Specific Types

Each provider module exports its own parameter types:

```ts
// useAI/anthropic
export interface AnthropicParams {
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  top_k?: number;
  stop_sequences?: string[];
  // ... full Anthropic API options
}

// useAI/openai
export interface OpenAIParams {
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  response_format?: { type: 'text' | 'json_object' };
  // ... full OpenAI API options
}

// useAI/google
export interface GoogleParams {
  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  topK?: number;
  // ... full Google AI options
}
```

---

## 13. Provider Implementation Guide

### 13.1 HTTP-First Approach

Per [Section 2.6](#26-http-first-provider-implementation), providers SHOULD use direct HTTP calls rather than vendor SDKs.

### 13.2 Creating a Provider

```ts
import { Provider, BoundModel, ProviderResponse, MessageFragment, UPPError } from 'useAI';
import { parseSSEStream } from 'useAI/http';

const DEFAULT_BASE_URL = 'https://api.vendor.com/v1';

export const myProvider: Provider<MyConfig> = Object.assign(
  function(modelId: string, providerConfig?: ProviderConfig): BoundModel<MyConfig> {
    const config = {
      baseUrl: providerConfig?.baseUrl ?? DEFAULT_BASE_URL,
      timeout: providerConfig?.timeout ?? 60000,
      fetch: providerConfig?.fetch ?? globalThis.fetch,
      apiKey: providerConfig?.apiKey,
      retry: providerConfig?.retry ?? { maxAttempts: 3, backoff: 'exponential' },
    };

    async function getApiKey(): Promise<string> {
      if (!config.apiKey) {
        throw new UPPError('API key not configured', 'AUTHENTICATION_FAILED', 'my-provider');
      }
      if (typeof config.apiKey === 'string') return config.apiKey;
      if (typeof config.apiKey === 'function') return config.apiKey();
      return config.apiKey.getKey();
    }

    return {
      modelId,
      provider: myProvider,

      async complete(request) {
        const apiKey = await getApiKey();
        const body = buildRequestBody(request, modelId);

        const response = await config.fetch(`${config.baseUrl}/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(body),
          signal: request.signal,
        });

        if (!response.ok) {
          throw await normalizeError(response);
        }

        const data = await response.json();
        return buildProviderResponse(data);
      },

      stream(request) {
        // Implementation shown in 13.5
      },
    };
  },
  {
    name: 'my-provider',
    version: '1.0.0',
    modalities: ['text', 'image'],
  }
);
```

### 13.3 Request Transformation

```ts
function buildRequestBody(request: ProviderRequest<MyConfig>, modelId: string) {
  return {
    model: modelId,
    messages: [
      ...request.messages.map(transformMessageToVendor),
      ...request.input.map(inputToMessage).map(transformMessageToVendor),
    ],
    system: request.system, // Handle per vendor requirements
    tools: request.tools?.map(transformToolToVendor),
    ...request.config,
  };
}

function transformMessageToVendor(message: Message): VendorMessage {
  return {
    role: message.role,
    content: message.content.map(block => {
      switch (block.type) {
        case 'text':
          return { type: 'text', text: block.text };
        case 'image':
          return {
            type: 'image',
            source: {
              type: 'base64',
              media_type: block.mimeType,
              data: toBase64(block.data),
            },
          };
        case 'tool_call':
          return {
            type: 'tool_use',
            id: block.toolCallId,
            name: block.toolName,
            input: block.arguments,
          };
        case 'tool_result':
          return {
            type: 'tool_result',
            tool_use_id: block.toolCallId,
            content: JSON.stringify(block.result),
            is_error: block.isError,
          };
        default:
          throw new Error(`Unsupported block type: ${block.type}`);
      }
    }),
  };
}

function transformToolToVendor(tool: Tool): VendorTool {
  return {
    name: tool.name,
    description: tool.description,
    input_schema: tool.parameters, // JSON Schema passes through
  };
}
```

### 13.4 Response Transformation

```ts
function buildProviderResponse(vendorResponse: VendorResponse): ProviderResponse {
  const message = transformVendorResponse(vendorResponse);

  return {
    message,
    usage: {
      inputTokens: vendorResponse.usage?.input_tokens ?? 0,
      outputTokens: vendorResponse.usage?.output_tokens ?? 0,
      totalTokens: (vendorResponse.usage?.input_tokens ?? 0) +
                   (vendorResponse.usage?.output_tokens ?? 0),
    },
    stopReason: vendorResponse.stop_reason ?? 'end_turn',
  };
}

function transformVendorResponse(data: VendorResponse): AssistantMessage {
  const content = data.content.map(transformVendorContent);
  const toolCalls = content
    .filter((c: any) => c.type === 'tool_call')
    .map((c: any) => ({
      toolCallId: c.toolCallId,
      toolName: c.toolName,
      arguments: c.arguments,
    }));

  return new AssistantMessage(
    content.filter((c: any) => c.type !== 'tool_call'),
    toolCalls.length > 0 ? toolCalls : undefined,
    {
      id: data.id,
      model: data.model,
      stopReason: data.stop_reason,
    }
  );
}
```

### 13.5 Streaming Implementation

```ts
stream(request): ProviderStreamResult {
  let responseResolve: (res: ProviderResponse) => void;
  let responseReject: (error: Error) => void;
  const responsePromise = new Promise<ProviderResponse>((resolve, reject) => {
    responseResolve = resolve;
    responseReject = reject;
  });

  const self: ProviderStreamResult = {
    response: responsePromise,

    async *[Symbol.asyncIterator]() {
      try {
        const apiKey = await getApiKey();
        const body = buildRequestBody(request, modelId);

        const response = await config.fetch(`${config.baseUrl}/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ ...body, stream: true }),
          signal: request.signal,
        });

        if (!response.ok) {
          throw await normalizeError(response);
        }

        const accumulated: any = { content: [] };

        for await (const event of parseSSEStream(response.body!)) {
          const fragment = transformVendorEvent(event, accumulated);
          if (fragment) yield fragment;
        }

        const providerResponse = buildProviderResponse(accumulated);
        responseResolve(providerResponse);
      } catch (error) {
        responseReject(error as Error);
        throw error;
      }
    },
  };

  return self;
}
```

### 13.6 SSE Stream Parsing

UPP provides a utility for parsing Server-Sent Events streams:

```ts
import { parseSSEStream } from 'useAI/http';

async function* parseSSEStream(
  body: ReadableStream<Uint8Array>
): AsyncGenerator<unknown> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') return;
          yield JSON.parse(data);
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}
```

### 13.7 Error Normalization

```ts
async function normalizeError(response: Response): Promise<UPPError> {
  const body = await response.json().catch(() => ({}));

  const codeMap: Record<number, ErrorCode> = {
    401: 'AUTHENTICATION_FAILED',
    429: 'RATE_LIMITED',
    400: 'INVALID_REQUEST',
    404: 'MODEL_NOT_FOUND',
    413: 'CONTEXT_LENGTH_EXCEEDED',
    408: 'TIMEOUT',
    499: 'CANCELLED',
  };

  return new UPPError(
    body.error?.message ?? response.statusText,
    codeMap[response.status] ?? 'PROVIDER_ERROR',
    'my-provider',
    response.status,
    body.error,
  );
}
```

---

## 14. Conformance

### 14.1 Provider Conformance Levels

#### Level 1: Core (Required)
- Text input/output
- Basic configuration pass-through
- Error normalization to `UPPError`
- `generate()` method returning `Turn`
- System prompt handling

#### Level 2: Streaming
- `stream()` method implementation
- Proper `MessageFragment` emission
- `StreamResult` with `turn` promise
- Fragment type mapping

#### Level 3: Tools
- Tool definition transformation (JSON Schema)
- Tool call detection in responses
- Tool result handling
- Tool execution loop (respecting `maxIterations`)

#### Level 4: Multimodal
- Image input handling
- Image output handling (if supported)
- Audio input/output (if supported)
- Video input/output (if supported)
- Binary data handling

### 14.2 Interoperability Notes

The following features are provider-dependent and may not transfer between providers:

- Token counting and limits
- Specific tool calling formats
- Streaming granularity
- Response metadata structure
- Rate limiting behavior
- Supported modalities

Developers should consult individual provider documentation for feature support.

---

## Appendix A: Example Provider (Anthropic)

```ts
// useAI/anthropic.ts
import {
  Provider, BoundModel, ProviderResponse, ProviderStreamResult,
  MessageFragment, AssistantMessage, UPPError, ProviderConfig, ProviderRequest
} from 'useAI';
import { parseSSEStream, toBase64 } from 'useAI/http';

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

export interface AnthropicConfig {
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  top_k?: number;
  stop_sequences?: string[];
  metadata?: { user_id?: string };
}

export const anthropic: Provider<AnthropicConfig> = Object.assign(
  function(modelId: string, providerConfig?: ProviderConfig): BoundModel<AnthropicConfig> {
    const baseUrl = providerConfig?.baseUrl ?? ANTHROPIC_API_URL;
    const timeout = providerConfig?.timeout ?? 60000;
    const customFetch = providerConfig?.fetch ?? globalThis.fetch;
    const apiVersion = providerConfig?.apiVersion ?? ANTHROPIC_VERSION;

    async function getApiKey(): Promise<string> {
      const key = providerConfig?.apiKey;
      if (!key) {
        const envKey = typeof process !== 'undefined'
          ? process.env?.ANTHROPIC_API_KEY
          : undefined;
        if (!envKey) {
          throw new UPPError('Anthropic API key not configured', 'AUTHENTICATION_FAILED', 'anthropic');
        }
        return envKey;
      }
      if (typeof key === 'string') return key;
      if (typeof key === 'function') return key();
      return key.getKey();
    }

    function buildHeaders(apiKey: string) {
      return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': apiVersion,
      };
    }

    function buildBody(request: ProviderRequest<AnthropicConfig>) {
      return {
        model: modelId,
        messages: [
          ...request.messages.map(transformToAnthropic),
          ...request.input.map(i => transformInputToAnthropic(i)),
        ],
        system: request.system,
        tools: request.tools?.map(transformToolToAnthropic),
        ...request.config,
      };
    }

    return {
      modelId,
      provider: anthropic,

      async complete(request) {
        const apiKey = await getApiKey();
        const body = buildBody(request);

        const response = await customFetch(baseUrl, {
          method: 'POST',
          headers: buildHeaders(apiKey),
          body: JSON.stringify(body),
          signal: request.signal,
        });

        if (!response.ok) {
          throw await normalizeAnthropicError(response);
        }

        const data = await response.json();
        return buildAnthropicResponse(data);
      },

      stream(request) {
        const controller = new AbortController();

        let responseResolve: (res: ProviderResponse) => void;
        let responseReject: (error: Error) => void;
        const responsePromise = new Promise<ProviderResponse>((resolve, reject) => {
          responseResolve = resolve;
          responseReject = reject;
        });

        const result: ProviderStreamResult = {
          response: responsePromise,

          async *[Symbol.asyncIterator]() {
            try {
              const apiKey = await getApiKey();
              const body = buildBody(request);

              const response = await customFetch(baseUrl, {
                method: 'POST',
                headers: buildHeaders(apiKey),
                body: JSON.stringify({ ...body, stream: true }),
                signal: controller.signal,
              });

              if (!response.ok) {
                throw await normalizeAnthropicError(response);
              }

              const accumulated: any = { content: [] };

              for await (const event of parseSSEStream(response.body!)) {
                const fragment = transformAnthropicEvent(event, accumulated);
                if (fragment) yield fragment;
              }

              const providerResponse = buildAnthropicResponse(accumulated);
              responseResolve(providerResponse);
            } catch (error) {
              responseReject(error as Error);
              throw error;
            }
          },
        };

        return result;
      },
    };
  },
  {
    name: 'anthropic',
    version: '1.0.0',
    modalities: ['text', 'image'],
  }
);

// --- Transformation helpers ---

function transformToAnthropic(message: Message) {
  return {
    role: message.role,
    content: message.content.map(block => {
      switch (block.type) {
        case 'text':
          return { type: 'text', text: block.text };
        case 'image':
          return {
            type: 'image',
            source: {
              type: 'base64',
              media_type: block.mimeType,
              data: toBase64(block.data),
            },
          };
        case 'tool_call':
          return {
            type: 'tool_use',
            id: block.toolCallId,
            name: block.toolName,
            input: block.arguments,
          };
        case 'tool_result':
          return {
            type: 'tool_result',
            tool_use_id: block.toolCallId,
            content: typeof block.result === 'string'
              ? block.result
              : JSON.stringify(block.result),
            is_error: block.isError,
          };
        default:
          throw new Error(`Unsupported block type: ${block.type}`);
      }
    }),
  };
}

function transformInputToAnthropic(input: InferenceInput) {
  if (typeof input === 'string') {
    return { role: 'user', content: [{ type: 'text', text: input }] };
  }
  if (input instanceof Message) {
    return transformToAnthropic(input);
  }
  // ContentBlock
  return { role: 'user', content: [transformContentBlockToAnthropic(input)] };
}

function transformToolToAnthropic(tool: Tool) {
  return {
    name: tool.name,
    description: tool.description,
    input_schema: tool.parameters,
  };
}

function buildAnthropicResponse(data: any): ProviderResponse {
  const content = data.content.map((block: any) => {
    switch (block.type) {
      case 'text':
        return { type: 'text', text: block.text };
      case 'tool_use':
        return {
          type: 'tool_call',
          toolCallId: block.id,
          toolName: block.name,
          arguments: block.input,
        };
      default:
        return { type: 'text', text: '' };
    }
  });

  // Extract tool calls from content
  const toolCalls = content
    .filter((c: any) => c.type === 'tool_call')
    .map((c: any) => ({
      toolCallId: c.toolCallId,
      toolName: c.toolName,
      arguments: c.arguments,
    }));

  const message = new AssistantMessage(
    content.filter((c: any) => c.type !== 'tool_call'),
    toolCalls.length > 0 ? toolCalls : undefined,
    {
      id: data.id,
      metadata: {
        anthropic: {
          model: data.model,
          stop_reason: data.stop_reason,
          // Preserve any additional vendor-specific fields
          ...data.metadata,
        },
      },
    }
  );

  return {
    message,
    usage: {
      inputTokens: data.usage?.input_tokens ?? 0,
      outputTokens: data.usage?.output_tokens ?? 0,
      totalTokens: (data.usage?.input_tokens ?? 0) + (data.usage?.output_tokens ?? 0),
    },
    stopReason: data.stop_reason ?? 'end_turn',
  };
}

function transformAnthropicEvent(event: any, accumulated: any): MessageFragment | null {
  switch (event.type) {
    case 'message_start':
      Object.assign(accumulated, event.message);
      return { type: 'message_start', index: 0, delta: {} };

    case 'content_block_start':
      accumulated.content[event.index] = event.content_block;
      return { type: 'content_block_start', index: event.index, delta: {} };

    case 'content_block_delta':
      if (event.delta.type === 'text_delta') {
        accumulated.content[event.index].text += event.delta.text;
        return {
          type: 'text_delta',
          index: event.index,
          delta: { text: event.delta.text },
        };
      }
      if (event.delta.type === 'thinking_delta') {
        return {
          type: 'reasoning_delta',
          index: event.index,
          delta: { text: event.delta.thinking },
        };
      }
      if (event.delta.type === 'input_json_delta') {
        return {
          type: 'tool_call_delta',
          index: event.index,
          delta: { argumentsJson: event.delta.partial_json },
        };
      }
      return null;

    case 'content_block_stop':
      return { type: 'content_block_stop', index: event.index, delta: {} };

    case 'message_delta':
      accumulated.stop_reason = event.delta.stop_reason;
      accumulated.usage = { ...accumulated.usage, ...event.usage };
      return null;

    case 'message_stop':
      return { type: 'message_stop', index: 0, delta: {} };

    default:
      return null;
  }
}

async function normalizeAnthropicError(response: Response): Promise<UPPError> {
  const body = await response.json().catch(() => ({}));

  const codeMap: Record<number, ErrorCode> = {
    401: 'AUTHENTICATION_FAILED',
    429: 'RATE_LIMITED',
    400: 'INVALID_REQUEST',
    404: 'MODEL_NOT_FOUND',
    413: 'CONTEXT_LENGTH_EXCEEDED',
  };

  return new UPPError(
    body.error?.message ?? response.statusText,
    codeMap[response.status] ?? 'PROVIDER_ERROR',
    'anthropic',
    response.status,
    body.error,
  );
}
```

---

## Appendix B: Full Usage Example

```ts
import { useAI, Thread, Message, Image, RoundRobinKeys } from 'useAI';
import { anthropic, AnthropicConfig } from 'useAI/anthropic';

// Define tools with JSON Schema
const searchWeb = {
  name: 'searchWeb',
  description: 'Search the web for information',
  parameters: {
    type: 'object' as const,
    properties: {
      query: { type: 'string', description: 'Search query' },
      maxResults: { type: 'number', description: 'Maximum results to return' },
    },
    required: ['query'],
  },
  async run({ query, maxResults = 5 }) {
    return await performWebSearch(query, maxResults);
  },
};

const generateImage = {
  name: 'generateImage',
  description: 'Generate an image from a prompt',
  parameters: {
    type: 'object' as const,
    properties: {
      prompt: { type: 'string', description: 'Image generation prompt' },
      style: {
        type: 'string',
        enum: ['realistic', 'artistic', 'cartoon'],
        description: 'Image style',
      },
    },
    required: ['prompt'],
  },
  async approval({ prompt }) {
    return await askUserApproval(`Generate image: "${prompt}"?`);
  },
  async run({ prompt, style }) {
    return await callImageAPI(prompt, style);
  },
};

// Create AI instance with full configuration
const claude = useAI({
  model: anthropic('claude-sonnet-4-20250514', {
    apiKey: new RoundRobinKeys([
      process.env.ANTHROPIC_KEY_1!,
      process.env.ANTHROPIC_KEY_2!,
    ]),
    timeout: 30000,
    retry: { maxAttempts: 3, backoff: 'exponential' },
  }),
  system: 'You are a helpful assistant with access to web search and image generation.',
  config: {
    max_tokens: 4096,
    temperature: 0.7,
  } as AnthropicConfig,
  tools: [searchWeb, generateImage],
  toolStrategy: {
    maxIterations: 5,
    async onAfterCall(tool, params, result) {
      console.log(`Tool ${tool.name} completed`);
    },
  },
});

// Simple inference
const turn1 = await claude.generate([], 'Hello!');
console.log(turn1.response.text);

// Conversation with thread
const thread = new Thread();

const turn2 = await claude.generate(thread, 'My name is Alice.');
thread.append(turn2);

const turn3 = await claude.generate(thread, 'What is my name?');
thread.append(turn3);
console.log(turn3.response.text); // "Your name is Alice."

// With image input
const turn4 = await claude.generate(
  thread,
  new Message([
    new Image('./photo.jpg'),
    'What do you see in this image?',
  ])
);
thread.append(turn4);

// Streaming
const history: Message[] = [];
const stream = claude.stream(history, 'Write a haiku about programming.');

for await (const fragment of stream) {
  if (fragment.type === 'text_delta') {
    process.stdout.write(fragment.delta.text ?? '');
  }
}

const streamTurn = await stream.turn;
history.push(...streamTurn.messages);
console.log('\nTokens used:', streamTurn.usage.totalTokens);

// Tool usage
const toolHistory: Message[] = [];
const toolTurn = await claude.generate(toolHistory, 'What is the latest news about AI?');
toolHistory.push(...toolTurn.messages);

console.log('Tool executions:', toolTurn.toolExecutions);
console.log('Cycles:', toolTurn.cycles);
console.log('Response:', toolTurn.response.text);

// Serialize thread for storage
const json = thread.toJSON();
localStorage.setItem('conversation', JSON.stringify(json));

// Restore later
const restored = Thread.fromJSON(JSON.parse(localStorage.getItem('conversation')!));
const continueTurn = await claude.generate(restored, 'Continue our conversation.');
```

---

## Appendix C: Built-in Key Strategies

```ts
// useAI/keys.ts

/**
 * Round-robin through a list of API keys
 */
export class RoundRobinKeys implements KeyStrategy {
  private keys: string[];
  private index = 0;

  constructor(keys: string[]) {
    if (keys.length === 0) {
      throw new Error('RoundRobinKeys requires at least one key');
    }
    this.keys = keys;
  }

  getKey(): string {
    const key = this.keys[this.index];
    this.index = (this.index + 1) % this.keys.length;
    return key;
  }
}

/**
 * Dynamic key selection based on custom logic
 */
export class DynamicKey implements KeyStrategy {
  private selector: () => string | Promise<string>;

  constructor(selector: () => string | Promise<string>) {
    this.selector = selector;
  }

  async getKey(): Promise<string> {
    return this.selector();
  }
}

/**
 * Weighted random selection of API keys
 */
export class WeightedKeys implements KeyStrategy {
  private keys: Array<{ key: string; weight: number }>;
  private totalWeight: number;

  constructor(keys: Array<{ key: string; weight: number }>) {
    this.keys = keys;
    this.totalWeight = keys.reduce((sum, k) => sum + k.weight, 0);
  }

  getKey(): string {
    let random = Math.random() * this.totalWeight;
    for (const { key, weight } of this.keys) {
      random -= weight;
      if (random <= 0) return key;
    }
    return this.keys[this.keys.length - 1].key;
  }
}
```

---

## Changelog

### 1.0.0-draft
- Initial draft specification
- Explicit `generate()` / `stream()` methods (no await magic)
- `Turn` as inference result containing all messages from one inference cycle
- `Thread` as optional utility (user-managed)
- JSON Schema for tool definitions (not Zod)
- **Message hierarchy**: `UserMessage`, `AssistantMessage` (with optional `toolCalls`), `ToolResultMessage`
- **Provider-namespaced metadata**: `Message.metadata` with provider namespaces (e.g., `metadata.google.thought_signature`)
- **Configuration split**: `config` for provider infra, `params` for model behavior
- System prompt at useAI level
- **Structured outputs**: `structure` option with JSON Schema
- Key strategies (RoundRobin, Dynamic, Weighted)
- `ToolUseStrategy` with `maxIterations`
- **Tool execution loop**: Handled by useAI core, not providers
- **Providers**: Single request/response only (`complete()` / `stream()`)
- HTTP-first provider implementation
- Image support: `fromPath()`, `fromUrl()`, `fromBytes()`, `fromBase64()`

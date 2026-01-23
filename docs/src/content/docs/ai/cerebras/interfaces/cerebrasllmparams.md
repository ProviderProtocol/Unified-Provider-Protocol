---
title: "Interface: CerebrasLLMParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [cerebras](../index.md) / CerebrasLLMParams

# Interface: CerebrasLLMParams

Defined in: [src/providers/cerebras/types.ts:25](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L25)

Parameters for the Cerebras Chat Completions API.

These parameters are passed directly to the `/v1/chat/completions` endpoint.
Cerebras's API is OpenAI-compatible with additional features like reasoning.

## Example

```typescript
const params: CerebrasLLMParams = {
  temperature: 0.7,
  max_completion_tokens: 1000,
  top_p: 0.9
};
```

## Properties

### clear\_thinking?

> `optional` **clear\_thinking**: `boolean`

Defined in: [src/providers/cerebras/types.ts:66](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L66)

Whether to clear thinking content for zai-glm-4.7 model.
When true, removes thinking content from the response.

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/cerebras/types.ts:96](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L96)

Whether to return log probabilities of output tokens

***

### max\_completion\_tokens?

> `optional` **max\_completion\_tokens**: `number`

Defined in: [src/providers/cerebras/types.ts:27](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L27)

Maximum number of tokens to generate

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/cerebras/types.ts:69](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L69)

Whether to enable parallel tool calls (default: true)

***

### prediction?

> `optional` **prediction**: `object`

Defined in: [src/providers/cerebras/types.ts:87](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L87)

Predicted output for latency reduction.
Only supported on gpt-oss-120b and zai-glm-4.7.

#### content

> **content**: `string`

#### type

> **type**: `"content"`

***

### queue\_threshold?

> `optional` **queue\_threshold**: `number`

Defined in: [src/providers/cerebras/types.ts:81](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L81)

Maximum queue time in ms (50-20000)

***

### reasoning\_effort?

> `optional` **reasoning\_effort**: `"low"` \| `"medium"` \| `"high"`

Defined in: [src/providers/cerebras/types.ts:51](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L51)

Reasoning intensity for gpt-oss-120b model.
Controls how much reasoning/thinking the model does.

***

### reasoning\_format?

> `optional` **reasoning\_format**: `"parsed"` \| `"raw"` \| `"hidden"` \| `"none"`

Defined in: [src/providers/cerebras/types.ts:60](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L60)

How reasoning text appears in the response.
- `parsed`: Thinking in separate `reasoning` field
- `raw`: Thinking with `<think>...</think>` tags in content
- `hidden`: Thinking removed but counted in tokens
- `none`: Model's default behavior

***

### response\_format?

> `optional` **response\_format**: [`CerebrasResponseFormat`](../type-aliases/cerebrasresponseformat.md)

Defined in: [src/providers/cerebras/types.ts:45](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L45)

Response format for structured output

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/cerebras/types.ts:39](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L39)

Seed for deterministic sampling

***

### service\_tier?

> `optional` **service\_tier**: `"default"` \| `"priority"` \| `"auto"` \| `"flex"`

Defined in: [src/providers/cerebras/types.ts:78](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L78)

Service tier selection for request prioritization.
- `priority`: Highest priority (dedicated endpoints only)
- `default`: Standard production workloads
- `auto`: Dynamic prioritization
- `flex`: Lowest priority, overflow/experimental

***

### stop?

> `optional` **stop**: `string`[]

Defined in: [src/providers/cerebras/types.ts:36](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L36)

Custom stop sequences (max 4)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/cerebras/types.ts:30](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L30)

Temperature for randomness (0 to 1.5, default: 1.0)

***

### tool\_choice?

> `optional` **tool\_choice**: [`CerebrasToolChoice`](../type-aliases/cerebrastoolchoice.md)

Defined in: [src/providers/cerebras/types.ts:93](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L93)

Tool choice configuration

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/cerebras/types.ts:99](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L99)

Number of most likely tokens to return at each position (0-20). Requires logprobs=true.

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/cerebras/types.ts:33](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L33)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/cerebras/types.ts:42](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L42)

User identifier for tracking

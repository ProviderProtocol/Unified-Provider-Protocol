---
title: "Variable: anthropic"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / anthropic

# Variable: anthropic

> `const` **anthropic**: [`Provider`](../../core/interfaces/provider.md)\<`unknown`\>

Defined in: [src/providers/anthropic/index.ts:24](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/anthropic/index.ts#L24)

Anthropic provider instance for the Universal Provider Protocol.

Provides access to Claude language models through a unified interface.
Currently supports the LLM modality with full streaming, tool use,
structured output, and image input capabilities.

## Example

```typescript
import { anthropic } from './providers/anthropic';

const claude = anthropic.llm.bind('claude-sonnet-4-20250514');
const response = await claude.complete({
  messages: [new UserMessage([{ type: 'text', text: 'Hello!' }])],
  config: { apiKey: 'sk-...' },
});
```

## See

[AnthropicLLMParams](../interfaces/anthropicllmparams.md) for provider-specific parameters

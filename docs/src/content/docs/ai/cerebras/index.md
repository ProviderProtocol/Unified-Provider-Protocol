---
title: "cerebras"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / cerebras

# cerebras

Cerebras provider for UPP (Unified Provider Protocol)

This module exports the Cerebras provider for use with Llama, Qwen, GPT-OSS,
and other models available through Cerebras's ultra-fast inference platform.

## Examples

```ts
import { cerebras } from '@providerprotocol/ai/cerebras';
import { llm } from '@providerprotocol/ai';

// Create an LLM instance with Llama
const model = llm({
  model: cerebras('llama-3.3-70b'),
  params: { max_completion_tokens: 1000 }
});

// Generate a response
const turn = await model.generate('What is the meaning of life?');
console.log(turn.response.text);
```

```ts
// Use GPT-OSS with reasoning support
const model = llm({
  model: cerebras('gpt-oss-120b'),
  params: {
    reasoning_effort: 'high',
    reasoning_format: 'parsed'
  }
});

const turn = await model.generate('Solve this complex problem...');
// Reasoning available in turn.response.metadata.cerebras.reasoning
```

## Interfaces

- [CerebrasHeaders](interfaces/cerebrasheaders.md)
- [CerebrasLLMParams](interfaces/cerebrasllmparams.md)
- [CerebrasProviderOptions](interfaces/cerebrasprovideroptions.md)
- [CerebrasRequest](interfaces/cerebrasrequest.md)
- [CerebrasResponse](interfaces/cerebrasresponse.md)
- [CerebrasStreamChunk](interfaces/cerebrasstreamchunk.md)
- [CerebrasTimeInfo](interfaces/cerebrastimeinfo.md)
- [CerebrasTool](interfaces/cerebrastool.md)
- [CerebrasToolCall](interfaces/cerebrastoolcall.md)
- [CerebrasUsage](interfaces/cerebrasusage.md)

## Type Aliases

- [CerebrasMessage](type-aliases/cerebrasmessage.md)
- [CerebrasResponseFormat](type-aliases/cerebrasresponseformat.md)
- [CerebrasToolChoice](type-aliases/cerebrastoolchoice.md)

## Variables

- [cerebras](variables/cerebras.md)

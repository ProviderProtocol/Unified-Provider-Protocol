---
title: "Variable: cerebras"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [cerebras](../index.md) / cerebras

# Variable: cerebras

> `const` **cerebras**: [`Provider`](../../core/interfaces/provider.md)\<[`CerebrasProviderOptions`](../interfaces/cerebrasprovideroptions.md)\>

Defined in: [src/providers/cerebras/index.ts:107](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/cerebras/index.ts#L107)

The Cerebras provider instance.

Use this provider to create model references for Cerebras models like
Llama 3.3, Qwen 3, GPT-OSS (reasoning), and other models available on Cerebras.

## Examples

```typescript
import { cerebras } from './providers/cerebras';
import { llm } from './core/llm';

const model = llm({
  model: cerebras('llama-3.3-70b'),
  params: { max_completion_tokens: 1000 }
});

const turn = await model.generate('Hello!');
console.log(turn.response.text);
```

```typescript
const stream = model.stream('Tell me a story');

for await (const event of stream) {
  if (event.type === StreamEventType.TextDelta) {
    process.stdout.write(event.delta.text ?? '');
  }
}

const turn = await stream.turn;
console.log('Tokens used:', turn.usage.totalTokens);
```

```typescript
const calculator = {
  name: 'calculate',
  description: 'Calculate a math expression',
  parameters: {
    type: 'object',
    properties: {
      expression: { type: 'string' }
    },
    required: ['expression']
  },
  run: async (params: { expression: string }) => {
    return eval(params.expression);
  }
};

const model = llm({
  model: cerebras('llama-3.3-70b'),
  tools: [calculator]
});

const turn = await model.generate('What is 15 + 27?');
```

```typescript
const model = llm({
  model: cerebras('gpt-oss-120b'),
  params: {
    reasoning_effort: 'high',
    reasoning_format: 'parsed'
  }
});

const turn = await model.generate('Solve this complex math problem...');
// Reasoning is available in turn.response.metadata.cerebras.reasoning
```

```ts
Available models
Production models:
- `llama3.1-8b` - Fast Llama 3.1 8B model (~2200 tok/s)
- `llama-3.3-70b` - Llama 3.3 70B with tool use (~2100 tok/s)
- `qwen-3-32b` - Qwen 3 32B with reasoning support (~2600 tok/s)
- `qwen-3-235b-a22b-instruct-2507` - Large Qwen model (~1400 tok/s)
- `gpt-oss-120b` - Reasoning model with high performance (~3000 tok/s)
- `zai-glm-4.6` - Z.ai GLM model with reasoning (~1000 tok/s)
- `zai-glm-4.7` - Z.ai GLM model with reasoning (~1000 tok/s)
```

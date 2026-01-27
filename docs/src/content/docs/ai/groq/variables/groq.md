---
title: "Variable: groq"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / groq

# Variable: groq

> `const` **groq**: [`Provider`](../../core/interfaces/provider.md)\<[`GroqProviderOptions`](../interfaces/groqprovideroptions.md)\>

Defined in: [src/providers/groq/index.ts:93](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/index.ts#L93)

The Groq provider instance.

Use this provider to create model references for Groq models like
Llama 3.3, Llama 3.1, Gemma 2, and other models available on Groq.

## Examples

```typescript
import { groq } from './providers/groq';
import { llm } from './core/llm';

const model = llm({
  model: groq('llama-3.3-70b-versatile'),
  params: { max_tokens: 1000 }
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
  model: groq('llama-3.3-70b-versatile'),
  tools: [calculator]
});

const turn = await model.generate('What is 15 + 27?');
```

```ts
Available models
Production models:
- `llama-3.3-70b-versatile` - Versatile model with tool use support
- `llama-3.1-8b-instant` - Fast, efficient model
- `llama-guard-4-12b` - Content moderation model
- `gemma2-9b-it` - Google's Gemma 2 model

Preview models:
- `meta-llama/llama-4-scout-17b-16e-instruct` - Vision + tool use
- `qwen/qwen3-32b` - Qwen 3 model
```

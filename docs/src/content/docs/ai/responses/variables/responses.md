---
title: "Variable: responses"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [responses](../index.md) / responses

# Variable: responses

> `const` **responses**: `ResponsesProvider`

Defined in: [src/providers/responses/index.ts:85](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/responses/index.ts#L85)

OpenResponses provider singleton.

Implements the OpenResponses specification for multi-provider, interoperable
LLM interfaces. This provider works with any server implementing the
OpenResponses API, including:

- OpenAI (`https://api.openai.com/v1`)
- OpenRouter (`https://openrouter.ai/api/v1`)
- Self-hosted servers
- Any OpenResponses-compatible endpoint

## Examples

```typescript
import { responses } from './providers/responses';
import { llm } from './core/llm';

const model = llm({
  model: responses('gpt-5.2', { host: 'https://api.openai.com/v1' }),
  params: { max_output_tokens: 1000 }
});

const turn = await model.generate('Hello!');
console.log(turn.response.text);
```

```typescript
const model = llm({
  model: responses('openai/gpt-4o', {
    host: 'https://openrouter.ai/api/v1',
    apiKeyEnv: 'OPENROUTER_API_KEY'
  }),
  params: { max_output_tokens: 1000 }
});
```

```typescript
const model = llm({
  model: responses('llama-3.3-70b', {
    host: 'http://localhost:8080/v1',
    apiKeyEnv: 'LOCAL_API_KEY'
  }),
  params: { max_output_tokens: 1000 }
});
```

## See

[OpenResponses Specification](https://www.openresponses.org)

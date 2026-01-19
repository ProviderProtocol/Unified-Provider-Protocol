---
title: "Interface: EmbeddingOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingOptions

# Interface: EmbeddingOptions\<TParams\>

Defined in: [src/types/embedding.ts:62](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L62)

Options for creating an embedding instance with the embedding() function.

## Example

```typescript
const options: EmbeddingOptions<OpenAIEmbedParams> = {
  model: openai('text-embedding-3-large'),
  config: { apiKey: process.env.OPENAI_API_KEY },
  params: { dimensions: 1536 }
};
```

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### config?

> `optional` **config**: [`ProviderConfig`](providerconfig.md)

Defined in: [src/types/embedding.ts:67](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L67)

Provider infrastructure configuration

***

### model

> **model**: [`EmbeddingModelInput`](embeddingmodelinput.md)

Defined in: [src/types/embedding.ts:64](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L64)

A model reference from a provider factory

***

### params?

> `optional` **params**: `TParams`

Defined in: [src/types/embedding.ts:70](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L70)

Provider-specific parameters (passed through unchanged)

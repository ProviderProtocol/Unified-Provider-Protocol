---
title: "Interface: BoundEmbeddingModel"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BoundEmbeddingModel

# Interface: BoundEmbeddingModel\<TParams\>

Defined in: [src/types/provider.ts:283](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L283)

Bound embedding model interface.

Represents an embedding model bound to a specific model ID,
ready to generate embeddings.

## Type Parameters

### TParams

`TParams` = `any`

Provider-specific parameter type

## Properties

### dimensions

> `readonly` **dimensions**: `number`

Defined in: [src/types/provider.ts:297](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L297)

Output embedding dimensions

***

### maxBatchSize

> `readonly` **maxBatchSize**: `number`

Defined in: [src/types/provider.ts:291](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L291)

Maximum number of inputs per batch request

***

### maxInputLength

> `readonly` **maxInputLength**: `number`

Defined in: [src/types/provider.ts:294](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L294)

Maximum length of input text in tokens

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/provider.ts:285](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L285)

The model identifier

***

### provider

> `readonly` **provider**: [`EmbeddingProvider`](../type-aliases/embeddingprovider.md)\<`TParams`\>

Defined in: [src/types/provider.ts:288](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L288)

Reference to the parent provider

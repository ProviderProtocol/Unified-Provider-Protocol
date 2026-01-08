---
title: "Type Alias: EmbeddingProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingProvider

# Type Alias: EmbeddingProvider\<TParams, TOptions\>

> **EmbeddingProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:383](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L383)

Provider with Embedding modality support.

Type alias for providers that support embedding generation.

## Type Declaration

### modalities

> `readonly` **modalities**: `object`

#### modalities.embedding

> **embedding**: [`EmbeddingHandler`](../interfaces/embeddinghandler.md)\<`TParams`\>

## Type Parameters

### TParams

`TParams` = `any`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type

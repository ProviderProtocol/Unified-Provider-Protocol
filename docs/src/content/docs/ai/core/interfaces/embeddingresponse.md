---
title: "Interface: EmbeddingResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResponse

# Interface: EmbeddingResponse

Defined in: [src/types/provider.ts:328](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/provider.ts#L328)

**`Internal`**

Response from provider's embed method.

## Properties

### embeddings

> **embeddings**: [`EmbeddingVector`](embeddingvector.md)[]

Defined in: [src/types/provider.ts:330](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/provider.ts#L330)

Embedding vectors

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:334](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/provider.ts#L334)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/provider.ts:332](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/provider.ts#L332)

Aggregate usage

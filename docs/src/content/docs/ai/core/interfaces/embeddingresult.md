---
title: "Interface: EmbeddingResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResult

# Interface: EmbeddingResult

Defined in: [src/types/embedding.ts:100](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L100)

Result from embed() call.

## Properties

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:102](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L102)

Embeddings in same order as inputs

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/embedding.ts:108](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L108)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/embedding.ts:105](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L105)

Usage statistics

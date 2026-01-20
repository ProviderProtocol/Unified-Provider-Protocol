---
title: "Interface: EmbeddingResponse"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingResponse

# Interface: EmbeddingResponse

Defined in: [src/types/provider.ts:352](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L352)

**`Internal`**

Response from provider's embed method.

## Properties

### embeddings

> **embeddings**: [`EmbeddingVector`](embeddingvector.md)[]

Defined in: [src/types/provider.ts:354](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L354)

Embedding vectors

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:358](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L358)

Provider-specific response metadata

***

### usage

> **usage**: [`EmbeddingUsage`](embeddingusage.md)

Defined in: [src/types/provider.ts:356](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L356)

Aggregate usage

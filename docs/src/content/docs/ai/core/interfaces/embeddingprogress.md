---
title: "Interface: EmbeddingProgress"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingProgress

# Interface: EmbeddingProgress

Defined in: [src/types/embedding.ts:142](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/embedding.ts#L142)

Progress update when using chunked mode.

## Properties

### completed

> **completed**: `number`

Defined in: [src/types/embedding.ts:147](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/embedding.ts#L147)

Total embeddings completed so far

***

### embeddings

> **embeddings**: [`Embedding`](embedding.md)[]

Defined in: [src/types/embedding.ts:144](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/embedding.ts#L144)

Embeddings from the latest batch

***

### percent

> **percent**: `number`

Defined in: [src/types/embedding.ts:153](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/embedding.ts#L153)

Percentage complete (0-100)

***

### total

> **total**: `number`

Defined in: [src/types/embedding.ts:150](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/embedding.ts#L150)

Total number of inputs

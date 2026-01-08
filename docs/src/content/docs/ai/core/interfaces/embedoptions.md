---
title: "Interface: EmbedOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbedOptions

# Interface: EmbedOptions

Defined in: [src/types/embedding.ts:60](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L60)

Options for embed() calls.

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [src/types/embedding.ts:68](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L68)

Inputs per batch when chunked (default: provider max)

***

### chunked?

> `optional` **chunked**: `boolean`

Defined in: [src/types/embedding.ts:65](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L65)

Enable chunked processing with progress for large input sets.
When true, returns EmbeddingStream instead of Promise.

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [src/types/embedding.ts:71](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L71)

Concurrent batch limit when chunked (default: 1)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/embedding.ts:74](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/embedding.ts#L74)

Abort signal for cancellation

---
title: "Interface: EmbedOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbedOptions

# Interface: EmbedOptions

Defined in: [src/types/embedding.ts:76](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L76)

Options for embed() calls.

## Properties

### batchSize?

> `optional` **batchSize**: `number`

Defined in: [src/types/embedding.ts:84](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L84)

Inputs per batch when chunked (default: provider max)

***

### chunked?

> `optional` **chunked**: `boolean`

Defined in: [src/types/embedding.ts:81](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L81)

Enable chunked processing with progress for large input sets.
When true, returns EmbeddingStream instead of Promise.

***

### concurrency?

> `optional` **concurrency**: `number`

Defined in: [src/types/embedding.ts:87](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L87)

Concurrent batch limit when chunked (default: 1)

***

### inputType?

> `optional` **inputType**: [`EmbeddingInputType`](../type-aliases/embeddinginputtype.md)

Defined in: [src/types/embedding.ts:93](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L93)

Hint for embedding optimization (provider-specific)

***

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [src/types/embedding.ts:90](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L90)

Abort signal for cancellation

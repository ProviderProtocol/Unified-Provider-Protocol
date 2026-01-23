---
title: "Interface: EmbeddingStream"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingStream

# Interface: EmbeddingStream

Defined in: [src/types/embedding.ts:160](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L160)

Async iterable stream with final result accessor.
Returned when embed() is called with { chunked: true }.

## Extends

- `AsyncIterable`\<[`EmbeddingProgress`](embeddingprogress.md)\>

## Properties

### result

> `readonly` **result**: `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Defined in: [src/types/embedding.ts:162](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L162)

Promise resolving to complete result after iteration

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`EmbeddingProgress`](embeddingprogress.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`EmbeddingProgress`](embeddingprogress.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### abort()

> **abort**(): `void`

Defined in: [src/types/embedding.ts:165](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L165)

Abort the operation

#### Returns

`void`

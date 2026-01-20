---
title: "Interface: ImageStreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageStreamResult

# Interface: ImageStreamResult

Defined in: [src/types/image.ts:145](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/image.ts#L145)

Async iterable stream with final result accessor.
Returned when stream() is called.

## Extends

- `AsyncIterable`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md)\>

## Properties

### result

> `readonly` **result**: `Promise`\<[`ImageResult`](imageresult.md)\>

Defined in: [src/types/image.ts:147](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/image.ts#L147)

Promise resolving to complete result after streaming

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### abort()

> **abort**(): `void`

Defined in: [src/types/image.ts:150](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/image.ts#L150)

Abort the generation

#### Returns

`void`

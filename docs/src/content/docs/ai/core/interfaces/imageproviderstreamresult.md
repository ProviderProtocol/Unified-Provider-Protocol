---
title: "Interface: ImageProviderStreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageProviderStreamResult

# Interface: ImageProviderStreamResult

Defined in: [src/types/image.ts:291](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/image.ts#L291)

**`Internal`**

Raw provider stream result.
An async iterable of ImageStreamEvent with a response promise.

## Extends

- `AsyncIterable`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md)\>

## Properties

### response

> `readonly` **response**: `Promise`\<[`ImageResponse`](imageresponse.md)\>

Defined in: [src/types/image.ts:293](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/image.ts#L293)

Promise resolving to the complete response

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`ImageStreamEvent`](../type-aliases/imagestreamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

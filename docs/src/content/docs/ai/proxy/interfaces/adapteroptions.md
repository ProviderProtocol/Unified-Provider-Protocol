---
title: "Interface: AdapterOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / AdapterOptions

# Interface: AdapterOptions

Defined in: [src/providers/proxy/server/types.ts:52](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/proxy/server/types.ts#L52)

Options for adapter middleware.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `object`

Defined in: [src/providers/proxy/server/types.ts:54](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/proxy/server/types.ts#L54)

Custom error handler

#### Parameters

##### error

`Error`

#### Returns

`object`

##### message

> **message**: `string`

##### status

> **status**: `number`

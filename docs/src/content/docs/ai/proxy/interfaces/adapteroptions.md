---
title: "Interface: AdapterOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / AdapterOptions

# Interface: AdapterOptions

Defined in: [src/providers/proxy/server/types.ts:52](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/proxy/server/types.ts#L52)

Options for adapter middleware.

## Properties

### onError()?

> `optional` **onError**: (`error`) => `object`

Defined in: [src/providers/proxy/server/types.ts:54](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/proxy/server/types.ts#L54)

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

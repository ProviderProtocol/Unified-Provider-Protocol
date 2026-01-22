---
title: "Interface: CerebrasResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [cerebras](../index.md) / CerebrasResponse

# Interface: CerebrasResponse

Defined in: [src/providers/cerebras/types.ts:238](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L238)

Response structure from the Cerebras Chat Completions API.

## Properties

### choices

> **choices**: `CerebrasChoice`[]

Defined in: [src/providers/cerebras/types.ts:243](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L243)

***

### created?

> `optional` **created**: `number`

Defined in: [src/providers/cerebras/types.ts:241](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L241)

***

### id

> **id**: `string`

Defined in: [src/providers/cerebras/types.ts:239](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L239)

***

### model

> **model**: `string`

Defined in: [src/providers/cerebras/types.ts:242](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L242)

***

### object

> **object**: `"chat.completion"`

Defined in: [src/providers/cerebras/types.ts:240](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L240)

***

### system\_fingerprint?

> `optional` **system\_fingerprint**: `string`

Defined in: [src/providers/cerebras/types.ts:245](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L245)

***

### time\_info?

> `optional` **time\_info**: [`CerebrasTimeInfo`](cerebrastimeinfo.md)

Defined in: [src/providers/cerebras/types.ts:246](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L246)

***

### usage

> **usage**: [`CerebrasUsage`](cerebrasusage.md)

Defined in: [src/providers/cerebras/types.ts:244](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/cerebras/types.ts#L244)

---
title: "Interface: CerebrasUsage"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [cerebras](../index.md) / CerebrasUsage

# Interface: CerebrasUsage

Defined in: [src/providers/cerebras/types.ts:265](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L265)

Token usage statistics from the API response

## Properties

### completion\_tokens

> **completion\_tokens**: `number`

Defined in: [src/providers/cerebras/types.ts:267](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L267)

***

### completion\_tokens\_details?

> `optional` **completion\_tokens\_details**: `object`

Defined in: [src/providers/cerebras/types.ts:272](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L272)

#### accepted\_prediction\_tokens?

> `optional` **accepted\_prediction\_tokens**: `number`

#### rejected\_prediction\_tokens?

> `optional` **rejected\_prediction\_tokens**: `number`

***

### prompt\_tokens

> **prompt\_tokens**: `number`

Defined in: [src/providers/cerebras/types.ts:266](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L266)

***

### prompt\_tokens\_details?

> `optional` **prompt\_tokens\_details**: `object`

Defined in: [src/providers/cerebras/types.ts:269](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L269)

#### cached\_tokens?

> `optional` **cached\_tokens**: `number`

***

### total\_tokens

> **total\_tokens**: `number`

Defined in: [src/providers/cerebras/types.ts:268](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L268)

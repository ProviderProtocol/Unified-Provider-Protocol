---
title: "Type Alias: ThreadJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ThreadJSON

# Type Alias: ThreadJSON

> **ThreadJSON** = `Pick`\<[`Thread`](../classes/thread.md), `"id"`\> & `object`

Defined in: [src/types/thread.ts:26](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/thread.ts#L26)

Thread serialized to JSON format.
Picks id from Thread, converts dates to strings.

## Type Declaration

### createdAt

> **createdAt**: `string`

### messages

> **messages**: [`MessageJSON`](messagejson.md)[]

### updatedAt

> **updatedAt**: `string`

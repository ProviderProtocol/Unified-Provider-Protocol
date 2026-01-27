---
title: "Type Alias: ThreadJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ThreadJSON

# Type Alias: ThreadJSON

> **ThreadJSON** = `Pick`\<[`Thread`](../classes/thread.md), `"id"`\> & `object`

Defined in: [src/types/thread.ts:26](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/thread.ts#L26)

Thread serialized to JSON format.
Picks id from Thread, converts dates to strings.

## Type Declaration

### createdAt

> **createdAt**: `string`

### messages

> **messages**: [`MessageJSON`](messagejson.md)[]

### updatedAt

> **updatedAt**: `string`

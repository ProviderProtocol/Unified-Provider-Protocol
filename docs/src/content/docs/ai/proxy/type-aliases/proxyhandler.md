---
title: "Type Alias: ProxyHandler()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / ProxyHandler

# Type Alias: ProxyHandler()

> **ProxyHandler** = (`body`, `meta`) => `Promise`\<[`Turn`](../../core/interfaces/turn.md)\> \| [`StreamResult`](../../core/interfaces/streamresult.md) \| `Promise`\<[`StreamResult`](../../core/interfaces/streamresult.md)\>

Defined in: [src/providers/proxy/server/types.ts:34](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/proxy/server/types.ts#L34)

Handler function signature for proxy endpoints.
Takes parsed request data and returns either a Turn or StreamResult.

## Parameters

### body

[`ParsedBody`](../interfaces/parsedbody.md)

### meta

[`RequestMeta`](../interfaces/requestmeta.md)

## Returns

`Promise`\<[`Turn`](../../core/interfaces/turn.md)\> \| [`StreamResult`](../../core/interfaces/streamresult.md) \| `Promise`\<[`StreamResult`](../../core/interfaces/streamresult.md)\>

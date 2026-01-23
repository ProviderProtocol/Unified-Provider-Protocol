---
title: "Function: getAdapter()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / getAdapter

# Function: getAdapter()

> **getAdapter**(`state`): [`PubSubAdapter`](../interfaces/pubsubadapter.md) \| `undefined`

Defined in: [src/middleware/pubsub/index.ts:55](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/index.ts#L55)

Gets the adapter from middleware state.

## Parameters

### state

`Map`\<`string`, `unknown`\>

Middleware state map

## Returns

[`PubSubAdapter`](../interfaces/pubsubadapter.md) \| `undefined`

Adapter or undefined if not set

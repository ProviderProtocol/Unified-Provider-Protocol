---
title: "Function: getAdapter()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / getAdapter

# Function: getAdapter()

> **getAdapter**(`state`): [`PubSubAdapter`](../interfaces/pubsubadapter.md) \| `undefined`

Defined in: [src/middleware/pubsub/index.ts:60](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/index.ts#L60)

Gets the adapter from middleware state.

## Parameters

### state

`Map`\<`string`, `unknown`\>

Middleware state map

## Returns

[`PubSubAdapter`](../interfaces/pubsubadapter.md) \| `undefined`

Adapter or undefined if not set

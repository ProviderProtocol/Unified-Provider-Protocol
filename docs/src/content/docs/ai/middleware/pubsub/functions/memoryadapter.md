---
title: "Function: memoryAdapter()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / memoryAdapter

# Function: memoryAdapter()

> **memoryAdapter**(`options`): [`PubSubAdapter`](../interfaces/pubsubadapter.md)

Defined in: [src/middleware/pubsub/memory-adapter.ts:56](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/memory-adapter.ts#L56)

Creates an in-memory storage adapter for pub-sub middleware.

Stores streams in a Map with LRU eviction when maxStreams is reached.
All methods return promises for interface compatibility with async backends.

## Parameters

### options

[`MemoryAdapterOptions`](../interfaces/memoryadapteroptions.md) = `{}`

Adapter configuration

## Returns

[`PubSubAdapter`](../interfaces/pubsubadapter.md)

A PubSubAdapter instance

## Example

```typescript
import { pubsubMiddleware, memoryAdapter } from '@providerprotocol/ai/middleware/pubsub';

const mw = pubsubMiddleware({
  adapter: memoryAdapter({ maxStreams: 500 }),
});
```

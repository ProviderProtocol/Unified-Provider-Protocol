---
title: "Function: memoryAdapter()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / memoryAdapter

# Function: memoryAdapter()

> **memoryAdapter**(`options`): [`PubSubAdapter`](../interfaces/pubsubadapter.md)

Defined in: [src/middleware/pubsub/memory-adapter.ts:52](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/memory-adapter.ts#L52)

Creates an in-memory storage adapter for pub-sub middleware.

Stores streams in a Map. Throws when maxStreams is exceeded.
Streams are created lazily on first append or subscribe.

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

const adapter = memoryAdapter({ maxStreams: 500 });
```

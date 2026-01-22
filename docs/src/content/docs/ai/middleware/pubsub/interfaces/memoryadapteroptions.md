---
title: "Interface: MemoryAdapterOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / MemoryAdapterOptions

# Interface: MemoryAdapterOptions

Defined in: [src/middleware/pubsub/types.ts:174](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L174)

Options for memory adapter.

## Properties

### maxStreams?

> `optional` **maxStreams**: `number`

Defined in: [src/middleware/pubsub/types.ts:179](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L179)

Max streams to keep (LRU eviction).

#### Default

```ts
1000
```

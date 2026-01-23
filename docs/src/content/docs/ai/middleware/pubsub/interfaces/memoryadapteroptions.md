---
title: "Interface: MemoryAdapterOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / MemoryAdapterOptions

# Interface: MemoryAdapterOptions

Defined in: [src/middleware/pubsub/types.ts:104](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/types.ts#L104)

Options for memory adapter.

## Properties

### maxStreams?

> `optional` **maxStreams**: `number`

Defined in: [src/middleware/pubsub/types.ts:109](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/types.ts#L109)

Max concurrent streams allowed. Throws if exceeded.

#### Default

```ts
1000
```

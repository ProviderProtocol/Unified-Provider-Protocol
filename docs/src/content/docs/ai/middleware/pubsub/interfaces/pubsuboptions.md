---
title: "Interface: PubSubOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / PubSubOptions

# Interface: PubSubOptions

Defined in: [src/middleware/pubsub/types.ts:88](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/types.ts#L88)

Options for pub-sub middleware.

## Properties

### adapter?

> `optional` **adapter**: [`PubSubAdapter`](pubsubadapter.md)

Defined in: [src/middleware/pubsub/types.ts:93](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/types.ts#L93)

Storage adapter instance.

#### Default

```ts
memoryAdapter()
```

***

### streamId?

> `optional` **streamId**: `string`

Defined in: [src/middleware/pubsub/types.ts:98](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/types.ts#L98)

Stream identifier for pub-sub behavior.

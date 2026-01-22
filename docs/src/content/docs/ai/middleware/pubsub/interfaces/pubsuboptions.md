---
title: "Interface: PubSubOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / PubSubOptions

# Interface: PubSubOptions

Defined in: [src/middleware/pubsub/types.ts:145](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L145)

Options for pub-sub middleware.

## Properties

### adapter?

> `optional` **adapter**: [`PubSubAdapter`](pubsubadapter.md)

Defined in: [src/middleware/pubsub/types.ts:150](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L150)

Storage adapter instance.

#### Default

```ts
memoryAdapter()
```

***

### streamId?

> `optional` **streamId**: `string`

Defined in: [src/middleware/pubsub/types.ts:162](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L162)

Stream identifier for reconnection support.

When provided:
- If stream exists in adapter → Reconnection, replay buffered events
- If stream doesn't exist → New request, create entry and proceed

When not provided:
- No pub/sub behavior, middleware is effectively disabled

***

### ttl?

> `optional` **ttl**: `number`

Defined in: [src/middleware/pubsub/types.ts:168](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L168)

TTL for stored streams in milliseconds.

#### Default

```ts
600000 (10 minutes)
```

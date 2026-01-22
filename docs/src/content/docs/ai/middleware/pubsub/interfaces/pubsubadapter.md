---
title: "Interface: PubSubAdapter"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / PubSubAdapter

# Interface: PubSubAdapter

Defined in: [src/middleware/pubsub/types.ts:53](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L53)

Storage adapter interface for pub-sub middleware.

Implement this interface for custom backends (Redis, etc.).

## Example

```typescript
const redisAdapter: PubSubAdapter = {
  async create(streamId, metadata) {
    await redis.hset(`stream:${streamId}`, metadata);
  },
  // ... other methods
};
```

## Methods

### append()

> **append**(`streamId`, `event`): `Promise`\<`void`\>

Defined in: [src/middleware/pubsub/types.ts:76](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L76)

Appends an event to the stream.

#### Parameters

##### streamId

`string`

Stream to append to

##### event

[`StreamEvent`](../../../core/interfaces/streamevent.md)

Stream event to store

#### Returns

`Promise`\<`void`\>

***

### cleanup()

> **cleanup**(`maxAge`): `Promise`\<`void`\>

Defined in: [src/middleware/pubsub/types.ts:139](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L139)

Removes streams older than maxAge.

#### Parameters

##### maxAge

`number`

Maximum age in milliseconds

#### Returns

`Promise`\<`void`\>

***

### create()

> **create**(`streamId`, `metadata`): `Promise`\<`void`\>

Defined in: [src/middleware/pubsub/types.ts:68](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L68)

Creates a stream entry.

#### Parameters

##### streamId

`string`

Unique stream identifier

##### metadata

Stream metadata (modelId, provider)

###### modelId

`string`

###### provider

`string`

#### Returns

`Promise`\<`void`\>

***

### exists()

> **exists**(`streamId`): `Promise`\<`boolean`\>

Defined in: [src/middleware/pubsub/types.ts:60](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L60)

Checks if a stream exists.

#### Parameters

##### streamId

`string`

Stream identifier to check

#### Returns

`Promise`\<`boolean`\>

True if the stream exists

***

### getEvents()

> **getEvents**(`streamId`): `Promise`\<[`StreamEvent`](../../../core/interfaces/streamevent.md)[] \| `null`\>

Defined in: [src/middleware/pubsub/types.ts:99](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L99)

Fetches all events for replay.

#### Parameters

##### streamId

`string`

Stream to fetch events from

#### Returns

`Promise`\<[`StreamEvent`](../../../core/interfaces/streamevent.md)[] \| `null`\>

Array of events or null if stream doesn't exist

***

### getStream()

> **getStream**(`streamId`): `Promise`\<[`StoredStream`](storedstream.md) \| `null`\>

Defined in: [src/middleware/pubsub/types.ts:107](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L107)

Gets stream metadata.

#### Parameters

##### streamId

`string`

Stream to get

#### Returns

`Promise`\<[`StoredStream`](storedstream.md) \| `null`\>

Stream metadata or null if not found

***

### isCompleted()

> **isCompleted**(`streamId`): `Promise`\<`boolean`\>

Defined in: [src/middleware/pubsub/types.ts:91](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L91)

Checks if stream is completed.

#### Parameters

##### streamId

`string`

Stream to check

#### Returns

`Promise`\<`boolean`\>

True if stream is completed

***

### markCompleted()

> **markCompleted**(`streamId`): `Promise`\<`void`\>

Defined in: [src/middleware/pubsub/types.ts:83](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L83)

Marks stream as completed.

#### Parameters

##### streamId

`string`

Stream to mark complete

#### Returns

`Promise`\<`void`\>

***

### publish()

> **publish**(`streamId`, `event`): `void`

Defined in: [src/middleware/pubsub/types.ts:125](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L125)

Publishes event to all subscribers.

#### Parameters

##### streamId

`string`

Stream to publish to

##### event

[`StreamEvent`](../../../core/interfaces/streamevent.md)

Event to broadcast

#### Returns

`void`

***

### remove()

> **remove**(`streamId`): `Promise`\<`void`\>

Defined in: [src/middleware/pubsub/types.ts:132](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L132)

Removes a stream (cleanup).

#### Parameters

##### streamId

`string`

Stream to remove

#### Returns

`Promise`\<`void`\>

***

### subscribe()

> **subscribe**(`streamId`, `callback`): [`Unsubscribe`](../type-aliases/unsubscribe.md)

Defined in: [src/middleware/pubsub/types.ts:117](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/types.ts#L117)

Subscribes to live events for a stream.

#### Parameters

##### streamId

`string`

Stream to subscribe to

##### callback

[`SubscriptionCallback`](../type-aliases/subscriptioncallback.md)

Function called for each new event

#### Returns

[`Unsubscribe`](../type-aliases/unsubscribe.md)

Unsubscribe function

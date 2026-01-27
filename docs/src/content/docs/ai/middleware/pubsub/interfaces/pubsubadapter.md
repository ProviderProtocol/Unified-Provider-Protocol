---
title: "Interface: PubSubAdapter"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / PubSubAdapter

# Interface: PubSubAdapter

Defined in: [src/middleware/pubsub/types.ts:49](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L49)

Storage adapter interface for pub-sub middleware.

Stores in-flight streams only. Completed streams are removed immediately.
Apps should persist completed conversations via `.then()` and serve from
their own storage on reconnect.

## Methods

### append()

> **append**(`streamId`, `event`): `Promise`\<`void`\>

Defined in: [src/middleware/pubsub/types.ts:58](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L58)

Appends an event to the stream (creates lazily if needed).

#### Parameters

##### streamId

`string`

##### event

[`StreamEvent`](../../../core/interfaces/streamevent.md)

#### Returns

`Promise`\<`void`\>

***

### exists()

> **exists**(`streamId`): `Promise`\<`boolean`\>

Defined in: [src/middleware/pubsub/types.ts:53](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L53)

Checks if a stream exists.

#### Parameters

##### streamId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### getEvents()

> **getEvents**(`streamId`): `Promise`\<[`StreamEvent`](../../../core/interfaces/streamevent.md)[]\>

Defined in: [src/middleware/pubsub/types.ts:63](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L63)

Fetches all events for replay.

#### Parameters

##### streamId

`string`

#### Returns

`Promise`\<[`StreamEvent`](../../../core/interfaces/streamevent.md)[]\>

***

### publish()

> **publish**(`streamId`, `event`): `void`

Defined in: [src/middleware/pubsub/types.ts:77](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L77)

Publishes event to all subscribers.

#### Parameters

##### streamId

`string`

##### event

[`StreamEvent`](../../../core/interfaces/streamevent.md)

#### Returns

`void`

***

### remove()

> **remove**(`streamId`): `Promise`\<`void`\>

Defined in: [src/middleware/pubsub/types.ts:82](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L82)

Notifies subscribers and removes stream from storage.

#### Parameters

##### streamId

`string`

#### Returns

`Promise`\<`void`\>

***

### subscribe()

> **subscribe**(`streamId`, `onEvent`, `onComplete`): [`Unsubscribe`](../type-aliases/unsubscribe.md)

Defined in: [src/middleware/pubsub/types.ts:68](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L68)

Subscribes to live events (creates lazily if needed).

#### Parameters

##### streamId

`string`

##### onEvent

[`SubscriptionCallback`](../type-aliases/subscriptioncallback.md)

##### onComplete

[`CompletionCallback`](../type-aliases/completioncallback.md)

#### Returns

[`Unsubscribe`](../type-aliases/unsubscribe.md)

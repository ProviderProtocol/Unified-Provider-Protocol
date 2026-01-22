---
title: "middleware/pubsub"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / middleware/pubsub

# middleware/pubsub

## Fileoverview

Pub-sub middleware for stream resumption.

Enables reconnecting clients to catch up on missed events during
active generation. The middleware buffers events and publishes them
to subscribers. Server routes handle reconnection logic using the
exported `createSubscriberStream` utility.

## Interfaces

- [MemoryAdapterOptions](interfaces/memoryadapteroptions.md)
- [PubSubAdapter](interfaces/pubsubadapter.md)
- [PubSubOptions](interfaces/pubsuboptions.md)
- [StoredStream](interfaces/storedstream.md)

## Type Aliases

- [SubscriptionCallback](type-aliases/subscriptioncallback.md)
- [Unsubscribe](type-aliases/unsubscribe.md)

## Functions

- [getAdapter](functions/getadapter.md)
- [getStreamId](functions/getstreamid.md)
- [memoryAdapter](functions/memoryadapter.md)
- [pubsubMiddleware](functions/pubsubmiddleware.md)

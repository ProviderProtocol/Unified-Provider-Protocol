---
title: "Type Alias: SubscriptionCallback()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / SubscriptionCallback

# Type Alias: SubscriptionCallback()

> **SubscriptionCallback** = (`event`, `cursor?`) => `void`

Defined in: [src/middleware/pubsub/types.ts:27](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L27)

Subscription callback for live events.

## Parameters

### event

[`StreamEvent`](../../../core/interfaces/streamevent.md)

Stream event payload

### cursor?

`number`

Zero-based event index when adapter supports cursors

## Returns

`void`

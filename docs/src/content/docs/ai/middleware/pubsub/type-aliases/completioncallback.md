---
title: "Type Alias: CompletionCallback()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / CompletionCallback

# Type Alias: CompletionCallback()

> **CompletionCallback** = () => `void`

Defined in: [src/middleware/pubsub/types.ts:35](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L35)

Completion callback when stream ends.

Adapters should invoke this when [PubSubAdapter.remove](../interfaces/pubsubadapter.md#remove) is called
so subscriber streams can terminate before the stream is deleted.

## Returns

`void`

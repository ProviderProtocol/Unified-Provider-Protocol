---
title: "Interface: MemoryAdapterOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / MemoryAdapterOptions

# Interface: MemoryAdapterOptions

Defined in: [src/middleware/pubsub/types.ts:104](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L104)

Options for memory adapter.

## Properties

### maxStreams?

> `optional` **maxStreams**: `number`

Defined in: [src/middleware/pubsub/types.ts:109](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/types.ts#L109)

Max concurrent streams allowed. Throws if exceeded.

#### Default

```ts
1000
```

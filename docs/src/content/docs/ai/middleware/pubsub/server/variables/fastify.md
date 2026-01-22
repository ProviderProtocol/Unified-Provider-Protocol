---
title: "Variable: fastify"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / fastify

# Variable: fastify

> `const` **fastify**: `object`

Defined in: [src/middleware/pubsub/server/fastify.ts:73](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/server/fastify.ts#L73)

Fastify adapter namespace for pub-sub server utilities.

## Type Declaration

### streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `reply`) => `Promise`\<`void`\>

Stream buffered and live events to a Fastify reply.

This utility handles the reconnection pattern for Fastify routes:
1. Replays all buffered events from the adapter
2. If stream is already completed, ends immediately
3. Otherwise, subscribes to live events until completion

#### Parameters

##### streamId

`string`

The stream ID to subscribe to

##### adapter

[`PubSubAdapter`](../../interfaces/pubsubadapter.md)

The pub-sub adapter instance

##### reply

`FastifyReply`

Fastify reply object

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
import { streamSubscriber } from '@providerprotocol/ai/middleware/pubsub/server/fastify';

app.post('/api/ai/reconnect', async (request, reply) => {
  const { streamId } = request.body;
  return streamSubscriber(streamId, adapter, reply);
});
```

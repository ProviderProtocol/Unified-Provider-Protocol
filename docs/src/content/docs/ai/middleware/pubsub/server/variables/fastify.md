---
title: "Variable: fastify"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / fastify

# Variable: fastify

> `const` **fastify**: `object`

Defined in: [src/middleware/pubsub/server/fastify.ts:87](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/server/fastify.ts#L87)

Fastify adapter namespace for pub-sub server utilities.

## Type Declaration

### streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `reply`) => `Promise`\<`void`\>

Stream buffered and live events to a Fastify reply.

Handles reconnection for Fastify routes:
1. Replays buffered events from the adapter
2. Subscribes to live events until completion signal
3. Ends when stream completes or client disconnects

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
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { pubsubMiddleware, memoryAdapter } from '@providerprotocol/ai/middleware/pubsub';
import { fastify as pubsubFastify } from '@providerprotocol/ai/middleware/pubsub/server';

const adapter = memoryAdapter();

app.post('/api/chat', async (request, reply) => {
  const { input, conversationId } = request.body as { input: string; conversationId: string };

  if (!await adapter.exists(conversationId)) {
    const model = llm({
      model: anthropic('claude-sonnet-4-20250514'),
      middleware: [pubsubMiddleware({ adapter, streamId: conversationId })],
    });
    model.stream(input).then(turn => saveToDatabase(conversationId, turn));
  }

  return pubsubFastify.streamSubscriber(conversationId, adapter, reply);
});
```

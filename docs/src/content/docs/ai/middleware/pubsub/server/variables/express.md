---
title: "Variable: express"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / express

# Variable: express

> `const` **express**: `object`

Defined in: [src/middleware/pubsub/server/express.ts:85](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/server/express.ts#L85)

Express adapter namespace for pub-sub server utilities.

## Type Declaration

### streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `res`) => `Promise`\<`void`\>

Stream buffered and live events to an Express response.

Handles reconnection for Express routes:
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

##### res

`ExpressResponse`

Express response object

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { pubsubMiddleware, memoryAdapter } from '@providerprotocol/ai/middleware/pubsub';
import { express } from '@providerprotocol/ai/middleware/pubsub/server';

const adapter = memoryAdapter();

app.post('/api/chat', async (req, res) => {
  const { input, conversationId } = req.body;

  if (!await adapter.exists(conversationId)) {
    const model = llm({
      model: anthropic('claude-sonnet-4-20250514'),
      middleware: [pubsubMiddleware({ adapter, streamId: conversationId })],
    });
    model.stream(input).then(turn => saveToDatabase(conversationId, turn));
  }

  return express.streamSubscriber(conversationId, adapter, res);
});
```

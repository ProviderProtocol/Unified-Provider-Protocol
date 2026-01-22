---
title: "Variable: express"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / express

# Variable: express

> `const` **express**: `object`

Defined in: [src/middleware/pubsub/server/express.ts:71](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/server/express.ts#L71)

Express adapter namespace for pub-sub server utilities.

## Type Declaration

### streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `res`) => `Promise`\<`void`\>

Stream buffered and live events to an Express response.

This utility handles the reconnection pattern for Express routes:
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

##### res

`ExpressResponse`

Express response object

#### Returns

`Promise`\<`void`\>

#### Example

```typescript
import { streamSubscriber } from '@providerprotocol/ai/middleware/pubsub/server/express';

app.post('/api/ai/reconnect', async (req, res) => {
  const { streamId } = req.body;
  streamSubscriber(streamId, adapter, res);
});
```

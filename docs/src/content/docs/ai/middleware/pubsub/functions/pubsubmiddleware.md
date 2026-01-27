---
title: "Function: pubsubMiddleware()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / pubsubMiddleware

# Function: pubsubMiddleware()

> **pubsubMiddleware**(`options`): [`Middleware`](../../../core/interfaces/middleware.md)

Defined in: [src/middleware/pubsub/index.ts:96](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/middleware/pubsub/index.ts#L96)

Creates pub-sub middleware for stream buffering and publishing.

The middleware:
- Creates stream entries for new requests
- Buffers all stream events
- Publishes events to subscribers
- On stream end: notifies subscribers, then removes from adapter

Server routes handle reconnection logic using `streamSubscriber`.

## Parameters

### options

[`PubSubOptions`](../interfaces/pubsuboptions.md) = `{}`

Middleware configuration

## Returns

[`Middleware`](../../../core/interfaces/middleware.md)

Middleware instance

## Example

```typescript
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { pubsubMiddleware, memoryAdapter } from '@providerprotocol/ai/middleware/pubsub';
import { h3 } from '@providerprotocol/ai/middleware/pubsub/server';

const adapter = memoryAdapter();

export default defineEventHandler(async (event) => {
  const { input, conversationId } = await readBody(event);

  // Fire and forget - subscriber connects immediately, events flow when ready
  const model = llm({
    model: anthropic('claude-sonnet-4-20250514'),
    middleware: [pubsubMiddleware({ adapter, streamId: conversationId })],
  });
  model.stream(input).then(turn => saveToDatabase(turn));

  return h3.streamSubscriber(conversationId, adapter, event);
});
```

---
title: "Function: pubsubMiddleware()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub](../index.md) / pubsubMiddleware

# Function: pubsubMiddleware()

> **pubsubMiddleware**(`options`): [`Middleware`](../../../core/interfaces/middleware.md)

Defined in: [src/middleware/pubsub/index.ts:106](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/index.ts#L106)

Creates pub-sub middleware for stream buffering and publishing.

The middleware:
- Creates stream entries for new requests
- Buffers all stream events
- Publishes events to subscribers
- Marks streams as completed

Server routes handle reconnection logic using `createSubscriberStream`.

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
import { pubsubMiddleware } from '@providerprotocol/ai/middleware/pubsub';
import { createSubscriberStream } from '@providerprotocol/ai/middleware/pubsub/server/webapi';

// Server route handling both new requests and reconnections
export async function POST(req: Request) {
  const { messages, streamId } = await req.json();
  const exists = await adapter.exists(streamId);

  if (!exists) {
    // Start background generation (fire and forget)
    const model = llm({
      model: anthropic('claude-sonnet-4-20250514'),
      middleware: [pubsubMiddleware({ adapter, streamId })],
    });
    consumeInBackground(model.stream(messages));
  }

  // Both new and reconnect: subscribe to events
  return new Response(createSubscriberStream(streamId, adapter), {
    headers: { 'Content-Type': 'text/event-stream' },
  });
}
```

---
title: "Variable: webapi"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / webapi

# Variable: webapi

> `const` **webapi**: `object`

Defined in: [src/middleware/pubsub/server/webapi.ts:99](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/server/webapi.ts#L99)

Web API adapter namespace for pub-sub server utilities.

## Type Declaration

### createSubscriberStream()

> **createSubscriberStream**: (`streamId`, `adapter`) => `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Creates a ReadableStream that replays buffered events and subscribes to live events.

Handles reconnection for Web API frameworks (Bun, Deno, Next.js, Cloudflare Workers):
1. Replays buffered events from the adapter
2. Subscribes to live events until completion signal
3. Closes when stream completes or client disconnects

#### Parameters

##### streamId

`string`

The stream ID to subscribe to

##### adapter

[`PubSubAdapter`](../../interfaces/pubsubadapter.md)

The pub-sub adapter instance

#### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A ReadableStream of SSE-formatted data

#### Example

```typescript
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { pubsubMiddleware, memoryAdapter } from '@providerprotocol/ai/middleware/pubsub';
import { webapi } from '@providerprotocol/ai/middleware/pubsub/server';

const adapter = memoryAdapter();

// Next.js App Router / Bun.serve / Deno.serve
export async function POST(req: Request) {
  const { input, conversationId } = await req.json();

  if (!await adapter.exists(conversationId)) {
    const model = llm({
      model: anthropic('claude-sonnet-4-20250514'),
      middleware: [pubsubMiddleware({ adapter, streamId: conversationId })],
    });
    model.stream(input).then(turn => saveToDatabase(conversationId, turn));
  }

  return new Response(webapi.createSubscriberStream(conversationId, adapter), {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    },
  });
}
```

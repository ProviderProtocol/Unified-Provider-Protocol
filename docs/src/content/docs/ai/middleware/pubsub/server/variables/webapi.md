---
title: "Variable: webapi"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / webapi

# Variable: webapi

> `const` **webapi**: `object`

Defined in: [src/middleware/pubsub/server/webapi.ts:89](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/server/webapi.ts#L89)

Web API adapter namespace for pub-sub server utilities.

## Type Declaration

### createSubscriberStream()

> **createSubscriberStream**: (`streamId`, `adapter`) => `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Creates a ReadableStream that replays buffered events and subscribes to live events.

This utility handles the reconnection pattern for server routes:
1. Replays all buffered events from the adapter
2. If stream is already completed, closes immediately
3. Otherwise, subscribes to live events until completion

Works with any framework that supports web standard ReadableStream.

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
import { createSubscriberStream } from '@providerprotocol/ai/middleware/pubsub/server/webapi';

// Next.js App Router
export async function POST(req: Request) {
  const { streamId } = await req.json();

  return new Response(createSubscriberStream(streamId, adapter), {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
```

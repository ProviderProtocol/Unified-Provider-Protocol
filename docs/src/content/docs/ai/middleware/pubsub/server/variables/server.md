---
title: "Variable: server"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / server

# Variable: server

> `const` **server**: `object`

Defined in: [src/middleware/pubsub/server/index.ts:67](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/middleware/pubsub/server/index.ts#L67)

Server adapters namespace for pub-sub stream resumption.

Contains framework-specific adapters for Web API, Express, Fastify, and H3.

## Type Declaration

### express

> **express**: `object`

Express/Connect adapter

#### express.streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `res`) => `Promise`\<`void`\>

Stream buffered and live events to an Express response.

This utility handles the reconnection pattern for Express routes:
1. Replays all buffered events from the adapter
2. If stream is already completed, ends immediately
3. Otherwise, subscribes to live events until completion

##### Parameters

###### streamId

`string`

The stream ID to subscribe to

###### adapter

[`PubSubAdapter`](../../interfaces/pubsubadapter.md)

The pub-sub adapter instance

###### res

`ExpressResponse`

Express response object

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
import { streamSubscriber } from '@providerprotocol/ai/middleware/pubsub/server/express';

app.post('/api/ai/reconnect', async (req, res) => {
  const { streamId } = req.body;
  streamSubscriber(streamId, adapter, res);
});
```

### fastify

> **fastify**: `object`

Fastify adapter

#### fastify.streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `reply`) => `Promise`\<`void`\>

Stream buffered and live events to a Fastify reply.

This utility handles the reconnection pattern for Fastify routes:
1. Replays all buffered events from the adapter
2. If stream is already completed, ends immediately
3. Otherwise, subscribes to live events until completion

##### Parameters

###### streamId

`string`

The stream ID to subscribe to

###### adapter

[`PubSubAdapter`](../../interfaces/pubsubadapter.md)

The pub-sub adapter instance

###### reply

`FastifyReply`

Fastify reply object

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
import { streamSubscriber } from '@providerprotocol/ai/middleware/pubsub/server/fastify';

app.post('/api/ai/reconnect', async (request, reply) => {
  const { streamId } = request.body;
  return streamSubscriber(streamId, adapter, reply);
});
```

### h3

> **h3**: `object`

H3/Nitro/Nuxt adapter

#### h3.streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `event`) => `Promise`\<`void`\>

Stream buffered and live events to an H3 event response.

This utility handles the reconnection pattern for H3/Nuxt routes:
1. Replays all buffered events from the adapter
2. If stream is already completed, ends immediately
3. Otherwise, subscribes to live events until completion

##### Parameters

###### streamId

`string`

The stream ID to subscribe to

###### adapter

[`PubSubAdapter`](../../interfaces/pubsubadapter.md)

The pub-sub adapter instance

###### event

`H3Event`

H3 event object

##### Returns

`Promise`\<`void`\>

##### Example

```typescript
import { streamSubscriber } from '@providerprotocol/ai/middleware/pubsub/server/h3';

export default defineEventHandler(async (event) => {
  const { streamId } = await readBody(event);
  return streamSubscriber(streamId, adapter, event);
});
```

### webapi

> **webapi**: `object`

Web API adapter (Bun, Deno, Next.js, Workers)

#### webapi.createSubscriberStream()

> **createSubscriberStream**: (`streamId`, `adapter`) => `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Creates a ReadableStream that replays buffered events and subscribes to live events.

This utility handles the reconnection pattern for server routes:
1. Replays all buffered events from the adapter
2. If stream is already completed, closes immediately
3. Otherwise, subscribes to live events until completion

Works with any framework that supports web standard ReadableStream.

##### Parameters

###### streamId

`string`

The stream ID to subscribe to

###### adapter

[`PubSubAdapter`](../../interfaces/pubsubadapter.md)

The pub-sub adapter instance

##### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A ReadableStream of SSE-formatted data

##### Example

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

## Examples

```typescript
import { webapi } from '@providerprotocol/ai/middleware/pubsub/server';

export async function POST(req: Request) {
  const { streamId } = await req.json();
  return new Response(webapi.createSubscriberStream(streamId, adapter), {
    headers: { 'Content-Type': 'text/event-stream' },
  });
}
```

```typescript
import { express } from '@providerprotocol/ai/middleware/pubsub/server';

app.post('/api/ai/reconnect', (req, res) => {
  const { streamId } = req.body;
  express.streamSubscriber(streamId, adapter, res);
});
```

```typescript
import { fastify } from '@providerprotocol/ai/middleware/pubsub/server';

app.post('/api/ai/reconnect', (request, reply) => {
  const { streamId } = request.body;
  return fastify.streamSubscriber(streamId, adapter, reply);
});
```

```typescript
import { h3 } from '@providerprotocol/ai/middleware/pubsub/server';

export default defineEventHandler(async (event) => {
  const { streamId } = await readBody(event);
  return h3.streamSubscriber(streamId, adapter, event);
});
```

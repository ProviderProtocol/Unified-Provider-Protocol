---
title: "Variable: server"
---

[**@providerprotocol/ai**](../../../../index.md)

***

[@providerprotocol/ai](./index.md) / [middleware/pubsub/server](../index.md) / server

# Variable: server

> `const` **server**: `object`

Defined in: [src/middleware/pubsub/server/index.ts:67](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/middleware/pubsub/server/index.ts#L67)

Server adapters namespace for pub-sub stream resumption.

Contains framework-specific adapters for Web API, Express, Fastify, and H3.

## Type Declaration

### express

> **express**: `object`

Express/Connect adapter

#### express.streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `res`) => `Promise`\<`void`\>

Stream buffered and live events to an Express response.

Handles reconnection for Express routes:
1. Replays buffered events from the adapter
2. Subscribes to live events until completion signal
3. Ends when stream completes or client disconnects

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

### fastify

> **fastify**: `object`

Fastify adapter

#### fastify.streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `reply`) => `Promise`\<`void`\>

Stream buffered and live events to a Fastify reply.

Handles reconnection for Fastify routes:
1. Replays buffered events from the adapter
2. Subscribes to live events until completion signal
3. Ends when stream completes or client disconnects

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

### h3

> **h3**: `object`

H3/Nitro/Nuxt adapter

#### h3.streamSubscriber()

> **streamSubscriber**: (`streamId`, `adapter`, `event`) => `Promise`\<`void`\>

Stream buffered and live events to an H3 event response.

Handles reconnection for H3/Nuxt routes:
1. Replays buffered events from the adapter
2. Subscribes to live events until completion signal
3. Ends when stream completes or client disconnects

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
import { llm } from '@providerprotocol/ai';
import { anthropic } from '@providerprotocol/ai/anthropic';
import { pubsubMiddleware, memoryAdapter } from '@providerprotocol/ai/middleware/pubsub';
import { h3 } from '@providerprotocol/ai/middleware/pubsub/server';

const adapter = memoryAdapter();

export default defineEventHandler(async (event) => {
  const { input, conversationId } = await readBody(event);

  if (!await adapter.exists(conversationId)) {
    const model = llm({
      model: anthropic('claude-sonnet-4-20250514'),
      middleware: [pubsubMiddleware({ adapter, streamId: conversationId })],
    });
    model.stream(input).then(turn => saveToDatabase(conversationId, turn));
  }

  return h3.streamSubscriber(conversationId, adapter, event);
});
```

### webapi

> **webapi**: `object`

Web API adapter (Bun, Deno, Next.js, Workers)

#### webapi.createSubscriberStream()

> **createSubscriberStream**: (`streamId`, `adapter`) => `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Creates a ReadableStream that replays buffered events and subscribes to live events.

Handles reconnection for Web API frameworks (Bun, Deno, Next.js, Cloudflare Workers):
1. Replays buffered events from the adapter
2. Subscribes to live events until completion signal
3. Closes when stream completes or client disconnects

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

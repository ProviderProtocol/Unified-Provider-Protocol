---
title: "Interface: Middleware"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Middleware

# Interface: Middleware

Defined in: [src/types/middleware.ts:139](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L139)

Middleware interface with optional hooks.

Implement only the hooks you need. Middleware are executed in array order
for request/start hooks, and reverse order for response/end hooks.

## Example

```typescript
import { type Middleware, StreamEventType } from '@providerprotocol/ai';

const customMiddleware: Middleware = {
  name: 'request-id',

  onRequest(ctx) {
    ctx.state.set('requestId', crypto.randomUUID());
  },

  onStreamEvent(event, ctx) {
    // Filter out reasoning events
    if (event.type === StreamEventType.ReasoningDelta) {
      return null;
    }
    return event;
  },

  onEnd(ctx) {
    const duration = ctx.endTime! - ctx.startTime;
    console.log(`Request ${ctx.state.get('requestId')} took ${duration}ms`);
  },
};
```

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/types/middleware.ts:141](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L141)

Middleware name for debugging and logging

## Methods

### onAbort()?

> `optional` **onAbort**(`error`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:177](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L177)

Called when a request is cancelled (for example, when a stream is aborted
or a client disconnects).
Called for all middleware that have this hook, regardless of order.

#### Parameters

##### error

`Error`

The cancellation error

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onEnd()?

> `optional` **onEnd**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:158](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L158)

Called when generate/stream completes successfully.
Called in reverse middleware order.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context with response populated

#### Returns

`void` \| `Promise`\<`void`\>

***

### onError()?

> `optional` **onError**(`error`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:167](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L167)

Called on non-cancellation errors during execution.
Called for all middleware that have this hook, regardless of order.

#### Parameters

##### error

`Error`

The error that occurred

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onRequest()?

> `optional` **onRequest**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:186](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L186)

Called before provider execution. Can modify the request.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context with mutable request

#### Returns

`void` \| `Promise`\<`void`\>

***

### onResponse()?

> `optional` **onResponse**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:194](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L194)

Called after provider execution. Can modify the response.
Called in reverse middleware order.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context with mutable response

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStart()?

> `optional` **onStart**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:150](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L150)

Called when generate/stream starts, before any provider execution.

#### Parameters

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStreamEnd()?

> `optional` **onStreamEnd**(`ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:226](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L226)

Called when stream completes, after all events have been processed.

#### Parameters

##### ctx

[`StreamContext`](streamcontext.md)

The stream context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStreamEvent()?

> `optional` **onStreamEvent**(`event`, `ctx`): [`StreamEvent`](streamevent.md) \| [`StreamEvent`](streamevent.md)[] \| `null`

Defined in: [src/types/middleware.ts:219](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L219)

Called for each stream event. Can transform, filter, or expand events.

Return values:
- `StreamEvent` - Pass through (potentially modified)
- `StreamEvent[]` - Expand into multiple events
- `null` - Filter out this event

#### Parameters

##### event

[`StreamEvent`](streamevent.md)

The stream event to process

##### ctx

[`StreamContext`](streamcontext.md)

The stream context

#### Returns

[`StreamEvent`](streamevent.md) \| [`StreamEvent`](streamevent.md)[] \| `null`

Transformed event(s) or null to filter

***

### onToolCall()?

> `optional` **onToolCall**(`tool`, `params`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:237](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L237)

Called when a tool is about to be executed.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool being called

##### params

`unknown`

The parameters for the tool call

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onToolResult()?

> `optional` **onToolResult**(`tool`, `result`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:246](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L246)

Called after tool execution completes.

#### Parameters

##### tool

[`Tool`](tool.md)

The tool that was executed

##### result

`unknown`

The result from the tool

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTurn()?

> `optional` **onTurn**(`turn`, `ctx`): `void` \| `Promise`\<`void`\>

Defined in: [src/types/middleware.ts:203](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L203)

Called when a complete Turn has been assembled (LLM only).
Called in reverse middleware order.

#### Parameters

##### turn

[`Turn`](turn.md)

The completed Turn

##### ctx

[`MiddlewareContext`](middlewarecontext.md)

The middleware context

#### Returns

`void` \| `Promise`\<`void`\>

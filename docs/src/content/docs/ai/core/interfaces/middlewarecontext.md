---
title: "Interface: MiddlewareContext"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MiddlewareContext

# Interface: MiddlewareContext

Defined in: [src/types/middleware.ts:52](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L52)

Shared context passed to all middleware hooks.

Provides access to request/response data, timing information,
and a shared state map for passing data between middleware.

## Example

```typescript
const loggingMiddleware: Middleware = {
  name: 'logging',
  onStart(ctx) {
    ctx.state.set('requestId', crypto.randomUUID());
  },
  onEnd(ctx) {
    const duration = ctx.endTime! - ctx.startTime;
    console.log(`[${ctx.provider}] ${ctx.state.get('requestId')} completed in ${duration}ms`);
  },
};
```

## Properties

### endTime?

> `optional` **endTime**: `number`

Defined in: [src/types/middleware.ts:78](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L78)

Request end timestamp in milliseconds (set after completion)

***

### modality

> `readonly` **modality**: [`MiddlewareModality`](../type-aliases/middlewaremodality.md)

Defined in: [src/types/middleware.ts:54](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L54)

The modality being used

***

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/middleware.ts:57](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L57)

Model ID

***

### provider

> `readonly` **provider**: `string`

Defined in: [src/types/middleware.ts:60](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L60)

Provider name

***

### request

> **request**: [`AnyRequest`](../type-aliases/anyrequest.md)

Defined in: [src/types/middleware.ts:66](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L66)

Request object (modality-specific, mutable for onRequest hook)

***

### response?

> `optional` **response**: [`AnyResponse`](../type-aliases/anyresponse.md)

Defined in: [src/types/middleware.ts:69](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L69)

Response object (populated after execution, mutable for onResponse hook)

***

### startTime

> `readonly` **startTime**: `number`

Defined in: [src/types/middleware.ts:75](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L75)

Request start timestamp in milliseconds

***

### state

> `readonly` **state**: `Map`\<`string`, `unknown`\>

Defined in: [src/types/middleware.ts:72](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L72)

Shared state across middleware - use for passing data between hooks

***

### streaming

> `readonly` **streaming**: `boolean`

Defined in: [src/types/middleware.ts:63](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L63)

Whether this is a streaming request

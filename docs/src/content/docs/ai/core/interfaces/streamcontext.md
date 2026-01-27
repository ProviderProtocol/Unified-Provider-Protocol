---
title: "Interface: StreamContext"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamContext

# Interface: StreamContext

Defined in: [src/types/middleware.ts:102](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L102)

Context for stream event hooks.

Provides a shared state map for middleware to store and retrieve data.
Middleware that need to accumulate text or other data should manage
their own state using the provided state map.

## Example

```typescript
const filterMiddleware: Middleware = {
  name: 'reasoning-filter',
  onStreamEvent(event, ctx) {
    // Filter out reasoning events
    if (event.type === StreamEventType.ReasoningDelta) {
      return null;
    }
    return event;
  },
};
```

## Properties

### state

> `readonly` **state**: `Map`\<`string`, `unknown`\>

Defined in: [src/types/middleware.ts:104](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/middleware.ts#L104)

Shared state (same reference as MiddlewareContext.state)

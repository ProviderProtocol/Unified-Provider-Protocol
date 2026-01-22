---
title: "Function: toSSE()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toSSE

# Function: toSSE()

> **toSSE**(`stream`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:254](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/proxy/server/webapi.ts#L254)

Create an SSE Response from a StreamResult.

Streams PP StreamEvents as SSE, then sends the final Turn data.

## Parameters

### stream

[`StreamResult`](../../core/interfaces/streamresult.md)

The StreamResult from instance.stream()

## Returns

`Response`

HTTP Response with SSE body

## Example

```typescript
const stream = instance.stream(messages);
return toSSE(stream);
```

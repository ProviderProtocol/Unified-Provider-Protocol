---
title: "Function: toImageSSE()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toImageSSE

# Function: toImageSSE()

> **toImageSSE**(`stream`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:297](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/proxy/server/webapi.ts#L297)

Create an SSE Response from an ImageStreamResult.

Streams image events as SSE, then sends the final image result.

## Parameters

### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

## Returns

`Response`

HTTP Response with SSE body

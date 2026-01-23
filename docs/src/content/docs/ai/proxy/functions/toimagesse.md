---
title: "Function: toImageSSE()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toImageSSE

# Function: toImageSSE()

> **toImageSSE**(`stream`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:297](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/proxy/server/webapi.ts#L297)

Create an SSE Response from an ImageStreamResult.

Streams image events as SSE, then sends the final image result.

## Parameters

### stream

`ImageStreamLike`

The ImageStreamResult or ImageProviderStreamResult from image().stream()

## Returns

`Response`

HTTP Response with SSE body

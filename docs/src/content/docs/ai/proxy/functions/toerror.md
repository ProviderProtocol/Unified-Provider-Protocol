---
title: "Function: toError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toError

# Function: toError()

> **toError**(`message`, `status`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:170](https://github.com/ProviderProtocol/ai/blob/ad6923294c4b613e141878e1142aaea0e84551ed/src/providers/proxy/server/webapi.ts#L170)

Create an error Response.

## Parameters

### message

`string`

Error message

### status

`number` = `500`

HTTP status code (default: 500)

## Returns

`Response`

HTTP Response with error body

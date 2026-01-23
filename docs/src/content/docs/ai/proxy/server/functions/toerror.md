---
title: "Function: toError()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy/server](../index.md) / toError

# Function: toError()

> **toError**(`message`, `status`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:338](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/proxy/server/webapi.ts#L338)

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

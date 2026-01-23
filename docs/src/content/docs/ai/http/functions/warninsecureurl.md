---
title: "Function: warnInsecureUrl()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / warnInsecureUrl

# Function: warnInsecureUrl()

> **warnInsecureUrl**(`url`, `provider`): `void`

Defined in: [src/http/fetch.ts:25](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/http/fetch.ts#L25)

Warns when a non-TLS URL is used with a provider.
Only warns in non-production, excludes localhost for local development.

## Parameters

### url

`string`

### provider

`string`

## Returns

`void`

---
title: "Function: warnInsecureUrl()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / warnInsecureUrl

# Function: warnInsecureUrl()

> **warnInsecureUrl**(`url`, `provider`): `void`

Defined in: [src/http/fetch.ts:25](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/http/fetch.ts#L25)

Warns when a non-TLS URL is used with a provider.
Only warns in non-production, excludes localhost for local development.

## Parameters

### url

`string`

### provider

`string`

## Returns

`void`

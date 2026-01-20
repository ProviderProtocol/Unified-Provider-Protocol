---
title: "Function: warnInsecureUrl()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / warnInsecureUrl

# Function: warnInsecureUrl()

> **warnInsecureUrl**(`url`, `provider`): `void`

Defined in: [src/http/fetch.ts:25](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/http/fetch.ts#L25)

Warns when a non-TLS URL is used with a provider.
Only warns in non-production, excludes localhost for local development.

## Parameters

### url

`string`

### provider

`string`

## Returns

`void`

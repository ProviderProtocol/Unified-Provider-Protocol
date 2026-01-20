---
title: "Interface: RequestMeta"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / RequestMeta

# Interface: RequestMeta

Defined in: [src/providers/proxy/server/types.ts:42](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/proxy/server/types.ts#L42)

Metadata about the incoming request.

## Properties

### headers

> **headers**: `Record`\<`string`, `string` \| `undefined`\>

Defined in: [src/providers/proxy/server/types.ts:46](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/proxy/server/types.ts#L46)

Raw headers from the request

***

### wantsStream

> **wantsStream**: `boolean`

Defined in: [src/providers/proxy/server/types.ts:44](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/proxy/server/types.ts#L44)

Whether the client wants a streaming response

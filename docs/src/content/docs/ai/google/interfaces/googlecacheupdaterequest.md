---
title: "Interface: GoogleCacheUpdateRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheUpdateRequest

# Interface: GoogleCacheUpdateRequest

Defined in: [src/providers/google/types.ts:505](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/google/types.ts#L505)

Request body for updating a cached content entry.
Only expiration can be updated; all other fields are immutable.

## Properties

### expireTime?

> `optional` **expireTime**: `string`

Defined in: [src/providers/google/types.ts:507](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/google/types.ts#L507)

New absolute expiration time (RFC 3339 format, mutually exclusive with ttl)

***

### ttl?

> `optional` **ttl**: `string`

Defined in: [src/providers/google/types.ts:509](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/google/types.ts#L509)

New time-to-live duration (e.g., "3600s", mutually exclusive with expireTime)

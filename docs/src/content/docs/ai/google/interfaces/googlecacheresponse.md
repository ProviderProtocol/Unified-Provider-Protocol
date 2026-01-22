---
title: "Interface: GoogleCacheResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheResponse

# Interface: GoogleCacheResponse

Defined in: [src/providers/google/types.ts:574](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L574)

Response from creating or retrieving a cached content entry.

## Properties

### createTime

> **createTime**: `string`

Defined in: [src/providers/google/types.ts:582](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L582)

When the cache was created (RFC 3339 format)

***

### displayName?

> `optional` **displayName**: `string`

Defined in: [src/providers/google/types.ts:580](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L580)

Display name for the cache

***

### expireTime

> **expireTime**: `string`

Defined in: [src/providers/google/types.ts:586](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L586)

When the cache expires (RFC 3339 format)

***

### model

> **model**: `string`

Defined in: [src/providers/google/types.ts:578](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L578)

Model this cache is associated with

***

### name

> **name**: `string`

Defined in: [src/providers/google/types.ts:576](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L576)

Cache identifier in format "cachedContents/{id}" - use this in requests

***

### updateTime

> **updateTime**: `string`

Defined in: [src/providers/google/types.ts:584](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L584)

When the cache was last updated (RFC 3339 format)

***

### usageMetadata?

> `optional` **usageMetadata**: `object`

Defined in: [src/providers/google/types.ts:588](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L588)

Token usage metadata

#### totalTokenCount

> **totalTokenCount**: `number`

Total tokens in the cached content

---
title: "Interface: GoogleCacheListResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheListResponse

# Interface: GoogleCacheListResponse

Defined in: [src/providers/google/types.ts:608](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L608)

Response from listing cached content entries.

## Properties

### cachedContents?

> `optional` **cachedContents**: [`GoogleCacheResponse`](googlecacheresponse.md)[]

Defined in: [src/providers/google/types.ts:610](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L610)

Array of cached content entries

***

### nextPageToken?

> `optional` **nextPageToken**: `string`

Defined in: [src/providers/google/types.ts:612](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L612)

Token for fetching the next page of results

---
title: "Interface: GoogleCacheListResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCacheListResponse

# Interface: GoogleCacheListResponse

Defined in: [src/providers/google/types.ts:515](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L515)

Response from listing cached content entries.

## Properties

### cachedContents?

> `optional` **cachedContents**: [`GoogleCacheResponse`](googlecacheresponse.md)[]

Defined in: [src/providers/google/types.ts:517](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L517)

Array of cached content entries

***

### nextPageToken?

> `optional` **nextPageToken**: `string`

Defined in: [src/providers/google/types.ts:519](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L519)

Token for fetching the next page of results

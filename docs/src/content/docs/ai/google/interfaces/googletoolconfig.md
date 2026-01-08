---
title: "Interface: GoogleToolConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleToolConfig

# Interface: GoogleToolConfig

Defined in: [src/providers/google/types.ts:682](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L682)

Tool configuration for retrieval (e.g., user location for Maps).

## Properties

### retrievalConfig?

> `optional` **retrievalConfig**: `object`

Defined in: [src/providers/google/types.ts:684](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L684)

Retrieval configuration

#### latLng?

> `optional` **latLng**: `object`

User location for "near me" queries

##### latLng.latitude

> **latitude**: `number`

User latitude

##### latLng.longitude

> **longitude**: `number`

User longitude

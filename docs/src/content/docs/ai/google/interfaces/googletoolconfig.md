---
title: "Interface: GoogleToolConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleToolConfig

# Interface: GoogleToolConfig

Defined in: [src/providers/google/types.ts:775](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L775)

Tool configuration for retrieval (e.g., user location for Maps).

## Properties

### retrievalConfig?

> `optional` **retrievalConfig**: `object`

Defined in: [src/providers/google/types.ts:777](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L777)

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

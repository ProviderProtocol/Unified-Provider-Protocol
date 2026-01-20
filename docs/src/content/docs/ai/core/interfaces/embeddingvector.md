---
title: "Interface: EmbeddingVector"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingVector

# Interface: EmbeddingVector

Defined in: [src/types/provider.ts:365](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L365)

**`Internal`**

Single vector from provider response.

## Properties

### index

> **index**: `number`

Defined in: [src/types/provider.ts:369](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L369)

Index in input array

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/provider.ts:373](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L373)

Provider-specific per-embedding metadata

***

### tokens?

> `optional` **tokens**: `number`

Defined in: [src/types/provider.ts:371](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L371)

Token count for this input

***

### vector

> **vector**: `string` \| `number`[]

Defined in: [src/types/provider.ts:367](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/provider.ts#L367)

The embedding vector (floats or base64 string)

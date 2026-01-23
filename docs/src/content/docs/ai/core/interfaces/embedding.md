---
title: "Interface: Embedding"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Embedding

# Interface: Embedding

Defined in: [src/types/embedding.ts:108](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L108)

Single embedding vector result.

## Properties

### dimensions

> **dimensions**: `number`

Defined in: [src/types/embedding.ts:113](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L113)

Vector dimensionality

***

### index

> **index**: `number`

Defined in: [src/types/embedding.ts:116](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L116)

Index corresponding to input array position

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/embedding.ts:122](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L122)

Provider-specific per-embedding metadata

***

### tokens?

> `optional` **tokens**: `number`

Defined in: [src/types/embedding.ts:119](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L119)

Token count for this input (if provider reports)

***

### vector

> **vector**: `number`[]

Defined in: [src/types/embedding.ts:110](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/embedding.ts#L110)

The embedding vector

---
title: "Interface: ImageResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageResult

# Interface: ImageResult

Defined in: [src/types/image.ts:123](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/image.ts#L123)

Result from generate() or edit() calls.

## Properties

### images

> **images**: [`GeneratedImage`](generatedimage.md)[]

Defined in: [src/types/image.ts:125](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/image.ts#L125)

Generated images

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/image.ts:128](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/image.ts#L128)

Provider-specific response metadata

***

### usage?

> `optional` **usage**: [`ImageUsage`](imageusage.md)

Defined in: [src/types/image.ts:131](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/types/image.ts#L131)

Usage/billing information

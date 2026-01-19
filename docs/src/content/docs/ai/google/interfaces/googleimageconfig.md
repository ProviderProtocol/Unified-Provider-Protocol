---
title: "Interface: GoogleImageConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleImageConfig

# Interface: GoogleImageConfig

Defined in: [src/providers/google/types.ts:173](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/google/types.ts#L173)

Image generation configuration for Gemini response modalities.

## Properties

### aspectRatio?

> `optional` **aspectRatio**: `string`

Defined in: [src/providers/google/types.ts:178](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/google/types.ts#L178)

Preferred aspect ratio for generated images.
Example: "1:1", "9:16", "16:9".

***

### imageSize?

> `optional` **imageSize**: `string`

Defined in: [src/providers/google/types.ts:184](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/google/types.ts#L184)

Preferred output size for generated images.
Example: "1024x1024".

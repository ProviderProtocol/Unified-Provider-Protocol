---
title: "Interface: OpenRouterImageConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterImageConfig

# Interface: OpenRouterImageConfig

Defined in: [src/providers/openrouter/types.ts:198](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openrouter/types.ts#L198)

Image generation configuration for OpenRouter.

Used with Gemini image generation models to control output dimensions.

## See

[https://openrouter.ai/docs/guides/overview/multimodal/image-generation](https://openrouter.ai/docs/guides/overview/multimodal/image-generation)

## Properties

### aspect\_ratio?

> `optional` **aspect\_ratio**: `string`

Defined in: [src/providers/openrouter/types.ts:203](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openrouter/types.ts#L203)

Aspect ratio for generated images.
Supported values range from '1:1' (1024×1024) to '21:9' (1536×672).

***

### image\_size?

> `optional` **image\_size**: `"1K"` \| `"2K"` \| `"4K"`

Defined in: [src/providers/openrouter/types.ts:211](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openrouter/types.ts#L211)

Resolution level for generated images.
- '1K': Standard resolution
- '2K': Higher resolution
- '4K': Highest resolution

---
title: "Type Alias: ImageStreamEvent"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageStreamEvent

# Type Alias: ImageStreamEvent

> **ImageStreamEvent** = \{ `image`: [`Image`](../classes/image.md); `index`: `number`; `metadata?`: `Record`\<`string`, `unknown`\>; `type`: `"preview"`; \} \| \{ `image`: [`GeneratedImage`](../interfaces/generatedimage.md); `index`: `number`; `type`: `"complete"`; \}

Defined in: [src/types/image.ts:137](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/image.ts#L137)

Stream events for image generation.

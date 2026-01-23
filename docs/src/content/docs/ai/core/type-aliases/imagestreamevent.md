---
title: "Type Alias: ImageStreamEvent"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageStreamEvent

# Type Alias: ImageStreamEvent

> **ImageStreamEvent** = \{ `image`: [`Image`](../classes/image.md); `index`: `number`; `metadata?`: `Record`\<`string`, `unknown`\>; `type`: `"preview"`; \} \| \{ `image`: [`GeneratedImage`](../interfaces/generatedimage.md); `index`: `number`; `type`: `"complete"`; \}

Defined in: [src/types/image.ts:137](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/image.ts#L137)

Stream events for image generation.

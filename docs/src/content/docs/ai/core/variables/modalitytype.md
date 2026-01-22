---
title: "Variable: ModalityType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ModalityType

# Variable: ModalityType

> `const` **ModalityType**: `object`

Defined in: [src/types/errors.ts:83](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/errors.ts#L83)

Modality type constants.

Use these constants for type-safe modality handling:

## Type Declaration

### Audio

> `readonly` **Audio**: `"audio"` = `'audio'`

Audio processing/generation model

### Embedding

> `readonly` **Embedding**: `"embedding"` = `'embedding'`

Text/image embedding model

### Image

> `readonly` **Image**: `"image"` = `'image'`

Image generation model

### LLM

> `readonly` **LLM**: `"llm"` = `'llm'`

Large language model for text generation

### Video

> `readonly` **Video**: `"video"` = `'video'`

Video processing/generation model

## Example

```typescript
import { ModalityType } from 'upp';

if (provider.modality === ModalityType.LLM) {
  // Handle LLM provider
}
```

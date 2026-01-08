---
title: "Type Alias: ImageSource"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageSource

# Type Alias: ImageSource

> **ImageSource** = \{ `data`: `string`; `type`: `"base64"`; \} \| \{ `type`: `"url"`; `url`: `string`; \} \| \{ `data`: `Uint8Array`; `type`: `"bytes"`; \}

Defined in: [src/types/content.ts:37](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/content.ts#L37)

Image source variants for ImageBlock.

Images can be provided as base64-encoded strings, URLs, or raw bytes.

## Example

```typescript
// Base64 encoded image
const base64Source: ImageSource = {
  type: 'base64',
  data: 'iVBORw0KGgo...'
};

// URL reference
const urlSource: ImageSource = {
  type: 'url',
  url: 'https://example.com/image.png'
};

// Raw bytes
const bytesSource: ImageSource = {
  type: 'bytes',
  data: new Uint8Array([...])
};
```

---
title: "Type Alias: ImageSource"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageSource

# Type Alias: ImageSource

> **ImageSource** = \{ `data`: `string`; `type`: `"base64"`; \} \| \{ `type`: `"url"`; `url`: `string`; \} \| \{ `data`: `Uint8Array`; `type`: `"bytes"`; \}

Defined in: [src/types/content.ts:107](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/content.ts#L107)

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

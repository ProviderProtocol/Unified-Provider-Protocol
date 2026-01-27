---
title: "Variable: ImageSourceType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageSourceType

# Variable: ImageSourceType

> `const` **ImageSourceType**: `object`

Defined in: [src/types/content.ts:65](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/content.ts#L65)

Image source type constants.

## Type Declaration

### Base64

> `readonly` **Base64**: `"base64"` = `'base64'`

Base64-encoded image data

### Bytes

> `readonly` **Bytes**: `"bytes"` = `'bytes'`

Raw bytes image data

### Url

> `readonly` **Url**: `"url"` = `'url'`

URL reference to image

## Example

```typescript
import { ImageSourceType } from 'upp';

if (source.type === ImageSourceType.Base64) {
  // Handle base64 encoded image
} else if (source.type === ImageSourceType.Url) {
  // Handle URL reference
}
```

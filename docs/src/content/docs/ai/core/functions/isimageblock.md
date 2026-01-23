---
title: "Function: isImageBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isImageBlock

# Function: isImageBlock()

> **isImageBlock**(`block`): `block is ImageBlock`

Defined in: [src/types/content.ts:502](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/content.ts#L502)

Type guard for ImageBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is ImageBlock`

True if the block is an ImageBlock

## Example

```typescript
if (isImageBlock(block)) {
  console.log(block.mimeType, block.width, block.height);
}
```

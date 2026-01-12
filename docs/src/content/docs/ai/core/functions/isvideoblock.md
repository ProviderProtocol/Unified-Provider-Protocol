---
title: "Function: isVideoBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isVideoBlock

# Function: isVideoBlock()

> **isVideoBlock**(`block`): `block is VideoBlock`

Defined in: [src/types/content.ts:306](https://github.com/ProviderProtocol/ai/blob/ad6923294c4b613e141878e1142aaea0e84551ed/src/types/content.ts#L306)

Type guard for VideoBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is VideoBlock`

True if the block is a VideoBlock

## Example

```typescript
if (isVideoBlock(block)) {
  console.log(block.mimeType, block.duration);
}
```

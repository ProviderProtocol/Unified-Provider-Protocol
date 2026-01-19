---
title: "Function: isBinaryBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isBinaryBlock

# Function: isBinaryBlock()

> **isBinaryBlock**(`block`): `block is BinaryBlock`

Defined in: [src/types/content.ts:570](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/content.ts#L570)

Type guard for BinaryBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is BinaryBlock`

True if the block is a BinaryBlock

## Example

```typescript
if (isBinaryBlock(block)) {
  console.log(block.mimeType, block.metadata);
}
```

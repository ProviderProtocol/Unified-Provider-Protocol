---
title: "Function: isDocumentBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isDocumentBlock

# Function: isDocumentBlock()

> **isDocumentBlock**(`block`): `block is DocumentBlock`

Defined in: [src/types/content.ts:519](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/content.ts#L519)

Type guard for DocumentBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is DocumentBlock`

True if the block is a DocumentBlock

## Example

```typescript
if (isDocumentBlock(block)) {
  console.log(block.mimeType, block.title);
}
```

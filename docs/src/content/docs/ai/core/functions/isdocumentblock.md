---
title: "Function: isDocumentBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isDocumentBlock

# Function: isDocumentBlock()

> **isDocumentBlock**(`block`): `block is DocumentBlock`

Defined in: [src/types/content.ts:519](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/content.ts#L519)

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

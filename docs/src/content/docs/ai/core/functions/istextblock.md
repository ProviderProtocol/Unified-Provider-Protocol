---
title: "Function: isTextBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isTextBlock

# Function: isTextBlock()

> **isTextBlock**(`block`): `block is TextBlock`

Defined in: [src/types/content.ts:468](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/content.ts#L468)

Type guard for TextBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is TextBlock`

True if the block is a TextBlock

## Example

```typescript
if (isTextBlock(block)) {
  console.log(block.text);
}
```

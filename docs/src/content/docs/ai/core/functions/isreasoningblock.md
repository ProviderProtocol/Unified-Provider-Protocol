---
title: "Function: isReasoningBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isReasoningBlock

# Function: isReasoningBlock()

> **isReasoningBlock**(`block`): `block is ReasoningBlock`

Defined in: [src/types/content.ts:485](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/content.ts#L485)

Type guard for ReasoningBlock.

## Parameters

### block

[`ContentBlock`](../type-aliases/contentblock.md)

The content block to check

## Returns

`block is ReasoningBlock`

True if the block is a ReasoningBlock

## Example

```typescript
if (isReasoningBlock(block)) {
  console.log(block.text);
}
```

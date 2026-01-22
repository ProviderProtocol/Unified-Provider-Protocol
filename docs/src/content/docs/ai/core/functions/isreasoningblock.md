---
title: "Function: isReasoningBlock()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isReasoningBlock

# Function: isReasoningBlock()

> **isReasoningBlock**(`block`): `block is ReasoningBlock`

Defined in: [src/types/content.ts:485](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/content.ts#L485)

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

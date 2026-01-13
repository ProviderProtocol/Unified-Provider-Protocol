---
title: "Function: reasoning()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / reasoning

# Function: reasoning()

> **reasoning**(`content`): [`ReasoningBlock`](../interfaces/reasoningblock.md)

Defined in: [src/types/content.ts:346](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/types/content.ts#L346)

Creates a reasoning content block from a string.

## Parameters

### content

`string`

The reasoning/thinking content

## Returns

[`ReasoningBlock`](../interfaces/reasoningblock.md)

A ReasoningBlock containing the provided text

## Example

```typescript
const block = reasoning('Let me think step by step...');
// { type: 'reasoning', text: 'Let me think step by step...' }
```

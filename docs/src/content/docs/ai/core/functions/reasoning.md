---
title: "Function: reasoning()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / reasoning

# Function: reasoning()

> **reasoning**(`content`): [`ReasoningBlock`](../interfaces/reasoningblock.md)

Defined in: [src/types/content.ts:451](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/types/content.ts#L451)

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

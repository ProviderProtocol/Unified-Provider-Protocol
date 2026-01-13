---
title: "Function: emptyUsage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / emptyUsage

# Function: emptyUsage()

> **emptyUsage**(): [`TokenUsage`](../interfaces/tokenusage.md)

Defined in: [src/types/turn.ts:188](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/types/turn.ts#L188)

Creates an empty TokenUsage object.

## Returns

[`TokenUsage`](../interfaces/tokenusage.md)

A TokenUsage with all values set to zero

## Example

```typescript
const usage = emptyUsage();
// { inputTokens: 0, outputTokens: 0, totalTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, cycles: [] }
```

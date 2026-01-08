---
title: "Function: emptyUsage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / emptyUsage

# Function: emptyUsage()

> **emptyUsage**(): [`TokenUsage`](../interfaces/tokenusage.md)

Defined in: [src/types/turn.ts:171](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/turn.ts#L171)

Creates an empty TokenUsage object.

## Returns

[`TokenUsage`](../interfaces/tokenusage.md)

A TokenUsage with all values set to zero

## Example

```typescript
const usage = emptyUsage();
// { inputTokens: 0, outputTokens: 0, totalTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0, cycles: [] }
```

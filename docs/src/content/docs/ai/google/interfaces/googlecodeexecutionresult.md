---
title: "Interface: GoogleCodeExecutionResult"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCodeExecutionResult

# Interface: GoogleCodeExecutionResult

Defined in: [src/providers/google/types.ts:734](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L734)

Code execution result in response.

## Properties

### outcome

> **outcome**: `"OUTCOME_OK"` \| `"OUTCOME_FAILED"` \| `"OUTCOME_DEADLINE_EXCEEDED"`

Defined in: [src/providers/google/types.ts:736](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L736)

Execution outcome

***

### output

> **output**: `string`

Defined in: [src/providers/google/types.ts:738](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L738)

Execution output (stdout)

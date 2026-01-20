---
title: "Interface: GoogleCodeExecutionResult"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleCodeExecutionResult

# Interface: GoogleCodeExecutionResult

Defined in: [src/providers/google/types.ts:827](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L827)

Code execution result in response.

## Properties

### outcome

> **outcome**: `"OUTCOME_OK"` \| `"OUTCOME_FAILED"` \| `"OUTCOME_DEADLINE_EXCEEDED"`

Defined in: [src/providers/google/types.ts:829](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L829)

Execution outcome

***

### output

> **output**: `string`

Defined in: [src/providers/google/types.ts:831](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/google/types.ts#L831)

Execution output (stdout)

---
title: "Function: toolExecutionStart()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolExecutionStart

# Function: toolExecutionStart()

> **toolExecutionStart**(`toolCallId`, `toolName`, `timestamp`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:350](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/stream.ts#L350)

Creates a tool execution start stream event.

## Parameters

### toolCallId

`string`

Unique identifier for the tool call

### toolName

`string`

Name of the tool being executed

### timestamp

`number`

Start timestamp in milliseconds

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/streamevent.md)

A tool_execution_start StreamEvent

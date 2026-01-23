---
title: "Function: toolExecutionEnd()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolExecutionEnd

# Function: toolExecutionEnd()

> **toolExecutionEnd**(`toolCallId`, `toolName`, `result`, `isError`, `timestamp`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:407](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/stream.ts#L407)

Creates a tool execution end stream event.

## Parameters

### toolCallId

`string`

Unique identifier for the tool call

### toolName

`string`

Name of the tool that was executed

### result

`unknown`

The result from the tool execution

### isError

`boolean`

Whether the execution resulted in an error

### timestamp

`number`

End timestamp in milliseconds

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/streamevent.md)

A tool_execution_end StreamEvent

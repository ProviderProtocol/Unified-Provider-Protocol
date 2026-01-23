---
title: "Function: toolExecutionStart()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolExecutionStart

# Function: toolExecutionStart()

> **toolExecutionStart**(`toolCallId`, `toolName`, `timestamp`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:383](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/stream.ts#L383)

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

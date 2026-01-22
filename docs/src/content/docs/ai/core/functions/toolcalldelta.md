---
title: "Function: toolCallDelta()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolCallDelta

# Function: toolCallDelta()

> **toolCallDelta**(`toolCallId`, `toolName`, `argumentsJson`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:259](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/types/stream.ts#L259)

Creates a tool call delta stream event.

## Parameters

### toolCallId

`string`

Unique identifier for the tool call

### toolName

`string`

Name of the tool being called

### argumentsJson

`string`

Incremental JSON arguments string

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/streamevent.md)

A tool_call_delta StreamEvent

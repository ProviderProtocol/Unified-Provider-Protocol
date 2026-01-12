---
title: "Function: toolCallDelta()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / toolCallDelta

# Function: toolCallDelta()

> **toolCallDelta**(`toolCallId`, `toolName`, `argumentsJson`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:218](https://github.com/ProviderProtocol/ai/blob/ad6923294c4b613e141878e1142aaea0e84551ed/src/types/stream.ts#L218)

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

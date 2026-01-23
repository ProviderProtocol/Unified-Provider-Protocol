---
title: "Function: objectDelta()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / objectDelta

# Function: objectDelta()

> **objectDelta**(`text`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:312](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/stream.ts#L312)

Creates an object delta stream event for structured output responses.

## Parameters

### text

`string`

The incremental text content

### index

`number` = `0`

Content block index (default: 0)

## Returns

[`StreamEvent`](../interfaces/streamevent.md)

An object_delta StreamEvent

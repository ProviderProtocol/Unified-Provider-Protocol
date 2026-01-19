---
title: "Function: objectDelta()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / objectDelta

# Function: objectDelta()

> **objectDelta**(`text`, `index`): [`StreamEvent`](../interfaces/streamevent.md)

Defined in: [src/types/stream.ts:279](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/types/stream.ts#L279)

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

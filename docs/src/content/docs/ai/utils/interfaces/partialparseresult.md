---
title: "Interface: PartialParseResult"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [utils](../index.md) / PartialParseResult

# Interface: PartialParseResult\<T\>

Defined in: [src/utils/partial-json.ts:16](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/utils/partial-json.ts#L16)

Result of parsing partial JSON.

## Type Parameters

### T

`T` = `unknown`

The expected type of the parsed value

## Properties

### isComplete

> **isComplete**: `boolean`

Defined in: [src/utils/partial-json.ts:20](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/utils/partial-json.ts#L20)

Whether the JSON was complete and valid

***

### value

> **value**: `T` \| `undefined`

Defined in: [src/utils/partial-json.ts:18](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/utils/partial-json.ts#L18)

The parsed value, or undefined if parsing failed

---
title: "Interface: PartialParseResult"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [utils](../index.md) / PartialParseResult

# Interface: PartialParseResult\<T\>

Defined in: [src/utils/partial-json.ts:16](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/utils/partial-json.ts#L16)

Result of parsing partial JSON.

## Type Parameters

### T

`T` = `unknown`

The expected type of the parsed value

## Properties

### isComplete

> **isComplete**: `boolean`

Defined in: [src/utils/partial-json.ts:20](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/utils/partial-json.ts#L20)

Whether the JSON was complete and valid

***

### value

> **value**: `T` \| `undefined`

Defined in: [src/utils/partial-json.ts:18](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/utils/partial-json.ts#L18)

The parsed value, or undefined if parsing failed

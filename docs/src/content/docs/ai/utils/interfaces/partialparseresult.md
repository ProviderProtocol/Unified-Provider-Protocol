---
title: "Interface: PartialParseResult"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [utils](../index.md) / PartialParseResult

# Interface: PartialParseResult\<T\>

Defined in: [src/utils/partial-json.ts:16](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/utils/partial-json.ts#L16)

Result of parsing partial JSON.

## Type Parameters

### T

`T` = `unknown`

The expected type of the parsed value

## Properties

### isComplete

> **isComplete**: `boolean`

Defined in: [src/utils/partial-json.ts:20](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/utils/partial-json.ts#L20)

Whether the JSON was complete and valid

***

### value

> **value**: `T` \| `undefined`

Defined in: [src/utils/partial-json.ts:18](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/utils/partial-json.ts#L18)

The parsed value, or undefined if parsing failed

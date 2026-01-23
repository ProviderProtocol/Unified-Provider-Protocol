---
title: "Function: parsePartialJson()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [utils](../index.md) / parsePartialJson

# Function: parsePartialJson()

> **parsePartialJson**\<`T`\>(`json`): [`PartialParseResult`](../interfaces/partialparseresult.md)\<`T`\>

Defined in: [src/utils/partial-json.ts:217](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/utils/partial-json.ts#L217)

Parses potentially incomplete JSON, returning as much as can be extracted.

Handles common incomplete states during streaming:
- Incomplete strings: `{"name":"Jo` → `{name: "Jo"}`
- Incomplete objects: `{"a":1,"b":` → `{a: 1}`
- Incomplete arrays: `[1,2,` → `[1, 2]`
- Incomplete numbers, booleans, null literals
- Nested structures with partial completion
- Unicode escape sequences

## Type Parameters

### T

`T` = `unknown`

The expected type of the parsed value

## Parameters

### json

`string`

The potentially incomplete JSON string

## Returns

[`PartialParseResult`](../interfaces/partialparseresult.md)\<`T`\>

A PartialParseResult with the parsed value and completion status

## Example

```typescript
// Complete JSON
parsePartialJson('{"name":"John"}');
// => { value: { name: "John" }, isComplete: true }

// Incomplete object
parsePartialJson('{"user":{"firstName":"Jo');
// => { value: { user: { firstName: "Jo" } }, isComplete: false }

// Incomplete array
parsePartialJson('[1, 2, 3');
// => { value: [1, 2, 3], isComplete: false }
```

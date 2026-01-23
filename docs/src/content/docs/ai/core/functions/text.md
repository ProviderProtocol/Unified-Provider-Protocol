---
title: "Function: text()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / text

# Function: text()

> **text**(`content`): [`TextBlock`](../interfaces/textblock.md)

Defined in: [src/types/content.ts:435](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/content.ts#L435)

Creates a text content block from a string.

## Parameters

### content

`string`

The text content

## Returns

[`TextBlock`](../interfaces/textblock.md)

A TextBlock containing the provided text

## Example

```typescript
const block = text('Hello, world!');
// { type: 'text', text: 'Hello, world!' }
```

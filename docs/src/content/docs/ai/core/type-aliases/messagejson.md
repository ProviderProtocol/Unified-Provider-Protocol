---
title: "Type Alias: MessageJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageJSON

# Type Alias: MessageJSON

> **MessageJSON** = `Pick`\<[`Message`](../classes/message.md), `"id"` \| `"type"` \| `"metadata"`\> & `object`

Defined in: [src/types/messages.ts:29](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/messages.ts#L29)

Message serialized to JSON format.
Picks common fields from Message, converts timestamp to string.

## Type Declaration

### content

> **content**: [`ContentBlock`](contentblock.md)[]

### results?

> `optional` **results**: [`ToolResult`](../interfaces/toolresult.md)[]

### timestamp

> **timestamp**: `string`

### toolCalls?

> `optional` **toolCalls**: [`ToolCall`](../interfaces/toolcall.md)[]

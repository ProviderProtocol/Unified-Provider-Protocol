---
title: "Type Alias: MessageJSON"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageJSON

# Type Alias: MessageJSON

> **MessageJSON** = `Pick`\<[`Message`](../classes/message.md), `"id"` \| `"type"` \| `"metadata"`\> & `object`

Defined in: [src/types/messages.ts:27](https://github.com/ProviderProtocol/ai/blob/ad6923294c4b613e141878e1142aaea0e84551ed/src/types/messages.ts#L27)

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

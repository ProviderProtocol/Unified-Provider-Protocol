---
title: "Interface: AnthropicToolSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicToolSearchTool

# Interface: AnthropicToolSearchTool

Defined in: [src/providers/anthropic/types.ts:768](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/anthropic/types.ts#L768)

Tool search tool for dynamic tool discovery.

Enables Claude to search through large tool catalogs
using regex or natural language (BM25) queries.

Requires beta header: `advanced-tool-use-2025-11-20`

## Example

```typescript
const tool: AnthropicToolSearchTool = {
  type: 'tool_search_tool_regex_20251119',
  name: 'tool_search_tool_regex',
};
```

## Properties

### name

> **name**: `"tool_search_tool_regex"` \| `"tool_search_tool_bm25"`

Defined in: [src/providers/anthropic/types.ts:772](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/anthropic/types.ts#L772)

Tool name (must match type variant)

***

### type

> **type**: `"tool_search_tool_regex_20251119"` \| `"tool_search_tool_bm25_20251119"`

Defined in: [src/providers/anthropic/types.ts:770](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/anthropic/types.ts#L770)

Tool type identifier (regex or BM25 variant)

---
title: "Interface: AnthropicToolSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicToolSearchTool

# Interface: AnthropicToolSearchTool

Defined in: [src/providers/anthropic/types.ts:1007](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/anthropic/types.ts#L1007)

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

Defined in: [src/providers/anthropic/types.ts:1011](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/anthropic/types.ts#L1011)

Tool name (must match type variant)

***

### type

> **type**: `"tool_search_tool_regex_20251119"` \| `"tool_search_tool_bm25_20251119"`

Defined in: [src/providers/anthropic/types.ts:1009](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/anthropic/types.ts#L1009)

Tool type identifier (regex or BM25 variant)

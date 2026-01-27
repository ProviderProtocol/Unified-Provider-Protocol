---
title: "Interface: XAIFileSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIFileSearchTool

# Interface: XAIFileSearchTool

Defined in: [src/providers/xai/types.ts:360](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/xai/types.ts#L360)

File/collections search tool for document retrieval.

Enables Grok to search through uploaded document collections.
Pricing: $2.50 per 1,000 successful tool invocations.

## Example

```typescript
const tool: XAIFileSearchTool = {
  type: 'file_search',
  vector_store_ids: ['vs_abc123'],
  max_num_results: 10,
};
```

## Properties

### max\_num\_results?

> `optional` **max\_num\_results**: `number`

Defined in: [src/providers/xai/types.ts:366](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/xai/types.ts#L366)

Maximum results to return

***

### retrieval\_mode?

> `optional` **retrieval\_mode**: `object`

Defined in: [src/providers/xai/types.ts:368](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/xai/types.ts#L368)

Retrieval mode configuration

#### type

> **type**: `"keyword"` \| `"semantic"` \| `"hybrid"`

***

### type

> **type**: `"file_search"`

Defined in: [src/providers/xai/types.ts:362](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/xai/types.ts#L362)

Tool type identifier

***

### vector\_store\_ids

> **vector\_store\_ids**: `string`[]

Defined in: [src/providers/xai/types.ts:364](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/xai/types.ts#L364)

Collection/vector store IDs to search

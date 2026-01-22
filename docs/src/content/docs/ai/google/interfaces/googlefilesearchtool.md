---
title: "Interface: GoogleFileSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleFileSearchTool

# Interface: GoogleFileSearchTool

Defined in: [src/providers/google/types.ts:749](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L749)

File search (RAG) tool for document retrieval.

Enables Gemini to search through uploaded documents
using semantic search on FileSearchStore.

Pricing:
- Embeddings at indexing: $0.15 per 1M tokens
- Storage and query embeddings: Free

Note: Cannot be combined with other built-in tools.

## Example

```typescript
const tool: GoogleFileSearchTool = {
  fileSearch: {
    fileSearchStoreNames: ['fileSearchStores/abc123'],
  },
};
```

## Properties

### fileSearch

> **fileSearch**: `object`

Defined in: [src/providers/google/types.ts:751](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/google/types.ts#L751)

File search configuration

#### fileSearchStoreNames

> **fileSearchStoreNames**: `string`[]

FileSearchStore names to query

#### metadataFilter?

> `optional` **metadataFilter**: `string`

AIP-160 filter syntax for metadata filtering

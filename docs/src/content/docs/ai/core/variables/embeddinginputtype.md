---
title: "Variable: EmbeddingInputType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingInputType

# Variable: EmbeddingInputType

> `const` **EmbeddingInputType**: `object`

Defined in: [src/types/embedding.ts:22](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L22)

Input type hints for provider-specific embedding optimization.
Some providers optimize embeddings differently for queries vs documents.

## Type Declaration

### Document

> `readonly` **Document**: `"document"` = `'document'`

Input is a document to be stored/indexed

### Query

> `readonly` **Query**: `"query"` = `'query'`

Input is a query for retrieval/search

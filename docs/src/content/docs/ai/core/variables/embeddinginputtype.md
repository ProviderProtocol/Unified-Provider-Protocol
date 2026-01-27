---
title: "Variable: EmbeddingInputType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingInputType

# Variable: EmbeddingInputType

> `const` **EmbeddingInputType**: `object`

Defined in: [src/types/embedding.ts:23](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/embedding.ts#L23)

Input type hints for provider-specific embedding optimization.
Some providers optimize embeddings differently for queries vs documents.

## Type Declaration

### Document

> `readonly` **Document**: `"document"` = `'document'`

Input is a document to be stored/indexed

### Query

> `readonly` **Query**: `"query"` = `'query'`

Input is a query for retrieval/search

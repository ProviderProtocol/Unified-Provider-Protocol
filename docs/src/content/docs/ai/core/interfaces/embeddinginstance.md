---
title: "Interface: EmbeddingInstance"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / EmbeddingInstance

# Interface: EmbeddingInstance\<TParams\>

Defined in: [src/types/embedding.ts:181](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L181)

Embedding instance returned by the embedding() function.

## Example

```typescript
const embedder = embedding({ model: openai('text-embedding-3-large') });

// Single input
const result = await embedder.embed('Hello world');

// Batch input
const batch = await embedder.embed(['doc1', 'doc2', 'doc3']);

// Large-scale with progress
const stream = embedder.embed(documents, { chunked: true });
for await (const progress of stream) {
  console.log(`${progress.percent}% complete`);
}
```

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Properties

### model

> `readonly` **model**: [`BoundEmbeddingModel`](boundembeddingmodel.md)\<`TParams`\>

Defined in: [src/types/embedding.ts:203](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L203)

The bound embedding model

***

### params

> `readonly` **params**: `TParams` \| `undefined`

Defined in: [src/types/embedding.ts:206](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L206)

Current parameters

## Methods

### embed()

#### Call Signature

> **embed**(`input`, `options?`): `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Defined in: [src/types/embedding.ts:189](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L189)

Generate embeddings for one or more inputs.

##### Parameters

###### input

Single input or array of inputs

[`EmbeddingInput`](../type-aliases/embeddinginput.md) | [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

###### options?

[`EmbedOptions`](embedoptions.md) & `object`

Optional embed options

##### Returns

`Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Promise<EmbeddingResult> or EmbeddingStream if chunked

#### Call Signature

> **embed**(`input`, `options`): [`EmbeddingStream`](embeddingstream.md)

Defined in: [src/types/embedding.ts:193](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L193)

##### Parameters

###### input

[`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

###### options

[`EmbedOptions`](embedoptions.md) & `object`

##### Returns

[`EmbeddingStream`](embeddingstream.md)

#### Call Signature

> **embed**(`input`, `options?`): [`EmbeddingStream`](embeddingstream.md) \| `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

Defined in: [src/types/embedding.ts:197](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/embedding.ts#L197)

##### Parameters

###### input

[`EmbeddingInput`](../type-aliases/embeddinginput.md) | [`EmbeddingInput`](../type-aliases/embeddinginput.md)[]

###### options?

[`EmbedOptions`](embedoptions.md)

##### Returns

[`EmbeddingStream`](embeddingstream.md) \| `Promise`\<[`EmbeddingResult`](embeddingresult.md)\>

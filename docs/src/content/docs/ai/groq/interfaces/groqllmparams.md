---
title: "Interface: GroqLLMParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqLLMParams

# Interface: GroqLLMParams

Defined in: [src/providers/groq/types.ts:25](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L25)

Parameters for the Groq Chat Completions API.

These parameters are passed directly to the `/openai/v1/chat/completions` endpoint.
Groq's API is largely OpenAI-compatible with some differences noted below.

## Example

```typescript
const params: GroqLLMParams = {
  temperature: 0.7,
  max_tokens: 1000,
  top_p: 0.9
};
```

## Properties

### citation\_options?

> `optional` **citation\_options**: [`GroqCitationOptions`](groqcitationoptions.md)

Defined in: [src/providers/groq/types.ts:81](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L81)

Citation options for document-based responses

***

### documents?

> `optional` **documents**: [`GroqDocument`](groqdocument.md)[]

Defined in: [src/providers/groq/types.ts:78](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L78)

Documents for RAG (retrieval-augmented generation)

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/groq/types.ts:42](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L42)

Frequency penalty (-2.0 - 2.0)

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/groq/types.ts:63](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L63)

Enable log probabilities output

***

### max\_completion\_tokens?

> `optional` **max\_completion\_tokens**: `number`

Defined in: [src/providers/groq/types.ts:30](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L30)

Maximum completion tokens (alias for max_tokens)

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/groq/types.ts:27](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L27)

Maximum number of tokens to generate

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/groq/types.ts:48](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L48)

Whether to enable parallel tool calls

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/groq/types.ts:45](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L45)

Presence penalty (-2.0 - 2.0)

***

### reasoning\_effort?

> `optional` **reasoning\_effort**: `"low"` \| `"medium"` \| `"high"` \| `"none"`

Defined in: [src/providers/groq/types.ts:69](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L69)

Reasoning effort for reasoning-capable models

***

### reasoning\_format?

> `optional` **reasoning\_format**: `"parsed"` \| `"raw"` \| `"hidden"`

Defined in: [src/providers/groq/types.ts:72](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L72)

Reasoning format for reasoning-capable models

***

### response\_format?

> `optional` **response\_format**: [`GroqResponseFormat`](../type-aliases/groqresponseformat.md)

Defined in: [src/providers/groq/types.ts:57](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L57)

Response format for structured output

***

### search\_settings?

> `optional` **search\_settings**: [`GroqSearchSettings`](groqsearchsettings.md)

Defined in: [src/providers/groq/types.ts:75](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L75)

Web search settings for search-enabled models

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/groq/types.ts:51](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L51)

Seed for deterministic sampling

***

### service\_tier?

> `optional` **service\_tier**: `"flex"` \| `"on_demand"`

Defined in: [src/providers/groq/types.ts:60](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L60)

Service tier selection

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [src/providers/groq/types.ts:39](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L39)

Custom stop sequences

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/groq/types.ts:33](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L33)

Temperature for randomness (0.0 to 2.0). Note: Groq's API converts 0 to 1e-8 internally.

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/groq/types.ts:66](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L66)

Number of top log probabilities to return (0-20)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/groq/types.ts:36](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L36)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/groq/types.ts:54](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L54)

User identifier for rate limit tracking

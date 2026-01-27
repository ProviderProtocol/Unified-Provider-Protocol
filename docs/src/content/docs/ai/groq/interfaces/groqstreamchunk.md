---
title: "Interface: GroqStreamChunk"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqStreamChunk

# Interface: GroqStreamChunk

Defined in: [src/providers/groq/types.ts:307](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L307)

Streaming chunk structure from the Groq API.

## Properties

### choices

> **choices**: `GroqStreamChoice`[]

Defined in: [src/providers/groq/types.ts:312](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L312)

***

### created

> **created**: `number`

Defined in: [src/providers/groq/types.ts:310](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L310)

***

### id

> **id**: `string`

Defined in: [src/providers/groq/types.ts:308](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L308)

***

### model

> **model**: `string`

Defined in: [src/providers/groq/types.ts:311](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L311)

***

### object

> **object**: `"chat.completion.chunk"`

Defined in: [src/providers/groq/types.ts:309](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L309)

***

### system\_fingerprint?

> `optional` **system\_fingerprint**: `string`

Defined in: [src/providers/groq/types.ts:314](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L314)

***

### usage?

> `optional` **usage**: [`GroqUsage`](groqusage.md) \| `null`

Defined in: [src/providers/groq/types.ts:313](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L313)

***

### x\_groq?

> `optional` **x\_groq**: `object`

Defined in: [src/providers/groq/types.ts:315](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/groq/types.ts#L315)

#### id?

> `optional` **id**: `string`

#### usage?

> `optional` **usage**: [`GroqUsage`](groqusage.md)

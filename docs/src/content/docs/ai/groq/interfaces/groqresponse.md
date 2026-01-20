---
title: "Interface: GroqResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqResponse

# Interface: GroqResponse

Defined in: [src/providers/groq/types.ts:256](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L256)

Response structure from the Groq Chat Completions API.

## Properties

### choices

> **choices**: `GroqChoice`[]

Defined in: [src/providers/groq/types.ts:261](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L261)

***

### created

> **created**: `number`

Defined in: [src/providers/groq/types.ts:259](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L259)

***

### id

> **id**: `string`

Defined in: [src/providers/groq/types.ts:257](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L257)

***

### model

> **model**: `string`

Defined in: [src/providers/groq/types.ts:260](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L260)

***

### object

> **object**: `"chat.completion"`

Defined in: [src/providers/groq/types.ts:258](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L258)

***

### system\_fingerprint?

> `optional` **system\_fingerprint**: `string`

Defined in: [src/providers/groq/types.ts:263](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L263)

***

### usage

> **usage**: [`GroqUsage`](groqusage.md)

Defined in: [src/providers/groq/types.ts:262](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L262)

***

### x\_groq?

> `optional` **x\_groq**: `object`

Defined in: [src/providers/groq/types.ts:264](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L264)

#### id?

> `optional` **id**: `string`

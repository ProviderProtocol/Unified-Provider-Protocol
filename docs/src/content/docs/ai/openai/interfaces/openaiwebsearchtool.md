---
title: "Interface: OpenAIWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIWebSearchTool

# Interface: OpenAIWebSearchTool

Defined in: [src/providers/openai/types.ts:1161](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1161)

Web search tool for Responses API
Enables the model to search the web for up-to-date information

## Properties

### search\_context\_size?

> `optional` **search\_context\_size**: `"low"` \| `"medium"` \| `"high"`

Defined in: [src/providers/openai/types.ts:1167](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1167)

Context size for search results
Controls how much context from web results to include

***

### type

> **type**: `"web_search"`

Defined in: [src/providers/openai/types.ts:1162](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1162)

***

### user\_location?

> `optional` **user\_location**: [`OpenAIWebSearchUserLocation`](openaiwebsearchuserlocation.md) \| `null`

Defined in: [src/providers/openai/types.ts:1169](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1169)

User location for localizing search results

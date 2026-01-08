---
title: "Interface: OpenAIWebSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIWebSearchTool

# Interface: OpenAIWebSearchTool

Defined in: [src/providers/openai/types.ts:1089](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/openai/types.ts#L1089)

Web search tool for Responses API
Enables the model to search the web for up-to-date information

## Properties

### search\_context\_size?

> `optional` **search\_context\_size**: `"high"` \| `"medium"` \| `"low"`

Defined in: [src/providers/openai/types.ts:1095](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/openai/types.ts#L1095)

Context size for search results
Controls how much context from web results to include

***

### type

> **type**: `"web_search"`

Defined in: [src/providers/openai/types.ts:1090](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/openai/types.ts#L1090)

***

### user\_location?

> `optional` **user\_location**: [`OpenAIWebSearchUserLocation`](openaiwebsearchuserlocation.md) \| `null`

Defined in: [src/providers/openai/types.ts:1097](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/openai/types.ts#L1097)

User location for localizing search results

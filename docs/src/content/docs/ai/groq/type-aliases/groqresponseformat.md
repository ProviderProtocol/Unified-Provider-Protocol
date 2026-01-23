---
title: "Type Alias: GroqResponseFormat"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqResponseFormat

# Type Alias: GroqResponseFormat

> **GroqResponseFormat** = \{ `type`: `"text"`; \} \| \{ `type`: `"json_object"`; \} \| \{ `json_schema`: \{ `description?`: `string`; `name`: `string`; `schema`: `Record`\<`string`, `unknown`\>; `strict?`: `boolean`; \}; `type`: `"json_schema"`; \}

Defined in: [src/providers/groq/types.ts:115](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/groq/types.ts#L115)

Response format options for structured output.

---
title: "Type Alias: GroqResponseFormat"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqResponseFormat

# Type Alias: GroqResponseFormat

> **GroqResponseFormat** = \{ `type`: `"text"`; \} \| \{ `type`: `"json_object"`; \} \| \{ `json_schema`: \{ `description?`: `string`; `name`: `string`; `schema`: `Record`\<`string`, `unknown`\>; `strict?`: `boolean`; \}; `type`: `"json_schema"`; \}

Defined in: [src/providers/groq/types.ts:115](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L115)

Response format options for structured output.

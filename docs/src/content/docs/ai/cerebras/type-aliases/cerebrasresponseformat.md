---
title: "Type Alias: CerebrasResponseFormat"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [cerebras](../index.md) / CerebrasResponseFormat

# Type Alias: CerebrasResponseFormat

> **CerebrasResponseFormat** = \{ `type`: `"text"`; \} \| \{ `type`: `"json_object"`; \} \| \{ `json_schema`: \{ `description?`: `string`; `name`: `string`; `schema`: `Record`\<`string`, `unknown`\>; `strict?`: `boolean`; \}; `type`: `"json_schema"`; \}

Defined in: [src/providers/cerebras/types.ts:105](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L105)

Response format options for structured output.

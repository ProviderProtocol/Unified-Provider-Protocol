---
title: "Interface: ResponsesParams"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [responses](../index.md) / ResponsesParams

# Interface: ResponsesParams

Defined in: [src/providers/responses/types.ts:74](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L74)

Parameters for the OpenResponses API.

These parameters follow the OpenResponses specification and are passed
directly to the `/responses` endpoint.

## See

[OpenResponses Spec](https://www.openresponses.org/spec)

## Properties

### background?

> `optional` **background**: `boolean`

Defined in: [src/providers/responses/types.ts:120](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L120)

Background processing - run response asynchronously

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/responses/types.ts:88](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L88)

Frequency penalty for new tokens

***

### include?

> `optional` **include**: `string`[]

Defined in: [src/providers/responses/types.ts:117](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L117)

Fields to include in output.

#### Example

```ts
['reasoning.encrypted_content', 'message.output_text.logprobs']
```

***

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/responses/types.ts:76](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L76)

Maximum output tokens (minimum 16)

***

### max\_tool\_calls?

> `optional` **max\_tool\_calls**: `number`

Defined in: [src/providers/responses/types.ts:132](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L132)

Maximum total calls to built-in tools

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/providers/responses/types.ts:129](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L129)

Metadata key-value pairs (max 16, keys max 64 chars, values max 512 chars)

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/responses/types.ts:94](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L94)

Whether to enable parallel tool calls

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/responses/types.ts:85](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L85)

Presence penalty for new tokens

***

### previous\_response\_id?

> `optional` **previous\_response\_id**: `string`

Defined in: [src/providers/responses/types.ts:123](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L123)

Continue from a previous response

***

### prompt\_cache\_key?

> `optional` **prompt\_cache\_key**: `string`

Defined in: [src/providers/responses/types.ts:135](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L135)

Stable identifier for caching similar requests (max 64 chars)

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/responses/types.ts:100](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L100)

Reasoning configuration (for reasoning models).
Supported on gpt-5 and o-series models.

#### effort?

> `optional` **effort**: `"low"` \| `"medium"` \| `"high"` \| `"none"` \| `"xhigh"`

Reasoning effort level

#### summary?

> `optional` **summary**: `"auto"` \| `"concise"` \| `"detailed"`

Include summary of reasoning

***

### safety\_identifier?

> `optional` **safety\_identifier**: `string`

Defined in: [src/providers/responses/types.ts:138](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L138)

Stable identifier for abuse detection (max 64 chars)

***

### service\_tier?

> `optional` **service\_tier**: `"default"` \| `"auto"` \| `"priority"` \| `"flex"`

Defined in: [src/providers/responses/types.ts:108](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L108)

Service tier

***

### store?

> `optional` **store**: `boolean`

Defined in: [src/providers/responses/types.ts:126](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L126)

Store response for continuation

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/responses/types.ts:79](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L79)

Temperature for randomness (0.0 - 2.0)

***

### text?

> `optional` **text**: `ResponsesTextConfig`

Defined in: [src/providers/responses/types.ts:144](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L144)

Text format configuration.
Controls output format (text, json_object, json_schema) and verbosity.

***

### tools?

> `optional` **tools**: [`ResponsesBuiltInTool`](responsesbuiltintool.md)[]

Defined in: [src/providers/responses/types.ts:151](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L151)

Built-in tools from the OpenResponses specification.
Currently supports function tools; provider-specific built-in tools
may be added via the tools array.

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/responses/types.ts:91](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L91)

Number of top logprobs to return (0-20)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/responses/types.ts:82](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L82)

Top-p (nucleus) sampling (0.0 - 1.0)

***

### truncation?

> `optional` **truncation**: `"auto"` \| `"disabled"`

Defined in: [src/providers/responses/types.ts:111](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L111)

Truncation strategy

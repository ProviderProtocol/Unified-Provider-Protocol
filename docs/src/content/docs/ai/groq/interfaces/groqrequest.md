---
title: "Interface: GroqRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqRequest

# Interface: GroqRequest

Defined in: [src/providers/groq/types.ts:131](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L131)

Request body for the Groq Chat Completions API.

## Properties

### citation\_options?

> `optional` **citation\_options**: [`GroqCitationOptions`](groqcitationoptions.md)

Defined in: [src/providers/groq/types.ts:156](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L156)

***

### documents?

> `optional` **documents**: [`GroqDocument`](groqdocument.md)[]

Defined in: [src/providers/groq/types.ts:155](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L155)

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/groq/types.ts:142](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L142)

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/groq/types.ts:150](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L150)

***

### max\_completion\_tokens?

> `optional` **max\_completion\_tokens**: `number`

Defined in: [src/providers/groq/types.ts:140](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L140)

***

### max\_tokens?

> `optional` **max\_tokens**: `number`

Defined in: [src/providers/groq/types.ts:139](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L139)

***

### messages

> **messages**: [`GroqMessage`](../type-aliases/groqmessage.md)[]

Defined in: [src/providers/groq/types.ts:133](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L133)

***

### model

> **model**: `string`

Defined in: [src/providers/groq/types.ts:132](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L132)

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/groq/types.ts:147](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L147)

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/groq/types.ts:141](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L141)

***

### reasoning\_effort?

> `optional` **reasoning\_effort**: `string`

Defined in: [src/providers/groq/types.ts:152](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L152)

***

### reasoning\_format?

> `optional` **reasoning\_format**: `string`

Defined in: [src/providers/groq/types.ts:153](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L153)

***

### response\_format?

> `optional` **response\_format**: [`GroqResponseFormat`](../type-aliases/groqresponseformat.md)

Defined in: [src/providers/groq/types.ts:148](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L148)

***

### search\_settings?

> `optional` **search\_settings**: [`GroqSearchSettings`](groqsearchsettings.md)

Defined in: [src/providers/groq/types.ts:154](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L154)

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/groq/types.ts:144](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L144)

***

### service\_tier?

> `optional` **service\_tier**: `string`

Defined in: [src/providers/groq/types.ts:149](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L149)

***

### stop?

> `optional` **stop**: `string` \| `string`[]

Defined in: [src/providers/groq/types.ts:138](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L138)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [src/providers/groq/types.ts:136](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L136)

***

### stream\_options?

> `optional` **stream\_options**: `object`

Defined in: [src/providers/groq/types.ts:137](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L137)

#### include\_usage?

> `optional` **include\_usage**: `boolean`

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/groq/types.ts:134](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L134)

***

### tool\_choice?

> `optional` **tool\_choice**: [`GroqToolChoice`](../type-aliases/groqtoolchoice.md)

Defined in: [src/providers/groq/types.ts:146](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L146)

***

### tools?

> `optional` **tools**: [`GroqTool`](groqtool.md)[]

Defined in: [src/providers/groq/types.ts:145](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L145)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/groq/types.ts:151](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L151)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/groq/types.ts:135](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L135)

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/groq/types.ts:143](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L143)

---
title: "Interface: CerebrasRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [cerebras](../index.md) / CerebrasRequest

# Interface: CerebrasRequest

Defined in: [src/providers/cerebras/types.ts:121](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L121)

Request body for the Cerebras Chat Completions API.

## Properties

### clear\_thinking?

> `optional` **clear\_thinking**: `boolean`

Defined in: [src/providers/cerebras/types.ts:138](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L138)

***

### logprobs?

> `optional` **logprobs**: `boolean`

Defined in: [src/providers/cerebras/types.ts:145](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L145)

***

### max\_completion\_tokens?

> `optional` **max\_completion\_tokens**: `number`

Defined in: [src/providers/cerebras/types.ts:129](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L129)

***

### messages

> **messages**: [`CerebrasMessage`](../type-aliases/cerebrasmessage.md)[]

Defined in: [src/providers/cerebras/types.ts:123](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L123)

***

### model

> **model**: `string`

Defined in: [src/providers/cerebras/types.ts:122](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L122)

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/cerebras/types.ts:134](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L134)

***

### prediction?

> `optional` **prediction**: `object`

Defined in: [src/providers/cerebras/types.ts:141](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L141)

#### content

> **content**: `string`

#### type

> **type**: `"content"`

***

### queue\_threshold?

> `optional` **queue\_threshold**: `number`

Defined in: [src/providers/cerebras/types.ts:140](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L140)

***

### reasoning\_effort?

> `optional` **reasoning\_effort**: `"low"` \| `"medium"` \| `"high"`

Defined in: [src/providers/cerebras/types.ts:136](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L136)

***

### reasoning\_format?

> `optional` **reasoning\_format**: `"parsed"` \| `"raw"` \| `"hidden"` \| `"none"`

Defined in: [src/providers/cerebras/types.ts:137](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L137)

***

### response\_format?

> `optional` **response\_format**: [`CerebrasResponseFormat`](../type-aliases/cerebrasresponseformat.md)

Defined in: [src/providers/cerebras/types.ts:135](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L135)

***

### seed?

> `optional` **seed**: `number`

Defined in: [src/providers/cerebras/types.ts:131](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L131)

***

### service\_tier?

> `optional` **service\_tier**: `string`

Defined in: [src/providers/cerebras/types.ts:139](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L139)

***

### stop?

> `optional` **stop**: `string`[]

Defined in: [src/providers/cerebras/types.ts:128](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L128)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [src/providers/cerebras/types.ts:126](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L126)

***

### stream\_options?

> `optional` **stream\_options**: `object`

Defined in: [src/providers/cerebras/types.ts:127](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L127)

#### include\_usage?

> `optional` **include\_usage**: `boolean`

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/cerebras/types.ts:124](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L124)

***

### tool\_choice?

> `optional` **tool\_choice**: [`CerebrasToolChoice`](../type-aliases/cerebrastoolchoice.md)

Defined in: [src/providers/cerebras/types.ts:133](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L133)

***

### tools?

> `optional` **tools**: [`CerebrasTool`](cerebrastool.md)[]

Defined in: [src/providers/cerebras/types.ts:132](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L132)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/cerebras/types.ts:146](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L146)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/cerebras/types.ts:125](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L125)

***

### user?

> `optional` **user**: `string`

Defined in: [src/providers/cerebras/types.ts:130](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/cerebras/types.ts#L130)

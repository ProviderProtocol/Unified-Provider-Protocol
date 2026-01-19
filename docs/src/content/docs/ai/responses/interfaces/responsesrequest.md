---
title: "Interface: ResponsesRequest"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [responses](../index.md) / ResponsesRequest

# Interface: ResponsesRequest

Defined in: [src/providers/responses/types.ts:185](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L185)

Request body for the OpenResponses API.

## Properties

### background?

> `optional` **background**: `boolean`

Defined in: [src/providers/responses/types.ts:209](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L209)

***

### frequency\_penalty?

> `optional` **frequency\_penalty**: `number`

Defined in: [src/providers/responses/types.ts:193](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L193)

***

### include?

> `optional` **include**: `string`[]

Defined in: [src/providers/responses/types.ts:208](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L208)

***

### input

> **input**: `string` \| [`ResponsesInputItem`](../type-aliases/responsesinputitem.md)[]

Defined in: [src/providers/responses/types.ts:187](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L187)

***

### instructions?

> `optional` **instructions**: `string`

Defined in: [src/providers/responses/types.ts:188](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L188)

***

### max\_output\_tokens?

> `optional` **max\_output\_tokens**: `number`

Defined in: [src/providers/responses/types.ts:189](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L189)

***

### max\_tool\_calls?

> `optional` **max\_tool\_calls**: `number`

Defined in: [src/providers/responses/types.ts:211](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L211)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/providers/responses/types.ts:202](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L202)

***

### model

> **model**: `string`

Defined in: [src/providers/responses/types.ts:186](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L186)

***

### parallel\_tool\_calls?

> `optional` **parallel\_tool\_calls**: `boolean`

Defined in: [src/providers/responses/types.ts:198](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L198)

***

### presence\_penalty?

> `optional` **presence\_penalty**: `number`

Defined in: [src/providers/responses/types.ts:192](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L192)

***

### previous\_response\_id?

> `optional` **previous\_response\_id**: `string`

Defined in: [src/providers/responses/types.ts:210](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L210)

***

### prompt\_cache\_key?

> `optional` **prompt\_cache\_key**: `string`

Defined in: [src/providers/responses/types.ts:212](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L212)

***

### reasoning?

> `optional` **reasoning**: `object`

Defined in: [src/providers/responses/types.ts:203](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L203)

#### effort?

> `optional` **effort**: `"low"` \| `"medium"` \| `"high"` \| `"none"` \| `"xhigh"`

#### summary?

> `optional` **summary**: `"auto"` \| `"concise"` \| `"detailed"`

***

### safety\_identifier?

> `optional` **safety\_identifier**: `string`

Defined in: [src/providers/responses/types.ts:213](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L213)

***

### service\_tier?

> `optional` **service\_tier**: `string`

Defined in: [src/providers/responses/types.ts:207](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L207)

***

### store?

> `optional` **store**: `boolean`

Defined in: [src/providers/responses/types.ts:201](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L201)

***

### stream?

> `optional` **stream**: `boolean`

Defined in: [src/providers/responses/types.ts:195](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L195)

***

### temperature?

> `optional` **temperature**: `number`

Defined in: [src/providers/responses/types.ts:190](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L190)

***

### text?

> `optional` **text**: `ResponsesTextConfig`

Defined in: [src/providers/responses/types.ts:199](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L199)

***

### tool\_choice?

> `optional` **tool\_choice**: `ResponsesToolChoice`

Defined in: [src/providers/responses/types.ts:197](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L197)

***

### tools?

> `optional` **tools**: [`ResponsesToolUnion`](../type-aliases/responsestoolunion.md)[]

Defined in: [src/providers/responses/types.ts:196](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L196)

***

### top\_logprobs?

> `optional` **top\_logprobs**: `number`

Defined in: [src/providers/responses/types.ts:194](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L194)

***

### top\_p?

> `optional` **top\_p**: `number`

Defined in: [src/providers/responses/types.ts:191](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L191)

***

### truncation?

> `optional` **truncation**: `"auto"` \| `"disabled"`

Defined in: [src/providers/responses/types.ts:200](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/responses/types.ts#L200)

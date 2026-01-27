---
title: "Interface: CerebrasStreamChunk"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [cerebras](../index.md) / CerebrasStreamChunk

# Interface: CerebrasStreamChunk

Defined in: [src/providers/cerebras/types.ts:281](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L281)

Streaming chunk structure from the Cerebras API.

## Properties

### choices

> **choices**: `CerebrasStreamChoice`[]

Defined in: [src/providers/cerebras/types.ts:286](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L286)

***

### created?

> `optional` **created**: `number`

Defined in: [src/providers/cerebras/types.ts:284](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L284)

***

### id

> **id**: `string`

Defined in: [src/providers/cerebras/types.ts:282](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L282)

***

### model

> **model**: `string`

Defined in: [src/providers/cerebras/types.ts:285](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L285)

***

### object

> **object**: `"chat.completion.chunk"`

Defined in: [src/providers/cerebras/types.ts:283](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L283)

***

### system\_fingerprint?

> `optional` **system\_fingerprint**: `string`

Defined in: [src/providers/cerebras/types.ts:288](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L288)

***

### time\_info?

> `optional` **time\_info**: [`CerebrasTimeInfo`](cerebrastimeinfo.md)

Defined in: [src/providers/cerebras/types.ts:289](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L289)

***

### usage?

> `optional` **usage**: [`CerebrasUsage`](cerebrasusage.md) \| `null`

Defined in: [src/providers/cerebras/types.ts:287](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/cerebras/types.ts#L287)

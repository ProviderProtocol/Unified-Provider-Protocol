---
title: "Interface: ResponsesResponse"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [responses](../index.md) / ResponsesResponse

# Interface: ResponsesResponse

Defined in: [src/providers/responses/types.ts:405](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L405)

Response from the OpenResponses API.

## Properties

### completed\_at?

> `optional` **completed\_at**: `number`

Defined in: [src/providers/responses/types.ts:409](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L409)

***

### created\_at

> **created\_at**: `number`

Defined in: [src/providers/responses/types.ts:408](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L408)

***

### error?

> `optional` **error**: `object`

Defined in: [src/providers/responses/types.ts:414](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L414)

#### code

> **code**: `string`

#### message

> **message**: `string`

#### param?

> `optional` **param**: `string`

***

### id

> **id**: `string`

Defined in: [src/providers/responses/types.ts:406](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L406)

***

### incomplete\_details?

> `optional` **incomplete\_details**: `object`

Defined in: [src/providers/responses/types.ts:419](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L419)

#### reason

> **reason**: `string`

***

### model

> **model**: `string`

Defined in: [src/providers/responses/types.ts:410](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L410)

***

### object

> **object**: `"response"`

Defined in: [src/providers/responses/types.ts:407](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L407)

***

### output

> **output**: [`ResponsesOutputItem`](../type-aliases/responsesoutputitem.md)[]

Defined in: [src/providers/responses/types.ts:411](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L411)

***

### status

> **status**: `"completed"` \| `"incomplete"` \| `"failed"` \| `"in_progress"` \| `"queued"`

Defined in: [src/providers/responses/types.ts:413](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L413)

***

### usage

> **usage**: [`ResponsesUsage`](responsesusage.md)

Defined in: [src/providers/responses/types.ts:412](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L412)

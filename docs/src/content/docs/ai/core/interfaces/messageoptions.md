---
title: "Interface: MessageOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageOptions

# Interface: MessageOptions

Defined in: [src/types/messages.ts:96](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L96)

Options for constructing messages.

## Properties

### id?

> `optional` **id**: `string`

Defined in: [src/types/messages.ts:98](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L98)

Custom message ID (auto-generated if not provided)

***

### metadata?

> `optional` **metadata**: [`MessageMetadata`](messagemetadata.md)

Defined in: [src/types/messages.ts:104](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L104)

Provider-specific metadata

***

### timestamp?

> `optional` **timestamp**: `Date`

Defined in: [src/types/messages.ts:101](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L101)

Message timestamp override (defaults to now)

---
title: "Type Alias: MessageType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageType

# Type Alias: MessageType

> **MessageType** = *typeof* [`MessageRole`](../variables/messagerole.md)\[keyof *typeof* [`MessageRole`](../variables/messagerole.md)\]

Defined in: [src/types/messages.ts:68](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/messages.ts#L68)

Message type discriminator union.

This type is derived from [MessageRole](../variables/messagerole.md) constants. The name `MessageType`
is kept for backward compatibility; `MessageRole` works as both the const
object and this type.

---
title: "Type Alias: MessageType"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageType

# Type Alias: MessageType

> **MessageType** = *typeof* [`MessageRole`](../variables/messagerole.md)\[keyof *typeof* [`MessageRole`](../variables/messagerole.md)\]

Defined in: [src/types/messages.ts:67](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/types/messages.ts#L67)

Message type discriminator union.

This type is derived from [MessageRole](../variables/messagerole.md) constants. The name `MessageType`
is kept for backward compatibility; `MessageRole` works as both the const
object and this type.

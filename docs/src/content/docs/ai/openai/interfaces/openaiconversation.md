---
title: "Interface: OpenAIConversation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIConversation

# Interface: OpenAIConversation

Defined in: [src/providers/openai/types.ts:254](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L254)

Reference to an existing conversation for the Responses API.

Items from this conversation are prepended to the input items,
enabling multi-turn conversations without resending full history.
Cannot be used together with `previous_response_id`.

## Properties

### id

> **id**: `string`

Defined in: [src/providers/openai/types.ts:256](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L256)

Conversation ID

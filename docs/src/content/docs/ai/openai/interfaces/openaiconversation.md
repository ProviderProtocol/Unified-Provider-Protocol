---
title: "Interface: OpenAIConversation"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIConversation

# Interface: OpenAIConversation

Defined in: [src/providers/openai/types.ts:254](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openai/types.ts#L254)

Reference to an existing conversation for the Responses API.

Items from this conversation are prepended to the input items,
enabling multi-turn conversations without resending full history.
Cannot be used together with `previous_response_id`.

## Properties

### id

> **id**: `string`

Defined in: [src/providers/openai/types.ts:256](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openai/types.ts#L256)

Conversation ID

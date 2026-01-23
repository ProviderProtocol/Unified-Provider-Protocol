---
title: "Type Alias: XAIAPIMode"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIAPIMode

# Type Alias: XAIAPIMode

> **XAIAPIMode** = `"completions"` \| `"responses"` \| `"messages"`

Defined in: [src/providers/xai/types.ts:238](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/xai/types.ts#L238)

API mode selector for the xAI provider.

xAI supports three distinct API modes, each with different capabilities:
- `completions`: OpenAI Chat Completions compatible (recommended, default)
- `responses`: OpenAI Responses compatible with stateful conversations
- `messages`: Anthropic Messages compatible for easy migration

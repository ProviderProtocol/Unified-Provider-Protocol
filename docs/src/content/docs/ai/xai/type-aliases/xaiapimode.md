---
title: "Type Alias: XAIAPIMode"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIAPIMode

# Type Alias: XAIAPIMode

> **XAIAPIMode** = `"completions"` \| `"responses"` \| `"messages"`

Defined in: [src/providers/xai/types.ts:241](https://github.com/ProviderProtocol/ai/blob/ad6923294c4b613e141878e1142aaea0e84551ed/src/providers/xai/types.ts#L241)

API mode selector for the xAI provider.

xAI supports three distinct API modes, each with different capabilities:
- `completions`: OpenAI Chat Completions compatible (recommended, default)
- `responses`: OpenAI Responses compatible with stateful conversations
- `messages`: Anthropic Messages compatible for easy migration

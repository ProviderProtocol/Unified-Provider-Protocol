---
title: "Type Alias: XAIBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIBuiltInTool

# Type Alias: XAIBuiltInTool

> **XAIBuiltInTool** = [`XAIWebSearchTool`](../interfaces/xaiwebsearchtool.md) \| [`XAIXSearchTool`](../interfaces/xaixsearchtool.md) \| [`XAICodeExecutionTool`](../interfaces/xaicodeexecutiontool.md) \| [`XAIFileSearchTool`](../interfaces/xaifilesearchtool.md) \| [`XAIMcpTool`](../interfaces/xaimcptool.md)

Defined in: [src/providers/xai/types.ts:441](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/xai/types.ts#L441)

Union type for all xAI built-in tools.

These tools are only available via the Responses API (`api: 'responses'`).
They run server-side and provide agentic capabilities.

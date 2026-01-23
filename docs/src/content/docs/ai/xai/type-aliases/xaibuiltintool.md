---
title: "Type Alias: XAIBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIBuiltInTool

# Type Alias: XAIBuiltInTool

> **XAIBuiltInTool** = [`XAIWebSearchTool`](../interfaces/xaiwebsearchtool.md) \| [`XAIXSearchTool`](../interfaces/xaixsearchtool.md) \| [`XAICodeExecutionTool`](../interfaces/xaicodeexecutiontool.md) \| [`XAIFileSearchTool`](../interfaces/xaifilesearchtool.md) \| [`XAIMcpTool`](../interfaces/xaimcptool.md)

Defined in: [src/providers/xai/types.ts:411](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/xai/types.ts#L411)

Union type for all xAI built-in tools.

These tools are only available via the Responses API (`api: 'responses'`).
They run server-side and provide agentic capabilities.

---
title: "Type Alias: GoogleBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleBuiltInTool

# Type Alias: GoogleBuiltInTool

> **GoogleBuiltInTool** = [`GoogleSearchTool`](../interfaces/googlesearchtool.md) \| [`GoogleCodeExecutionTool`](../interfaces/googlecodeexecutiontool.md) \| [`GoogleUrlContextTool`](../interfaces/googleurlcontexttool.md) \| [`GoogleMapsTool`](../interfaces/googlemapstool.md) \| [`GoogleFileSearchTool`](../interfaces/googlefilesearchtool.md)

Defined in: [src/providers/google/types.ts:672](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/google/types.ts#L672)

Union type for all Google built-in tools.

Note: Google's built-in tools use a different structure than function tools.
They are passed directly in the tools array alongside functionDeclarations.

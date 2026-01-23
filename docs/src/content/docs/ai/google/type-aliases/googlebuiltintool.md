---
title: "Type Alias: GoogleBuiltInTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleBuiltInTool

# Type Alias: GoogleBuiltInTool

> **GoogleBuiltInTool** = [`GoogleSearchTool`](../interfaces/googlesearchtool.md) \| [`GoogleCodeExecutionTool`](../interfaces/googlecodeexecutiontool.md) \| [`GoogleUrlContextTool`](../interfaces/googleurlcontexttool.md) \| [`GoogleMapsTool`](../interfaces/googlemapstool.md) \| [`GoogleFileSearchTool`](../interfaces/googlefilesearchtool.md)

Defined in: [src/providers/google/types.ts:765](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/google/types.ts#L765)

Union type for all Google built-in tools.

Note: Google's built-in tools use a different structure than function tools.
They are passed directly in the tools array alongside functionDeclarations.

---
title: "Interface: BeforeCallResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / BeforeCallResult

# Interface: BeforeCallResult

Defined in: [src/types/tool.ts:167](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/types/tool.ts#L167)

Result from onBeforeCall hook indicating whether to proceed and optionally transformed params.

## Properties

### params?

> `optional` **params**: `unknown`

Defined in: [src/types/tool.ts:171](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/types/tool.ts#L171)

Transformed parameters to use instead of the original (optional)

***

### proceed

> **proceed**: `boolean`

Defined in: [src/types/tool.ts:169](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/types/tool.ts#L169)

Whether to proceed with tool execution

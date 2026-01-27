---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:443](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/provider.ts#L443)

Provider with LLM modality support.

Type alias for providers that support language model inference.

## Type Declaration

### \_\_params?

> `readonly` `optional` **\_\_params**: `TParams`

**`Internal`**

## Type Parameters

### TParams

`TParams` = `unknown`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type

---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:441](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/provider.ts#L441)

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

---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:370](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/provider.ts#L370)

Provider with LLM modality support.

Type alias for providers that support language model inference.

## Type Declaration

### modalities

> `readonly` **modalities**: `object`

#### modalities.llm

> **llm**: `LLMHandler`\<`TParams`\>

## Type Parameters

### TParams

`TParams` = `any`

Model-specific parameters type

### TOptions

`TOptions` = `unknown`

Provider-specific options type

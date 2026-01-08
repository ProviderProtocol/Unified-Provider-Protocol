---
title: "Type Alias: LLMProvider"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / LLMProvider

# Type Alias: LLMProvider\<TParams, TOptions\>

> **LLMProvider**\<`TParams`, `TOptions`\> = [`Provider`](../interfaces/provider.md)\<`TOptions`\> & `object`

Defined in: [src/types/provider.ts:435](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/provider.ts#L435)

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

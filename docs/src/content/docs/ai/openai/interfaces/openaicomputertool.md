---
title: "Interface: OpenAIComputerTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIComputerTool

# Interface: OpenAIComputerTool

Defined in: [src/providers/openai/types.ts:1233](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1233)

Computer tool for Responses API
Enables the model to interact with computer interfaces

## Properties

### computer?

> `optional` **computer**: `object`

Defined in: [src/providers/openai/types.ts:1236](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1236)

Computer tool configuration

#### display\_height

> **display\_height**: `number`

Display height in pixels

#### display\_width

> **display\_width**: `number`

Display width in pixels

#### environment?

> `optional` **environment**: [`OpenAIComputerEnvironment`](openaicomputerenvironment.md)

Environment configuration

***

### type

> **type**: `"computer"`

Defined in: [src/providers/openai/types.ts:1234](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1234)

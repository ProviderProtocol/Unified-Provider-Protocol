---
title: "Interface: OpenAICodeInterpreterContainer"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAICodeInterpreterContainer

# Interface: OpenAICodeInterpreterContainer

Defined in: [src/providers/openai/types.ts:1199](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1199)

Code interpreter container configuration

## Properties

### file\_ids?

> `optional` **file\_ids**: `string`[]

Defined in: [src/providers/openai/types.ts:1205](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1205)

File IDs to make available in the container

***

### memory\_limit?

> `optional` **memory\_limit**: `string`

Defined in: [src/providers/openai/types.ts:1203](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1203)

Memory limit for the container (e.g., '1g', '4g')

***

### type

> **type**: `"auto"`

Defined in: [src/providers/openai/types.ts:1201](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1201)

Container type - 'auto' creates a new container

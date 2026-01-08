---
title: "Interface: XAIServerSideToolUsage"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIServerSideToolUsage

# Interface: XAIServerSideToolUsage

Defined in: [src/providers/xai/types.ts:451](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/xai/types.ts#L451)

Server-side tool usage tracking returned in responses.

## Properties

### code\_execution?

> `optional` **code\_execution**: `number`

Defined in: [src/providers/xai/types.ts:457](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/xai/types.ts#L457)

Number of successful code executions

***

### file\_search?

> `optional` **file\_search**: `number`

Defined in: [src/providers/xai/types.ts:459](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/xai/types.ts#L459)

Number of successful file searches

***

### web\_search?

> `optional` **web\_search**: `number`

Defined in: [src/providers/xai/types.ts:453](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/xai/types.ts#L453)

Number of successful web searches

***

### x\_search?

> `optional` **x\_search**: `number`

Defined in: [src/providers/xai/types.ts:455](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/xai/types.ts#L455)

Number of successful X searches

---
title: "Interface: XAIHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIHeaders

# Interface: XAIHeaders

Defined in: [src/providers/xai/types.ts:1590](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/xai/types.ts#L1590)

xAI-specific HTTP headers for API requests.

## Example

```typescript
const headers: XAIHeaders = {
  'X-Client-Request-Id': 'trace-123',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### X-Client-Request-Id?

> `optional` **X-Client-Request-Id**: `string`

Defined in: [src/providers/xai/types.ts:1592](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/xai/types.ts#L1592)

Client-generated request ID for tracing.

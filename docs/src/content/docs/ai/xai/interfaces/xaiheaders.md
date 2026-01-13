---
title: "Interface: XAIHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIHeaders

# Interface: XAIHeaders

Defined in: [src/providers/xai/types.ts:1623](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/providers/xai/types.ts#L1623)

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

Defined in: [src/providers/xai/types.ts:1625](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/providers/xai/types.ts#L1625)

Client-generated request ID for tracing.

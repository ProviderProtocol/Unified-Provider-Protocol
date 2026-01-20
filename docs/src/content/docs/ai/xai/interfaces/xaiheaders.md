---
title: "Interface: XAIHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [xai](../index.md) / XAIHeaders

# Interface: XAIHeaders

Defined in: [src/providers/xai/types.ts:1599](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/xai/types.ts#L1599)

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

Defined in: [src/providers/xai/types.ts:1601](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/xai/types.ts#L1601)

Client-generated request ID for tracing.

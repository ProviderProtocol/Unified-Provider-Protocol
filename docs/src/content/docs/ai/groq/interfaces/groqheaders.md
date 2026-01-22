---
title: "Interface: GroqHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqHeaders

# Interface: GroqHeaders

Defined in: [src/providers/groq/types.ts:357](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L357)

Groq-specific HTTP headers for API requests.

## Example

```typescript
const headers: GroqHeaders = {
  'X-Request-Id': 'my-request-id',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### X-Request-Id?

> `optional` **X-Request-Id**: `string`

Defined in: [src/providers/groq/types.ts:359](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/groq/types.ts#L359)

Client-generated request ID for tracing

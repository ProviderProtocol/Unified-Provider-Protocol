---
title: "Interface: GroqHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [groq](../index.md) / GroqHeaders

# Interface: GroqHeaders

Defined in: [src/providers/groq/types.ts:357](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L357)

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

Defined in: [src/providers/groq/types.ts:359](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/groq/types.ts#L359)

Client-generated request ID for tracing

---
title: "Interface: GoogleHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleHeaders

# Interface: GoogleHeaders

Defined in: [src/providers/google/types.ts:532](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L532)

Google Gemini-specific HTTP headers for API requests.

## Example

```typescript
const headers: GoogleHeaders = {
  'x-goog-api-client': 'myapp/1.0.0',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### x-goog-api-client?

> `optional` **x-goog-api-client**: `string`

Defined in: [src/providers/google/types.ts:534](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L534)

Client identification header for partners and libraries.

***

### x-goog-user-project?

> `optional` **x-goog-user-project**: `string`

Defined in: [src/providers/google/types.ts:536](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L536)

Quota project ID for Vertex AI billing.

---
title: "Interface: OpenRouterHeaders"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openrouter](../index.md) / OpenRouterHeaders

# Interface: OpenRouterHeaders

Defined in: [src/providers/openrouter/types.ts:1444](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/openrouter/types.ts#L1444)

OpenRouter-specific HTTP headers for API requests.

## Example

```typescript
const headers: OpenRouterHeaders = {
  'HTTP-Referer': 'https://myapp.example.com',
  'X-Title': 'My Application',
};
```

## Indexable

\[`key`: `string`\]: `string` \| `undefined`

## Properties

### HTTP-Referer?

> `optional` **HTTP-Referer**: `string`

Defined in: [src/providers/openrouter/types.ts:1446](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/openrouter/types.ts#L1446)

Application URL for analytics and leaderboard tracking.

***

### X-Title?

> `optional` **X-Title**: `string`

Defined in: [src/providers/openrouter/types.ts:1448](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/providers/openrouter/types.ts#L1448)

Application name for analytics display.

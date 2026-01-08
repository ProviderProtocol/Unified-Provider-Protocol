---
title: "Interface: GoogleUrlContextTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleUrlContextTool

# Interface: GoogleUrlContextTool

Defined in: [src/providers/google/types.ts:603](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/google/types.ts#L603)

URL context tool for fetching and processing URLs.

Enables Gemini to fetch and analyze content from URLs.
Supports text, images, and PDF documents.

Limits:
- Maximum 20 URLs per request
- Maximum 34MB content per URL

## Example

```typescript
const tool: GoogleUrlContextTool = {
  urlContext: {},
};
```

## Properties

### urlContext

> **urlContext**: `Record`\<`string`, `never`\>

Defined in: [src/providers/google/types.ts:605](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/google/types.ts#L605)

Empty object to enable URL context

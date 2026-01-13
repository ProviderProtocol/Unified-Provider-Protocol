---
title: "Interface: GoogleUrlContextTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleUrlContextTool

# Interface: GoogleUrlContextTool

Defined in: [src/providers/google/types.ts:692](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/providers/google/types.ts#L692)

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

Defined in: [src/providers/google/types.ts:694](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/providers/google/types.ts#L694)

Empty object to enable URL context

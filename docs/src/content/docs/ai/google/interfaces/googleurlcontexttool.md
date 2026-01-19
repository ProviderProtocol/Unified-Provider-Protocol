---
title: "Interface: GoogleUrlContextTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleUrlContextTool

# Interface: GoogleUrlContextTool

Defined in: [src/providers/google/types.ts:696](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/google/types.ts#L696)

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

Defined in: [src/providers/google/types.ts:698](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/providers/google/types.ts#L698)

Empty object to enable URL context

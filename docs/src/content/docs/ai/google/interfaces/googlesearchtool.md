---
title: "Interface: GoogleSearchTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleSearchTool

# Interface: GoogleSearchTool

Defined in: [src/providers/google/types.ts:654](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/google/types.ts#L654)

Google Search grounding tool for real-time web information.

Enables Gemini to search the web using Google Search for up-to-date information.
Results are returned with grounding metadata including sources and citations.

Pricing:
- Gemini 2.x and earlier: $35 per 1,000 grounded prompts
- Gemini 3.x: $14 per 1,000 search queries

## Example

```typescript
const tool: GoogleSearchTool = {
  googleSearch: {},
};
```

## Properties

### googleSearch

> **googleSearch**: `Record`\<`string`, `never`\>

Defined in: [src/providers/google/types.ts:656](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/google/types.ts#L656)

Empty object to enable Google Search grounding

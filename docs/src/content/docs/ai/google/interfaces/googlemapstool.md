---
title: "Interface: GoogleMapsTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [google](../index.md) / GoogleMapsTool

# Interface: GoogleMapsTool

Defined in: [src/providers/google/types.ts:627](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L627)

Google Maps grounding tool for location-based queries.

Enables Gemini to search for places, businesses, and locations
using Google Maps data.

Pricing: $25 per 1,000 grounded prompts.

Note: Not supported in Gemini 3 models.

## Example

```typescript
const tool: GoogleMapsTool = {
  googleMaps: {
    enableWidget: true,
  },
};
```

## Properties

### googleMaps

> **googleMaps**: `object`

Defined in: [src/providers/google/types.ts:629](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/providers/google/types.ts#L629)

Google Maps configuration

#### enableWidget?

> `optional` **enableWidget**: `boolean`

Return widget context token for Places widget

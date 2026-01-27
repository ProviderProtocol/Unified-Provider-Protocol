---
title: "Interface: TextBlock"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / TextBlock

# Interface: TextBlock

Defined in: [src/types/content.ts:188](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/content.ts#L188)

Text content block.

The most common content block type, containing plain text content.

## Example

```typescript
const textBlock: TextBlock = {
  type: 'text',
  text: 'Hello, world!'
};
```

## Properties

### text

> **text**: `string`

Defined in: [src/types/content.ts:193](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/content.ts#L193)

The text content

***

### type

> **type**: `"text"`

Defined in: [src/types/content.ts:190](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/content.ts#L190)

Discriminator for text blocks

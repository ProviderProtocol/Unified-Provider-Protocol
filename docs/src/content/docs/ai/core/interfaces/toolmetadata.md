---
title: "Interface: ToolMetadata"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolMetadata

# Interface: ToolMetadata

Defined in: [src/types/tool.ts:26](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/tool.ts#L26)

Provider-namespaced metadata for tools.

Each provider can attach its own metadata under its namespace,
enabling provider-specific features like caching, strict mode, etc.

## Example

```typescript
const metadata: ToolMetadata = {
  anthropic: { cache_control: { type: 'ephemeral' } },
  openrouter: { cache_control: { type: 'ephemeral', ttl: '1h' } }
};
```

## Indexable

\[`provider`: `string`\]: `Record`\<`string`, `unknown`\> \| `undefined`

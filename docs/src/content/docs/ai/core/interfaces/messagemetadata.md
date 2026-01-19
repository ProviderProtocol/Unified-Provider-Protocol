---
title: "Interface: MessageMetadata"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageMetadata

# Interface: MessageMetadata

Defined in: [src/types/messages.ts:89](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/types/messages.ts#L89)

Provider-namespaced metadata for messages.

Each provider can attach its own metadata under its namespace,
preventing conflicts between different providers.

## Example

```typescript
const metadata: MessageMetadata = {
  openai: { model: 'gpt-4', finishReason: 'stop' },
  anthropic: { model: 'claude-3', stopReason: 'end_turn' }
};
```

## Indexable

\[`provider`: `string`\]: `Record`\<`string`, `unknown`\> \| `undefined`

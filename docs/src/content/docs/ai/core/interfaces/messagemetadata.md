---
title: "Interface: MessageMetadata"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageMetadata

# Interface: MessageMetadata

Defined in: [src/types/messages.ts:44](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/types/messages.ts#L44)

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

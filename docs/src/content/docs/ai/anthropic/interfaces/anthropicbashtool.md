---
title: "Interface: AnthropicBashTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicBashTool

# Interface: AnthropicBashTool

Defined in: [src/providers/anthropic/types.ts:722](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/anthropic/types.ts#L722)

Bash tool for shell command execution.

Enables Claude to execute bash commands in a shell session.
The session persists within the conversation.

No beta header required.

## Example

```typescript
const tool: AnthropicBashTool = {
  type: 'bash_20250124',
  name: 'bash',
};
```

## Properties

### name

> **name**: `"bash"`

Defined in: [src/providers/anthropic/types.ts:726](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/anthropic/types.ts#L726)

Tool name - must be 'bash'

***

### type

> **type**: `"bash_20250124"`

Defined in: [src/providers/anthropic/types.ts:724](https://github.com/ProviderProtocol/ai/blob/d8822e616c93b29c40348dd5810b9019d53886d4/src/providers/anthropic/types.ts#L724)

Tool type identifier

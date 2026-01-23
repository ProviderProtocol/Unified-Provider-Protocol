---
title: "Interface: AnthropicBashTool"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [anthropic](../index.md) / AnthropicBashTool

# Interface: AnthropicBashTool

Defined in: [src/providers/anthropic/types.ts:961](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/anthropic/types.ts#L961)

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

Defined in: [src/providers/anthropic/types.ts:965](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/anthropic/types.ts#L965)

Tool name - must be 'bash'

***

### type

> **type**: `"bash_20250124"`

Defined in: [src/providers/anthropic/types.ts:963](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/anthropic/types.ts#L963)

Tool type identifier

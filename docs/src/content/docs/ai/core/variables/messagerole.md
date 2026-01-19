---
title: "Variable: MessageRole"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / MessageRole

# Variable: MessageRole

> `const` **MessageRole**: `object`

Defined in: [src/types/messages.ts:52](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/types/messages.ts#L52)

Message role/type constants.

Use these constants instead of raw strings for type-safe message handling:

## Type Declaration

### Assistant

> `readonly` **Assistant**: `"assistant"` = `'assistant'`

Assistant/model response

### ToolResult

> `readonly` **ToolResult**: `"tool_result"` = `'tool_result'`

Tool execution result

### User

> `readonly` **User**: `"user"` = `'user'`

User message

## Example

```typescript
import { MessageRole, isUserMessage } from 'upp';

if (message.type === MessageRole.User) {
  console.log('User said:', message.text);
} else if (message.type === MessageRole.Assistant) {
  console.log('Assistant replied:', message.text);
}
```

---
title: "Function: isUserMessage()"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / isUserMessage

# Function: isUserMessage()

> **isUserMessage**(`msg`): `msg is UserMessage`

Defined in: [src/types/messages.ts:299](https://github.com/ProviderProtocol/ai/blob/1bc41d9f0bcf65740d187b8dd1dcfde98fae1ee5/src/types/messages.ts#L299)

Type guard for UserMessage.

## Parameters

### msg

[`Message`](../classes/message.md)

The message to check

## Returns

`msg is UserMessage`

True if the message is a UserMessage

## Example

```typescript
if (isUserMessage(msg)) {
  console.log('User said:', msg.text);
}
```

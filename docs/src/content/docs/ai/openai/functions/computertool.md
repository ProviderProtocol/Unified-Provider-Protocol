---
title: "Function: computerTool()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / computerTool

# Function: computerTool()

> **computerTool**(`options`): [`OpenAIComputerTool`](../interfaces/openaicomputertool.md)

Defined in: [src/providers/openai/types.ts:1444](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/openai/types.ts#L1444)

Creates a computer tool configuration for the Responses API.

The computer tool enables the model to interact with computer interfaces
through mouse and keyboard actions.

## Parameters

### options

Display configuration and environment settings

#### display_height

`number`

#### display_width

`number`

#### environment?

[`OpenAIComputerEnvironment`](../interfaces/openaicomputerenvironment.md)

## Returns

[`OpenAIComputerTool`](../interfaces/openaicomputertool.md)

A computer tool configuration object

## Example

```typescript
const computer = computerTool({
  display_width: 1920,
  display_height: 1080,
  environment: { type: 'browser' }
});
```

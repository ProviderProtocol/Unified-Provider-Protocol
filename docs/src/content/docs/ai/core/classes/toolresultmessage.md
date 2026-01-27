---
title: "Class: ToolResultMessage"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ToolResultMessage

# Class: ToolResultMessage

Defined in: [src/types/messages.ts:320](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L320)

Tool execution result message.

Contains the results of executing one or more tool calls,
sent back to the model for further processing.

## Example

```typescript
const msg = new ToolResultMessage([
  { toolCallId: 'call_1', result: { temperature: 72, conditions: 'sunny' } },
  { toolCallId: 'call_2', result: 'File not found', isError: true }
]);
```

## Extends

- [`Message`](message.md)

## Constructors

### Constructor

> **new ToolResultMessage**(`results`, `options?`): `ToolResultMessage`

Defined in: [src/types/messages.ts:333](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L333)

Creates a new tool result message.

#### Parameters

##### results

[`ToolResult`](../interfaces/toolresult.md)[]

Array of tool execution results

##### options?

[`MessageOptions`](../interfaces/messageoptions.md)

Optional message ID and metadata

#### Returns

`ToolResultMessage`

#### Overrides

[`Message`](message.md).[`constructor`](message.md#constructor)

## Properties

### id

> `readonly` **id**: `string`

Defined in: [src/types/messages.ts:124](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L124)

Unique message identifier

#### Inherited from

[`Message`](message.md).[`id`](message.md#id)

***

### metadata?

> `readonly` `optional` **metadata**: [`MessageMetadata`](../interfaces/messagemetadata.md)

Defined in: [src/types/messages.ts:130](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L130)

Provider-specific metadata, namespaced by provider name

#### Inherited from

[`Message`](message.md).[`metadata`](message.md#metadata)

***

### results

> `readonly` **results**: [`ToolResult`](../interfaces/toolresult.md)[]

Defined in: [src/types/messages.ts:325](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L325)

Results from tool executions

***

### timestamp

> `readonly` **timestamp**: `Date`

Defined in: [src/types/messages.ts:127](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L127)

Timestamp when the message was created

#### Inherited from

[`Message`](message.md).[`timestamp`](message.md#timestamp)

***

### type

> `readonly` **type**: `"tool_result"`

Defined in: [src/types/messages.ts:322](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L322)

Message type discriminator

#### Overrides

[`Message`](message.md).[`type`](message.md#type)

## Accessors

### audio

#### Get Signature

> **get** **audio**(): [`AudioBlock`](../interfaces/audioblock.md)[]

Defined in: [src/types/messages.ts:180](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L180)

All audio content blocks in this message.

##### Returns

[`AudioBlock`](../interfaces/audioblock.md)[]

#### Inherited from

[`Message`](message.md).[`audio`](message.md#audio)

***

### documents

#### Get Signature

> **get** **documents**(): [`DocumentBlock`](../interfaces/documentblock.md)[]

Defined in: [src/types/messages.ts:173](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L173)

All document content blocks in this message.

##### Returns

[`DocumentBlock`](../interfaces/documentblock.md)[]

#### Inherited from

[`Message`](message.md).[`documents`](message.md#documents)

***

### images

#### Get Signature

> **get** **images**(): [`ImageBlock`](../interfaces/imageblock.md)[]

Defined in: [src/types/messages.ts:166](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L166)

All image content blocks in this message.

##### Returns

[`ImageBlock`](../interfaces/imageblock.md)[]

#### Inherited from

[`Message`](message.md).[`images`](message.md#images)

***

### reasoning

#### Get Signature

> **get** **reasoning**(): [`ReasoningBlock`](../interfaces/reasoningblock.md)[]

Defined in: [src/types/messages.ts:195](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L195)

All reasoning/thinking content blocks in this message.
Available when using extended thinking models.

##### Returns

[`ReasoningBlock`](../interfaces/reasoningblock.md)[]

#### Inherited from

[`Message`](message.md).[`reasoning`](message.md#reasoning)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [src/types/messages.ts:156](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L156)

Concatenated text content from all text blocks.
Blocks are joined with double newlines.

##### Returns

`string`

#### Inherited from

[`Message`](message.md).[`text`](message.md#text)

***

### video

#### Get Signature

> **get** **video**(): [`VideoBlock`](../interfaces/videoblock.md)[]

Defined in: [src/types/messages.ts:187](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L187)

All video content blocks in this message.

##### Returns

[`VideoBlock`](../interfaces/videoblock.md)[]

#### Inherited from

[`Message`](message.md).[`video`](message.md#video)

## Methods

### getContent()

> `protected` **getContent**(): [`ContentBlock`](../type-aliases/contentblock.md)[]

Defined in: [src/types/messages.ts:338](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/messages.ts#L338)

Returns the content blocks for this message.
Implemented by subclasses to provide type-specific content.

#### Returns

[`ContentBlock`](../type-aliases/contentblock.md)[]

#### Overrides

[`Message`](message.md).[`getContent`](message.md#getcontent)

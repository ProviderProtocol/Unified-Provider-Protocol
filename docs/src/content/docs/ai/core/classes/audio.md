---
title: "Class: Audio"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Audio

# Class: Audio

Defined in: [src/core/media/Audio.ts:75](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L75)

Represents an audio file that can be used in UPP messages.

Audio can be created from various sources (files, bytes, base64) and
converted to different formats as needed by providers. The class provides
a unified interface regardless of the underlying source type.

Note: Providers have size limits for inline audio data. Google Gemini
limits inline data to 20MB per request. For larger files, consider using
provider-specific file upload APIs.

## Example

```typescript
// Load from file
const fileAudio = await Audio.fromPath('./recording.mp3');

// From raw bytes
const bytesAudio = Audio.fromBytes(uint8Array, 'audio/wav');

// Use in a message
const message = new UserMessage([audio.toBlock()]);
```

## Properties

### data

> `readonly` **data**: `Uint8Array`

Defined in: [src/core/media/Audio.ts:77](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L77)

The audio data as raw bytes

***

### duration?

> `readonly` `optional` **duration**: `number`

Defined in: [src/core/media/Audio.ts:81](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L81)

Duration in seconds, if known

***

### mimeType

> `readonly` **mimeType**: `string`

Defined in: [src/core/media/Audio.ts:79](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L79)

MIME type of the audio (e.g., 'audio/mp3', 'audio/wav')

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/core/media/Audio.ts:96](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L96)

Gets the size of the audio data in bytes.

##### Returns

`number`

## Methods

### toBase64()

> **toBase64**(): `string`

Defined in: [src/core/media/Audio.ts:105](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L105)

Converts the audio to a base64-encoded string.

#### Returns

`string`

The audio data as a base64 string

***

### toBlock()

> **toBlock**(): [`AudioBlock`](../interfaces/audioblock.md)

Defined in: [src/core/media/Audio.ts:137](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L137)

Converts this Audio to an AudioBlock for use in UPP messages.

#### Returns

[`AudioBlock`](../interfaces/audioblock.md)

An AudioBlock that can be included in message content arrays

***

### toBytes()

> **toBytes**(): `Uint8Array`

Defined in: [src/core/media/Audio.ts:128](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L128)

Gets the audio data as raw bytes.

#### Returns

`Uint8Array`

The audio data as a Uint8Array

***

### toDataUrl()

> **toDataUrl**(): `string`

Defined in: [src/core/media/Audio.ts:118](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L118)

Converts the audio to a data URL suitable for embedding.

#### Returns

`string`

A data URL in the format `data:{mimeType};base64,{data}`

***

### fromBase64()

> `static` **fromBase64**(`base64`, `mimeType`, `duration?`): `Audio`

Defined in: [src/core/media/Audio.ts:219](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L219)

Creates an Audio from a base64-encoded string.

#### Parameters

##### base64

`string`

The base64-encoded audio data (without data URL prefix)

##### mimeType

`string`

The MIME type of the audio

##### duration?

`number`

Optional duration in seconds

#### Returns

`Audio`

An Audio containing the decoded data

#### Example

```typescript
const audio = Audio.fromBase64(base64String, 'audio/mp3');
```

***

### fromBlock()

> `static` **fromBlock**(`block`): `Audio`

Defined in: [src/core/media/Audio.ts:237](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L237)

Creates an Audio from an existing AudioBlock.

Useful for converting content blocks received from providers back
into Audio instances for further processing.

#### Parameters

##### block

[`AudioBlock`](../interfaces/audioblock.md)

An AudioBlock from message content

#### Returns

`Audio`

An Audio with the block's data and metadata

***

### fromBytes()

> `static` **fromBytes**(`data`, `mimeType`, `duration?`): `Audio`

Defined in: [src/core/media/Audio.ts:202](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L202)

Creates an Audio from raw byte data.

#### Parameters

##### data

`Uint8Array`

The audio data as a Uint8Array

##### mimeType

`string`

The MIME type of the audio

##### duration?

`number`

Optional duration in seconds

#### Returns

`Audio`

An Audio containing the byte data

#### Example

```typescript
const audio = Audio.fromBytes(wavData, 'audio/wav');
```

***

### fromPath()

> `static` **fromPath**(`path`, `duration?`): `Promise`\<`Audio`\>

Defined in: [src/core/media/Audio.ts:161](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Audio.ts#L161)

Creates an Audio by reading a file from disk.

The file is read into memory as bytes. MIME type is automatically
detected from the file extension.

#### Parameters

##### path

`string`

Path to the audio file

##### duration?

`number`

Optional duration in seconds

#### Returns

`Promise`\<`Audio`\>

Promise resolving to an Audio with the file contents

#### Example

```typescript
const audio = await Audio.fromPath('./recordings/interview.mp3');
```

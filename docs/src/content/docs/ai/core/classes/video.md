---
title: "Class: Video"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / Video

# Class: Video

Defined in: [src/core/media/Video.ts:79](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L79)

Represents a video file that can be used in UPP messages.

Video can be created from various sources (files, bytes, base64) and
converted to different formats as needed by providers. The class provides
a unified interface regardless of the underlying source type.

Note: Providers have size limits for inline video data. Google Gemini
limits inline data to 20MB per request. For larger files, consider using
provider-specific file upload APIs.

## Example

```typescript
// Load from file
const fileVideo = await Video.fromPath('./clip.mp4');

// From raw bytes
const bytesVideo = Video.fromBytes(uint8Array, 'video/webm');

// Use in a message
const message = new UserMessage([video.toBlock()]);
```

## Properties

### data

> `readonly` **data**: `Uint8Array`

Defined in: [src/core/media/Video.ts:81](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L81)

The video data as raw bytes

***

### duration?

> `readonly` `optional` **duration**: `number`

Defined in: [src/core/media/Video.ts:85](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L85)

Duration in seconds, if known

***

### height?

> `readonly` `optional` **height**: `number`

Defined in: [src/core/media/Video.ts:89](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L89)

Video height in pixels, if known

***

### mimeType

> `readonly` **mimeType**: `string`

Defined in: [src/core/media/Video.ts:83](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L83)

MIME type of the video (e.g., 'video/mp4', 'video/webm')

***

### width?

> `readonly` `optional` **width**: `number`

Defined in: [src/core/media/Video.ts:87](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L87)

Video width in pixels, if known

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/core/media/Video.ts:106](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L106)

Gets the size of the video data in bytes.

##### Returns

`number`

## Methods

### toBase64()

> **toBase64**(): `string`

Defined in: [src/core/media/Video.ts:115](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L115)

Converts the video to a base64-encoded string.

#### Returns

`string`

The video data as a base64 string

***

### toBlock()

> **toBlock**(): [`VideoBlock`](../interfaces/videoblock.md)

Defined in: [src/core/media/Video.ts:147](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L147)

Converts this Video to a VideoBlock for use in UPP messages.

#### Returns

[`VideoBlock`](../interfaces/videoblock.md)

A VideoBlock that can be included in message content arrays

***

### toBytes()

> **toBytes**(): `Uint8Array`

Defined in: [src/core/media/Video.ts:138](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L138)

Gets the video data as raw bytes.

#### Returns

`Uint8Array`

The video data as a Uint8Array

***

### toDataUrl()

> **toDataUrl**(): `string`

Defined in: [src/core/media/Video.ts:128](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L128)

Converts the video to a data URL suitable for embedding.

#### Returns

`string`

A data URL in the format `data:{mimeType};base64,{data}`

***

### fromBase64()

> `static` **fromBase64**(`base64`, `mimeType`, `options?`): `Video`

Defined in: [src/core/media/Video.ts:240](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L240)

Creates a Video from a base64-encoded string.

#### Parameters

##### base64

`string`

The base64-encoded video data (without data URL prefix)

##### mimeType

`string`

The MIME type of the video

##### options?

Optional metadata (duration, width, height)

###### duration?

`number`

###### height?

`number`

###### width?

`number`

#### Returns

`Video`

A Video containing the decoded data

#### Example

```typescript
const video = Video.fromBase64(base64String, 'video/mp4');
```

***

### fromBlock()

> `static` **fromBlock**(`block`): `Video`

Defined in: [src/core/media/Video.ts:262](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L262)

Creates a Video from an existing VideoBlock.

Useful for converting content blocks received from providers back
into Video instances for further processing.

#### Parameters

##### block

[`VideoBlock`](../interfaces/videoblock.md)

A VideoBlock from message content

#### Returns

`Video`

A Video with the block's data and metadata

***

### fromBytes()

> `static` **fromBytes**(`data`, `mimeType`, `options?`): `Video`

Defined in: [src/core/media/Video.ts:219](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L219)

Creates a Video from raw byte data.

#### Parameters

##### data

`Uint8Array`

The video data as a Uint8Array

##### mimeType

`string`

The MIME type of the video

##### options?

Optional metadata (duration, width, height)

###### duration?

`number`

###### height?

`number`

###### width?

`number`

#### Returns

`Video`

A Video containing the byte data

#### Example

```typescript
const video = Video.fromBytes(mp4Data, 'video/mp4');
const videoWithMeta = Video.fromBytes(data, 'video/mp4', { duration: 60 });
```

***

### fromPath()

> `static` **fromPath**(`path`, `options?`): `Promise`\<`Video`\>

Defined in: [src/core/media/Video.ts:174](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/core/media/Video.ts#L174)

Creates a Video by reading a file from disk.

The file is read into memory as bytes. MIME type is automatically
detected from the file extension.

#### Parameters

##### path

`string`

Path to the video file

##### options?

Optional metadata (duration, width, height)

###### duration?

`number`

###### height?

`number`

###### width?

`number`

#### Returns

`Promise`\<`Video`\>

Promise resolving to a Video with the file contents

#### Example

```typescript
const video = await Video.fromPath('./clips/demo.mp4');
const videoWithMeta = await Video.fromPath('./clip.mp4', { duration: 30, width: 1920, height: 1080 });
```

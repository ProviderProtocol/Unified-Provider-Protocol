---
title: "Interface: ImageHandler"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageHandler

# Interface: ImageHandler\<TParams\>

Defined in: [src/types/provider.ts:280](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/provider.ts#L280)

**`Internal`**

Image handler interface for providers.

Implemented by providers to enable image generation capabilities.

## Type Parameters

### TParams

`TParams` = `unknown`

Provider-specific parameter type

## Methods

### \_setProvider()?

> `optional` **\_setProvider**(`provider`): `void`

Defined in: [src/types/provider.ts:295](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/provider.ts#L295)

**`Internal`**

Sets the parent provider reference.

#### Parameters

##### provider

[`ImageProvider`](../type-aliases/imageprovider.md)\<`TParams`\>

The parent provider

#### Returns

`void`

***

### bind()

> **bind**(`modelId`): [`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

Defined in: [src/types/provider.ts:287](https://github.com/ProviderProtocol/ai/blob/29e09700edf4843264a00104f273a6daebc22804/src/types/provider.ts#L287)

Binds a model ID to create an executable image model.

#### Parameters

##### modelId

`string`

The model identifier to bind

#### Returns

[`BoundImageModel`](boundimagemodel.md)\<`TParams`\>

A bound image model ready for generation

---
title: "Interface: ImageModelInput"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ImageModelInput

# Interface: ImageModelInput

Defined in: [src/types/image.ts:24](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/types/image.ts#L24)

Structural type for image model input.
Uses structural typing to avoid generic variance issues with Provider generics.

## Remarks

This type mirrors [ModelReference](modelreference.md) while keeping provider options
structurally compatible across providers.

## See

ModelReference

## Properties

### modelId

> `readonly` **modelId**: `string`

Defined in: [src/types/image.ts:25](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/types/image.ts#L25)

***

### provider

> `readonly` **provider**: [`ProviderIdentity`](provideridentity.md)

Defined in: [src/types/image.ts:26](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/types/image.ts#L26)

***

### providerConfig?

> `readonly` `optional` **providerConfig**: `Partial`\<[`ProviderConfig`](providerconfig.md)\>

Defined in: [src/types/image.ts:28](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/types/image.ts#L28)

Optional provider configuration merged into requests

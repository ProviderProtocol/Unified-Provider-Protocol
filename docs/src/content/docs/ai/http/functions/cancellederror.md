---
title: "Function: cancelledError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / cancelledError

# Function: cancelledError()

> **cancelledError**(`provider`, `modality`): [`UPPError`](../../core/classes/upperror.md)

Defined in: [src/http/errors.ts:196](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/http/errors.ts#L196)

Creates a UPPError for user-initiated request cancellation.

Use this when the request is aborted via a user-provided AbortSignal,
distinct from timeout-based cancellation.

## Parameters

### provider

`string`

Provider identifier for error context

### modality

[`Modality`](../../core/type-aliases/modality.md)

Request modality for error context

## Returns

[`UPPError`](../../core/classes/upperror.md)

A UPPError with CANCELLED code

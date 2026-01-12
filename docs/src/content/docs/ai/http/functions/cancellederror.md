---
title: "Function: cancelledError()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [http](../index.md) / cancelledError

# Function: cancelledError()

> **cancelledError**(`provider`, `modality`): [`UPPError`](../../core/classes/upperror.md)

Defined in: [src/http/errors.ts:192](https://github.com/ProviderProtocol/ai/blob/ad6923294c4b613e141878e1142aaea0e84551ed/src/http/errors.ts#L192)

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

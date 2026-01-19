---
title: "Interface: ParsedObjectOptions"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / ParsedObjectOptions

# Interface: ParsedObjectOptions

Defined in: [src/middleware/parsed-object.ts:35](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/middleware/parsed-object.ts#L35)

Options for parsed object middleware.

## Properties

### parseObjects?

> `optional` **parseObjects**: `boolean`

Defined in: [src/middleware/parsed-object.ts:40](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/middleware/parsed-object.ts#L40)

Parse ObjectDelta events (structured output responses).

#### Default

```ts
true
```

***

### parseToolCalls?

> `optional` **parseToolCalls**: `boolean`

Defined in: [src/middleware/parsed-object.ts:46](https://github.com/ProviderProtocol/ai/blob/5aefe26b1ee7a6863c43107299be578fae7abd51/src/middleware/parsed-object.ts#L46)

Parse ToolCallDelta events (tool call arguments).

#### Default

```ts
true
```

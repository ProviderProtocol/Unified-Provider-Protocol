---
title: "Interface: ResponsesProviderOptions"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [responses](../index.md) / ResponsesProviderOptions

# Interface: ResponsesProviderOptions

Defined in: [src/providers/responses/types.ts:41](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L41)

Configuration options for creating an OpenResponses model reference.

The `host` option allows targeting any OpenResponses-compatible server,
making this provider work with OpenAI, self-hosted servers, or any
implementation of the OpenResponses specification.

## Examples

```typescript
const model = responses('gpt-5.2', {
  host: 'https://api.openai.com/v1'
});
```

```typescript
const model = responses('llama-3.3-70b', {
  host: 'http://localhost:8080/v1',
  apiKeyEnv: 'LOCAL_API_KEY'
});
```

## Properties

### apiKeyEnv?

> `optional` **apiKeyEnv**: `string`

Defined in: [src/providers/responses/types.ts:59](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L59)

Environment variable name containing the API key.
Defaults to 'OPENRESPONSES_API_KEY'.

#### Examples

```ts
'OPENAI_API_KEY'
```

```ts
'OPENROUTER_API_KEY'
```

***

### host

> **host**: `string`

Defined in: [src/providers/responses/types.ts:50](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/responses/types.ts#L50)

The base URL for the OpenResponses-compatible API.
The `/responses` endpoint will be appended to this URL.

#### Examples

```ts
'https://api.openai.com/v1'
```

```ts
'https://openrouter.ai/api/v1'
```

```ts
'http://localhost:8080/v1'
```

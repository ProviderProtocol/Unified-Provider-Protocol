---
title: "Function: parseBody()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / parseBody

# Function: parseBody()

> **parseBody**(`body`): [`ParsedRequest`](../interfaces/parsedrequest.md)

Defined in: [src/providers/proxy/server/webapi.ts:90](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/proxy/server/webapi.ts#L90)

Parse an HTTP request body into PP types.

## Parameters

### body

`unknown`

The JSON-parsed request body

## Returns

[`ParsedRequest`](../interfaces/parsedrequest.md)

Deserialized PP data

## Example

```typescript
const body = await req.json();
const { messages, system, params } = parseBody(body);

const instance = llm({ model: anthropic('...'), system, params });
const turn = await instance.generate(messages);
```

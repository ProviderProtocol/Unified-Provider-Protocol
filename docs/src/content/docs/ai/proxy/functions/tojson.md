---
title: "Function: toJSON()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toJSON

# Function: toJSON()

> **toJSON**(`turn`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:210](https://github.com/ProviderProtocol/ai/blob/6f44851e2b2eace1c64786fecf0b27e8ebe78069/src/providers/proxy/server/webapi.ts#L210)

Create a JSON Response from a Turn.

## Parameters

### turn

[`Turn`](../../core/interfaces/turn.md)

The completed inference turn

## Returns

`Response`

HTTP Response with JSON body

## Example

```typescript
const turn = await instance.generate(messages);
return toJSON(turn);
```

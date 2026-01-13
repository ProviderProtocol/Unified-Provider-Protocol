---
title: "Function: toJSON()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / toJSON

# Function: toJSON()

> **toJSON**(`turn`): `Response`

Defined in: [src/providers/proxy/server/webapi.ts:108](https://github.com/ProviderProtocol/ai/blob/bc1a2ea6935894ca3de99156bbd00bacf469006e/src/providers/proxy/server/webapi.ts#L108)

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

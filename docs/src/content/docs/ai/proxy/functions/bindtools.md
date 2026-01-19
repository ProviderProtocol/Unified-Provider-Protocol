---
title: "Function: bindTools()"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [proxy](../index.md) / bindTools

# Function: bindTools()

> **bindTools**(`schemas`, `implementations`): [`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Defined in: [src/providers/proxy/server/webapi.ts:367](https://github.com/ProviderProtocol/ai/blob/2772450aa66e4362aca4f33c14d03af66fd20186/src/providers/proxy/server/webapi.ts#L367)

Bind tool schemas to implementation functions.

Takes tool schemas from the request and binds them to your
server-side implementations.

## Parameters

### schemas

Tool schemas from the request

`object`[] | `undefined`

### implementations

`Record`\<`string`, (`params`) => `unknown` \| `Promise`\<`unknown`\>\>

Map of tool name to implementation

## Returns

[`Tool`](../../core/interfaces/tool.md)\<`unknown`, `unknown`\>[]

Array of complete Tool objects

## Example

```typescript
const { tools: schemas } = parseBody(body);

const tools = bindTools(schemas, {
  get_weather: async ({ location }) => fetchWeather(location),
  search: async ({ query }) => searchDB(query),
});

const instance = llm({ model, tools });
```

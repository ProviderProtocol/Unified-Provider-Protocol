---
title: "Interface: OpenAIMcpServerConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIMcpServerConfig

# Interface: OpenAIMcpServerConfig

Defined in: [src/providers/openai/types.ts:1274](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/openai/types.ts#L1274)

MCP (Model Context Protocol) server configuration

## Properties

### allowed\_resources?

> `optional` **allowed\_resources**: `string`[]

Defined in: [src/providers/openai/types.ts:1287](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/openai/types.ts#L1287)

Allowed resources

***

### headers?

> `optional` **headers**: `Record`\<`string`, `string`\>

Defined in: [src/providers/openai/types.ts:1285](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/openai/types.ts#L1285)

Headers to send with requests

***

### name?

> `optional` **name**: `string`

Defined in: [src/providers/openai/types.ts:1278](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/openai/types.ts#L1278)

Server name for identification

***

### require\_approval?

> `optional` **require\_approval**: `"always"` \| \{ `tools`: `string`[]; `type`: `"except"`; \} \| `"never"`

Defined in: [src/providers/openai/types.ts:1289](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/openai/types.ts#L1289)

Require approval for tool calls

***

### tool\_configuration?

> `optional` **tool\_configuration**: `object`

Defined in: [src/providers/openai/types.ts:1280](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/openai/types.ts#L1280)

Tool configuration for the server

#### allowed\_tools?

> `optional` **allowed\_tools**: `string`[] \| \{ `type`: `"all"`; \}

Allowed tools from this server

***

### url

> **url**: `string`

Defined in: [src/providers/openai/types.ts:1276](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/providers/openai/types.ts#L1276)

Server URL

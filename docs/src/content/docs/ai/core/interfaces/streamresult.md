---
title: "Interface: StreamResult"
---

[**@providerprotocol/ai**](../../../index.md)

***

[@providerprotocol/ai](./index.md) / [@providerprotocol/ai](../index.md) / StreamResult

# Interface: StreamResult\<TData\>

Defined in: [src/types/stream.ts:173](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/stream.ts#L173)

Stream result - an async iterable that also provides the final turn.

Allows consuming streaming events while also awaiting the complete
Turn result after streaming finishes. Implements `PromiseLike<Turn>`
for direct awaiting with automatic stream consumption.

## Example

```typescript
import { StreamEventType } from 'upp';

const stream = instance.stream('Tell me a story');

// Option 1: Consume streaming events manually
for await (const event of stream) {
  if (event.type === StreamEventType.TextDelta) {
    process.stdout.write(event.delta.text ?? '');
  }
}
const turn = await stream.turn;

// Option 2: Just await the turn (auto-drains the stream)
const turn = await instance.stream('Tell me a story');

// Option 3: Fire-and-forget with callback
instance.stream('Tell me a story').then(turn => saveToDB(turn));
```

## Extends

- `AsyncIterable`\<[`StreamEvent`](streamevent.md)\>.`PromiseLike`\<[`Turn`](turn.md)\<`TData`\>\>

## Type Parameters

### TData

`TData` = `unknown`

Type of the structured output data

## Properties

### turn

> `readonly` **turn**: `Promise`\<[`Turn`](turn.md)\<`TData`\>\>

Defined in: [src/types/stream.ts:179](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/stream.ts#L179)

Promise that resolves to the complete Turn after streaming finishes.
Rejects if the stream is aborted or terminated early.

## Methods

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

Defined in: node\_modules/typescript/lib/lib.es2018.asynciterable.d.ts:38

#### Returns

`AsyncIterator`\<[`StreamEvent`](streamevent.md), `any`, `any`\>

#### Inherited from

`AsyncIterable.[asyncIterator]`

***

### abort()

> **abort**(): `void`

Defined in: [src/types/stream.ts:185](https://github.com/ProviderProtocol/ai/blob/6f2d4a4a826c226dbc802f693f1242d98ad92fae/src/types/stream.ts#L185)

Aborts the stream, stopping further events and cancelling the request.
This will cause [StreamResult.turn](#turn) to reject.

#### Returns

`void`

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `PromiseLike`\<`TResult1` \| `TResult2`\>

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1544

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = [`Turn`](turn.md)\<`TData`\>

##### TResult2

`TResult2` = `never`

#### Parameters

##### onfulfilled?

The callback to execute when the Promise is resolved.

(`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\> | `null`

##### onrejected?

The callback to execute when the Promise is rejected.

(`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\> | `null`

#### Returns

`PromiseLike`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`PromiseLike.then`

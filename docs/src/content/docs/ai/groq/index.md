---
title: "groq"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / groq

# groq

Groq provider for UPP (Unified Provider Protocol)

This module exports the Groq provider for use with Llama, Gemma, and other
models available through Groq's inference platform.

## Example

```ts
import { groq } from '@providerprotocol/ai/groq';
import { llm } from '@providerprotocol/ai';

// Create an LLM instance with Llama
const model = llm({
  model: groq('llama-3.3-70b-versatile'),
  params: { max_tokens: 1000 }
});

// Generate a response
const turn = await model.generate('What is the meaning of life?');
console.log(turn.response.text);
```

## Interfaces

- [GroqCitationOptions](interfaces/groqcitationoptions.md)
- [GroqDocument](interfaces/groqdocument.md)
- [GroqHeaders](interfaces/groqheaders.md)
- [GroqLLMParams](interfaces/groqllmparams.md)
- [GroqProviderOptions](interfaces/groqprovideroptions.md)
- [GroqRequest](interfaces/groqrequest.md)
- [GroqResponse](interfaces/groqresponse.md)
- [GroqSearchSettings](interfaces/groqsearchsettings.md)
- [GroqStreamChunk](interfaces/groqstreamchunk.md)
- [GroqTool](interfaces/groqtool.md)
- [GroqToolCall](interfaces/groqtoolcall.md)
- [GroqUsage](interfaces/groqusage.md)

## Type Aliases

- [GroqMessage](type-aliases/groqmessage.md)
- [GroqResponseFormat](type-aliases/groqresponseformat.md)
- [GroqToolChoice](type-aliases/groqtoolchoice.md)

## Variables

- [groq](variables/groq.md)

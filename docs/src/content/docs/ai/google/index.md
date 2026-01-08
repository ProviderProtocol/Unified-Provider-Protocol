---
title: "google"
---

[**@providerprotocol/ai**](../index.md)

***

[@providerprotocol/ai](./index.md) / google

# google

Google provider for UPP (Unified Provider Protocol)

This module exports the Google provider for use with Gemini models.
Google's Gemini models support multimodal inputs including text, images,
audio, and video.

## Example

```ts
import { google } from '@providerprotocol/ai/google';
import { llm } from '@providerprotocol/ai';

// Create an LLM instance with Gemini
const model = llm({
  model: google('gemini-2.0-flash'),
  params: { maxOutputTokens: 1000 }
});

// Generate a response
const turn = await model.generate('What is machine learning?');
console.log(turn.response.text);
```

## Interfaces

- [CacheCreateOptions](interfaces/cachecreateoptions.md)
- [CacheListOptions](interfaces/cachelistoptions.md)
- [GoogleCacheCreateRequest](interfaces/googlecachecreaterequest.md)
- [GoogleCacheListResponse](interfaces/googlecachelistresponse.md)
- [GoogleCacheResponse](interfaces/googlecacheresponse.md)
- [GoogleCacheUpdateRequest](interfaces/googlecacheupdaterequest.md)
- [GoogleCodeExecutionResult](interfaces/googlecodeexecutionresult.md)
- [GoogleCodeExecutionTool](interfaces/googlecodeexecutiontool.md)
- [GoogleEmbedParams](interfaces/googleembedparams.md)
- [GoogleFileSearchTool](interfaces/googlefilesearchtool.md)
- [GoogleGroundingMetadata](interfaces/googlegroundingmetadata.md)
- [GoogleHeaders](interfaces/googleheaders.md)
- [GoogleLLMParams](interfaces/googlellmparams.md)
- [GoogleMapsTool](interfaces/googlemapstool.md)
- [GoogleSearchTool](interfaces/googlesearchtool.md)
- [GoogleToolConfig](interfaces/googletoolconfig.md)
- [GoogleUrlContextTool](interfaces/googleurlcontexttool.md)

## Type Aliases

- [GoogleBuiltInTool](type-aliases/googlebuiltintool.md)
- [GoogleTaskType](type-aliases/googletasktype.md)

## Variables

- [cache](variables/cache.md)
- [google](variables/google.md)
- [tools](variables/tools.md)

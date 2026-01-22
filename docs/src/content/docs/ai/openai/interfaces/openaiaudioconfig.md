---
title: "Interface: OpenAIAudioConfig"
---

[**@providerprotocol/ai**](../../index.md)

***

[@providerprotocol/ai](./index.md) / [openai](../index.md) / OpenAIAudioConfig

# Interface: OpenAIAudioConfig

Defined in: [src/providers/openai/types.ts:28](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openai/types.ts#L28)

Audio output configuration for Chat Completions API.

Enables audio output generation when using models that support
the audio modality. Requires `modalities: ['text', 'audio']`.

## Properties

### format

> **format**: `"mp3"` \| `"wav"` \| `"flac"` \| `"aac"` \| `"opus"` \| `"pcm16"`

Defined in: [src/providers/openai/types.ts:30](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openai/types.ts#L30)

Audio format for the generated output

***

### voice

> **voice**: `"alloy"` \| `"ash"` \| `"ballad"` \| `"coral"` \| `"echo"` \| `"sage"` \| `"shimmer"` \| `"verse"` \| `"marin"` \| `"cedar"`

Defined in: [src/providers/openai/types.ts:32](https://github.com/ProviderProtocol/ai/blob/a69934fc726a09868abc2d9bf66b6a1c46d1e64d/src/providers/openai/types.ts#L32)

Voice model to use for audio generation

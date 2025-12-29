// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UPP-1.1',
			description: 'Unified Provider Protocol - A standard for multi-provider AI interoperability',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/providerprotocol/upp' },
			],
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'UPP-1.1 - Unified Provider Protocol',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'A first-generation standard for simplifying AI inference and enabling multi-provider interoperability.',
					},
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Quick Start', slug: 'quick-start' },
						{ label: 'Design Principles', slug: 'design-principles' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Architecture', slug: 'core/architecture' },
						{ label: 'Providers', slug: 'core/providers' },
						{ label: 'Configuration', slug: 'core/configuration' },
						{ label: 'Error Handling', slug: 'core/errors' },
					],
				},
				{
					label: 'LLM Interface',
					items: [
						{ label: 'Overview', slug: 'llm/overview' },
						{ label: 'Messages', slug: 'llm/messages' },
						{ label: 'Turns', slug: 'llm/turns' },
						{ label: 'Threads', slug: 'llm/threads' },
						{ label: 'Streaming', slug: 'llm/streaming' },
						{ label: 'Tools', slug: 'llm/tools' },
						{ label: 'Structured Outputs', slug: 'llm/structured-outputs' },
					],
				},
				{
					label: 'Embedding Interface',
					items: [
						{ label: 'Overview', slug: 'embedding/overview' },
						{ label: 'Batch Processing', slug: 'embedding/batch' },
						{ label: 'Similarity Utilities', slug: 'embedding/similarity' },
					],
				},
				{
					label: 'Image Interface',
					items: [
						{ label: 'Overview', slug: 'image/overview' },
						{ label: 'Generation', slug: 'image/generation' },
						{ label: 'Editing & Variations', slug: 'image/editing' },
					],
				},
				{
					label: 'Provider Guide',
					items: [
						{ label: 'Implementation Guide', slug: 'providers/implementation' },
						{ label: 'Conformance Levels', slug: 'providers/conformance' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

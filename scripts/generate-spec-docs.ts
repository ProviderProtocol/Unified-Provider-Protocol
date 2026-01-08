#!/usr/bin/env bun
/**
 * UPP/UAP Spec Documentation Generator
 *
 * Reads specification files (UPP-1.2.spec.md and UAP-1.0.md) and generates
 * Starlight-compatible MDX documentation files.
 *
 * Usage:
 *   bun run scripts/generate-spec-docs.ts          # Generate both
 *   bun run scripts/generate-spec-docs.ts upp      # Generate UPP only
 *   bun run scripts/generate-spec-docs.ts uap      # Generate UAP only
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { join, dirname } from "path";

const ROOT_DIR = join(import.meta.dir, "..");
const DOCS_DIR = join(ROOT_DIR, "docs/src/content/docs");

// Section configuration for each spec
interface SectionConfig {
  outputPath: string;
  title: string;
  description: string;
  includeSections?: number[];
}

interface SpecConfig {
  name: string;
  version: string;
  status: string;
  specFile: string;
  outputDir: string;
  sections: Record<number, SectionConfig>;
  // Sections to combine (source -> target)
  combineSections?: Record<number, number>;
  // Special handlers
  extractErrors?: { fromSection: number; outputPath: string };
}

// ============================================================================
// UPP Configuration
// ============================================================================

const UPP_CONFIG: SpecConfig = {
  name: "UPP",
  version: "1.2.0-draft",
  status: "Draft",
  specFile: join(ROOT_DIR, "UPP-1.2.spec.md"),
  outputDir: join(DOCS_DIR, "upp"),
  sections: {
    1: {
      outputPath: "overview.mdx",
      title: "Specification Overview",
      description:
        "UPP-1.2 Specification Overview - A language-agnostic protocol for AI inference services.",
    },
    2: {
      outputPath: "design-principles.mdx",
      title: "Design Principles",
      description: "Core design principles guiding the UPP specification.",
    },
    3: {
      outputPath: "architecture.mdx",
      title: "Architecture",
      description: "UPP architecture, provider model, and data flow patterns.",
      includeSections: [4],
    },
    5: {
      outputPath: "llm/interface.mdx",
      title: "LLM Interface",
      description:
        "UPP-1.2 LLM Interface specification for chat and completion.",
    },
    6: {
      outputPath: "llm/messages.mdx",
      title: "Messages",
      description: "Message types and content blocks in UPP.",
    },
    7: {
      outputPath: "llm/turns.mdx",
      title: "Turns",
      description: "Turn structure and usage in UPP conversations.",
    },
    8: {
      outputPath: "llm/threads.mdx",
      title: "Threads",
      description: "Thread utility for managing conversation history.",
    },
    9: {
      outputPath: "llm/streaming.mdx",
      title: "Streaming",
      description: "Streaming response handling in UPP.",
    },
    10: {
      outputPath: "llm/tools.mdx",
      title: "Tools",
      description: "Tool definition, execution, and strategies in UPP.",
    },
    11: {
      outputPath: "llm/structured.mdx",
      title: "Structured Output",
      description: "Structured output and JSON schema constraints.",
    },
    12: {
      outputPath: "embedding/interface.mdx",
      title: "Embedding Interface",
      description: "UPP Embedding interface for vector embeddings.",
    },
    13: {
      outputPath: "image/interface.mdx",
      title: "Image Interface",
      description: "UPP Image interface for image generation and editing.",
    },
    14: {
      outputPath: "types.mdx",
      title: "Data Types",
      description: "Complete type definitions for UPP.",
    },
    15: {
      outputPath: "providers/implementation.mdx",
      title: "Provider Implementation Guide",
      description: "Guide for implementing UPP-compliant providers.",
    },
    16: {
      outputPath: "providers/conformance.mdx",
      title: "Conformance",
      description: "Provider conformance levels and requirements.",
    },
    17: {
      outputPath: "security.mdx",
      title: "Security Considerations",
      description: "Security guidelines for UPP implementations.",
    },
  },
  extractErrors: {
    fromSection: 4,
    outputPath: "errors.mdx",
  },
};

// ============================================================================
// UAP Configuration
// ============================================================================

const UAP_CONFIG: SpecConfig = {
  name: "UAP",
  version: "1.0.0",
  status: "Approved",
  specFile: join(ROOT_DIR, "UAP-1.0.md"),
  outputDir: join(DOCS_DIR, "uap"),
  sections: {
    1: {
      outputPath: "overview.mdx",
      title: "Specification Overview",
      description:
        "UAP-1.0 Specification Overview - A protocol for building AI agents on UPP-1.2.",
    },
    2: {
      outputPath: "design-principles.mdx",
      title: "Design Principles",
      description: "Core design principles guiding the UAP specification.",
    },
    3: {
      outputPath: "architecture.mdx",
      title: "Core Concepts",
      description: "UAP architecture, agent model, and execution patterns.",
    },
    4: {
      outputPath: "agent/interface.mdx",
      title: "Agent Interface",
      description: "UAP agent() function interface and options.",
    },
    5: {
      outputPath: "agent/strategies.mdx",
      title: "Execution Strategies",
      description:
        "Execution strategies: react(), plan(), and loop() patterns.",
    },
    6: {
      outputPath: "agent/state.mdx",
      title: "State Management",
      description: "Functional state management with AgentState.",
    },
    7: {
      outputPath: "agent/thread-trees.mdx",
      title: "Thread Trees",
      description: "Thread tree structures for branching conversations.",
    },
    8: {
      outputPath: "agent/sub-agents.mdx",
      title: "Sub-Agent Protocol",
      description: "Sub-agent communication via ask() and query().",
    },
    9: {
      outputPath: "agent/middleware.mdx",
      title: "Middleware",
      description: "Middleware composition for cross-cutting concerns.",
    },
    10: {
      outputPath: "agent/hooks.mdx",
      title: "Strategy Hooks",
      description: "Agent strategy hooks for customizing execution.",
    },
    11: {
      outputPath: "agent/streaming.mdx",
      title: "Streaming",
      description: "Streaming agent responses and events.",
    },
    12: {
      outputPath: "serialization.mdx",
      title: "Serialization",
      description: "State serialization, checkpointing, and persistence.",
    },
    13: {
      outputPath: "types.mdx",
      title: "Data Types",
      description: "Complete type definitions for UAP.",
    },
    14: {
      outputPath: "conformance.mdx",
      title: "Conformance",
      description: "Implementation conformance requirements.",
    },
    15: {
      outputPath: "security.mdx",
      title: "Security Considerations",
      description: "Security guidelines for UAP implementations.",
    },
  },
};

// ============================================================================
// Shared Types and Utilities
// ============================================================================

interface Section {
  number: number;
  title: string;
  content: string;
  subsections: Subsection[];
}

interface Subsection {
  id: string;
  title: string;
  content: string;
}

function parseSpec(content: string): Section[] {
  const sections: Section[] = [];
  const lines = content.split("\n");

  let currentSection: Section | null = null;
  let currentSubsection: Subsection | null = null;
  let contentBuffer: string[] = [];
  let inHeader = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect start of actual content (Section 1)
    if (line.match(/^## 1\./)) {
      inHeader = false;
    }

    if (inHeader) continue;

    // Match section headers: ## N. Title
    const sectionMatch = line.match(/^## (\d+)\. (.+)$/);
    if (sectionMatch) {
      if (currentSection) {
        if (currentSubsection) {
          currentSubsection.content = contentBuffer.join("\n").trim();
          currentSection.subsections.push(currentSubsection);
        } else {
          currentSection.content = contentBuffer.join("\n").trim();
        }
        sections.push(currentSection);
      }

      currentSection = {
        number: parseInt(sectionMatch[1]),
        title: sectionMatch[2],
        content: "",
        subsections: [],
      };
      currentSubsection = null;
      contentBuffer = [];
      continue;
    }

    // Match subsection headers: ### N.M Title
    const subsectionMatch = line.match(/^### (\d+\.\d+(?:\.\d+)?)\s+(.+)$/);
    if (subsectionMatch && currentSection) {
      if (currentSubsection) {
        currentSubsection.content = contentBuffer.join("\n").trim();
        currentSection.subsections.push(currentSubsection);
      } else if (contentBuffer.length > 0) {
        currentSection.content = contentBuffer.join("\n").trim();
      }

      currentSubsection = {
        id: subsectionMatch[1],
        title: subsectionMatch[2],
        content: "",
      };
      contentBuffer = [];
      continue;
    }

    if (line === "---") continue;
    contentBuffer.push(line);
  }

  if (currentSection) {
    if (currentSubsection) {
      currentSubsection.content = contentBuffer.join("\n").trim();
      currentSection.subsections.push(currentSubsection);
    } else {
      currentSection.content = contentBuffer.join("\n").trim();
    }
    sections.push(currentSection);
  }

  return sections;
}

function extractAbstract(specContent: string): string {
  const abstractMatch = specContent.match(
    /## Abstract\n\n([\s\S]*?)(?=\n---|\n## Table of Contents)/
  );
  return abstractMatch ? abstractMatch[1].trim() : "";
}

function generateFrontmatter(config: SectionConfig): string {
  // Quote values that contain special YAML characters
  const title = config.title.includes(":") ? `"${config.title}"` : config.title;
  const description = config.description.includes(":")
    ? `"${config.description}"`
    : config.description;

  return `---
title: ${title}
description: ${description}
---`;
}

function formatContent(section: Section): string {
  let content = section.content;

  // Process all subsections
  for (const subsection of section.subsections) {
    const titleWithoutNumber = subsection.title;
    content += `\n\n## ${titleWithoutNumber}\n\n`;
    content += subsection.content;
  }

  // Convert pseudocode blocks to text
  content = content.replace(/```pseudocode/g, "```text");

  // Escape generic type syntax to prevent MDX parsing them as JSX
  content = content
    .split("\n")
    .map((line) => {
      if (line.startsWith("```") || line.startsWith("    ")) {
        return line;
      }
      return line.replace(/(\w+)<([^>\/][^>]*)>/g, (match, word, inner) => {
        if (/^[a-z]+$/.test(word) && !inner.includes(",")) {
          return match;
        }
        return `${word}&lt;${inner}&gt;`;
      });
    })
    .join("\n");

  // Convert **Note:** to Aside components
  content = content.replace(
    /\*\*Note:\*\*\s*([^\n]+(?:\n(?!\n)[^\n]+)*)/g,
    '<Aside type="note">\n$1\n</Aside>'
  );

  // Convert **Important:** to Aside components
  content = content.replace(
    /\*\*Important:\*\*\s*([^\n]+(?:\n(?!\n)[^\n]+)*)/g,
    '<Aside type="caution">\n$1\n</Aside>'
  );

  // Convert **Rationale:** sections to tips
  content = content.replace(
    /\*\*Rationale:\*\*\s*([^\n]+(?:\n(?!\n)[^\n]+)*)/g,
    '<Aside type="tip" title="Rationale">\n$1\n</Aside>'
  );

  return content.trim();
}

function ensureDir(filePath: string) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

// ============================================================================
// UPP-Specific Generators
// ============================================================================

function generateUPPOverview(
  specContent: string,
  section1: Section
): { content: string; config: SectionConfig } {
  const config = UPP_CONFIG.sections[1];
  const abstract = extractAbstract(specContent);

  let content = `${generateFrontmatter(config)}

import { Aside, Badge, Card, CardGrid } from '@astrojs/starlight/components';

# UPP-1.2 Specification

<Badge text="Version ${UPP_CONFIG.version}" variant="note" />
<Badge text="Status: ${UPP_CONFIG.status}" variant="caution" />

${abstract}

## Specification Status

The following table indicates the maturity level of each section in UPP 1.2:

| Section | Status | Notes |
|---------|--------|-------|
| **Core Architecture** | <Badge text="Stable" variant="success" size="small" /> | Provider model, configuration, entry points |
| **LLM Interface** | <Badge text="Stable" variant="success" size="small" /> | \`llm()\`, generate/stream, capabilities |
| **LLM Messages** | <Badge text="Stable" variant="success" size="small" /> | UserMessage, AssistantMessage, content blocks |
| **LLM Turns & Threads** | <Badge text="Stable" variant="success" size="small" /> | Turn structure, Thread utility |
| **LLM Streaming** | <Badge text="Stable" variant="success" size="small" /> | StreamResult, StreamEvent types |
| **LLM Tools** | <Badge text="Stable" variant="success" size="small" /> | Tool definition, execution loop, strategies |
| **LLM Structured Output** | <Badge text="Stable" variant="success" size="small" /> | JSON Schema constrained responses |
| **Embedding Interface** | <Badge text="Stable" variant="success" size="small" /> | \`embedding()\`, batch, similarity utilities |
| **Image Interface** | <Badge text="Stable" variant="success" size="small" /> | \`image()\`, generation, editing, variations |
| **Error Handling** | <Badge text="Stable" variant="success" size="small" /> | UPPError, error codes, retry strategies |
| **Provider Conformance** | <Badge text="Stable" variant="success" size="small" /> | Compliance levels, capability declaration |
| **Security Guidelines** | <Badge text="Stable" variant="success" size="small" /> | API keys, tool security, injection prevention |
| **Types & Schemas** | <Badge text="Stable" variant="success" size="small" /> | JSON Schema definitions |
| Audio Interface | <Badge text="Planned" variant="default" size="small" /> | Future: \`audio()\` for speech-to-text, TTS |
| Video Interface | <Badge text="Planned" variant="default" size="small" /> | Future: \`video()\` for video generation |

<Aside type="note" title="Draft Status">
  While individual sections are marked "Stable" to indicate they are complete and internally consistent, the overall specification remains in **Draft** status until 1.2.0 is finalized. Stable sections may still receive minor clarifications before the final release.
</Aside>

`;

  content += formatContent(section1);

  content += `

## What's Next?

<CardGrid>
  <Card title="Design Principles" icon="open-book">
    Learn about the [core principles](/upp/design-principles/) that guide UPP's design.
  </Card>
  <Card title="Architecture" icon="puzzle">
    Understand the [architecture](/upp/architecture/) and data flow.
  </Card>
  <Card title="LLM Interface" icon="rocket">
    Dive into the [LLM specification](/upp/llm/interface/).
  </Card>
  <Card title="Conformance" icon="approve-check">
    Review [conformance requirements](/upp/providers/conformance/) for providers.
  </Card>
</CardGrid>
`;

  return { content, config };
}

function extractUPPErrorHandling(section4: Section): string {
  const retrySubsection = section4.subsections.find((s) =>
    s.id.startsWith("4.3")
  );
  const errorSubsection = section4.subsections.find((s) =>
    s.id.startsWith("4.4")
  );

  let content = `---
title: Error Handling
description: UPP error codes, retry strategies, and error normalization.
---

import { Aside, Badge } from '@astrojs/starlight/components';

# Error Handling

<Badge text="UPP-1.2" variant="note" />

UPP provides standardized error handling and retry strategies across all modalities.

`;

  if (errorSubsection) {
    content += `## Error Structure\n\n${errorSubsection.content}\n\n`;
  }

  if (retrySubsection) {
    content += `## Retry Strategies\n\n${retrySubsection.content}\n\n`;
  }

  content += `
## HTTP Status Code Mapping

Providers MUST map HTTP status codes to UPP error codes:

| HTTP Status | UPP Error Code |
|-------------|----------------|
| 400 | \`INVALID_REQUEST\` (or \`CONTEXT_LENGTH_EXCEEDED\` if indicated) |
| 401 | \`AUTHENTICATION_FAILED\` |
| 403 | \`AUTHENTICATION_FAILED\` or \`QUOTA_EXCEEDED\` |
| 404 | \`MODEL_NOT_FOUND\` |
| 429 | \`RATE_LIMITED\` |
| 500, 502, 503 | \`PROVIDER_ERROR\` |

<Aside type="note">
  Providers should examine error response bodies to determine the most specific error code. For example, a 400 status might be \`CONTEXT_LENGTH_EXCEEDED\` if the error message indicates the input was too long.
</Aside>
`;

  return formatContent({ number: 0, title: "", content, subsections: [] });
}

function combineUPPArchitecture(
  section3: Section,
  section4: Section
): string {
  const config = UPP_CONFIG.sections[3];

  let content = `${generateFrontmatter(config)}

import { Aside, Badge } from '@astrojs/starlight/components';

# Architecture

<Badge text="UPP-1.2" variant="note" />

`;

  content += formatContent(section3);

  let section4Content = "\n\n## Provider Protocol\n\n";
  section4Content += section4.content;

  for (const subsection of section4.subsections) {
    if (subsection.id.startsWith("4.3") || subsection.id.startsWith("4.4")) {
      continue;
    }
    section4Content += `\n\n### ${subsection.title}\n\n`;
    section4Content += subsection.content;
  }

  content += formatContent({
    number: 4,
    title: "",
    content: section4Content,
    subsections: [],
  });

  return content;
}

// ============================================================================
// UAP-Specific Generators
// ============================================================================

function generateUAPOverview(
  specContent: string,
  section1: Section
): { content: string; config: SectionConfig } {
  const config = UAP_CONFIG.sections[1];
  const abstract = extractAbstract(specContent);

  let content = `${generateFrontmatter(config)}

import { Aside, Badge, Card, CardGrid } from '@astrojs/starlight/components';

# UAP-1.0 Specification

<Badge text="Version ${UAP_CONFIG.version}" variant="note" />
<Badge text="Status: ${UAP_CONFIG.status}" variant="success" />
<Badge text="Built on UPP-1.2" variant="tip" />

${abstract}

## Specification Status

| Section | Status | Notes |
|---------|--------|-------|
| **Agent Interface** | <Badge text="Stable" variant="success" size="small" /> | \`agent()\`, options, instance methods |
| **Execution Strategies** | <Badge text="Stable" variant="success" size="small" /> | \`react()\`, \`plan()\`, \`loop()\` |
| **State Management** | <Badge text="Stable" variant="success" size="small" /> | Functional AgentState, immutability |
| **Thread Trees** | <Badge text="Stable" variant="success" size="small" /> | Branching conversations |
| **Sub-Agents** | <Badge text="Stable" variant="success" size="small" /> | \`ask()\`, \`query()\` protocol |
| **Middleware** | <Badge text="Stable" variant="success" size="small" /> | Composable wrappers |
| **Strategy Hooks** | <Badge text="Stable" variant="success" size="small" /> | Execution customization |
| **Streaming** | <Badge text="Stable" variant="success" size="small" /> | Agent stream events |
| **Serialization** | <Badge text="Stable" variant="success" size="small" /> | Checkpointing, persistence |

`;

  content += formatContent(section1);

  content += `

## What's Next?

<CardGrid>
  <Card title="Design Principles" icon="open-book">
    Learn about the [core principles](/uap/design-principles/) that guide UAP's design.
  </Card>
  <Card title="Agent Interface" icon="puzzle">
    Understand the [agent() interface](/uap/agent/interface/).
  </Card>
  <Card title="Execution Strategies" icon="rocket">
    Explore [execution strategies](/uap/agent/strategies/) like react() and plan().
  </Card>
  <Card title="State Management" icon="document">
    Learn about [functional state](/uap/agent/state/) and AgentState.
  </Card>
</CardGrid>
`;

  return { content, config };
}

// ============================================================================
// Generic Section Generator
// ============================================================================

function convertToMdx(
  section: Section,
  config: SectionConfig,
  specConfig: SpecConfig
): string {
  const lines: string[] = [generateFrontmatter(config), ""];

  lines.push(
    `import { Aside, Badge, Card, CardGrid } from '@astrojs/starlight/components';`
  );
  lines.push("");
  lines.push(`# ${config.title}`);
  lines.push("");
  lines.push(`<Badge text="${specConfig.name}-${specConfig.version.split("-")[0]}" variant="note" />`);
  lines.push("");

  const content = formatContent(section);
  lines.push(content);

  return lines.join("\n");
}

// ============================================================================
// Main Generation Functions
// ============================================================================

function generateUPP() {
  console.log("\n--- Generating UPP Documentation ---\n");

  const specContent = readFileSync(UPP_CONFIG.specFile, "utf-8");
  const sections = parseSpec(specContent);
  console.log(`Found ${sections.length} sections\n`);

  const sectionMap = new Map<number, Section>();
  for (const section of sections) {
    sectionMap.set(section.number, section);
  }

  // Clean existing docs (except changelog)
  const filesToClean = [
    "overview.mdx",
    "design-principles.mdx",
    "architecture.mdx",
    "errors.mdx",
    "security.mdx",
    "types.mdx",
    "llm/interface.mdx",
    "llm/messages.mdx",
    "llm/turns.mdx",
    "llm/threads.mdx",
    "llm/streaming.mdx",
    "llm/tools.mdx",
    "llm/structured.mdx",
    "embedding/interface.mdx",
    "image/interface.mdx",
    "providers/implementation.mdx",
    "providers/conformance.mdx",
  ];

  for (const file of filesToClean) {
    const path = join(UPP_CONFIG.outputDir, file);
    if (existsSync(path)) rmSync(path);
  }

  // Ensure directories
  ensureDir(join(UPP_CONFIG.outputDir, "llm/temp"));
  ensureDir(join(UPP_CONFIG.outputDir, "embedding/temp"));
  ensureDir(join(UPP_CONFIG.outputDir, "image/temp"));
  ensureDir(join(UPP_CONFIG.outputDir, "providers/temp"));

  // Generate overview
  const section1 = sectionMap.get(1);
  if (section1) {
    const { content, config } = generateUPPOverview(specContent, section1);
    const outputPath = join(UPP_CONFIG.outputDir, config.outputPath);
    ensureDir(outputPath);
    writeFileSync(outputPath, content);
    console.log(`  [+] ${config.outputPath}`);
  }

  // Generate architecture (combines 3 + 4)
  const section3 = sectionMap.get(3);
  const section4 = sectionMap.get(4);
  if (section3 && section4) {
    const content = combineUPPArchitecture(section3, section4);
    const outputPath = join(UPP_CONFIG.outputDir, UPP_CONFIG.sections[3].outputPath);
    writeFileSync(outputPath, content);
    console.log(`  [+] ${UPP_CONFIG.sections[3].outputPath}`);

    // Generate errors.mdx
    const errorsContent = extractUPPErrorHandling(section4);
    const errorsPath = join(UPP_CONFIG.outputDir, "errors.mdx");
    writeFileSync(errorsPath, errorsContent);
    console.log(`  [+] errors.mdx`);
  }

  // Generate remaining sections
  for (const [sectionNumStr, config] of Object.entries(UPP_CONFIG.sections)) {
    const num = parseInt(sectionNumStr);
    if (num === 1 || num === 3 || num === 4) continue;

    const section = sectionMap.get(num);
    if (!section) {
      console.log(`  [!] Section ${num} not found`);
      continue;
    }

    const content = convertToMdx(section, config, UPP_CONFIG);
    const outputPath = join(UPP_CONFIG.outputDir, config.outputPath);
    ensureDir(outputPath);
    writeFileSync(outputPath, content);
    console.log(`  [+] ${config.outputPath}`);
  }

  // Generate full spec
  generateFullSpec(UPP_CONFIG);

  console.log("\nUPP documentation generated.");
}

function generateUAP() {
  console.log("\n--- Generating UAP Documentation ---\n");

  if (!existsSync(UAP_CONFIG.specFile)) {
    console.log(`  [!] UAP spec file not found: ${UAP_CONFIG.specFile}`);
    return;
  }

  const specContent = readFileSync(UAP_CONFIG.specFile, "utf-8");
  const sections = parseSpec(specContent);
  console.log(`Found ${sections.length} sections\n`);

  const sectionMap = new Map<number, Section>();
  for (const section of sections) {
    sectionMap.set(section.number, section);
  }

  // Clean existing docs
  if (existsSync(UAP_CONFIG.outputDir)) {
    const filesToClean = Object.values(UAP_CONFIG.sections).map(
      (s) => s.outputPath
    );
    for (const file of filesToClean) {
      const path = join(UAP_CONFIG.outputDir, file);
      if (existsSync(path)) rmSync(path);
    }
  }

  // Ensure directories
  ensureDir(join(UAP_CONFIG.outputDir, "agent/temp"));

  // Generate overview
  const section1 = sectionMap.get(1);
  if (section1) {
    const { content, config } = generateUAPOverview(specContent, section1);
    const outputPath = join(UAP_CONFIG.outputDir, config.outputPath);
    ensureDir(outputPath);
    writeFileSync(outputPath, content);
    console.log(`  [+] ${config.outputPath}`);
  }

  // Generate remaining sections
  for (const [sectionNumStr, config] of Object.entries(UAP_CONFIG.sections)) {
    const num = parseInt(sectionNumStr);
    if (num === 1) continue;

    const section = sectionMap.get(num);
    if (!section) {
      console.log(`  [!] Section ${num} not found`);
      continue;
    }

    const content = convertToMdx(section, config, UAP_CONFIG);
    const outputPath = join(UAP_CONFIG.outputDir, config.outputPath);
    ensureDir(outputPath);
    writeFileSync(outputPath, content);
    console.log(`  [+] ${config.outputPath}`);
  }

  // Generate full spec
  generateFullSpec(UAP_CONFIG);

  console.log("\nUAP documentation generated.");
}

// ============================================================================
// Full Spec Generators
// ============================================================================

function escapeForMdx(content: string): string {
  // Convert pseudocode blocks to text
  let result = content.replace(/```pseudocode/g, "```text");

  // Escape generic type syntax to prevent MDX parsing them as JSX
  result = result
    .split("\n")
    .map((line) => {
      if (line.startsWith("```") || line.startsWith("    ")) {
        return line;
      }
      return line.replace(/(\w+)<([^>\/][^>]*)>/g, (match, word, inner) => {
        if (/^[a-z]+$/.test(word) && !inner.includes(",")) {
          return match;
        }
        return `${word}&lt;${inner}&gt;`;
      });
    })
    .join("\n");

  return result;
}

function generateFullSpec(specConfig: SpecConfig): void {
  const specContent = readFileSync(specConfig.specFile, "utf-8");

  // Remove the title line and extract content after it
  const lines = specContent.split("\n");
  let contentStart = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("# ")) {
      contentStart = i + 1;
      break;
    }
  }

  const bodyContent = lines.slice(contentStart).join("\n");
  const escapedContent = escapeForMdx(bodyContent);

  const fullContent = `---
title: "Full ${specConfig.name} Specification"
description: "Complete ${specConfig.name}-${specConfig.version} specification in a single document."
---

import { Aside, Badge } from '@astrojs/starlight/components';

# ${specConfig.name}-${specConfig.version.split("-")[0]} Full Specification

<Badge text="Version ${specConfig.version}" variant="note" />
<Badge text="Status: ${specConfig.status}" variant="${specConfig.status === "Draft" ? "caution" : "success"}" />

<Aside type="tip">
  This is the complete ${specConfig.name} specification in a single document. For easier navigation, use the sidebar to browse individual sections.
</Aside>

${escapedContent}
`;

  const outputPath = join(specConfig.outputDir, "full.mdx");
  writeFileSync(outputPath, fullContent);
  console.log(`  [+] full.mdx (complete specification)`);
}

// ============================================================================
// Main Entry Point
// ============================================================================

function main() {
  console.log("UPP/UAP Spec Documentation Generator");
  console.log("====================================");

  const args = process.argv.slice(2);
  const target = args[0]?.toLowerCase();

  if (target === "upp") {
    generateUPP();
  } else if (target === "uap") {
    generateUAP();
  } else {
    // Generate both
    generateUPP();
    generateUAP();
  }

  console.log("\nDone!");
}

main();

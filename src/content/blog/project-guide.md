---
title: "Simple Guide to This Project"
description: "Understanding the frontmatter schema and content configuration for this Astro blog project"
pubDate: "Oct 25 2025"
tags: ["astro", "guide", "frontmatter", "content", "schema"]
updatedDate: "Oct 25 2025"
---

# Simple Guide to This Project

This blog project is built with **Astro** and uses a well-defined content structure. Let's explore how the frontmatter schema works and what each field means.

## Content Configuration Overview

The project uses Astro's content collections feature to manage blog posts. All configuration is defined in `src/content.config.ts`.

### Current Schema

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
```

## Frontmatter Fields Explained

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | string | Yes | The main title of your blog post that appears in the header and navigation | `"My Awesome Blog Post"` |
| `description` | string | Yes | A brief summary that appears in post previews and meta descriptions for SEO | `"This post explains how to create amazing content with Astro"` |
| `pubDate` | date | Yes | The publication date. Astro automatically converts various date formats | `"Oct 25 2025"` or `"2025-10-25"` |
| `updatedDate` | date | No | When the post was last updated. Shows "Updated: [date]" if provided | `"Oct 26 2025"` |
| `heroImage` | image | No | The featured image that appears at the top of the post and in previews. Must be in `src/assets/` | `"../../assets/blog-placeholder-1.jpg"` |
| `tags` | array | No | Categories to help organize and filter posts. Array of strings | `["astro", "tutorial", "web-development"]` |

**Image Requirements for heroImage:**
- Must be in `src/assets/` directory
- Supports: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- Automatically optimized by Astro

## File Structure

```
src/
├── content/
│   ├── blog/
│   │   ├── post-1.md
│   │   ├── post-2.mdx
│   │   └── subfolder/
│   │       └── post-3.md
│   └── config.ts
└── assets/
    ├── blog-placeholder-1.jpg
    ├── blog-placeholder-2.jpg
    └── hero-image.png
```

## Supported File Types

### Markdown (.md)
Standard Markdown with frontmatter:

```markdown
---
title: "Markdown Post"
description: "A standard markdown post"
pubDate: "Oct 25 2025"
---

# Heading

Your content here...
```

### MDX (.mdx)
Markdown with JSX components:

```mdx
---
title: "MDX Post"
description: "A post with interactive components"
pubDate: "Oct 25 2025"
---

import MyComponent from '../components/MyComponent.astro';

# Interactive Content

<MyComponent prop="value" />
```

## Example Frontmatter Templates

### Minimal Post
```yaml
---
title: "Quick Update"
description: "A brief update on the project"
pubDate: "Oct 25 2025"
---
```

### Full-Featured Post
```yaml
---
title: "Complete Guide to Astro"
description: "Everything you need to know about building with Astro"
pubDate: "Oct 25 2025"
updatedDate: "Oct 26 2025"
heroImage: "../../assets/astro-guide-hero.jpg"
tags: ["astro", "tutorial", "javascript", "web-development"]
---
```

## Development Workflow

1. **Create new post**: Add `.md` or `.mdx` file in `src/content/blog/`
2. **Add frontmatter**: Follow the schema requirements
3. **Write content**: Use Markdown or MDX syntax
4. **Build**: Astro validates schema automatically
5. **Deploy**: All validated content is built statically

## Extending the Schema

To add new fields, modify `src/content.config.ts`:

```typescript
schema: ({ image }) =>
  z.object({
    // Existing fields...
    author: z.string().optional(),
    category: z.enum(["tutorial", "news", "review"]).optional(),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
```

This simple but powerful configuration makes content management efficient 
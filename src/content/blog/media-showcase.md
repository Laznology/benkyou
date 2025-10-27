---
title: "Media Showcase - Video, GIFs, and Images"
description: "A comprehensive showcase of different media types including YouTube videos, animated GIFs, and various image formats in Astro blog posts"
pubDate: "Oct 26 2025"
tags: ["media", "showcase", "youtube", "gif", "images"]
updatedDate: "Oct 26 2025"
---

# Media Showcase

This post demonstrates how to embed various types of media in your Astro blog posts, including YouTube videos, animated GIFs, and different image formats.

## YouTube Video Embeds

You can easily embed YouTube videos using standard HTML iframe tags:

### Usage:

```markdown title="index.md"
<iframe 
  width="100%" 
  height="315" 
  src="https://www.youtube.com/embed/gxBkghlglTg?start=1"
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
  style="border-radius: 8px; margin: 1.5rem 0;">
</iframe>
```

### Output:

<iframe 
  width="100%" 
  height="315" 
  src="https://www.youtube.com/embed/gxBkghlglTg?start=1"
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
  style="border-radius: 8px; margin: 1.5rem 0;">
</iframe>

## Animated GIFs

GIFs add life and personality to your blog posts. Here are some examples:

### Usage:
```markdown title="index.md"
![Frieren](https://imgs.search.brave.com/PqFPZVGlY1nL5z3jAFqbe0AA8vfz6gfpN7fy8xAJpPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZp/bWFnZS5uZXQvcHJl/dmlld3MvZnJpZXJl/bi1mcmllcmVuLWFu/aW1lLXhva2Rwd2Eu/Z2lm.gif)

![Typing Code](https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif)

```
### Output:
![Frieren](https://imgs.search.brave.com/PqFPZVGlY1nL5z3jAFqbe0AA8vfz6gfpN7fy8xAJpPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZp/bWFnZS5uZXQvcHJl/dmlld3MvZnJpZXJl/bi1mcmllcmVuLWFu/aW1lLXhva2Rwd2Eu/Z2lm.gif)

![Typing Code](https://media.giphy.com/media/13GIgrGdslD9oQ/giphy.gif)

import fs from "fs"
import path from "path"
import inquirer from "inquirer"

function getDate(){
    const today = new Date()
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return today.toLocaleDateString('en-US', options)
}

function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') 
        .replace(/\s+/g, '-') 
        .replace(/-+/g, '-') 
        .trim()
}

function createFrontmatter(title) {
    const pubDate = getDate()
    
    return `---
title: "${title}"
description: ""
pubDate: "${pubDate}"
updatedDate: "${pubDate}"
heroImage: ""
tags: []
---

`
}

async function main() {
    const {ext, title} = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter post title:",
            validate: (input) => input.trim() !== "" || "Title cannot be empty"
        },
        {
            type: "list",
            name: "ext",
            message: "File type:",
            choices: ["md", "mdx"],
            default: "md",
        }
    ])

    const filename = createSlug(title)
    const fullFilename = `${filename}.${ext}`
    const filePath = path.join("src", "content", "blog", fullFilename)
    
    if (fs.existsSync(filePath)) {
        console.error(`Error: File ${fullFilename} already exists in src/content/blog/`)
        console.log(`Suggestion: Try a different title or check existing posts`)
        process.exit(1)
    }
    
    const frontmatter = createFrontmatter(title)
    
    const content = `${frontmatter}# ${title}

Write your blog post content here...

`
    
    try {
        fs.writeFileSync(filePath, content)
        console.log(`Blog post created successfully!`)
        console.log(`Title: ${title}`)
        console.log(`File: ${filePath}`)
        console.log(`Publication Date: ${getDate()}`)
        console.log(`\nYou can now edit the description and add content to your post!`)
    } catch (error) {
        console.error(`Error creating file: ${error.message}`)
        process.exit(1)
    }
}

main().catch(console.error)
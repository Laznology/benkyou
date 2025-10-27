---
title: "Expressive Code Features Guide"
description: "A comprehensive guide to Expressive Code features including syntax highlighting, editor frames, text markers, and line numbers"
pubDate: "Oct 24 2025"
heroImage: "../../assets/blog-placeholder-3.jpg"
tags: ["astro", "expressive-code", "tutorial", "markdown"]
updatedDate: "Oct 27 2025"
---
# Expressive Code Features

This post demonstrates the powerful features available in Expressive Code, a syntax highlighting and code presentation plugin for Astro.

## Syntax Highlighting

Expressive Code provides beautiful syntax highlighting for multiple programming languages. Below, each feature shows its markdown usage and the output:

### JavaScript Example
**Usage:**
````markdown title="index.md"
```js 
function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

greet('World');
```
````

**Output:**

```js
function greet(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

greet('World');
```

### Python Example
**Usage:**
````markdown title="index.md"
```python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {calculate_fibonacci(i)}")
```
````

**Output:**

```python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {calculate_fibonacci(i)}")
```

## Editor & Terminal Frames

### Editor Frame
**Usage:**
````markdown title="index.md"
```js title="app.js"
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
````

**Output:**

```js title="app.js"
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Terminal Frame
**Usage:**
````markdown title="index.md"
```bash frame="terminal"
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```
````

**Output:**

```bash frame="terminal"
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

### ANSI Colors in Terminal

**Usage:**
````markdown title="index.md"
```ansi
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```
````

**Output:**
```ansi
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```

## Text & Line Markers

### Highlighting Specific Lines
**Usage:**
````markdown title="index.md"
```js {3-5}
function processData(data) {
  // Validate input
  if (!data || data.length === 0) {
    throw new Error('Data cannot be empty');
  }
  
  // Process the data
  return data.map(item => item.value * 2);
}
```
````

**Output:**

```js {3-5}
function processData(data) {
  // Validate input
  if (!data || data.length === 0) {
    throw new Error('Data cannot be empty');
  }
  
  // Process the data
  return data.map(item => item.value * 2);
}
```

### Marking Additions and Deletions
**Usage:**
````markdown title="index.md"
```js ins={3} del={2}
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
```
````

**Output:**

```js ins={3} del={2}
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}
```

### Multiple Line Markers
**Usage:**
````markdown title="index.md"
```typescript {1, 8-10} ins={4-6} del={2}
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import preact from '@astrojs/preact';
import solid from '@astrojs/solidjs';

export default defineConfig({
  integrations: [svelte(), preact(), solid()],
});
```
````

**Output:**

```typescript {1, 8-10} ins={4-6} del={2}
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import preact from '@astrojs/preact';
import solid from '@astrojs/solidjs';

export default defineConfig({
  integrations: [svelte(), preact(), solid()],
});
```

### Text Markers with Labels
**Usage:**
````markdown title="index.md"
```js "useState" "useEffect" /count\w+/
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countDouble, setCountDouble] = useState(0);
  
  useEffect(() => {
    setCountDouble(count * 2);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {countDouble}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
````

**Output:**

```js "useState" "useEffect" /count\w+/
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countDouble, setCountDouble] = useState(0);
  
  useEffect(() => {
    setCountDouble(count * 2);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {countDouble}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Word Wrap

### Word Wrap Feature
**Usage:**
````markdown title="index.md"
```js wrap
const veryLongString = "This is an extremely long string that would normally extend far beyond the visible area of a code block, but with word wrap enabled, it will automatically wrap to the next line to ensure all content remains visible without horizontal scrolling.";

const anotherLongLine = someFunction(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9, parameter10);
```
````

**Output:**

```js wrap
const veryLongString = "This is an extremely long string that would normally extend far beyond the visible area of a code block, but with word wrap enabled, it will automatically wrap to the next line to ensure all content remains visible without horizontal scrolling.";

const anotherLongLine = someFunction(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7, parameter8, parameter9, parameter10);
```

## Line Numbers

### With Line Numbers (Default)
**Usage:**
````markdown title="index.md"
```js showLineNumbers
class TodoList {
  constructor() {
    this.todos = [];
  }
  
  addTodo(text) {
    const todo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }
  
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}

const myList = new TodoList();
myList.addTodo('Learn Astro');
myList.addTodo('Build a website');
```
````

**Output:**

```js showLineNumbers
class TodoList {
  constructor() {
    this.todos = [];
  }
  
  addTodo(text) {
    const todo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    this.todos.push(todo);
    return todo;
  }
  
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}

const myList = new TodoList();
myList.addTodo('Learn Astro');
myList.addTodo('Build a website');
```

### Without Line Numbers
**Usage:**
````markdown title="index.md"
```js showLineNumbers=false
// Simple utility functions
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US').format(date);
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
```
````

**Output:**

```js showLineNumbers=false
// Simple utility functions
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US').format(date);
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
```

### Custom Starting Line Number
**Usage:**
````markdown title="index.md"
```js startLineNumber=42
function searchArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}
```
````

**Output:**

```js startLineNumber=42
function searchArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}
```

## Blockquote with attribution

**Syntax**
````markdown title="index.md"
```markdownxp 
> Don't communicate by sharing memory, share memory by communicating.
> — <cite>Rob Pike[^1]</cite>
```
````

**Output**
> "Don't communicate by sharing memory, share memory by communicating.
> 
> — Rob Pike"

### Multiple Features Combined
**Usage:**
````markdown title="index.md"
```typescript title="config/database.ts" {8-12} ins={15-17} showLineNumbers
import { Pool } from 'pg';

interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  max: number;
  idleTimeoutMillis: number;
  connectionTimeoutMillis: number;
}

const config: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'myapp',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

export const pool = new Pool(config);
```
````

**Output:**

```typescript title="config/database.ts" {8-12} ins={15-17} showLineNumbers
import { Pool } from 'pg';

interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  max: number;
  idleTimeoutMillis: number;
  connectionTimeoutMillis: number;
}

const config: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'myapp',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

export const pool = new Pool(config);
```

## Conclusion

Expressive Code provides a rich set of features that make code presentation in your documentation and blog posts both beautiful and functional. These features help readers understand code better by highlighting important sections, showing context with filenames, and maintaining readability with proper formatting.

For inline code examples, you can use single backticks like `console.log()`, `npm install`, or `const variable = 'value'`. This should show as styled inline code blocks.

Try experimenting with these features in your own Astro projects!

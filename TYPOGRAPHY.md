# Typography Setup Guide

This project now has a comprehensive typography system configured with Tailwind CSS. Here's how to use it:

## Heading Classes

Use semantic HTML tags with automatic styling:

```tsx
<h1>Main Page Title</h1>      {/* 2.5rem, bold */}
<h2>Section Title</h2>        {/* 2rem, bold */}
<h3>Subsection Title</h3>     {/* 1.5rem, semibold */}
<h4>Tertiary Title</h4>       {/* 1.25rem, semibold */}
<h5>Quaternary Title</h5>     {/* 1.125rem, semibold */}
<h6>Smallest Heading</h6>     {/* 1rem, semibold */}
```

Or use Tailwind classes directly:

```tsx
<p className="text-h1">This is heading 1 sized text</p>
<div className="text-h2">This is heading 2 sized text</div>
```

## Body Text Classes

```tsx
<p className="text-body-lg">Large body text: 1.125rem</p>
<p className="text-body-base">Regular body text: 1rem (default)</p>
<p className="text-body-sm">Small body text: 0.875rem</p>
<p className="text-body-xs">Extra small text: 0.75rem</p>
```

## Font Families

Three font families are available:

```tsx
<p className="font-sans">Default sans-serif (Inter)</p>
<p className="font-serif">Serif font (Merriweather)</p>
<p className="font-mono">Monospace font (Fira Code)</p>
```

## Semantic Text Elements

These are automatically styled:

```tsx
<strong>Bold/Important text</strong>      {/* Font weight 600 */}
<em>Emphasized/Italic text</em>          {/* Italic style */}
<small>Small text</small>                {/* text-body-sm */}
<code>Inline code snippet</code>         {/* Monospace with background */}
<pre><code>Multi-line code block</code></pre> {/* Code block with padding */}
<blockquote>Quoted text</blockquote>     {/* Left border accent */}
<sub>Subscript</sub> and <sup>Superscript</sup>
```

## Letter Spacing

Control letter spacing with Tailwind utilities:

```tsx
<p className="tracking-normal">Normal spacing</p>
<p className="tracking-wide">Wide spacing (0.02em)</p>
<p className="tracking-wider">Wider spacing (0.05em)</p>
<p className="tracking-widest">Widest spacing (0.1em)</p>
```

## Color Classes

Dark mode aware text colors:

```tsx
<p className="text-gray-900 dark:text-white">Primary text</p>
<p className="text-gray-700 dark:text-gray-300">Secondary text</p>
<p className="text-gray-600 dark:text-gray-400">Tertiary text</p>
<p className="text-blue-600 dark:text-blue-400">Link color</p>
```

## Typography Plugin Features

The `@tailwindcss/typography` plugin provides rich article styling:

```tsx
<article className='prose prose-lg dark:prose-invert max-w-none'>
  <h1>Article Title</h1>
  <p>Article content with perfect typography...</p>
  <h2>Section</h2>
  <p>More content with automatic spacing and styling.</p>
</article>
```

Available prose sizes: `prose-sm`, `prose`, `prose-lg`, `prose-xl`

## Best Practices

1. **Use semantic HTML**: Always prefer `<h1>`, `<h2>`, `<p>`, etc. over divs
2. **Dark mode support**: All colors work seamlessly in dark mode
3. **Responsive text**: Consider using responsive size classes
4. **Headings**: Use proper heading hierarchy (h1 → h6)
5. **Line length**: Keep line length around 60-80 characters for readability
6. **Letter spacing**: Use wider spacing for headlines, normal for body text

## Features Included

✅ Google Fonts integration (Inter, Merriweather, Fira Code)
✅ Complete font size system with line heights
✅ Proper heading hierarchy
✅ Dark mode support for all typography
✅ Semantic HTML element styling
✅ Letter spacing utilities
✅ Typography plugin for rich content
✅ Font smoothing for better rendering
✅ Selection color styling

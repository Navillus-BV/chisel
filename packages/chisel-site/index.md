---
layout: home.html
title: Chisel - A minimalist CSS framework
description: A minimalist CSS framework
---

## ...Another CSS framework?

Yes, but hopefully not for long! The goal of `chisel.css` is to provide the out of the box experience that HTML elements should have been given.

Our goal with `chisel` is to call attention to the need for improving the default style of HTML elements. If we succeed, browsers will focus more effort on default element styles and `chisel` will be whittled down to an empty CSS file.

## Getting Started

### Download

Install with NPM (or yarn, or pnpm)

```bash
npm i -S chisel.css
```

or from CDN

```html
<link href="https://unpkg.com/chisel.css" rel="stylesheet" />
```

### CSS Variables

`chisel.css` uses CSS variables for all our colors making it dead simple to change themes, add your own dark mode, etc.

```css
:root {
  --chisel-primary: #325476;
  --chisel-secondary: #0b70ba;
  --chisel-neutral-50: #f9fafb;
  --chisel-neutral-100: #f3f4f6;
  --chisel-neutral-200: #e5e7eb;
  --chisel-neutral-300: #d1d5db;
  --chisel-neutral-400: #9ca3af;
  --chisel-neutral-500: #6b7280;
  --chisel-neutral-600: #4b5563;
  --chisel-neutral-700: #374151;
  --chisel-neutral-800: #1f2937;
  --chisel-neutral-900: #111827;
}
```

`--chisel-primary` is the primary brand color used, by default it is the same blue color as `chisel.css`'s logo. `--chisel-secondary` is used as an accent color for things like links. The `--chisel-neutral` colors are shades of gray used out of the box for backgrounds, text color, borders, etc.

Because these are native CSS variables, you can override them globally on your page or scope color changes for particular sections of your site.

#### Dark Mode

Dark mode support is added by default!

##### `prefers-color-scheme`

`chisel.css` will use dark mode automatically based on browser's built-in [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query.

##### `data-chisel-theme="dark"`

Themes can also be changed dynamically by adding a `data-chisel-theme` attribute to the any HTML element.

```html
<html data-chisel-theme="dark">
  <!-- Dark mode enabled -->
</html>
```

Because chisel is built on CSS variables, portions of a page can actually use different themes. This can be particularly helpful when a section of content on a page needs to be themed differently for emphasis.

```html
<body>
  <section>
    <!-- normal theme -->
  </section>

  <section data-chisel-theme="dark">
    <!-- emphasised block of content in another theme -->
  </section>

  <section>
    <!-- back to the normal theme -->
  </section>
</body>
```

**WIP** We plan to add multiple color pallettes into `chisel.css` in the future. Star the [GitHub repo](https://github.com/navillus-bv/chisel) to follow the latest updates. Even better, create your own themes and file a PR to have them included out of the box!

### Typography

Proper type scaling can make all the difference in a design. `chisel.css` defaults headers to scale based on on the Major Third type scale, see [type-scale.com](https://type-scale.com/) for more details.

:rotating_light: Before the Github issues start piling up...yes we purposely chose to go with `h1, h2, h3, h4, h5, h6` for naming both the CSS variables and helper classes for type scaling. If that rubs you the wrong way, first consider how much easier to understand `class="h1"` is compared to `class="text-4xl"`.

#### Typography CSS Variables

Type scaling is also exposed with CSS Variables. Do you prefer the larger range of header sizes with the Perfect Fourth scale? No problem, override these variables in your CSS and you're all set.

```css
:root {
  --chisel-h1: 3.052rem;
  --chisel-h2: 2.441rem;
  --chisel-h3: 1.953rem;
  --chisel-h4: 1.563rem;
  --chisel-h5: 1.25rem;
  --chisel-h6: 0.8rem;
}
```

#### Typography `font-size` Classes

DOM heirarchy is important for both SEO and accessibility. Sometimes you just need a visually smaller header before a visually larger one - `chisel.css` has you covered.

```css
.h1 {
  font-size: var(--chisel-h1);
}
.h2 {
  font-size: var(--chisel-h2);
}
.h3 {
  font-size: var(--chisel-h3);
}
.h4 {
  font-size: var(--chisel-h4);
}
.h5 {
  font-size: var(--chisel-h5);
}
.h6 {
  font-size: var(--chisel-h6);
}
```

Add the `h4` class to your `<h1>` for the best of both worlds. Symantically your `<h1>` comes before the subheaders while visually the other headers are emphasized.

## Prism Support

Do you use [Prism](https://prismjs.com/) for syntax highlighting? We've got you covered!

### Installed from NPM

If you installed from NPM, just include `chisel.css/chisel-prism.css` (or `chisel-prism.min.css`). Depending on your build setup you may need to include the stylesheet directly from `chisel.css/dist/chisel-prism.min.css`.

### Including from CDN

Including chisel's Prism theme can also be handled from the CDN.

```html
<link
  href="https://unpkg.com/chisel.css/chisel-prism.min.css"
  rel="stylesheet"
/>
```

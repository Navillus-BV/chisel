<div align="center">
  <a href="https://npmjs.org/package/chisel.css">
    <img src="https://badgen.now.sh/npm/v/chisel.css" alt="version" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="code style: prettier">
  </a>
</div>

<a align="center" href="https://github.com/Navillus-BV/chisel"><img width="100%" src="/assets/banner.svg" alt="Chisel - A minimalist CSS framework."></a>

> A minimalist CSS framework.

## Full Documentation

`chisel.css` is still very new, a full documentation site is still in the works. Star this repo and keep an eye out for updates!

## ...Another CSS framework?

Yes, but hopefully not for long! The goal of `chisel.css` is to provide the out of the box experience that HTML elements should have been given. Our measure of success with `chisel` is to become whittled down to nothing as browser vendors throw some extra attention behind elements' default styles.

## What it is

-   a cross-browser visual reset, because most browsers ignore default styling
-   concerned exclusively with HTML elements, not JS libraries or custom elements
-   built on the latest browser features like **CSS variables**
-   built with [autoprefixer](https://github.com/postcss/autoprefixer) and [Browserlist](https://github.com/browserslist/browserslist) to support most browsers _(using default browserlist settings)_

## What it isn't

-   a full component library...sorry, no card components or toggle switches here
-   a layout engine...`flexbox` and `grid` are your friends these days
-   a browser reset, though we do encourage using your reset of choice along site `chisel.css`
    -   Not sure which reset to use? We prefer [sanitize.css](https://github.com/csstools/sanitize.css), but there are plenty of excellent options out there

## Download

Install with NPM (or yarn, or pnpm)

```sh
npm i -S chisel.css
```

or from CDN

```html
<link href="https://unpkg.com/chisel.css" rel="stylesheet" />
```

## CSS Variables

`chisel.css` uses CSS variables for all our colors making it dead simple to change themes, add your own dark mode, etc.

```css
:root {
    --chisel-primary: #325476;
    --chisel-neutral-50: #f9fafb;
    --chisel-neutral-200: #e5e7eb;
    --chisel-neutral-300: #d1d5db;
    --chisel-neutral-500: #6b7280;
    --chisel-neutral-700: #374151;
    --chisel-neutral-900: #111827;
}
```

`--chisel-primary` is the primary brand color used, by default it is the same blue color as `chisel.css`'s logo. The `--chisel-neutral` colors are shades of gray used out of the box for backgrounds, text color, borders, etc.

Because these are native CSS variables, you can override them globally on your page or scope color changes for particular sections of your site.

## Typography

Proper type scaling can make all the difference in a design. `chisel.css` defaults headers to scale based on on the Major Third type scale, see [type-scale.com](https://type-scale.com/) for more details.

:rotating_light: Before the Github issues start piling up...yes we purposely chose to go with `h1, h2, h3, h4, h5, h6` for naming both the CSS variables and helper classes for type scaling. If that rubs you the wrong way, first consider how much easier to understand `class="h1"` is compared to `class="text-4xl"`.

### Typography CSS Variables

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

### Typography `font-size` Classes

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

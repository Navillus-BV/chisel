# Eleventy Skeleton

Inspired by [Possibly the Easiest Way to Run An SSG](https://css-tricks.com/possibly-the-easiest-way-to-run-an-ssg/).

No dependencies. No plugins. No preprocessors. Just make a static website.

Out of the box Netlify deploys. Includes mini CSS reset by Eric Meyer.

## Increase your power levels

1. [Add sass](https://egghead.io/lessons/11ty-add-sass-compiling-and-watch-for-changes-in-eleventy-11ty)
3. [Add HTML templating](https://www.11ty.dev/docs/languages/)
4. [Add JS transpilation/webkit](https://statickit.com/guides/eleventy-webpack)
5. [Add favicons/device icons](https://www.favicon-generator.org/)
6. [Add a sitemap](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap)
7. [Configure eleventy](https://www.11ty.dev/docs/watch-serve/)

## Commands

These commands assume you're in a unix environment, but they should work anywhere `npx`/`npm` is available.

### Develop

```sh
$ npx @11ty/eleventy --serve
```

### Build

```sh
$ npx @11ty/eleventy
```

## Netlify

First, enable your Eleventy Skeleton repo on Netlify's interface.

When prompted, clear the `build` and `publish` fields (that's what your `netlify.toml` is for). Then set your deploy branch (e.g., `main`).

Now each time you push to your deploy branch you'll also deploy your most recent changes. 🎉

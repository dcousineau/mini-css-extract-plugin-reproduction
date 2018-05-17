Minimal Reproduction Case for Mini CSS Extract Plugin
===

Steps
---

1. Run `npm install`
2. Run `npm build`
3. Open `without-styles-js.html`, notice JS files and styles load, but do not execute.
4. Open `dist/index.html`, notice the file executes

Expected Behavior
---

The difference between the files is `without-styles-js.html` removes the script tag pointing to `styles.js` which most users (at least myself) would think should't be required.

The contents of `styles.js` you can see for yourself, but they're merely 3 empty webpackJsonp modules noting that the contents have been extracted by the plugin.
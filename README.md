# mime-types

The ultimate javascript content-type utility.

Similar to [the `mime@1.x` module](https://www.npmjs.com/package/mime), except:

- __No fallbacks.__ Instead of naively returning the first available type,
  `mime-types` simply returns `false`, so do
  `var type = mime.lookup('unrecognized') || 'application/octet-stream'`.
- No `new Mime()` business, so you could do `var lookup = require('mime-types').lookup`.
- No `.define()` functionality
- Bug fixes for `.lookup(path)`

Otherwise, the API is compatible with `mime` 1.x.

This fork is intended to be used where node's libraries are not available. Our main goal was using it with React-Native.

## Install

This fork of [mime-types](https://github.com/jshttp/mime-types) is not published on the [npm registry](https://www.npmjs.com/).
If you have access to our private repository you can install using `npm install @keeex/mime-types`.

It is otherwise possible to install the package by hand.
First, clone this repository; install dependencies, then build package.
Finally, install in your project.
```Shell
/ $ git clone https://github.com/KeeeX/mime-types.git
/ $ cd mime-types
/mime-types $ npm install
/mime-types $ npm pack
/mime-types $ cd ../your_project
/your_project $ npm install ../mime-types/keeex-mime-types-2.1.26.tgz
```

## Adding Types

All mime types are based on [mime-db](https://www.npmjs.com/package/mime-db),
so open a PR there if you'd like to add mime types.

## API

In node:
<!-- eslint-disable no-unused-vars -->

```js
var mime = require('mime-types')
```

If your JavaScript engine does not have a `path` module, you have to provide your own implementation of `extname()`:
```js
var extname = require('some-other-library')
var mime = require('mime-types/base').mime(extname)
```

All functions return `false` if input is invalid or not found.

### mime.lookup(path)

Lookup the content-type associated with a file.

<!-- eslint-disable no-undef -->

```js
mime.lookup('json') // 'application/json'
mime.lookup('.md') // 'text/markdown'
mime.lookup('file.html') // 'text/html'
mime.lookup('folder/file.js') // 'application/javascript'
mime.lookup('folder/.htaccess') // false

mime.lookup('cats') // false
```

### mime.contentType(type)

Create a full content-type header given a content-type or extension.
When given an extension, `mime.lookup` is used to get the matching
content-type, otherwise the given content-type is used. Then if the
content-type does not already have a `charset` parameter, `mime.charset`
is used to get the default charset and add to the returned content-type.

<!-- eslint-disable no-undef -->

```js
mime.contentType('markdown') // 'text/x-markdown; charset=utf-8'
mime.contentType('file.json') // 'application/json; charset=utf-8'
mime.contentType('text/html') // 'text/html; charset=utf-8'
mime.contentType('text/html; charset=iso-8859-1') // 'text/html; charset=iso-8859-1'

// from a full path
mime.contentType(path.extname('/path/to/file.json')) // 'application/json; charset=utf-8'
```

### mime.extension(type)

Get the default extension for a content-type.

<!-- eslint-disable no-undef -->

```js
mime.extension('application/octet-stream') // 'bin'
```

### mime.charset(type)

Lookup the implied default charset of a content-type.

<!-- eslint-disable no-undef -->

```js
mime.charset('text/markdown') // 'UTF-8'
```

### var type = mime.types[extension]

A map of content-types by extension.

### [extensions...] = mime.extensions[type]

A map of extensions by content-type.

## License

[MIT](LICENSE)

[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/mime-types/master
[coveralls-url]: https://coveralls.io/r/jshttp/mime-types?branch=master
[node-version-image]: https://badgen.net/npm/node/mime-types
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/mime-types
[npm-url]: https://npmjs.org/package/mime-types
[npm-version-image]: https://badgen.net/npm/v/mime-types
[travis-image]: https://badgen.net/travis/jshttp/mime-types/master
[travis-url]: https://travis-ci.org/jshttp/mime-types

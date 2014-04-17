
# Bedbug

  Bedbug is a debug component that feed exclusively on your application logs.

  Bedbug has been built for **[wall](http://github.com/bredele/wall)**.

## Installation

  with [component](http://github.com/component/component):

    $ component install bredele/bedbug

  with [browserify](http://browserify.org/):

    $ npm install bedbug
## Usage

 Print log (with path and humanized timestamp) if debug mode is enabled.

```js
var debug = require('bedbug');
var app = wall();

app.use(debug);
app.debug('hello');
// => nothing

app.enable('debug');
app.debug('hello %s', 'world');
// => /: hello world +0ms
```

## Tips

 **[wall](http://github.com/bredele/wall)** allows you to inject plugins and configs into a type of app in order to not repeat yourself.

```js
var wall = require('wall');
wall
  .inject('debug', {
    debug: true
  })
  .use(debug);

//app is in debug mode by default
var app = wall('debug');
app.debug('hello')
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <olivier.wietrich@gmail.com> Olivier Wietrich

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
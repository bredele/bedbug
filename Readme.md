
# debug-plumby

  Debug plugin for [plumby](http://github.com/bredele/plumby)

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/debug-plumby


## Usage

 Print log (with path and humanized timestamp) if debug mode is enabled.

```js
var debug = require('debug');
var app = plumby();

app.use(debug);
app.debug('hello');
// => nothing

app.enable('debug');
app.debug('hello %s', 'world');
// => /: hello world +0ms
```

## Tips

 [Plumby](http://github.com/bredele/plumby) allows you to inject plugins and configs into a type of app in order to not repeat yourself.

```js
var plumby = require('plumby');
plumby
  .inject('debug', {
    debug: true
  })
  .use(debug);

//app is in debug mode by default
var app = plumby('debug');
app.debug('hello')
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

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
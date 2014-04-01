# each

  Iteration utility

## Installation

with component:

    $ component install bredele/each

with nodejs:

    $ npm install each-bredele

## API

### each(array, fn, [scope])

  Iterate an array:

```js
each(['olivier', 'bredele'], function(key, val){
  //key is the array's index
})
```

### each(object, fn, [scope])

  Iterate an object;

```js
each(conf, function(key, val){
  
})
```


## License

  MIT

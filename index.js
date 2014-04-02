
/**
 * Expose 'debug'
 */

module.exports = function(ctx, opts) {
  var timestamp;

  /**
   * Format console.log
   * @api private
   */
  
  var format = function(fmt) {
    var name = ctx._route;
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (timestamp || curr);
    timestamp = curr;

    fmt = name
      + ' : '
      + fmt
      + ' +' + humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  };


  /**
   * Log message if debug mode is enabled.
   * example:
   *
   *   app.use(debug);
   *   app.enable('debug');
   *   app.debug('hello world');
   *   
   * @api public
   */
  
  ctx.debug = function() {
    if(ctx.enabled('debug')) format.apply(null, arguments);
  };

};


/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

function humanize(ms) {
  var sec = 1000;
  var min = 60 * 1000;
  var hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
}

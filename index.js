module.exports = maybef;

function maybef(maybe_function){
  return function(){
    var maybe_function_args = Array.prototype.slice.apply(arguments);
    if (typeof maybe_function === 'function'){
      maybe_function.apply(null, maybe_function_args);
    }
  }
}
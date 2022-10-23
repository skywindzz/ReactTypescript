// Type annotation for functions are codes we add to tell typescript what type of arguments a function will receive and what type of value it will return.

//type inference for functions is where typescript tries to figure out what type of value a function will return it does not work on the arguments

const add = (a: number, b: number): number => {
  return a + b;
};

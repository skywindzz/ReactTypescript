const today = new Date();
//once typescript recognize the type of something it can give suggestions on the functions that can be used with that type
today.getMonth();

const person = {
  age: 20,
};

class Color {}

const red = new Color();

//any type
const json = ‘{ “x”: 10, “y”: 20}’;

const coordinates = JSON.parse(json);

console.log(coordinates);  // {x:10, y:20}

//The reason for that is when we use json the input is always a string and what comes out of it depends on what is in the string and typescript cannot predict it.  Any type usually means typescript have no idea what type is been returned
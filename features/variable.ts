//this tells typescript we are only going to assign number type to the variable apples.  You'll see an error message if you assign apple any other value other than number.
let apples: number = 5;

apples = 'hello';


//to fix any fuctiopn that javascript will return an any type(ex.JSON)  it's one of the three times we use type annotation, 

const json:string = ‘{ “x”: 10, “y”: 20}’;

const coordinates: { x:number, y:number } = JSON.parse(json)

console.log(coordinates); // { x: 10, y:20 };

//when we declare a variable on one line and initalizate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;  //here you don't assign a value so you'll need to assign it's type first to avoid this varaible have any type

for (i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;

  }
}


//variable whose type cannot be inferred correctly ex. you might want to assign two different types on to one variable using the or(|) operator depend on the result of your function 

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
//this tells typescript we are only going to assign number type to the variable apples.  You'll see an error message if you assign apple any other value other than number.
let apples: number = 5;

apples = 'hello';


//to fix the any type in json function need type annotation, it's one of the three times we use type annotation

const json:string = ‘{ “x”: 10, “y”: 20}’;

const coordinates: { x:number, y:number } = JSON.parse(json)

console.log(coordinates); // { x: 10, y:20 };
//type infereence happens when you deeclear an array when same type in an array, you can annotate but its unnecessary  
// const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const carMakers = ['ford', 'toyota', 'chevy'];

//the case for annotating an array is when you are declearing an array that's empty otherwise an empty array is assigned any type which we ewant to avoid

const cars: string[] = [];
const dates = [new Date(), new Date()]

//in order to annotate a two dimensional array 

// const carByMake: string[][] = [];  you don't have to do this unless the array is empty and need to know what type it's going to receive if you already some data inside then typescript will use type inference.

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

//when we typed array it will also Help with inference when extrating values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values here we get an error when trying to add a number into string array

carMakers.push(100);

//Help with map and other methods, if typescript knows what type of variable then it can give you suggestions on the method of that type
carMakers.map((car: string): string): string => { 
  return car.toUpperCase();
})

//flexible types array, to declear you can dspecify the types that's in the array and typescript will automatically infer it if you specifically need to annotate, then 

const multipleTypes: (Date | string)[] = [];
multipleTypes.push(100); //you see error because you try to push number into an array with Date and string only. 

const importantDates = [new Date(), '2030-10-10'];



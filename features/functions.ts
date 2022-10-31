// Type annotation for functions are codes we add to tell typescript what type of arguments a function will receive and what type of value it will return.

//type inference for functions is where typescript tries to figure out what type of value a function will return it does not work on the arguments

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

//annotation for anaomous functionannotation for arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};


//Void and Never;  void means this function doesn't return anything, never is when a function will never 
const logger = (message: string): void => {
  console.log(message);
};  
 
const throwError = (message: string): never => { 
  throw new Error(message);
})

//destructuring with annotations
const logWeather = {
  date: new Date();
  weather: 'sunny';
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

//To destructure and pull out the value in a function

const logWeather = ({ date, weather }: { date: Date, weather: string }) => { 
  console.log(date);
  console.log(weather);
}

//Annotation in objects

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
   }
}

//notice when you do destrucuring, you have to specify the property seperately instead of just doing { age } : number.   
const { age }: { age: number } = profile;
const { age, name }: { age: number, name: string } = profile;

const { coords: { lat, lng } }: { coords: { lat:number, lng:number} } = profile;
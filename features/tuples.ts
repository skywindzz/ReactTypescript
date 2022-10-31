//tuples: array like structure where each element represent some property of a record, this means that the order of the way you put information in the array is important

let coke = {
  color: 'brown',

  carbinated: true,

  sugar: 40,
};

  //In a tupple array you lose the property of the object and just put in values, the fix order of the information will present as the property  instead.

  //here we have a array not annotated, the problem here is that from inference this array could have string, boolean and number inside it instead of having values in certain oreder.  In this case we need a tupple

  //const pepsi = ['brown', true, 40];  instead of using this we use a tupple
type Drink = [string, boolean, number];

//you can declar tupple when declearing the the array

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40; 

//or you can use a tuple with type alias

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0;


//usually you won’t use tuple much because they don’t have property so you don’t know what is inside the array, most of time you’ll just use object

const carSpecs:[number, number] = [400, 3354];

const carStats = {

horsePower: 400,

weight: 3354

}

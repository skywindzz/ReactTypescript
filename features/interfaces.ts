//The problem with this is that it is not reusable, everytime you try to use vehicle as input for another function you'll have declear the type in the oldcivic, in this situation we can declare interace

//using interface decide what's required inside a variable that has a type. typescript will check if the variable has the required properties

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name} is ${this.broken ? 'broken' : 'working'}`;
  }

/* const printVehicle = (vehicle: { name: string; year: number; broken: boolean }):void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${ vehicle.year }`);
  console.log(`Broken: ${vehicle.broken}`);
}
*/

const printVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

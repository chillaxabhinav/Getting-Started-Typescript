// ============ Advanced Types ============= //

type Admin = {
    name : string;
    privileges : string[]
}

type Employee = {
    name : string;
    startDate : Date;
}

type ElevatedEmployee = Admin & Employee; // Combines both type definition in case of object, it is just like interface extends keyword it also provide same functionality.

let myElevated:ElevatedEmployee = {
    name : 'Abhinav',
    privileges : ["Admin"],
    startDate : new Date()
}


type Combinable = string | number;

type Numeric = number | boolean;

type output = Combinable & Numeric;  // Intersection of type is being taken means the output type is number, If nothing comes in intersection then "never" type is assigned as result.

// const paragraph = document.getElementById('message-output')! as HTMLElement;  // First way for Type Casting

const paragraph = <HTMLElement>document.getElementById('message-output')!; // Second wayn for Type Casting

console.log(paragraph);

// =========== Below is a type of functional overloading ================ //

// function add(a: number, b:number):number;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string{
//     if(typeof a == "string" || typeof b == 'string'){
//         return a.toString() + b.toString();
//     }
//     return a+b; 
// }


const fetchedUserData = {
    id : 'u1',
    name : "Abhinav",
    job : {
        title : "Software Engineer 1"
    }
}


console.log(fetchedUserData?.job?.title);    // Optional Chaining

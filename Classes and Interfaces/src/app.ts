// =========== Interface ============= //

interface Person {
    name : string;

    age : number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name : "Abhinav",
    age : 22,
    greet(phrase: string){
        console.log(phrase);
    }
}

// user1.greet("Hi I am Abhinav");

interface Named {
    readonly name : string;
}


interface Greetable extends Named{
    greet(phrase: string) : void;
}


class Person implements Greetable {
    name : string;

    constructor(n: string){
        this.name = n;
    }

    greet(phrase: string) {
        console.log(`Hi my name is ${this.name} and ${phrase}`);
    }
}

const person1 = new Person("Abhinav");

person1.greet("More to greet");


// type AddFn = (a:number, b:number) => number;

interface AddFn {
    (a:number, b:number): number
}

let add : AddFn;

add = (a, b) => {
    return a+b;
}
// Normal Decorator - @Logger
// function Logger(constructor: Function){
//     console.log(constructor); 
//     console.log('logging... a normal decorator');
// }


// Decorator Factory - @Logger()
function Logger(logString: string){
    console.log('Logger Factory');
    return function(constructor: Function){
        console.log(logString);
        console.log('This is my decorator factory');
        console.log(constructor);
    }
}

function withTemplate(template: string, hookId: string){
    console.log('Template Factory');
    return function(_: Function){
        console.log('Rendering Template')
        const hookEl = document.getElementById(hookId);
        if(hookEl){
            hookEl.innerHTML = template;
        }
    }
}


@Logger('This is my Log string')
@withTemplate('<h1>My Person Object</h1>','app')
class Person {
    name: string = 'Abhinav';

    constructor() {
        console.log('Creating person object');
    }
}

const person = new Person();

console.log(person);

function Log(target: any, propertyName: string | Symbol){  // Property Decorator
    console.log('Property Decorator');
    console.log(target);
    console.log(propertyName);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor){  // Accessor Decorator
    console.log('Accessor Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, methodName: string | Symbol, descriptor: PropertyDescriptor){ // Method Decorator
    console.log('Method Decorator');
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}

function Log4(target: any, methodName: string | Symbol, position: number){  // Paramter decorator
    console.log('Parameter Decorator');
    console.log(target);
    console.log(methodName);
    console.log(position);
}

@Logger('Log strig')
class Product{

    @Log
    title: string;
    private _price: number;

    @Log2
    set price(value: number){
        if(value > 0){
            this._price = value;
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3 
    getPriceWithTax(@Log4 tax: number){
        return (this._price)*(1+tax);
    }

}

// const product = new Product('Apple', 10);
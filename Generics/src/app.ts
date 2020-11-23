// ========== Generics =========== //

const arr1: string[] = [];

const arr2: Array<string> = []; // Array is a generic type.

const promiseReturn: Promise<string> = new Promise((resolve) => {   // Promises are also built in Generics.
    setTimeout(() => {
        resolve("I am returning");
    },1000);
});

function merge<T, U>(objA : T, objB: U){
    return Object.assign(objA, objB);
}


function improvedMerge<T extends object, U extends object>(objA: T, objB: U){    // Generic function with constraints.
    return Object.assign(objA, objB);
}

const merged = merge({name: 'Abhinav'}, {age : 22});

function extractAndMerge<T extends object, U extends keyof T>(obj: T, key: U){  // Ensures that U is a key of T.
    return "Value "+obj[key];
}

console.log({name: "Abhinav"},"name");


class DataStorage<T extends string | number | boolean> {
    data: T[] = [];

    addItem(item : T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

const numberStorage = new DataStorage<number>();

const customType = new DataStorage<number | string>();
function add(n1: number, n2: number, showResult: boolean, resultPhrase: string){
    if(showResult){
        console.log(`${resultPhrase} ${n1+n2}`);
    }
    else{
        return n1+n2;
    }
}

let n1 = 5;
const n2 = 4.56;
const printResult = true;

const resultPhrase = "Result is ";

// const result = add(n1, n2, printResult, resultPhrase);

//console.log(result);

type myObject = {
    name : string;
    age : number | string;
}

let myObj : {
    name : string;
    age : number;
} = {
    name : 'Abhinav',
    age : 22
}

let anotherVariant : myObject = {
    name : 'Abhinav',
    age : '22'
}

function checkFunctionTypes(print : string): number{
    console.log("Function result ", print);

    return 109;
}

let func : Function;

func = checkFunctionTypes;

//func("Check print statement");

let anotherFuncVariant : (a : string) => void;

anotherFuncVariant = checkFunctionTypes;

anotherFuncVariant("Another variant");

enum Check {FIRST = "First",SECOND = "Second", THIRD = "Third"};

enum AnotherVariant {var = 4, second = 9 , third};

// console.log(Check.FIRST);

let unknownType : unknown;

unknownType = 10;

let numberType : number;
//numberType = unknownType; // Not possible

if(typeof unknownType === 'number'){ // Have to do type check for 100% guarantee that unknown is actually a number type
    numberType = unknownType;
}

// But if we place unknown to any then type checking will not take place then we can assign that

function generateError(message : string) : never {
    throw {message : message};
}

function generateErrorVoid(message : string) : void {
    try {
        throw {message : message};
    }
    catch(e){
        console.log(e);
    }
}

generateErrorVoid("This function never returns and crashes the code hence never type otherwise void would do the work");

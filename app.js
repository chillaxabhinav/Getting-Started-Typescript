function add(n1, n2, showResult, resultPhrase) {
    if (showResult) {
        console.log(resultPhrase + " " + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var n1 = 5;
var n2 = 4.56;
var printResult = true;
var resultPhrase = "Result is ";
var myObj = {
    name: 'Abhinav',
    age: 22
};
var anotherVariant = {
    name: 'Abhinav',
    age: '22'
};
function checkFunctionTypes(print) {
    console.log("Function result ", print);
    return 109;
}
var func;
func = checkFunctionTypes;
//func("Check print statement");
var anotherFuncVariant;
anotherFuncVariant = checkFunctionTypes;
anotherFuncVariant("Another variant");
var Check;
(function (Check) {
    Check["FIRST"] = "First";
    Check["SECOND"] = "Second";
    Check["THIRD"] = "Third";
})(Check || (Check = {}));
;
var AnotherVariant;
(function (AnotherVariant) {
    AnotherVariant[AnotherVariant["var"] = 4] = "var";
    AnotherVariant[AnotherVariant["second"] = 9] = "second";
    AnotherVariant[AnotherVariant["third"] = 10] = "third";
})(AnotherVariant || (AnotherVariant = {}));
;
// console.log(Check.FIRST);
var unknownType;
unknownType = 10;
var numberType;
//numberType = unknownType; // Not possible
if (typeof unknownType === 'number') { // Have to do type check for 100% guarantee that unknown is actually a number type
    numberType = unknownType;
}
// But if we place unknown to any then type checking will not take place then we can assign that
function generateError(message) {
    throw { message: message };
}
function generateErrorVoid(message) {
    try {
        throw { message: message };
    }
    catch (e) {
        console.log(e);
    }
}
generateErrorVoid("This function never returns and crashes the code hence never type otherwise void would do the work");

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
console.log(Check.FIRST);

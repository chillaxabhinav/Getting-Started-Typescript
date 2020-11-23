// ================= Classes ================= //

class Department {
    
    //private readonly name : string;

    protected employees : string[] = [];

    static financialYear = 2020;

    constructor(private readonly name:string){}

    describe(this: Department): void{
        console.log("Department is ", this.name);
        
        console.log(Department.financialYear); // Accessing financial year that is static.
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployees(){
        console.log(this.employees.length);
        console.log(this.employees); // Here this point to instance as the method is non static.
    }

    get getDepartmentName(){
        return this.name;
    }

    get getEmployeeArray(){
        return this.employees;
    }

    set setEmployeeArray(emp: string[]){
        this.employees = emp;
    }

    static yo(){
        console.log(this) // this points to the class not to instance because the method is static.
    }
}

class ITDepartment extends Department {
    admins : string[];
    constructor(id: string, adminArray: string[]){
        super(id);
        this.admins = adminArray;
    }
}

const accounting = new Department("accounting");
console.log(accounting.getDepartmentName);

accounting.addEmployee("Abhinav");
accounting.addEmployee("Arihant");

accounting.printEmployees();

accounting.setEmployeeArray= ['Abhinav'];

console.log(accounting.getEmployeeArray);

const accountingCopy = {name : 'Dummy', describe : accounting.describe};



//  =============== Abstract class example ================== //

abstract class Phone {
    static entity = "Phone";

    abstract os: string;

    abstract camera(): void;

    powerOn(){
        console.log("Powers on...");
    }
}

class Apple extends Phone{

    constructor(){
        super();
    }

    os = "ios";

    camera(){
        console.log("Best camera :-|");

        this.powerOn(); // Normal inheritance also works
    }
}

const pro = new Apple();

pro.camera();
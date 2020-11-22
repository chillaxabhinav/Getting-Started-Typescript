class Department {
    
    //private readonly name : string;

    protected employees : string[] = [];

    constructor(private readonly name:string){}

    describe(this: Department): void{
        console.log("Department is ", this.name);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployees(){
        console.log(this.employees.length);
        console.log(this.employees);
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
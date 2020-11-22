class Department {
    
    //private readonly name : string;

    private employees : string[] = [];

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
}

const accounting = new Department("accounting");

accounting.addEmployee("Abhinav");
accounting.addEmployee("Arihant");

accounting.printEmployees();

const accountingCopy = {name : 'Dummy', describe : accounting.describe};
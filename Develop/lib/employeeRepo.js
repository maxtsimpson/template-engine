// this is the class for storing and retrieving employee objects

class employeeRepositry {

    constructor() {
        this.employees = [];
    }

    retrieveEmployees() {
        //this to get the employees from file or eventually db
        
    }

    storeEmployee(employee){
        //this is to store employees to file or eventually to db
        
    }

    getEmployees(){
        //this is to get the employees
        return this.employees;
    }

    addEmployee(employee){
        //this is to add another employee to the repo
        this.employees.push(employee);
    }

    retrieveEmployeesOfType(type) {
        return this.employees.map(employee => typeof(employee === type));
    }

}
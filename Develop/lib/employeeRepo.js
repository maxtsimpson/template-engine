// this is the class for storing and retrieving employee objects

const io = require("./io");
const fs = require("fs");

class employeeRepositry {

    constructor() {
        console.log("in employeeRepo constructor")
        this.employees = [];
        console.log("set employees to blank array")
        if (fs.existsSync("./employees.json")) {
            this.employees = employeeRepositry.retrieveEmployees();
        }
    }

    retrieveEmployees() {
        console.log("in retrieve employees")
        //this to get the employees from file or eventually db
        return JSON.parse(io.readFromFile("./employees.json"));
    }

    storeEmployees(){
        //this is to store employees to file or eventually to db
        io.writeToFile("./employees.json",JSON.stringify(this.employees))
    }

    getEmployees(){
        //this is to get the employees
        return this.employees;
    }

    addEmployee(employee){
        console.log("in addEmployee");
        //this is to add another employee to the repo
        this.employees.push(employee);
    }

    retrieveEmployeesOfType(type) {
        return this.employees.map(employee => typeof(employee === type));
    }

}

module.exports = employeeRepositry;
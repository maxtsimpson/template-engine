// this is the class for storing and retrieving employee objects

const io = require("./io");
const fs = require("fs");

class employeeRepositry {

    constructor() {
        this.employees = this.retrieveEmployees();
    }

    retrieveEmployees() {
        //this to get the employees from file or eventually db
        // console.log("in retrieve employees")
        try {
            if (fs.existsSync("./employees.json")) {
                let fileContents = io.readFromFile("./employees.json");
                let json = JSON.parse(fileContents);
                return json;
            }            
        } catch (error) {
            return [];
        }

    }

    storeEmployees(){
        // console.log("in storeEmployees")
        //this is to store employees to file or eventually to db
        io.writeToFile("./employees.json",JSON.stringify(this.employees,undefined,2))
    }

    getEmployees(){
        //this is to get the employees
        return this.employees;
    }

    addEmployee(employee){
        // console.log("in addEmployee");
        //this is to add another employee to the repo
        this.employees.push(employee);
    }

    retrieveEmployeesOfType(type) {
        return this.employees.map(employee => employee.type === type);
    }

}

module.exports = employeeRepositry;
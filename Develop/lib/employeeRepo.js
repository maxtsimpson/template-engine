// this is the class for storing and retrieving employee objects

const io = require("./io");
const fs = require("fs");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class employeeRepositry {

    constructor() {
        this.employees = this.retrieveEmployees();
        this.nextId = 0;
    }

    getNextId() {
        let id = this.nextId
        this.nextId++
        return id;
    }

    retrieveEmployees() {
        //this to get the employees from file or eventually db
        try {
            if (fs.existsSync("./employees.json")) {
                let fileContents = io.readFromFile("./employees.json");
                let json = JSON.parse(fileContents);
                return json.map(this.createEmployeeFromJSON)
            }            
        } catch (error) {
            return [];
        }

    }

    createEmployeeFromJSON(jsonObject){
        
        const {name,id,email} = jsonObject
        switch (jsonObject.type) {
            case "Manager":
                    const {officeNumber} = jsonObject
                    return (new Manager(name,id,email,officeNumber));
                break;
            case "Engineer":
                    const {github} = jsonObject
                    return (new Engineer(name,id,email,github));
                break;
            case "Intern":
                    const {school} = jsonObject
                    return (new Intern(name,id,email,school));
                break;
                
            default:
                break;
            
        }
    }

    storeEmployees(){
        //this is to store employees to file or eventually to db
        io.writeToFile("./employees.json",JSON.stringify(this.employees,undefined,2))
    }

    getEmployees(){
        //this is to get the employees
        console.log("in getEmployees")
        return this.employees.map(e => Object.assign({}, e)); //this returns an array of clones. found this at georgeLucas.com
    }

    getEmployeeById(Id){
        //return a clone of the object so changes to it need to be applied by updateEmployee
        return Object.assign({}, this.employees.filter(employee => employee.id === Id)) 
    }

    updateEmployee(updatedEmployee){
        //this should work as long as no-one edits an employee id. private properties would be good
        let index = this.employees.findIndex(e => e.id === updatedEmployee.id);
        let employee = this.employees[index]
        Object.keys(employee).forEach(prop => {
            //could put some extra validation in here to make sure the updated props are valid
            employee[prop] = updatedEmployee[prop]
        });
        this.employees[index] = employee
    }

    addEmployee(employee){
        //this is to add another employee to the repo
        this.employees.push(employee);
    }

    retrieveEmployeesOfType(type) {
        return this.employees.map(employee => employee.type === type);
    }

    createEmployee(propertiesList) {
        const {name,id,email} = jsonObject
        switch (jsonObject.type) {
            case "Manager":
                    const {officeNumber} = jsonObject
                    return (new Manager(name,id,email,officeNumber));
                break;
            case "Engineer":
                    const {github} = jsonObject
                    return (new Engineer(name,id,email,github));
                break;
            case "Intern":
                    const {school} = jsonObject
                    return (new Intern(name,id,email,school));
                break;
                
            default:
                break;
            
        }
    }

}

module.exports = employeeRepositry;
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const { v1: uuidv1 } = require('uuid');
const menuObject = require("./menuObject.js")
const employeeRepo = require("./employeeRepo")

class promptFunctions {

    constructor(repo, prompts) {
        this.propertiesList = [];
        this.propertiesToSet = [];
        this.employeeType = null;
        this.employeeRepo = repo;
        this.addEmployeeIndex = 0;
        this.editEmployeeIndex = 0;
        this.prompts = prompts;
        this.mainMenuPrompt = this.makePrompt(menuObject.mainMenu.msg, "mainMenu");
        this.currentEmployee = null;
        this.currentProperty = null;
        this.employeeTypesPrompt = ` 
        Select from the following types of employees

        "1. Engineer"
        "2. Intern"
        "3. Manager"

        ${menuObject.mainMenuOrExit}
        `
    }

    makePrompt(msg, menuName) {
        let prompt = {
            type: 'input',
            name: `${menuName}-${uuidv1()}`,
            message: `${msg}\n`,
            prefix: ""
        };
        return prompt;
    }

    invalidOption() {
        console.log("the option you selected appears invalid returning you to the main menu")
        this.prompts.next(this.mainMenuPrompt);
    }

    getPropsForEmployee(employee) {
        return Object.keys(employee).filter(prop => ((typeof prop) !== "function") && (prop !== "id"));
    }

    getPropsForEmployeeType(employeeType) {
        let employeeProps = ["name", "email"]; //tried to do this dynamically but cant figure it out
        switch (employeeType) {
            case "Manager":
                employeeProps.push("officeNumber");
                return employeeProps;
                break;

            case "Engineer":
                employeeProps.push("github");
                return employeeProps;
                break;

            case "Intern":
                employeeProps.push("school");
                return employeeProps;
                break;
            default:
                break;
        }
    }

    addEmployee(answer) {
        let context = answer.name.split("-")[0]
        switch (context) {
            case "addEmployeeInitial":
                this.propertiesList = [];
                this.addEmployeeIndex = 0;
                this.employeeType = answer.answer;
                this.propertiesToSet = this.getPropsForEmployeeType(this.employeeType);
                let prompt = this.makePrompt(`please enter ${this.propertiesToSet[this.addEmployeeIndex]}`, "addEmployee")
                this.prompts.next(prompt);
                this.addEmployeeIndex++;
                break;

            case "addEmployee":
                this.propertiesList.push(answer.answer);
                if (this.addEmployeeIndex < this.propertiesToSet.length) {
                    let prompt = this.makePrompt(`please enter ${this.propertiesToSet[this.addEmployeeIndex]}`, "addEmployee")
                    this.prompts.next(prompt);
                    this.addEmployeeIndex++
                    return;
                }
                else {
                    this.createEmployee()
                    console.log(`
                    +++++++++++++++++
                        created
                    +++++++++++++++++                    
                    `)
                    this.listCurrentEmployees()
                    this.prompts.next(this.mainMenuPrompt);
                }
                this.addEmployeeIndex++;
                break;
            default:
                break;
        }

    }

    createEmployee() {
        const employeeId = this.employeeRepo.getNextId()
        let [name, email, extra] = this.propertiesList //this works because all the employee types have just one extra attribute
        switch (this.employeeType) {
            case "Manager":
                let manager = new Manager(name, employeeId, email, parseInt(extra))
                this.employeeRepo.addEmployee(new Manager(name, employeeId, email, parseInt(extra)));
                break;
            case "Engineer":
                this.employeeRepo.addEmployee(new Engineer(name, employeeId, email, extra));
                break;
            case "Intern":
                this.employeeRepo.addEmployee(new Engineer(name, employeeId, email, extra));
                break;

            default:
                break;
        }
        this.employeeRepo.storeEmployees();
        this.prompts.next(this.makePrompt(menuObject.mainMenu.msg, "mainMenu"));
    }

    editEmployee(answer) {
        let context = answer.name.split("-")[0]
        let selection = parseInt(answer.answer)
        switch (context) {
            case "editEmployeeInitial":
                this.editEmployeeIndex = 0;
                this.currentEmployee = this.employeeRepo.getEmployees()[selection]
                let index = 1
                let propString = "";
                this.propertiesToSet.forEach(prop => {
                    propString += `\r${index}. ${prop}`
                    index++;
                });
                this.editEmployeeIndex++;
                let prompt = this.makePrompt(
                    `please select which properties you would like to edit 
                        ${propString}`,
                    "editEmployee")
                this.prompts.next(prompt)
                break;
            case "editEmployee":
                if (this.editEmployeeIndex === 1) {
                    this.currentProperty = this.propertiesToSet[selection - 1]
                    let prompt = this.makePrompt(`
                        current value is: ${this.currentEmployee[this.currentProperty]}
                        please enter ${this.currentProperty}:`
                        , "editEmployee")
                    this.editEmployeeIndex++;
                    this.prompts.next(prompt);
                } else if (this.editEmployeeIndex === 2) {
                    this.currentEmployee[this.currentProperty] = answer.answer;
                    console.table(this.currentEmployee);
                    let prompt = this.makePrompt(`
                        1. Discard changes and go back to employee List
                        2. Save and go back to employee List
                        
                        enter 'X' to return to the main menu or 'exit' to quit`
                        , "editEmployee")
                    this.editEmployeeIndex++;
                    this.prompts.next(prompt);
                } else if (this.editEmployeeIndex > 2) {
                    let prompt = this.makePrompt(menuObject.employeeList, "editEmployeeInitial")
                    switch (selection) {
                        case 1:
                            this.listCurrentEmployees();
                            this.prompts.next(prompt);
                            break;
                        case 2:
                            this.employeeRepo.updateEmployee(this.currentEmployee);
                            this.listCurrentEmployees();
                            this.prompts.next(prompt);
                            break;
                        default:
                            this.invalidOption()
                            break;
                    }
                }
                break;
            default:
                this.invalidOption()
                break;
        }


    }

    listCurrentEmployees() {
        console.table(this.employeeRepo.getEmployees());
    }

}

module.exports = promptFunctions;
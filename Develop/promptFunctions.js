const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { v1: uuidv1 } = require('uuid');

let promptFunctions = {

    propertiesList: [],
    employeeType: "",

    employeeTypesPrompt: `
        Select from the following types of employees

        "1. Engineer"
        "2. Intern"
        "3. Manager"

        ${mainMenuOrExit}
    `,

    makePrompt: function (msg, menuName) {
        console.log("in makePrompt")
        let prompt = {
            type: 'input',
            name: `${menuName}-${uuidv1()}`,
            message: `${msg}\n`
        };
        return prompt;
    },

    invalidOption: function () {

    },

    getPropsForEmployee: function (employee) {
        return Object.keys(employee).filter(prop => ((typeof prop) !== "function"));
    },

    getPropsForEmployeeType: function (employeeType) {
        employeeProps = ["name", "id", "email"]; //tried to do this dynamically but cant figure it out
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
    },

    addEmployee: function (answer,prompts) {
        console.log("in add Employee menu");

        switch (answer.name.split("-")[0]) {
            case "addEmployeeInitial":
                promptFunctions.propertiesList = [];
                addEmployeeIndex = 0;
                console.log("in employee initial");
                promptFunctions.employeeType = answer.answer;
                propertiesToSet = promptFunctions.getPropsForEmployeeType(employeeType);
                let prompt = promptFunctions.makePrompt(`please enter ${propertiesToSet[addEmployeeIndex]}`, "addEmployee")
                prompts.next(prompt);
                addEmployeeIndex++;
                break;

            case "addEmployee":
                promptFunctions.propertiesList.push(answer.answer);
                if (addEmployeeIndex < propertiesToSet.length) {
                    let prompt = promptFunctions.makePrompt(`please enter ${propertiesToSet[addEmployeeIndex]}`, "addEmployee")
                    prompts.next(prompt);
                }
                else {
                    promptFunctions.createEmployee()
                }
                addEmployeeIndex++;
                break;
            default:
                break;
        }

    },

    createEmployee: function() {
        switch (promptFunctions.employeeType) {
            case "Manager":
                    const employee = new Manager(promptFunctions.propertiesList[0],promptFunctions.propertiesList[1],promptFunctions.propertiesList[2],promptFunctions.propertiesList[3],promptFunctions.propertiesList[4])
                    employeeRepo.storeEmployee(employee);
                break;
            case "Engineer":
                    const employee = new Engineer(promptFunctions.propertiesList[0],promptFunctions.propertiesList[1],promptFunctions.propertiesList[2],promptFunctions.propertiesList[3],promptFunctions.propertiesList[4])
                    employeeRepo.storeEmployee(employee);
                break;
            case "Intern":
                    const employee = new Intern(promptFunctions.propertiesList[0],promptFunctions.propertiesList[1],promptFunctions.propertiesList[2],promptFunctions.propertiesList[3],promptFunctions.propertiesList[4])
                    employeeRepo.storeEmployee(employee);
                break;
                
            default:
                break;
        }
        console.log("employee created");
    },

    editEmployee: function () {

    },

    listCurrentEmployees: function () {

    },

    invalidOption: function () {

    }

}

module.exports = promptFunctions;
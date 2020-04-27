const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let promptFunctions = {

    invalidOption: function () {
    
    },

    getPropsForEmployee: function (employee) {
        return Object.keys(employee).filter(prop => ((typeof prop) !== "function"));
    },

    createNewEmployee: function (employeeType) {
        switch (employeeType) {
            case "Manager":
                return new Manager();
                break;
        
            case "Engineer":
                    return new Engineer();
                break;

            case "Intern":
                    return new Intern();
                break;
            default:
                break;
        }
    },

    addEmployee: function(answer) {
        console.log("in addEmployee");

        switch (answer.name.split("-")[0]) {
            case "addEmployeeInitial":
                    i = 0;
                    let employeeType = answer.answer;
                    let employee = promptFunctions.createNewEmployee(employeeType)
                    propertiesToSet = promptFunctions.getPropsForEmployee(employee);
                break;
        
            case "addEmployee":
                    propertiesList += answer.answer
                    if(i < propertiesToSet.length){
                        makePrompt(`please enter ${propertiesToSet[i]}`,"addEmployee")
                    }
                    else{
                        //
                        console.log("about to create employee")
                        employee = new employeeType(propertiesList.split(","));
                        console.log("created employee")
                    }
                    i++;
                break;
            default:
                break;
        }
        // let employee = new []

        // makePrompt("","addEmployee")

        // i++;
        // let employee = new Employee()

        // properties.forEach(prop => {
        //     prompts.next(makePrompt(`employee ${prop}:`))
        // });
    },

    // let addEmployeeHandler = answer => {

    // },

    editEmployee: function () {

    },

    listCurrentEmployees: function () {

    },

    invalidOption: function () {

    }

}

module.exports = promptFunctions;
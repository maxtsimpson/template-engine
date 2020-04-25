const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let promptFunctions = {

    invalidOption: function () {
    
    },

    addEmployee: function(answer) {
        console.log("in addEmployee");
        makePrompt("","addEmployee")

        i++;
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
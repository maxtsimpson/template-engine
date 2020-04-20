const Employee = require("../lib/Employee");

class Intern extends Employee{
    constructor(name,id,email,school) {
        super(name,id,email)
        if (this.isValidType("school",school,"string")) {
            this.school = school;
        }
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
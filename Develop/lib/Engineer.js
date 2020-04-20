const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name,id,email,github) {
        super(name,id,email)
        if (this.isValidType("github",github,"string")) {
            this.github = github;
        }
        this.role = "engineer";
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;
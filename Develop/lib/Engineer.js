const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name,id,email,github) {
        super(name,id,email)
        if (this.isValidType("github",github,"string")) {
            this.github = github;
        }
    }
    getGithub(){
        return this.github;
    }
    setGithub(){
        if(this.isValidType("github",github,"string")){
            this.github = github;
        }
    }
}

module.exports = Engineer;
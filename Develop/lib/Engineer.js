const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name,id,email,github) {
        super(name,id,email)
        if (this.isValidType("github",github,"string")) {
            this.github = github;
        }
        this.role = "engineer";
    }
    isValidType(propertyName,input,type){
        super(propertyName,input,type);
    }

    getGitHub(){
        return this.github;
    }

    getRole(){
        super();
    }
}

export default Engineer;
const Employee = require("../lib/Employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber) {
        super(name,id,email)
        if (this.isValidType("officeNumber",officeNumber,"number")) {
            this.officeNumber = officeNumber;
        }
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    setOfficeNumber(){
        if(this.isValidType("officNumber",officNumber,"number")){
            this.officNumber = officNumber;
        }
    }
}

module.exports = Manager;
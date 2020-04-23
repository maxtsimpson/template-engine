const Employee = require("../lib/Employee");

class Manager extends Employee{
    
    officeNumber;

    constructor(name,id,email,officeNumber) {
        super(name,id,email)
        if (this.isValidType("officeNumber",officeNumber,"number")) {
            this.officeNumber = officeNumber;
        }
    }  
    
    getOfficeNumber(){
        return this.officeNumber;
    }
    setOfficeNumber(officeNumber){
        if(this.isValidType("officeNumber",officeNumber,"number")){
            this.officeNumber = officeNumber;
        }
    }
}

module.exports = Manager;
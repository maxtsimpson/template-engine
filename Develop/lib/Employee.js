// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name,id,email) {
        
        this.name = name;
        //would be good if this was unique and auto-generated
        this.id = id;
        this.email = email;
    }

    //validate each property
    isValidId(id) {
        if(typeof(id) !== "number"){
            throw "The employee name should be a number";
        }
    }

    isValidType(propertyName,input,type){
        if(typeof(input) !== type){
            throw `the ${propertyName} should be a ${type}`
        }
        return true;
    }

    isValidName(name) {
        if(typeof(name) !== "string"){
            throw "The employee name should be a string";
        }
    }

    isValidName(name) {
        if(typeof(name) !== "string"){
            throw "The employee name should be a string";
        }
    }
}
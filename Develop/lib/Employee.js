// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name,id,email) {
        if(this.isValidType("name",name,"string")){
            this.name = name;
        }
        //would be good if this was unique and auto-generated
        if(this.isValidType("id",id,"number")){
            this.id = id;
        }
        if(this.isValidType("email",email,"string")){
            this.email = email;
        }
    }

    isValidType(propertyName,input,type){
        if(typeof(input) !== type){
            throw `the ${propertyName} should be a ${type}`;
        }
        return true;
    }

    getName(){
        return this.name;
    }

    setName(name){
        if(this.isValidType("name",name,"string")){
            this.name = name;
        }
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        if(this.isValidType("email",email,"string")){
            this.email = email;
        }
    }

    getRole(){
        return this.constructor.name;
    }

}

module.exports = Employee;
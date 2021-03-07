class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return "get name";
    }

    getEmail(){
        return "get email";
    }

    getRole(){
        return "employee";
    }

    printInfo(){
        console.log(`Name: ${this.name} ID: ${this.id} email: ${this.email} role:${this.role}`);
    }
}

module.exports = Employee;
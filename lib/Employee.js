class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return `Name: ${this.name}`;
    }

    getEmail(){
        return `Email: ${this.email}`;
    }

    getRole(){
        return "Employee";
    }

    printInfo(){
        console.log(`Name: ${this.name} ID: ${this.id} email: ${this.email} role:${this.role}`);
    }
}

module.exports = Employee;
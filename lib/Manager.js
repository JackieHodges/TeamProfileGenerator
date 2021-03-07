const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email){
        const roomNumber = 4;
        this.roomNumber = roomNumber;
        const role = "manager";
        this.role = role;
        
        super(name, id, email);
    }

    getRole(){
        return "Manager";
    }
}
const Employee = require("../lib/Employee");

describe ("Employee", () => {
    describe("Intialization", () => {
        it("should return an object containing a 'name', 'id', and 'email' property", () => {
        const obj = new Employee();
        
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        })
    })
});

test('can add name, id, and email via constructor', () => {
    const name = "Jackie";
    const id = 234;
    const email = "abc@gmail.com"
    const employee = new Employee("Jackie", 234, "abc@gmail.com");
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
 });

 test('getName function returns name', () => {
    const employee = new Employee("Jackie", 234, "abc@gmail.com");

    expect(employee.getName()).toBe(employee.name);
 });

 test('getID function returns ID number', () => {
    const employee = new Employee("Jackie", 234, "abc@gmail.com");

    expect(employee.getID()).toBe(234);
 });

 test('getEmail function returns email', () => {
    const employee = new Employee("Jackie", 234, "abc@gmail.com");

    expect(employee.getEmail()).toBe(employee.email);
 });

 test('getRole function returns role', () => {
    const employee = new Employee("Jackie", 234, "abc@gmail.com");

    expect(employee.getRole()).toBe("Employee");
 });


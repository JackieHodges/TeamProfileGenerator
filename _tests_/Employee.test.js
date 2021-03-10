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

test('can add name via constructor', () => {
    const name = "Jackie";
    const employee = new Employee("Jackie");
    expect(employee.name).toBe(name);
 });
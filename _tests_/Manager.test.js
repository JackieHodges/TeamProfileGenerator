const Manager = require("../lib/Manager");

describe ("Manager", () => {
    describe("Intialization", () => {
        it("should return an object containing a 'name', 'id', and 'email', and 'roomNumber' property", () => {
        const obj = new Manager();
        
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("roomNumber" in obj).toEqual(true);
        })
    })
});

test('can add name, id, email, and room number via constructor', () => {
    const name = "Jackie";
    const id = 234;
    const email = "abc@gmail.com"
    const roomNumber = 1;
    const manager = new Manager("Jackie", 234, "abc@gmail.com", 1);
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.roomNumber).toBe(roomNumber);
 });

 test('getName function returns name', () => {
    const manager = new Manager("Jackie", 234, "abc@gmail.com", 1);

    expect(manager.getName()).toBe("Jackie");
 });

 test('getID function returns ID number', () => {
    const manager = new Manager("Jackie", 234, "abc@gmail.com", 1);

    expect(manager.getID()).toBe(234);
 });

 test('getEmail function returns email', () => {
    const manager = new Manager("Jackie", 234, "abc@gmail.com", 1);

    expect(manager.getEmail()).toBe("abc@gmail.com");
 });

 test('getRole function returns role', () => {
    const manager = new Manager("Jackie", 234, "abc@gmail.com", 1);

    expect(manager.getRole()).toBe("Manager");
 });


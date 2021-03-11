const Intern = require("../lib/Intern");

describe ("Intern", () => {
    describe("Intialization", () => {
        it("should return an object containing a 'name', 'id', and 'email', and 'school' property", () => {
        const obj = new Intern();
        
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("school" in obj).toEqual(true);
        })
    })
});

test('can add name, id, email, and school name via constructor', () => {
    const name = "Jackie";
    const id = 234;
    const email = "abc@gmail.com"
    const school = "Texas A&M";
    const intern = new Intern("Jackie", 234, "abc@gmail.com", "Texas A&M");
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
 });

 test('getName function returns name', () => {
    const intern = new Intern("Jackie", 234, "abc@gmail.com", "Texas A&M");

    expect(intern.getName()).toBe("Jackie");
 });

 test('getID function returns ID number', () => {
    const intern = new Intern("Jackie", 234, "abc@gmail.com", "Texas A&M");

    expect(intern.getID()).toBe(234);
 });

 test('getEmail function returns email', () => {
    const intern = new Intern("Jackie", 234, "abc@gmail.com", "Texas A&M");

    expect(intern.getEmail()).toBe("abc@gmail.com");
 });

 test('getSchool function returns school name', () => {
    const intern = new Intern("Jackie", 234, "abc@gmail.com", "Texas A&M");
 
    expect(intern.getSchool()).toBe("Texas A&M");
 });

 test('getRole function returns role', () => {
    const intern = new Intern("Jackie", 234, "abc@gmail.com", "Texas A&M");

    expect(intern.getRole()).toBe("Intern");
 });


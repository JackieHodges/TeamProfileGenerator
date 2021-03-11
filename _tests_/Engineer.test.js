const Engineer = require("../lib/Engineer");

describe ("Engineer", () => {
    describe("Intialization", () => {
        it("should return an object containing a 'name', 'id', and 'email', and 'gitHubUserName' property", () => {
        const obj = new Engineer();
        
        expect("name" in obj).toEqual(true);
        expect("id" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("gitHubUserName" in obj).toEqual(true);
        })
    })
});

test('can add name, id, email, and GitHub username via constructor', () => {
    const name = "Jackie";
    const id = 234;
    const email = "abc@gmail.com"
    const gitHubUserName = "jackiehodges";
    const engineer = new Engineer("Jackie", 234, "abc@gmail.com", "jackiehodges");
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.gitHubUserName).toBe(gitHubUserName);
 });

 test('getName function returns name', () => {
    const engineer = new Engineer("Jackie", 234, "abc@gmail.com", "jackiehodges");

    expect(engineer.getName()).toBe("Jackie");
 });

 test('getID function returns ID number', () => {
    const engineer = new Engineer("Jackie", 234, "abc@gmail.com", "jackiehodges");

    expect(engineer.getID()).toBe(234);
 });

 test('getEmail function returns email', () => {
    const engineer = new Engineer("Jackie", 234, "abc@gmail.com", "jackiehodges");

    expect(engineer.getEmail()).toBe("abc@gmail.com");
 });

 test('getGitHub function returns GitHub user name', () => {
    const engineer = new Engineer("Jackie", 234, "abc@gmail.com", "jackiehodges");
 
    expect(engineer.getGitHub()).toBe("jackiehodges");
 });

 test('getRole function returns role', () => {
    const engineer = new Engineer("Jackie", 234, "abc@gmail.com", "jackiehodges");

    expect(engineer.getRole()).toBe("Engineer");
 });


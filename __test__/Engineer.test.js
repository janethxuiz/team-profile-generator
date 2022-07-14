// const Engineer = require("../lib/Engineer");

// test("Set GitHub Account via constructor argument", () => {
//     const testValue = "GitHubUser";
//     const emp = new Engineer("Jan", 22, "jan@gmail.com", testValue);
//     expect(emp.github).toBe(testValue);
// });

// test("getRole() functions correctly", () => {
//     const testValue = "Engineer";
//     const emp = new Engineer("Jan", 22, "jan@gmail.com", "GitHubUser");
//     expect(emp.getRole()).toBe(testValue);
// });

// test("Get GitHub UN via getGitHub()", () => {
//     const testValue = "GitHubUser";
//     const emp = new Engineer("jan",22, "jan@gmail.com", testValue);
//     expect(emp.getGitHub()).toBe(testValue);
// });

const Engineer = require("../lib/Engineer");

test("Creates new engineer object", () => {
    const engineer = new Engineer("Jan", "email", 22, "github");
    expect(engineer.name).toBe("Jan");
    expect(engineer.email).toBe("email");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toBe("github");
});

test("gets name", () => {
    const engineer = new Engineer("Jan", "email", 22, "github");
    expect(engineer.getName()).toBe("Jan");
});

test("gets email", () => {
    const engineer = new Engineer("Jan", "email", 22, "github");
    expect(engineer.getEmail()).toBe("email");
});

test("gets ID", () => {
    const engineer = new Engineer("Jan", "email", 22, "github");
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets github", () => {
    const engineer = new Engineer("Jan", "email", 22, "github");
    expect(engineer.getGithub()).toBe("github");
});

test("gets role", () => {
    const engineer = new Engineer("Jan", "email", 22, "github");
    expect(engineer.getRole()).toBe("Engineer");
});
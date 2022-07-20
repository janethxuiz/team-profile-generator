// const Intern = require("../lib/Intern");

// test("Set School via the constructor argument", () => {
//     const testValue = "";
//     const emp = new Intern("Jose", 1, "jan@gmail.com", testValue);
//     expect(emp.school).toBe(testValue);
// });

// test("getRole() functions correctly", () => {
//     const testValue = "Intern";
//     const emp = new Intern("Jan", 22, "jan@gmail.com", "Baylor");
//     expect(emp.getRole()).toBe(testValue);
// });

// test("Get School via getSchool()", () => {
//     const testValue = "";
//     const emp = new Intern("Jan", 22, "jan@gmail.com", testValue);
//     expect(emp.getSchool()).toBe(testValue);
// });

const Intern = require("../lib/Intern");

test("creates a new Intern object", () => {
    const intern = new Intern("Jan", 22, "email", "university");
    expect(intern.name).toBe("Jan");
    expect(intern.email).toBe("email");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toBe("university");
});

test("gets name", () => {
    const intern = new Intern("Jan", 22, "email", "university");
    expect(intern.getName()).toBe("Jan");
});

test("gets email", () => {
    const intern = new Intern("Jan", 22, "email", "university");
    expect(intern.getEmail()).toBe("email");
});

test("gets ID", () => {
    const intern = new Intern("Jan", 22, "email", "university");
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets school", () => {
    const intern = new Intern("Jan", 22, "email", "university");
    expect(intern.getSchool()).toBe("university");
});

test("gets role", () => {
    const intern = new Intern("Jan", 22, "email", "university");
    expect(intern.getRole()).toBe("Intern");
});
const Employee = require("../lib/Employee");

test("creates new employee object", () => {
    const employee = new Employee("Jan", 22, "email");
    expect(employee.name).toBe("Jan");
    expect(employee.email).toBe("email");
    expect(employee.id).toEqual(expect.any(Number));
});

test("gets name", () => {
    const employee = new Employee("Jan", "email", 22);
    expect(employee.getName()).toBe("Jan");
});

test("gets email", () => {
    const employee = new Employee("jan", 22, "email")
    expect(employee.getEmail()).toBe("email");
});

test("gets ID", () => {
    const employee = new Employee("jan", 22, "email");
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets role", () => {
    const employee = new Employee("Jan", 22, "email");
    expect(employee.getRole()).toBe("Employee");
});


// const Employee = require("../lib/Employee");
// const

// test("New Employee created", ()=> {
//     const emp = new Employee();
//     expect(typeof(emp)).toBe("object");
// });

// test("Set Employee Name via constructor argument", () => {
//     const name = "Jan";
//     const emp = new Employee(name);
//     expect(emp.name).toBe(name);
// });

// test("Set ID via constructor argument", () => {
//     const testValue = 100;
//     const emp = new Employee("Jan", testValue);
//     expect(emp.id).toBe(testValue);
// });

// test("Set Email via constructor argument", () => {
//     const testValue = "test@valormm.com";
//     const emp = new Employee("Jan", 1, testValue);
//     expect(emp.email).toBe(testValue);
// });

// test("Get name via getName()", () => {
//     const testValue = "Jan";
//     const emp = new Employee(testValue);
//     expect(emp.getName()).toBe(testValue);
// });

// test("Get ID via getId()", () => {
//     const testValue = 61;
//     const emp = new Employee("Jan", testValue);
//     expect(emp.getId()).toBe(testValue);
// });

// test("Get Email via getEmail()", () => {
//     const testValue = "test@valormm.com";
//     const emp = new Employee("Jan", 1, testValue);
//     expect(emp.getEmail()).toBe(testValue);
// });

// test("getRole() functions correctly", () => {
//     const testValue = "Employee";
//     const emp = new Employee("Jan", 1, "test@valormm.com");
//     expect(emp.getRole()).toBe(testValue);
// });
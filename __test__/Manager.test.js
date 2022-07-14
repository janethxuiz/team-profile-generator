const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set Office Number via constructor argument", () => {
    const testValue = 25;
    const emp = new Manager("Jan", 1, "jan@gmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Manager";
    const emp = new Manager("Jan", 22, "jan@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number via getOffice()", () => {
    const testValue = 25;
    const emp = new Manager("Jan", 22, "jan@gmail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});
const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test("Can set officeNumber via setOfficeNumber method", () => {
  const e = new Manager("Foo", 1, "test@test.com", 150);
  const officeNumber = 200;
  e.setOfficeNumber(officeNumber);
  expect(e.getOfficeNumber()).toBe(officeNumber);
});
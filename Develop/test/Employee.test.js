const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee("Alice",100,"test@test.com");
  expect(typeof(e)).toBe("object");
});

test("Can set name via setName method", () => {
  const e = new Employee("Alice",100,"test@test.com");
  const name = "Bob";
  e.setName(name);
  expect(e.name).toBe(name);
});

test("Can set email via setEmail method", () => {
  const testValue = "newEmail@test.com";
  const e = new Employee("Alice",100,"test@test.com");
  e.setEmail(testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue,100,"test@test.com");
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Alice",testValue,"test@test.com");
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Alice",100,testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});

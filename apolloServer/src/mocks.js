var casual = require("casual");

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => "Hello",
  Job: () => ({
    name: () => "Marketing Director",
    salary: () => casual.integer((from = 3000), (to = 10000)),
    location: () => casual.city,
    exprience: () => casual.integer((from = 1), (to = 10))
  }),
  Company: () => {
    return {
      name: () => casual.company_name,
      dateFounded: () => casual.date((format = "YYYY-MM-DD"))
    };
  },
  User: () => ({
    name: () => casual.name,
    age: () => casual.integer(10, 100),
    email: () => casual.email,
    expectedSalary: () => casual.integer(3000, 10000)
  })
};

export default mocks;

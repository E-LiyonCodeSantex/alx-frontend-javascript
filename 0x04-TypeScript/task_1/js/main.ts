interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties like "contract"
}
// Create a teacher object
const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "New York",
    contract: false // additional property
    };

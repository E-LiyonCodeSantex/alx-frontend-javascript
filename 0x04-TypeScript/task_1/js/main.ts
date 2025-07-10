// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  // 👈 Index signature allows dynamic props like `contract`
}

// Create a teacher object with extra property `contract`
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // This works thanks to the index signature
};

console.log(teacher3);

//2. Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a director instance
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

//3. Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // ➞ "J. Doe"
console.log(printTeacher("Smith", "Chinedu")); // ➞ "C. Smith"

//4. Writing a class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
class Student implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
const student1 = new Student('Chinedu', 'Smith');
console.log(student1.displayName());     // "Chinedu"
console.log(student1.workOnHomework()); // "Currently working"




/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { Subjects } from './subjects/Cpp';
import { Subjects as JavaSubjects } from './subjects/Java';
import { Subjects as ReactSubjects } from './subjects/React';

// Create and export subject instances
export const cpp = new Subjects.Cpp();
export const java = new JavaSubjects.Java();
export const react = new ReactSubjects.React();

// Create and export the teacher object
export const cTeacher: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// Cpp Subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Abuja',
};
const student3: Student = {
  firstName: 'chinedu',
  lastName: 'Smith',
  age: 22,
  location: 'imo',
};

// Put them in an array
const studentsList: Student[] = [student1, student2, student3];

// Render the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);

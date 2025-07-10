namespace Subjects {
  export class Subject {
    teacher!: Teacher;  // 👈 This tells TypeScript: "Trust me, I'll assign it later."

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}


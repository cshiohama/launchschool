function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    
    addCourse: function(courseObj) {
      this.courses.push(courseObj);
    },
    
    listCourses: function() {
      console.log(this.courses);
    },
    
    addNote: function(code, noteText) {
      for (let c of this.courses) {
        if (c.code === code) {
          if (c.note) {
            c.note += noteText;
          } else {
            c.note = noteText;
          }
        }
      }
    },
    
    updateNote: function(code, noteText) {
      for (let c of this.courses) {
        if (c['code'] === code) {
          c['note'] = noteText;
        }
      }
    },
    
    viewNotes: function() {
      for (let c of this.courses) {
        if (c.note)
          console.log(`${c.name}: ` + c.note);
      }
    },
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
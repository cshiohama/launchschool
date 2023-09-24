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

let school = {
  students: [],
  
  addStudent: function(student) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].contains(student.year)) {
      console.log(`Invalid Year`);
    } else {
      this.students.push(student);
    }
  },
  
  enrollStudent: function() {
  
  },
  
  addGrade: function() {
    
  },
  
  getReportCard: function() {
    
  },
  
  courseReport: function() {
    
  },
}

let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}
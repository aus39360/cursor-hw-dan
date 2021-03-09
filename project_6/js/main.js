const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

//1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
const Tanya = students[0]
const Victor = students[1]
const Anton = students[2]

function getSubjects(student) {
    return Object.keys(student.subjects).map(subj => (subj[0].toUpperCase() + subj.slice(1)).replace('_', ' '))
}

console.log('subjects:', getSubjects(Tanya))


//2.Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. 
function getAverageMark(student) {
    const allMarks =  Object.values(student.subjects).flat()
    const sumMarks = allMarks.reduce((sum, current) => sum + current, 0)
    const averageMark = (sumMarks / allMarks.length).toFixed(2)
    
    return averageMark
}

console.log('средняя оценка:', getAverageMark(Victor))


//3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
/* function getStudentInfo(student) {
    return Object.entries(student)
}

console.log('інф:', getStudentInfo(Anton)) */
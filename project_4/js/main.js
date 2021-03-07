const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. //2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 

function getCouples() {
    const studMale = [students[0], students[1], students[4]]
    const studFemale = [students[2], students[3], students[5]]

    const couples = []
    for (let i = 0; i < studMale.length; i++ ) {
        couples[i] = [studMale[i], studFemale[i], themes[i], Math.floor(Math.random() * ( 6 - 1 ) + 1)]
       }
    
    return couples
}

console.log(getCouples())

//3.Зіставте оцінки(marks) зі студентом(students)

function getMarks() {

    const gradedStudents = []
    for (let i = 0; i < students.length; i++ ) {
        gradedStudents[i] = [students[i], marks[i]]
       }
    
    return gradedStudents
}

console.log(getMarks())
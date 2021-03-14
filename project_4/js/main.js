const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const studMale = [students[0], students[1], students[4]]
const studFemale = [students[2], students[3], students[5]]

//1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
function getCouples() {

    const couples = []
    for (let i = 0; i < studMale.length; i++ ) {
        couples[i] = [studMale[i], studFemale[i] /* themes[i], Math.floor(Math.random() * ( 6 - 1 ) + 1) */]
       }
    
    return couples
}

console.log('пары студентов:', getCouples())

//2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
    function getThemes() {
        
        const couplesWithTemes = []
    for (let i = 0; i < studMale.length; i++ ) {
        couplesWithTemes[i] = [`${studMale[i]} i ${studFemale[i]}`, themes[i]]
       }
    
    return couplesWithTemes
    }

console.log('пары и темы:', getThemes())

//3.Зіставте оцінки(marks) зі студентом(students)

function getMarks() {

    const gradedStudents = []
    for (let i = 0; i < students.length; i++ ) {
        gradedStudents[i] = [students[i], marks[i]]
       }
    
    return gradedStudents
}

console.log(getMarks())

//4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)
function getMarksForPairs() {

    const arrOfPairsWithThemes = getThemes()
    
    for(let i = 0; i < arrOfPairsWithThemes.length; i++) {
        arrOfPairsWithThemes[i] = [...arrOfPairsWithThemes[i], Math.floor(Math.random() * ( 6 - 1 ) + 1)]
    }

    return arrOfPairsWithThemes
}

console.log('оценки для пар:', getMarksForPairs())
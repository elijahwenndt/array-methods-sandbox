const students = [
    { name: 'Quincy', grade: 96, parent:'bob' },
    { name: 'Jason', grade: 84, parent:'billy' },
    { name: 'Alexis', grade: 100, parent: 'ted' },
    { name: 'Sam', grade: 65, parent:'trash' },
    { name: 'Katie', grade: 90, parent: 'susie' }
]
console.log(students)
let points = students.map((item) => {
    return item.grade/100
});
console.log(points);

let aStudents = students.filter((item) => {
    return item.grade >= 90;
})
console.log(aStudents)

let parentList = students.forEach((item, i) => {
    console.log(i+1 + ': ' + item.name + '=' + item.parent)
})

let perfectStudents = students.some((item) => {
    return item.grade === 100
})
console.log(perfectStudents)

let allPerfect = students.every((item)=>{
    return item.grade === 100
})
console.log(allPerfect)
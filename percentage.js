class_Ten = [
    { "roll_no": 1, "telugu": 50, "hindi": 55, "english": 78, "maths": 49, "science": 55, "social": 70 },
    { "roll_no": 2, "telugu": 40, "hindi": 40, "english": 90, "maths": 99, "science": 65, "social": 30 },
    { "roll_no": 3, "telugu": 60, "hindi": 35, "english": 90, "maths": 99, "science": 75, "social": 40 },
    { "roll_no": 4, "telugu": 95, "hindi": 35, "english": 90, "maths": 99, "science": 85, "social": 70 },
    { "roll_no": 5, "telugu": 20, "hindi": 35, "english": 50, "maths": 39, "science": 75, "social": 80 },
    { "roll_no": 6, "telugu": 40, "hindi": 35, "english": 40, "maths": 29, "science": 45, "social": 40 },
    { "roll_no": 7, "telugu": 40, "hindi": 85, "english": 90, "maths": 99, "science": 65, "social": 40 },
    { "roll_no": 8, "telugu": 90, "hindi": 75, "english": 30, "maths": 39, "science": 75, "social": 70 },
    { "roll_no": 9, "telugu": 70, "hindi": 55, "english": 60, "maths": 99, "science": 85, "social": 88 },
    { "roll_no": 10, "telugu": 70, "hindi": 35, "english": 30, "maths": 49, "science": 95, "social": 70 },
];

// Percentage calculation //
const calculateOverallPercentage = (marks) => {
    let objPercentage = {};
    objPercentage = {
        roll_no: marks.roll_no,
        percentage: (marks.telugu + marks.hindi + marks.english + marks.maths + marks.science + marks.social) / 6
    };
    return objPercentage;
}
const overallPercentage = class_Ten.map(calculateOverallPercentage)

// Grading Award  //
const calculateOverallGrade = (overallPercentage) => {
    let award = {};
    let objGrade = {};
    overallPercentage.percentage >= 90 ? award = "Distiction" : overallPercentage.percentage >= 70 ? award = "First Class" : overallPercentage.percentage >= 60 ? award = "Second Class" : overallPercentage.percentage >= 40 ? award = "Third Class" : award = "Fail";
    objGrade = {
        Roll_no: overallPercentage.roll_no,
        Percentage: overallPercentage.percentage,
        Grade: award
    };
    return objGrade;
}
const overallGrade = overallPercentage.map(calculateOverallGrade)


// Filtering out the students who failed in two subjects //
const failInTwoSubjects = class_Ten.filter(marks => marks.telugu < 40 || marks.hindi < 40 || marks.english < 40 || marks.maths < 40 || marks.science < 40 || marks.social < 40);


// Filtering the students who got more than 90% in maths and science //
const moreMarks = class_Ten.filter(marks => (marks.maths + marks.science) / 2 > 90);


// Sorting students from higher to lower percentage //
const sorted = overallPercentage.sort((a, b) => {
    return b.percentage - a.percentage
});

const main = () => {
    console.log("Percentage of all students");
    console.table(overallPercentage);
    console.log("Grades based on percentage");
    console.table(overallGrade);
    console.log("Students who failed in two subjects");
    console.table(failInTwoSubjects);
    console.log("Students who scored more than 90% in Maths and Science");
    console.table(moreMarks);
    console.log("Students from higher to lower percentage");
    console.table(sorted);
};
main();
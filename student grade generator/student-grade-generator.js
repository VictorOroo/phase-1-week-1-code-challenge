//A function to store all the program is created
function findGrade() {
    let marks = parseFloat(prompt("Enter your grade(0-100):"));//use is prompted to input a valid number for grading

    if (marks < 0 || marks > 100){//this will make sure the marks range from 0 to 100 
        return 'invalid';
        
    } else if (marks > 79) {
        return 'A';

    }else if(marks >= 60 && marks <= 79){
        return 'B';
    }else if(marks >= 50 && marks <= 59){
        return 'C';
    }else if (marks >= 40 && marks <= 49) {
        return 'D';
        
    }else{
        return 'E';
    }
}
//to call findGrade()
let grade = findGrade();
console.log(grade);
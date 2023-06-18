// A function for storing the program
function SpeedChecker() {
    const speed = parseFloat(prompt("Enter the car speed(km/h):")); //this will promp the user to enter the car's speed
    if (isNaN(speed)) {
        return "Please enter a valid number."; //isNaN()is used to validate if its a valid number 
        
    } 
    if (speed < 70){
        return "Ok";
    }else{
        const demeritPoints = Math.floor((speed - 70) / 5);
        if(demeritPoints > 12){
            return "License suspended";
        }else{
            return "Points: " + demeritPoints;
        }
    }
}
//You can call the SpeedChecker function by doing the following
let result = SpeedChecker();
console.log(result);
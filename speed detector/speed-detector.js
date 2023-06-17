function SpeedChecker() {
    const speed = parseFloat(prompt("Enter the car speed(km/h):"));

    if (isNaN(speed)) {
        return "Please enter a valid number.";
        
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
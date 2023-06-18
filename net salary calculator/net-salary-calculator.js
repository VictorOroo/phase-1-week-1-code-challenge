/*NET SALARY CALCULATOR
This program will use the users input (Basic salary and Benefits) to calculate the net salary.
KRA websites provides the NHIF,KRA and NSSF values required in this code
*/

//function created for netsalary//

function findNetSalary() {
    const basicSalary = parseFloat(prompt('Enter your basic salary:'));
    const benefits = parseFloat(prompt('Enter your benefits:'));
    


//isNan() function is used to check if the input is a number//
if (isNaN(basicSalary) || isNaN(benefits)) {
    alert('INVALID,KINDLY ENTER VALID NUMBERS.(BASIC SALARY AND BENEFITS)');
    return;
}
const nssf = calculateNSSF(basicSalary);
const nhif = calculateNHIF(basicSalary);
const paye = calculatePAYE(basicSalary);
const grossSalary = basicSalary + benefits;
const netSalary =grossSalary - nssf - nhif - paye;

alert(`Net salary: ${netSalary}`);
}
//Next is the function that holds the code for calculating NSSF deductions//
function calculateNSSF(basicSalary) {
    return basicSalary * 0.06;
    
}
//Next is the function that holds the code for calculating NHIF deductions//
function calculateNHIF(basicSalary) {
    if(basicSalary >= 6000 && basicSalary <= 7999){
        return 300;
    }else if (basicSalary >= 8000 && basicSalary <=11999){
        return 400;
    }else if (basicSalary >= 12000 && basicSalary <=14999){
        return 500;

    }else if (basicSalary >= 15000 && basicSalary <=19999){
        return 600;
    }else if (basicSalary >= 20000 && basicSalary <=24999){
        return 750;  
    } else if (basicSalary >= 25000 && basicSalary <=29999){
        return 850;
    } else if (basicSalary >= 30000 && basicSalary <=34999){
        return 900; 
    } else if (basicSalary >= 35000 && basicSalary <=39999){
        return 950;
    }else if (basicSalary >= 40000 && basicSalary <= 44999){
        return 1000;
    }else if (basicSalary >= 45000 && basicSalary <=49999){
        return 1100;
    }else if (basicSalary >= 50000 && basicSalary <=59999){
        return 1200;
    }else if (basicSalary >= 60000 && basicSalary <= 69999){
        return 1300;
    }else if (basicSalary >= 70000 && basicSalary <=79999){
        return 1400;
    } else if (basicSalary >= 80000 && basicSalary <=89999){
        return 1500;   
    }  else if (basicSalary >= 90000 && basicSalary <=99999){
        return 1600;  
    } else if (basicSalary >= 100000){
        return 1700;
    }else{
        return 150;
    }                              
}

//Next is the function that will calculate the PAYE//
function calculatePAYE(basicSalary) {
    if (basicSalary <= 24000) {
        return 0.1 * basicSalary;
        
    }else if (basicSalary > 24000 && basicSalary <= 32333) {
        return 0.25 * basicSalary;
        
    }else{
        return 0.3 * basicSalary;
    }
    
}

// to call findNetSalary()
const result = findNetSalary();
console.log(result);


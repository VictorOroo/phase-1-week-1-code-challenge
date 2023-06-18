SPEED GENERATOR

This is a program which checks speed and checks if it is below 70 which is a safe speed.
If the speed is 70 and above then their is a problem,it goes further to give demerit points, for every 5 km/s above 70km it gives 1 point.

First I created a function called speedChecker where my code will be stored, then inside the function I declared a variable called speed where the keyed in speed will be stored for calculations.The user will be prompted to enter the car's speed.After the user keys in the speed it will be passed through the parseFloat() function which converts the string representation of the number into a real floating-point number.
After this it goes through the isNan() function which is used to check if the number provided is really a number.If the condition is true then it will return a "Please enter a valid number." message,if it is false it will proceed to the next condition.

The next condition checks if the speed is below 70 and returns "Ok" if true, if it is false it goes to the next condition.In this condition a variable which will store the demerit points is declared.There is also a calculation provided for getting the demerit points which is first taking the speed keyed in and subtracting 70 from it then dividing the answer with 5.The Math.Floor() function is used to round off the demerit points into the nearest whole number.

After getting the demerit points it goes to the next condition which checks if the demerit points are above 12 points, if true it returns a "Licence suspended" message.If the condition is false it returns a message showing the number of demerit points acquired.

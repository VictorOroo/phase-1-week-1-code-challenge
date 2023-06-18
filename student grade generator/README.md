STUDENT GRADE GENERATOR

First I observed the grading system,It was as follows

1.Any number above 79 will be graded ‘A’

2.60 to 79 will be graded ‘B’

3.50 to 59 will be graded ‘C’

4.40 to 49 will be graded ‘D’

5.Any number below 40 will be graded ‘E’

I created a functio called findGrade where my code will be stored.
In the first line of the code the user will be prompted to enter a the number of marks a student has scored.The propmt requires the number to be 0 to 100.

If the use enters a number below 0 or even above 100 the user will receive an invalid message meaning the grading system does not allow the amount of marks keyed in.

If the user inputs a correct number(0-100) it will go through all the different ranges and whenever it finds the correct range it belongs to it will return the correct grade,for example if he/she gets 54 the code will end at 'marks >= 50 && marks <= 59' range and return 'C' meaning it has been graded C.

/*
Prompt the user to enter a number.
• Compare the entered number with a dynamic number value.
• Output the result indicating whether the entered number is greater than, equal to, or less
than the dynamic number value
// */
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "enteredNumber",
        type: "input",
        message: "Enter your number:"
    }
]);
let dynamicNumber = 10;
if (answer.enteredNumber > dynamicNumber) {
    console.log(`The entered number ${answer.enteredNumber} is greater than ${dynamicNumber}`);
}
else if (answer.enteredNumber < dynamicNumber) {
    console.log(`The entered number ${answer.enteredNumber} is less than ${dynamicNumber}`);
}
else if (answer.enteredNumber = dynamicNumber) {
    console.log(`The entered number ${answer.enteredNumber} is equals to ${dynamicNumber}`);
}
else { }
;

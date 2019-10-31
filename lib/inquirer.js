const inquirer = require("inquirer");
const files = require("./files");

module.exports = {
    askForComponent: () => {
        const questions = [
            {
                name: "ce faci",
                type: "input",
                message: "Ffufu message",
                validate: (value) => {
                    if (value.length > 2) {
                        return true;
                    } else {
                        return "Please enter a fucking option"
                    }
                }
            },
            {
                name: "gege",
                type: "password",
                message: "mimiel",
                validate: (value) => {
                    if (value.length > 2) {
                        return true;
                    } else {
                        return "Please enter a fucking option"
                    }
                }
            },
        ];

        return inquirer.prompt(questions);
    },
};
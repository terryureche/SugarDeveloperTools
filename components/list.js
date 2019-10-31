const inquirer = require("inquirer");

module.exports = {
    create: (name, message, choices) => {
        const list = [
            {
                type: "list",
                name: name,
                message: message,
                choices: choices
            }
        ];

        return inquirer.prompt(list);
    }
};
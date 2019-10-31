const inquirer = require("inquirer");

module.exports = {
    create: (name, message, choices, defaultValues) => {
        const checkbox = [
            {
                type: "checkbox",
                name,
                message,
                choices,
                default: defaultValues
            }
        ];

        return inquirer.prompt(checkbox);
    }
};
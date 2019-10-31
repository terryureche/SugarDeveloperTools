const checkbox = require("./../components/checkbox");

const checkboxComponent = class checkboxComponent {
    constructor(name, message, choices, defaultValues) {
        this.name = name;
        this.message = message;
        this.choices = choices;
        this.defaultValues = defaultValues;
    }

    async create(actions) {
        const result = await checkbox.create(this.name, this.message, this.choices, this.defaultValues);

        console.log(result);
    }
}

module.exports = {
    checkboxComponent
};
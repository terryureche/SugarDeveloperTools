const checkbox = require("./../components/checkbox");

const checkboxComponent = class CheckboxComponent {
    constructor(name, message, choices, defaultValues) {
        this.name = name;
        this.message = message;
        this.choices = choices;
        this.defaultValues = defaultValues;
    }

    async create(actions) {
        const results = await checkbox.create(this.name, this.message, this.choices, this.defaultValues);

        let items = results.self;

        for (let item of items) {
            let actionClass = item["class"];
            let functionParams = item["functionParams"];
            let nextAction = new actionClass(...item["constructParams"]);

            await nextAction.create(...functionParams);
        };
    }
}

module.exports = {
    checkboxComponent
};
const input = require("./../components/input");

const inputComponent = class InputComponent {
    constructor(questions) {
        this.questions = questions;
    }

    async create(actions) {
        const result = await input.create(this.questions);

        let functionParams = {
            result: result
        };

        let nextAction = new actions.default.class();

        if (actions.hasOwnProperty("custom")) {
            functionParams.custom = actions.custom;
        }

        await nextAction.create(functionParams);
    }
}

module.exports = {
    inputComponent
};
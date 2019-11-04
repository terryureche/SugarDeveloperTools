const input = require("./../components/input");

const inputComponent = class InputComponent {
    constructor(questions) {
        this.questions = questions;
    }

    async create(actions) {
        const result = await input.create(this.questions);

        let nextAction = new actions.default.class();
        await nextAction.create(result);
    }
}
module.exports = {
    inputComponent
};
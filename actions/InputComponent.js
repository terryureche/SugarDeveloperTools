const input = require("./../components/input");

const inputComponent = class InputComponent {
    constructor(questions) {
        this.questions = questions;
    }

    async create(actions) {
        const result = await input.create(this.questions);

        //todo start to create the file
        console.log(result);
    }
}
module.exports = {
    inputComponent
};
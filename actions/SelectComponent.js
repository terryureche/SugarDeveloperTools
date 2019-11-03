const list = require("./../components/list");

const selectComponent = class SelectComponent {
    constructor(name, message, choices) {
        this.name = name;
        this.message = message;
        this.choices = choices;
    }

    async create(actions) {
        const result = await list.create(this.name, this.message, this.choices);

        let item = result.self;

        let actionClass = item["class"];
        let functionParams = item["functionParams"];
        let nextAction = new actionClass(...item["constructParams"]);

        await nextAction.create(...functionParams);
    }


}

module.exports = {
    selectComponent
};
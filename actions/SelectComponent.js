const list = require("./../components/list");

const selectComponent = class SelectComponent {
    constructor(name, message, choices) {
        this.name = name;
        this.message = message;
        this.choices = choices;
    }

    async create(actions) {
        const result = await list.create(this.name, this.message, this.choices);

        actions.find(async (item, key) => {
            if (item.value === result[this.name] && item.type === "list") {
                let actionClass = item["class"];
                let functionParams = item["functionParams"];
                let nextAction = new actionClass(...item["constructParams"]);

                await nextAction.create(...functionParams);
            } else if (item.value === result[this.name] && item.type === "checkbox") {
                let actionClass = item["class"];
                let functionParams = item["functionParams"];
                let nextAction = new actionClass(...item["constructParams"]);

                await nextAction.create(...functionParams);
            }
        });
    }


}

module.exports = {
    selectComponent
};
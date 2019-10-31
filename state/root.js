const SelectComponent = require("./../actions/SelectComponent")["selectComponent"];
let logicHookType = require("./LogicHook/details")["logicHookType"];

let state = {
    initial: {
        constructor: [
            "selectComponent", "What do you want to be created?",
            [
                {
                    name: "LogicHook", value: "logicHookType"
                },
                {
                    name: "yarn", value: "yarn"
                }
            ]
        ],
        actions: [
            logicHookType
        ]
    }

}

module.exports = {
    state
};
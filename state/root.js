const SelectComponent = require("./../actions/SelectComponent")["selectComponent"];
let logicHookType = require("./LogicHook/type")["logicHookType"];

let state = {
    initial: {
        constructor: [
            "self", "What do you want to be created?",
            [
                {
                    name: "LogicHook",
                    value: logicHookType
                },
                {
                    name: "yarn",
                    value: "yarn",
                }
            ]
        ]
    }

}

module.exports = {
    state
};
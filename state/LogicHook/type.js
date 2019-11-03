let CheckBoxComponent = require("../../actions/CheckBoxComponent")["checkboxComponent"];
let value = require("./details")["logicHookType"];

let logicHookType = {
    type: "checkbox",
    value: "logicHookType",
    class: CheckBoxComponent,
    constructParams: [
        "self",
        "Select LogicHook(s) type(s)", [
            {
                name: "After Save",
                value: value("after_save")
            },
            {
                name: "Before Save",
                value: value("before_save")
            },
            {
                name: "After Delete",
                value: value("before_delete")
            },
            {
                name: "Before Delete",
                value: value("before_delete")
            }
        ]
    ],
    functionParams: []
}

module.exports = {
    CheckBoxComponent,
    logicHookType
}
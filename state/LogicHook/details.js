let CheckBoxComponent = require("./../../actions/CheckBoxComponent")["checkboxComponent"];

let logicHookType = {
    type: "checkbox",
    value: "logicHookType",
    class: CheckBoxComponent,
    constructParams: [
        "checkboxComponent",
        "Select LogicHook(s) type(s)", [
            {
                name: "After Save", value: "after_save"
            },
            {
                name: "Before Save", value: "before_save"
            },
            {
                name: "After Delete", value: "before_delete"
            },
            {
                name: "Before Delete", value: "before_delete"
            }
        ]
    ],
    functionParams: [
        {
            name: 'aaa', fff: "bbb"
        }
    ]
}

module.exports = {
    CheckBoxComponent,
    logicHookType
}
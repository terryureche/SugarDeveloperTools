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
                name: "After Relationship Add",
                value: value("after_relationship_add")
            },
            {
                name: "After Relationship Delete",
                value: value("after_relationship_delete")
            },
            {
                name: "After Delete",
                value: value("after_delete")
            },
            {
                name: "Before Delete",
                value: value("before_delete")
            },
            {
                name: "Process Record",
                value: value("process_record")
            },
            {
                name: "After Retrieve",
                value: value("after_retrieve")
            }
        ]
    ],
    functionParams: []
}

module.exports = {
    CheckBoxComponent,
    logicHookType
}
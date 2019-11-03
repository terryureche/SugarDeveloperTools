let InputComponent = require("./../../actions/InputComponent")["inputComponent"];

let logicHookType = (value) => {
    return {
        type: "input",
        value: value,
        class: InputComponent,
        constructParams: [logicHookInputs
        ],
        functionParams: []
    }
}

const logicHookInputs = [{
    name: "file_name",
    type: "input",
    message: "File name",
    validate: (value) => {
        if (value.length > 5) {
            return true;
        } else {
            return "Please enter at least 5 characters"
        }
    }

},
{
    name: "hook_description",
    type: "input",
    message: "Hook Description",
    validate: (value) => {
        if (value.length > 5) {
            return true;
        } else {
            return "Please enter at least 5 characters"
        }
    }
},
{
    name: "hook_function_name",
    type: "input",
    message: "Hook Function Name",
    validate: (value) => {
        if (value.length > 5) {
            return true;
        } else {
            return "Please enter at least 5 characters"
        }
    }
}];


module.exports = {
    logicHookType
}
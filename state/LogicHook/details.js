let InputComponent = require("./../../actions/InputComponent")["inputComponent"];
let LogicHook = require("./../../SugarComponents/LogicHook/LogicHook");
let chalk = require("chalk");


let logicHookType = (value) => {
    return {
        type: "input",
        value: value,
        callback: () => {
            console.log(chalk.green.bgBlack.bold(`Please enter data for ${value}`));

        },
        class: InputComponent,
        constructParams: [logicHookInputs
        ],
        functionParams: [{
            default: LogicHook,
        }]
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
},
{
    name: "hook_module_name",
    type: "input",
    message: "Hook Module (Empty for global hook)",
    validate: (value) => {
        if (value.length > 5) {
            return true;
        } else {
            console.log("This hook will be created as global hook");

            return true;
        }
    }
}];


module.exports = {
    logicHookType
}
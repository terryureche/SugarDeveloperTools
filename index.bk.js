const files = require("./lib/files");
const inquirer = require('./lib/inquirer');

const chalk = require("chalk");
const figlet = require("figlet");

const VerifyPackageName = require("./SugarComponents/PackageName/VerifyPackageName")["default"];

const state = require("./state/Components/type")["state"];
const SelectComponent = require("./actions/SelectComponent")["selectComponent"];

const run = async () => {
    let selectComponent = new SelectComponent(...state.initial.constructor);

    await selectComponent.create(state.initial.actions, "list");
};

run();

// const run = async () => {
//     state.SelectComponent
// }
// run();

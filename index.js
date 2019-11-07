const clear = require("clear");

const VerifyPackageName = require("./SugarComponents/PackageName/VerifyPackageName")["default"];

const state = require("./state/root")["state"];
const SelectComponent = require("./actions/SelectComponent")["selectComponent"];

const run = async () => {
    let verifyPackageName = new VerifyPackageName();

    await verifyPackageName.run();

    clear();

    let selectComponent = new SelectComponent(...state.initial.constructor);

    await selectComponent.create(state.initial.actions, "list");
};



run();

// const run = async () => {
//     state.SelectComponent
// }
// run();

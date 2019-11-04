const fileUtils = require("./../../lib/files")["fileUtils"];

const logicHook = class LogicHook {
    constructor() {

    }

    async create(inputs) {
        let res = await fileUtils.createDirectory();
    }
}

module.exports = {
    class: logicHook
};
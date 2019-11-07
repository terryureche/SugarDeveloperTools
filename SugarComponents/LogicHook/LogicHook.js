let fileUtils = require("./../../lib/files")["fileUtils"];
let classHook = require("./../../Templates/LogicHook/ClassHook")["default"];
let moduleHookExtension = require("./../../Templates/LogicHook/ModuleHookExtension")["default"];
let ConfigStore = require("./../../lib/configStore")["default"];
let path = require("path");

const logicHook = class LogicHook {
    constructor(logicHookType) {

    }

    async create(inputs) {
        // let fileName = inputs["file_name"];
        // let hookDescription = inputs["hook_description"];
        // let hookFunctionName = inputs["hook_function_name"];
        let result = inputs.result;

        let hookModuleName = result["hook_module_name"];

        let configStore = new ConfigStore();
        let packageName = configStore.getDefaultPackageValue().packagename;

        if (hookModuleName.length === 0) {
            await this.createGlobalHook(inputs, packageName);
        } else {
            await this.createModuleHook(inputs, packageName);
        }
    }

    async createGlobalHook(inputs, packageName) {
        let res = await fileUtils.createDirectory();

    }

    async createModuleHook(inputs, packageName) {
        let logicHookType = inputs.custom.logicHookType;
        let module = inputs.result.hook_module_name;
        let classFileName = inputs.result.file_name + ".php";
        let extensionFileName = packageName + ".php";

        let basePath = path.join(process.cwd(), packageName);
        let extensionPath = path.join(basePath, "src", "custom", "Extension", "modules", module, "Ext", "LogicHooks");
        let classPath = path.join(basePath, "src", "custom", "src", "wsystems", packageName, "LogicHooks");
        let extensionPathFile = path.join(extensionPath, extensionFileName);
        let classPathFile = path.join(classPath, classFileName);


        await fileUtils.createDirectory(classPath);
        await fileUtils.createDirectory(extensionPath);
    }
}

module.exports = {
    class: logicHook
};
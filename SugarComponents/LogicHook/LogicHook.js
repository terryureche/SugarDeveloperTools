let classHookTemplate = require("./../../Templates/LogicHook/ClassHook")["default"];
let moduleHookExtensionTemplate = require("./../../Templates/LogicHook/ModuleHookExtension")["default"];
let ConfigStore = require("./../../lib/configStore")["default"];
let path = require("path");
let FileUtils = require("./../../lib/files")["default"];

const logicHook = class LogicHook {
    constructor(logicHookType) {

    }

    async create(inputs) {
        let hookModuleName = inputs.result.hook_module_name;

        let configStore = new ConfigStore();
        let packageName = configStore.getDefaultPackageValue().packagename;

        if (hookModuleName.length === 0) {
            await this.createGlobalHook(inputs, packageName);
        } else {
            await this.createModuleHook(inputs, packageName);
        }
    }

    async createGlobalHook(inputs, packageName) {
        let res = await FileUtils.createDirectory();


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

        await FileUtils.createDirectory(classPath);
        await FileUtils.createDirectory(extensionPath);

        await this.createFiles(inputs, packageName, extensionPathFile, classPathFile);
    }

    async createFiles(inputs, packageName, extensionPathFile, classPathFile) {
        let classTemplate = classHookTemplate(inputs, packageName);

        let fileExist = FileUtils.exist(extensionPathFile);

        let extensionTemplate = moduleHookExtensionTemplate(inputs, packageName, fileExist);

        await FileUtils.writeFile(classPathFile, classTemplate);

        if (fileExist) {
            await FileUtils.appendFile(extensionPathFile, extensionTemplate);
        } else {
            await FileUtils.writeFile(extensionPathFile, extensionTemplate);
        }
    }
}

module.exports = {
    class: logicHook
};
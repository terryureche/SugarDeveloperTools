const ConfigStore = require("../../lib/configStore")["default"];
const input = require("./../../components/input");
const list = require("./../../components/list");

//this function is not decuplated from the UI
//this can be a logical mistake
//we will see in the future plm
const verifyPackageName = class VerifyPackageName {
    constructor() {
        this.configStore = new ConfigStore();
    }

    async run() {
        let isPackageSet = this._isDefaultPackageAlreadySet();

        if (isPackageSet === true) {
            await this.selectNewOrOldPackageName();
        } else {
            let message = 'Please input the name of the package(it will be used to construct the path and file names)';
            await this.insertPackageName(message);
        }
    }

    async insertPackageName(message) {
        let inputMeta = [
            {
                name: 'packagename',
                type: 'input',
                message: message,
                validate: (value) => {
                    if (value.length > 0) {
                        return true;
                    } else {
                        return "Please enter the name of the package";
                    }
                }
            }
        ];

        let resp = await input.create(inputMeta);

        this.configStore.setDefaultPackageValue(resp);
    }

    async selectNewOrOldPackageName() {
        let oldValue = this._getDefaultPackageValue().packagename;

        let selectMeta = {
            name: "selectPackageToUse",
            message: `Current package name '${oldValue}'. Do you want to keep it or to set a new package name?`,
            choices: [
                {
                    name: `Current Value - '${oldValue}'`,
                    value: "old"
                },
                {
                    name: "New Value",
                    value: "new"
                }
            ]
        };

        let resp = await list.create(selectMeta.name, selectMeta.message, selectMeta.choices);

        if (resp.selectPackageToUse === "old") {
            return true;
        }

        await this.insertPackageName("Please enter the new packageName");
    }

    _getDefaultPackageValue() {
        return this.configStore.getDefaultPackageValue();
    }

    _isDefaultPackageAlreadySet() {
        let currentValue = this.configStore.getDefaultPackageValue();

        //be aware current value is an objec key/value

        return typeof currentValue !== "undefined";
    }
};

module.exports = {
    default: verifyPackageName
};


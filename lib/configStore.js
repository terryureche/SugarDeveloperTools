const configStore = require("configstore");
const packageJson = require("./../package.json");

const config = class ConfigStore {
    constructor() {
        this.config = new configStore(packageJson.name);
    }

    getDefaultPackageKey() {
        return packageJson.name
    }

    getDefaultPackageValue() {
        let value = this.get(this.getDefaultPackageKey());

        return value;
    }

    setDefaultPackageValue(value) {
        let defaultKey = this.getDefaultPackageKey();

        this.set(defaultKey, value);
    }

    isDefaultPackageSet() {
        let currentValue = this.getDefaultPackageValue();
        debugger;
        return typeof currentValue !== "undefined";
    }

    get(key) {
        let value = this.config.get(key);

        return value;
    }

    set(key, value) {
        this.config.set(key, value);
    }
};

module.exports = {
    default: config
};
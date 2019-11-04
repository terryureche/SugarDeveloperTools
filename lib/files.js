const fs = require("fs");
const path = require("path");

const fileUtils = class FileUtils {
    static getCurrentDirBase() {
        return process.cwd();
    }

    static directoryExists(filePath) {
        return fs.existsSync(filePath);
    }

    static async createDirectory(relativePath) {
        await fs.promises.mkdir(path.join(this.getCurrentDirBase(), relativePath), { recursive: true });
    }
};

module.exports = {
    fileUtils
};
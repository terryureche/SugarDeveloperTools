const fs = require("fs");
const path = require("path");

const fileUtils = class FileUtils {
    static getCurrentDirBase() {
        return process.cwd();
    }

    static directoryExists(filePath) {
        return fs.existsSync(filePath);
    }

    static async createDirectory(absolutPath) {
        let directoryExists = FileUtils.directoryExists(absolutPath);

        if (directoryExists === true) {
            return true;
        }

        await fs.promises.mkdir(path.join(absolutPath), { recursive: true });
    }
};

module.exports = {
    fileUtils
};
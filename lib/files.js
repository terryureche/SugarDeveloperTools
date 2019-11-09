const fs = require("fs");
const path = require("path");

const fileUtils = class FileUtils {
    static getCurrentDirBase() {
        return process.cwd();
    }

    static exist(filePath) {
        return fs.existsSync(filePath);
    }

    static async writeFile(path, content) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, content, "utf8", (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(content);
                }
            });
        });
    }

    static async appendFile(path, content) {
        return new Promise((resolve, reject) => {
            fs.appendFile(path, content, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(content)
                }
            });
        });
    }

    static async createDirectory(absolutPath) {
        let directoryExists = FileUtils.exist(absolutPath);

        if (directoryExists === true) {
            return true;
        }

        await fs.promises.mkdir(path.join(absolutPath), { recursive: true });
    }


};

module.exports = {
    default: fileUtils
};
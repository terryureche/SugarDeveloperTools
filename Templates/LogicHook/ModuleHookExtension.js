
const moduleLogicHook = (data, packageName, fileExist) => {
    let inputs = data.result;
    let logicHookType = data.custom.logicHookType;

    let fileName = inputs["file_name"];
    let hookDescription = inputs["hook_description"];
    let hookFunctionName = inputs["hook_function_name"];
    let path = `Sugarcrm\\Sugarcrm\\custom\\wsystems\\${packageName}\\LogicHooks\\${fileName}`;
    let template = `

    $hook_array["${logicHookType}"][] = array(
        1,
        "${hookDescription}",
        null,
        "${path}",
        "${hookFunctionName}"
    );
    `;

    let startTag = `<?php`;

    if (fileExist) {
        return template;
    } else {
        let completeTemplate = (startTag + template);
        return completeTemplate;
    }
}

module.exports = {
    default: moduleLogicHook
};
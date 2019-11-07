const classLogicHook = (data, packageName) => {
    let inputs = data.result;
    let className = inputs["file_name"];
    let functionName = inputs["hook_function_name"];

    let template =
        `
<?php

namespace Sugarcrm\Sugarcrm\custom\wsystems\${packageName}\LogicHooks;

class ${className}
{
    public function ${functionName} ($bean, $event, $arguments)
    {

    }
}`;
    return template;
}

module.exports = {
    default: classLogicHook
}
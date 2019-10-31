const files = require("./lib/files");
const inquirer = require('./lib/inquirer');

const chalk = require("chalk");
const figlet = require("figlet");

// const list = require("./components/list");

// const run = async () => {
//     const listRes = await list.create("gigel", "ce faci?", [
//         {
//             name: "npm", value: "npm"
//         },
//         {
//             name: "yarn", value: "yarn"
//         }
//     ]);

//     console.log(listRes);
// };
// run();

const SelectComponent = require("./actions/SelectComponent")["selectComponent"];



const run = async () => {
    let selectComponent = new SelectComponent(
        "selectComponent", "What do you want to be created?", [
            {
                name: "LogicHook", value: "logicHook"
            },
            {
                name: "yarn", value: "yarn"
            }
        ]
    );

    let actions = [
        {
            value: "logicHook",
            class: SelectComponent,
            constructParams: [
                "Ssss", "dddddd?", [
                    {
                        name: "aaa", value: "bbbb"
                    },
                    {
                        name: "ccc", value: "dddd"
                    }
                ]
            ],
            functionParams: [
                {
                    name: "maria", value: "gigel"
                }
            ]
        }
    ];

    await selectComponent.create(actions, "list");
}

run();

// const input = require("./components/input");

// let inputs = [
//     {
//         name: 'username',
//         type: 'input',
//         message: 'Enter your GitHub username or e-mail address:',
//         validate: function (value) {
//             if (value.length) {
//                 return true;
//             } else {
//                 return 'Please enter your username or e-mail address.';
//             }
//         }
//     },
//     {
//         name: 'password',
//         type: 'password',
//         message: 'Enter your password:',
//         validate: function (value) {
//             if (value.length) {
//                 return true;
//             } else {
//                 return 'Please enter your password.';
//             }
//         }
//     }
// ];

// const run = async () => {
//     let resp = await input.create(inputs);

//     console.log(resp);

// };

// run();

// console.log(
//     chalk.yellow(
//         figlet.textSync('Ginit', { horizontalLayout: 'full' })
//     )
// );

// const run = async () => {
//     const credentials = await inquirer.askForComponent();
//     console.log(credentials);
// };

// run();

// if (!files.directoryExists('.git')) {
//     console.log(chalk.red('Already a Git repository!'));
//     process.exit();
// }
// console.log(
//     chalk.yellow(
//         figlet.textSync('Ginit', { horizontalLayout: 'full' })
//     )
// );

// const run = async () => {
//     const credentials = await inquirer.askForComponent();
//     console.log(credentials);
// };

// run();

// if (!files.directoryExists('.git')) {
//     console.log(chalk.red('Already a Git repository!'));
//     process.exit();
// }
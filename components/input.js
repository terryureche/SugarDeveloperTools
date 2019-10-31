const inquirer = require("inquirer");

module.exports = {
    create: (questions) => {
        return inquirer.prompt(questions);
    }
}


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
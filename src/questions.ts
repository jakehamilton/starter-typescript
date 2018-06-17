import inquirer from 'inquirer';

export default [
    {
        type: 'input',
        name: 'npm.username',
        message: 'What is your npm username?',
    },
    {
        type: 'input',
        name: 'git.username',
        message: 'What is your git username?',
    },
    {
        type: 'input',
        name: 'npm.email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'package.name',
        message: "What is this module's name?",
    },
    {
        type: 'input',
        name: 'package.description',
        message: 'What does this module do? (description)',
    },
    {
        type: 'input',
        name: 'package.repository',
        message: 'Where is this module stored? (git repo url)',
    },
] as inquirer.Question[];

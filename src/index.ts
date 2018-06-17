import * as path from 'path';
import * as inquirer from 'inquirer';
import questions from './questions';
import render from 'render-in-place';

export default async (where: string) => {
    const answers = await inquirer.prompt(questions);

    const files = {
        docs: {
            readme: path.resolve(where, 'docs', 'README.md'),
        },
        readme: path.resolve(where, 'README.md'),
        package: path.resolve(where, 'package.json'),
    };

    render(files.docs.readme, answers);
    render(files.readme, answers);

    render(files.package, answers);
};

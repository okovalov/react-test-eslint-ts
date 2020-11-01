/**

////// React JS

npx create-react-app react-js

yarn add --dev \
      prettier \
      eslint-config-prettier \
      eslint-plugin-prettier \
      eslint-plugin-react \
      typescript

"extends": [
  "react-app",
  "react-app/jest",
  "plugin:react/recommended",
  "plugin:prettier/recommended"
]

////// React TS

npx create-react-app react-ts --template typescript

yarn add --dev \
      prettier \
      eslint-config-prettier \
      eslint-plugin-prettier \
      eslint-plugin-react \
      @typescript-eslint/parser \ // The parser that will allow ESLint to lint TypeScript code
      @typescript-eslint/eslint-plugin  \ // A plugin that contains a bunch of ESLint rules that are TypeScript specific

extends: [
  "react-app",
  "react-app/jest",
  "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
  "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
],

////// Husky (precommit)
yarn add --dev husky lint-staged

"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.{js,ts,tsx}": [
        "eslint --cache --fix"
    ]
}

////VS Code

{
    "editor.formatOnSave": false,
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
      "editor.formatOnSave": false
    },
    "[typescriptreact]": {
      "editor.formatOnSave": false
    },
    // tell the ESLint plugin to run on save
    "eslint.validate": [
      "html", "javascript", "javascriptreact",
      "typescript", "typescriptreact"
    ],
    // Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
    "prettier.disableLanguages": [
        "javascript", "javascriptreact",
        "typescript", "typescriptreact"
    ],
    "eslint.workingDirectories": [
        {
            "mode": "auto"
        }
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
**/

////// TS and JS
// "lint": "eslint './src/**/*.{js,jsx,ts,tsx}' "
// "lint:fix": "eslint './src/**/*.{js,jsx,ts,tsx}' --fix"

module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2
};

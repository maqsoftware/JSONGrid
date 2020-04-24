module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-undef": 0, // Disabled for errors on powerbi ( line: 3 )
        "no-unused-vars": 0, 
        "no-useless-escape": 0, // Disabled for regex ( line : 1690 )
        "no-inner-declarations": 0 // Disabled for objectEnumerationUtility and colorPalette file
    }
};
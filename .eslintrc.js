module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
  
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "extends": "airbnb-base",
    "rules": {
        "linebreak-style": 0,
        "no-unused-vars":0,
        "import/prefer-default-export": 0,
    }
};
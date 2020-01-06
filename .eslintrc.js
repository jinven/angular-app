module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended"
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
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        // 禁止使用 console: 0 = off, 1 = warn, 2 = error
        "no-console": 0,
        "indent": ["error", 2, {
            "SwitchCase": 1
        }],
        // https://prettier.io/
        "prettier/prettier": [
          "error",
          {
            // auto lf(\n) crlf(\r\n) cr(\r)
            // "endOfLine": "crlf",
            "singleQuote": true,
            "trailingComma": "none",
            "bracketSpacing": true,
            "printWidth": 300,
            // 句尾添加分号
            "prettier.semi": true,
            "jsxBracketSameLine": true,
            "tabWidth": 2,
            // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
            "trailingComma": "all"
          }
        ]
    }
};
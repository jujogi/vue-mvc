module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/recommended",
        "@vue/airbnb",
    ],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double", { "avoidEscape": true }],
        "max-len": ["error", {
            code: 150,
            ignoreTrailingComments: true,
            ignoreStrings: true,
        }],
        "vue/html-indent": ["error", 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        "no-underscore-dangle": "off"
    },
};

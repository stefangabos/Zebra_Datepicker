module.exports = [{
    "languageOptions": {
        "globals": {
            "$": true
        }
    },
    "rules": {
        "array-bracket-spacing": ["warn", "never"],
        "block-scoped-var": 1,
        "block-spacing": ["warn", "always"],
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "comma-dangle": 1,
        "comma-spacing": ["warn", {
            "before": false,
            "after": true
        }],
        "comma-style": ["warn", "last"],
        "computed-property-spacing": ["warn", "never"],
        "curly": ["warn", "multi"],
        "dot-location": ["warn", "property"],
        "eol-last": ["warn", "always"],
        "indent": ["warn", 4, {
            "SwitchCase": 1,
            "ignoreComments": true
        }],
        "keyword-spacing":  ["warn", {
            "before": true,
            "after": true
        }],
        "func-call-spacing": ["warn", "never"],
        "key-spacing": ["warn", {
            "beforeColon": false,
            "mode": "minimum"
        }],
        "lines-around-comment": ["warn", {
            "beforeBlockComment": true,
            "afterBlockComment": false
        }],
        "quotes": ["warn", "single"],
        "newline-after-var": ["warn", "always"],
        "newline-before-return": 1,
        "no-console": 1,
        "no-dupe-args": 1,
        "no-dupe-keys": 1,
        "no-duplicate-case": 1,
        "no-else-return": 1,
        "no-empty": 1,
        "no-extra-semi": 1,
        "no-fallthrough": 1,
        "no-func-assign": 1,
        "no-inner-declarations": ["warn", "functions"],
        "no-irregular-whitespace": ["warn", {
            "skipStrings": false,
            "skipComments": false,
            "skipRegExps": false,
            "skipTemplates": false
        }],
        "no-lonely-if": 1,
        "no-mixed-spaces-and-tabs": 1,
        "no-multi-spaces": ["warn", {
            "ignoreEOLComments": true
        }],
        "no-multiple-empty-lines": ["warn", {
            "max": 1,
            "maxEOF": 1,
            "maxBOF": 0
        }],
        "no-redeclare": 1,
        "no-tabs": 1,
        "no-trailing-spaces": ["warn", {
            "skipBlankLines": false
        }],
        "no-unexpected-multiline": 1,
        "no-unneeded-ternary": ["warn", {
            "defaultAssignment": false
        }],
        "no-unused-vars": [1, {
            "vars": "all",
            "args": "after-used",
            "varsIgnorePattern": "[$]this"
        }],
        "no-useless-concat": 1,
        "no-whitespace-before-property": 1,
        "object-curly-spacing": ["warn", "never"],
        "object-property-newline": ["warn", {
            "allowMultiplePropertiesPerLine": false
        }],
        "one-var": ["warn", "always"],
        "radix": ["warn", "always"],
        "semi-spacing": ["warn", {
            "before": false,
            "after": true
        }],
        "space-before-blocks": ["warn", "always"],
        "space-before-function-paren": ["warn", "never"],
        "space-in-parens": ["warn", "never"],
        "space-infix-ops": 1,
        "space-unary-ops": ["warn", {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": ["warn", "always", {
            "exceptions": ["-", "+", "*", "=", "_"]
        }],
        "use-isnan": 1,
        "valid-typeof": 1,
        "wrap-iife": ["warn", "inside"]
    }
}];

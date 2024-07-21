import globals from "globals";
import html from "@html-eslint/eslint-plugin";
import js from "@eslint/js";

export default [
    {
        ...html.configs["flat/recommended"],
        files: ["**/*.html"],
        rules: {
            ...html.configs["flat/recommended"].rules,
            // Rules turned off are already handled by Prettier
            "@html-eslint/attrs-newline": "off",
            "@html-eslint/element-newline": "off",
            "@html-eslint/id-naming-convention": ["error", "kebab-case"],
            "@html-eslint/indent": "off",
            "@html-eslint/lowercase": "error",
            "@html-eslint/no-extra-spacing-attrs": "off",
            "@html-eslint/no-inline-styles": "error",
            "@html-eslint/no-script-style-type": "error",
            "@html-eslint/no-skip-heading-levels": "error",
            "@html-eslint/no-target-blank": "error",
            "@html-eslint/quotes": "off",
            "@html-eslint/require-button-type": "error",
            "@html-eslint/require-closing-tags": ["error", { selfClosing: "always" }],
            "@html-eslint/require-meta-charset": "error",
            "@html-eslint/require-meta-description": "error",
            "@html-eslint/require-meta-viewport": "error",
            "@html-eslint/require-open-graph-protocol": "error",
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.es2025,
                ...globals.browser,
            },
            ecmaVersion: "latest",
            sourceType: "module",
            // parserOptions: { project: "jsconfig.json" },
        },
        files: ["**/*.js"],
        rules: {
            ...js.configs.recommended.rules,
            "default-case-last": "error",
            "default-param-last": "error",
            "eqeqeq": "error",
            "func-style": ["error", "declaration"],
            "grouped-accessor-pairs": ["error", "getBeforeSet"],
            "logical-assignment-operators": "error",
            "no-array-constructor": "error",
            "no-control-regex": "off",
            "no-implied-eval": "error",
            "no-irregular-whitespace": [
                "error",
                {
                    skipStrings: true,
                    skipComments: true,
                    skipRegExps: true,
                    skipTemplates: true,
                    skipJSXText: true,
                },
            ],
            "no-loop-func": "warn",
            "no-negated-condition": "warn",
            "no-self-compare": "error",
            "no-template-curly-in-string": "warn",
            "no-throw-literal": "error",
            "no-undef-init": "error",
            "no-unmodified-loop-condition": "warn",
            "no-unneeded-ternary": "error",
            "no-unreachable-loop": "warn",
            "no-useless-computed-key": "error",
            "no-useless-concat": "error",
            "no-useless-return": "error",
            "no-var": "error",
            "operator-assignment": "error",
            "prefer-const": "error",
            "prefer-exponentiation-operator": "error",
            "prefer-object-spread": "error",
            "prefer-promise-reject-errors": "error",
            "prefer-regex-literals": "error",
            "prefer-rest-params": "error",
            "prefer-template": "warn",
            "require-await": "error",
        },
    },
];

import html from "@html-eslint/eslint-plugin";

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
];

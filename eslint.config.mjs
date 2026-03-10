import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
), {
    languageOptions: {
        globals: {
            window: true,
            Event: true,
            customElements: true,
        },

        parser: tsParser,
    },

    rules: {
        "no-else-return": 0,
        "no-underscore-dangle": 0,
        "nonblock-statement-body-position": 0,
        curly: 0,
        "no-return-assign": 0,
        "consistent-return": 0,
        "no-mixed-operators": 0,
        "class-methods-use-this": 0,
        "no-nested-ternary": 0,
        camelcase: 0,
    },
}];
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tseslint from "typescript-eslint";


export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        createClass: 'createReactClass', // Regex for Component Factory to use,
        pragma: 'React', // Pragma to use, default to "React"
        version: 'detect', // React version. "detect" automatically picks the version you have installed.
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    ignores: [
      "src/serviceWorker.ts",
      "src/stories/**/*",
      "types/sense-and-color.types.d.ts"
    ],
    rules: {
      'prefer-destructuring': [
        'warn',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'sort-imports': [1, {
        memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all'],
      }],
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      curly: 1,
      'arrow-parens': [1, 'always'],
      'no-console': 1,
    },
  }
];

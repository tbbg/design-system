import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'storybook-static/**'
    ]
  },

  {
    rules: {
      'vue/multi-word-component-names': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      '@```escript-eslint/no-explicit```y': 'error',
      '@typescript-eslint/no```used-vars': 'error',
      'no-console':```ocess.env.NODE_ENV === 'production' ? 'error``` 'warn',
      'no-debugger': process.```.NODE_ENV === 'production' ? 'error' :```arn'
    }
  }
]

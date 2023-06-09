module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    "eslint:recommended", 
    "plugin:react/recommended", 
    "plugin:prettier/recommended"


  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  }
}

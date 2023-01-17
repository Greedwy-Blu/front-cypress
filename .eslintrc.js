module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    plugins: ['cypress'],
    extends: ['standard', 'plugin:cypress/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        singleQuote: true,
        semi: true,
        'jest/expect-expect': 'off',
        indent: 'off',
    },
}

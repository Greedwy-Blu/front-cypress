module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: 'standard',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        camelcase: 'off',
        'no-use-before-define': 'off',
        'prefer-const': 'off',
        'n/no-path-concat': 'off',
        indent: 'off',
    },
}

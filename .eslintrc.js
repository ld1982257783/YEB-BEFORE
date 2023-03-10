module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 'off',
        'vue/no-unused-vars': 'off',
        'vue/require-v-for-key': 'off',
        'no-unused-vars': 'off',
        'vue/no-unused-components': 'off',
        "vue/no-multiple-template-root": "off",
        "no-unused-vars": 'off',
        'no-mixed-spaces-and-tabs': 0,
        'vue/no-use-v-if-with-v-for': ["error",{
            "allowUsingIterationVar": true
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    
};

module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "curly": "error",
        "brace-style": "error",
        "complexity": ["error", 8],
        "indent": [
            "error",
            "tab",
            {
	            "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
        ],
        "no-console": 0
    }
};
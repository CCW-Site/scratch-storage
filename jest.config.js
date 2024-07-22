module.exports = {
    transform: {
        '\\.(png|svg|wav|py|txt|glsl)$|(^|/)builtins/defaultJavascript.js$':
            '<rootDir>/test/transformers/arraybuffer-loader.js'
    }
};

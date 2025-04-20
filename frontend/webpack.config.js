module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: __dirname,
            watch: true,
        },
        open: true,
        port: 8080,
    },
};
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://test.mysite.com"
            },
        }
    },
    chainWebpack(config) {
        config.plugin('optimize-css').tap(([{
            cssnanoOptions,
            ...args
        }]) => {
            const preset = cssnanoOptions.preset || [];
            preset.forEach(item => {
                if (typeof item === 'object') {
                    item.calc = false;
                }
            })
            cssnanoOptions.preset = preset;
            return [{
                cssnanoOptions,
                ...args
            }];
        })
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : './',
}
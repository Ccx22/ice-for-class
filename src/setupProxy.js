const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api1", {
            target: 'http://xxx',
            changeOrigin: true,
            pathRewrite: {
                "^/api1": ""
            }
        }),
        // createProxyMiddleware("/api2", {
        //     target: 'http://xxx',
        //     changeOrigin: true,
        //     pathRewrite: {
        //         "^/api2": ""
        //     }
        // })
    )
}
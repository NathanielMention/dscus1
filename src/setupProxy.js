const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://dscus1.herokuapp.com/",
      changeOrigin: true,
    })
  );
};

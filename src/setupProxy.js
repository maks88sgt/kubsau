const { env } = require('process');

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 app.use(
      '/Account',
      createProxyMiddleware({
        target: 'https://new-att.kubsau.ru/Account',
        changeOrigin: true,
      })
  );
    app.use(
        '/Chair',
        createProxyMiddleware({
            target: 'https://new-att.kubsau.ru/Chair',
            changeOrigin: true,
        })
    );
};

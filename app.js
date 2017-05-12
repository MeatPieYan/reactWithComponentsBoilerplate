module.exports = app => {
  app.beforeStart(function* () {
    app.logger.info('*****************tttt');
  });
};

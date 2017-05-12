const fs = require('fs');
const path = require('path');

module.exports = app => {

  fs.readdirSync(path.resolve(__dirname, './routers'))
    .filter(filename =>
      filename !== path.basename(__filename)
    )
    .forEach(filename => {
      app.logger.info(`router filename: ${filename}`);
      require(`./routers/${filename}`)(app);
    });
};

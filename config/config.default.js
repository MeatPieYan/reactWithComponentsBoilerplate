const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.keys = `${appInfo.name}20170510`;
  config.bodyParser = { jsonLimit: '10mb' };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
    root: [
      path.join(appInfo.baseDir, 'view/template'),
    ].join(','),
    defaultExtension: '.html',
  };

  return config;
};

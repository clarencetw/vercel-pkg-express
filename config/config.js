const _ = require('lodash');
const path = require('path');

const isPkg = process.pkg ? true : false;
const cwd = isPkg ? path.dirname(process.execPath) : path.dirname(__dirname);
const config = require(path.join(cwd, 'config.json'));
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

global.gConfig = finalConfig;

console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
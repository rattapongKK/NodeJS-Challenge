const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const sorting = require('./sorting');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...sorting
};
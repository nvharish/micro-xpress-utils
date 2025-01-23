const morgan = require('./morgan');

/**
 * @typedef {'morgan'} Logger
 */

/**
 *
 * @param {Logger} logger Set the logger to use.
 */
module.exports = function (logger = 'morgan') {
    switch (logger) {
        default:
            return morgan();
    }
};

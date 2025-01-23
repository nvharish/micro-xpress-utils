const http = require('http');

/**
 * Contain HTTP status codes and messages
 * @author N V Harish <nv.harish@outlook.com>
 * @example const {statusCode, statusMessage} = StatusCode.OK
 */
const StatusCode = {};
Object.entries(http.STATUS_CODES).forEach(
    ([key, val]) =>
        (StatusCode[val.toUpperCase().replaceAll(/[^A-Za-z0-9]/g, '_')] = {
            statusCode: parseInt(key),
            statusMessage: val,
        })
);
Object.freeze(StatusCode);

const ResponseStatus = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
};

module.exports = { StatusCode, ResponseStatus };

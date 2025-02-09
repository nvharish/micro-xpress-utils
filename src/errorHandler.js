const { StatusCode, ResponseStatus } = require('./constants');

/**
 * Error handler. Make sure to include error handler middleware at the end to handle all errors.
 * @author N V Harish <nv.harish@outlook.com>
 * @returns Error handler callback
 * @example const errorHandler = require('@micro-xpress/utils');
 * const express = require('express');
 * const app = express();
 * app.use(errorHandler());
 */
module.exports = function () {
    /**
     * @param {Error} err
     * @param {Request} _req
     * @param {Response} res
     * @param {CallableFunction} next
     */
    return (err, _req, res, next) => {
        res.locals.error = {
            message: err.toString(),
            cause: err.cause,
        };

        if (process.env.NODE_ENV !== 'production') {
            res.locals.error.stack = err.stack;
        }

        if (res.headersSent) {
            return next(err);
        }

        return res
            .status(err.code ?? StatusCode.INTERNAL_SERVER_ERROR.statusCode)
            .json({
                status: ResponseStatus.ERROR,
                error:
                    err.message ??
                    StatusCode.INTERNAL_SERVER_ERROR.statusMessage,
            });
    };
};

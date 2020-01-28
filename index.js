/*!
 * mime-types
 * Copyright(c) 2020 Gabriel Paul "Cley Faye" Risterucci
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */

var base = require('./base')
var extname = require('path').extname

/**
 * Module exports.
 * @public
 */
var nodeVersion = base.mime(extname)
exports.charset = nodeVersion.charset
exports.charsets = nodeVersion.charsets
exports.contentType = nodeVersion.contentType
exports.extension = nodeVersion.extension
exports.extensions = nodeVersion.extensions
exports.lookup = nodeVersion.lookup
exports.types = nodeVersion.types

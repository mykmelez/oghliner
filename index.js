/**
 * Copyright 2015 Mozilla
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var configure = require('./lib/configure');
var deploy = require('./lib/deploy');
var path = require('path');
var swPrecache = require('sw-precache');
var gutil = require('gulp-util');

function offline(config, callback) {
  var rootDir = config.rootDir || './';
  var fileGlobs = config.fileGlobs || ['**/*'];
  swPrecache.write(path.join(rootDir, 'offline-worker.js'), {
    staticFileGlobs: fileGlobs.map(function(v) { return path.join(rootDir, v) }),
    stripPrefix: rootDir,
    verbose: true,
    logger: gutil.log,
    importScripts: config.importScripts || [],
  }, callback);
}

module.exports = {
  configure: configure,
  deploy: deploy,
  offline: offline,
};

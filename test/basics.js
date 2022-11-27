// -*- coding: utf-8, tab-width: 2 -*-
'use strict';

const eq = require('assert').strictEqual;

const nowFmt = require('../nowfmt.js');

const rgx = /^\d{8}([\S\s]*)\d{6}$|^/;

eq(rgx.exec(nowFmt())[1], '-');
eq(rgx.exec(nowFmt.custom({ sep: '' }))[1], '');
eq(rgx.exec(nowFmt.custom({ sep: '.' }))[1], '.');

console.info('+OK basics test passed.');

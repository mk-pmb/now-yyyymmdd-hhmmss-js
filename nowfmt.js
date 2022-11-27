/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
'use strict';

module.exports = (function setup(y) {

  const EX = function nowfmt() { return nowfmt.custom({ sep: '-' }); };

  EX.custom = function customNowFmt(opt) {
    const n = new Date();
    const d = String(1e8
      + (n.getFullYear() * 1e4)
      + ((n.getMonth() + 1) * 1e2)
      + n.getDate()
      ).slice(1);
    const t = String(1e6
      + (n.getHours() * 1e4)
      + (n.getMinutes() * 1e2)
      + n.getSeconds()
      ).slice(1);
    return d + opt.sep + t;
  };

  return EX;
}());

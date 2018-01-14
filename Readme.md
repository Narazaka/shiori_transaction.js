# [shiori_transaction.js](https://github.com/Narazaka/shiori_transaction.js)

[![npm](https://img.shields.io/npm/v/shiori_transaction.svg)](https://www.npmjs.com/package/shiori_transaction)
[![npm license](https://img.shields.io/npm/l/shiori_transaction.svg)](https://www.npmjs.com/package/shiori_transaction)
[![npm download total](https://img.shields.io/npm/dt/shiori_transaction.svg)](https://www.npmjs.com/package/shiori_transaction)
[![npm download by month](https://img.shields.io/npm/dm/shiori_transaction.svg)](https://www.npmjs.com/package/shiori_transaction)

[![Dependency Status](https://david-dm.org/Narazaka/shiori_transaction.js/status.svg)](https://david-dm.org/Narazaka/shiori_transaction.js)
[![devDependency Status](https://david-dm.org/Narazaka/shiori_transaction.js/dev-status.svg)](https://david-dm.org/Narazaka/shiori_transaction.js?type=dev)
[![Travis Build Status](https://travis-ci.org/Narazaka/shiori_transaction.js.svg?branch=master)](https://travis-ci.org/Narazaka/shiori_transaction.js)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Narazaka/shiori_transaction.js?svg=true&branch=master)](https://ci.appveyor.com/project/Narazaka/shiori-transaction-js)
[![codecov.io](https://codecov.io/github/Narazaka/shiori_transaction.js/coverage.svg?branch=master)](https://codecov.io/github/Narazaka/shiori_transaction.js?branch=master)
[![Code Climate](https://codeclimate.com/github/Narazaka/shiori_transaction.js/badges/gpa.svg)](https://codeclimate.com/github/Narazaka/shiori_transaction.js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/937719d8b0dc4da28e4f6888fa6ea91d)](https://www.codacy.com/app/narazaka/shiori_transaction-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Narazaka/shiori_transaction.js&amp;utm_campaign=Badge_Grade)
[![Greenkeeper badge](https://badges.greenkeeper.io/Narazaka/shiori_transaction.js.svg)](https://greenkeeper.io/)

SHIORI Protocol transaction

## Install

npm:
```
npm install shiorijk shiori_converter shiori_transaction
```

This module depends on [ShioriJK](https://github.com/Narazaka/shiorijk) and [shiori_converter.js](https://github.com/Narazaka/shiori_converter.js).

## Usage

node.js:
```javascript
var shiori_transaction = require('shiori_transaction');
var ShioriTransaction = shiori_transaction.ShioriTransaction;
```

browser:
```html
<script src="shiorijk.js"></script>
<script src="shiori_converter.js"></script>
<script src="shiori_transaction.js"></script>
```

```javascript
var request3 = new ShioriJK.Message.Request({
  request_line: {
    method: 'GET',
    version: '3.0',
  },
  headers: {
    ID: 'OnBoot',
    Charset: 'UTF-8',
    Sender: 'Ikagaka',
  },
});

var response2 = new ShioriJK.Message.Response({
  status_line: {
    code: 200,
    version: '2.6',
  },
  headers: {
    Sentence: '\\h\\s[0]\\e',
    Charset: 'UTF-8',
    Sender: 'ikaga',
  },
});

var transaction = new ShioriTransaction();
transaction.request = request3;
console.log(request3.to('2.6').toString());

transaction.response = response2;
console.log(response2.to('3.0').toString());
```

## API

[API Document](https://narazaka.github.io/shiori_transaction.js/index.html)

## License

This is released under [MIT License](http://narazaka.net/license/MIT?2015).

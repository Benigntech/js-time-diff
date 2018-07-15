Javascript Time Difference Library
==================================

An extremely lightweight time difference javascript library.

## Install
```$xslt
npm i js-time-diff
```
##Usages
######Use in HTML
```html
<script type="text/JavaScript" src="dist/time-diff.min.js" />

//use global variable TimeDiff
```
######Or use in javascript
```js
import TimeDiff from 'js-time-diff'; //es6

var TimeDiff = require('js-time-diff'); //es5
```

## Example
```js
TimeDiff('07-07-18', '07-10-18');
// output: 3 days ago

//the second parameter is the current date and time by default.
TimeDiff('07-07-18'); 
// output: 9 days ago

TimeDiff('Sun Jul 15 2018 16:01:07 GMT+0530');
// output: 31 seconds ago

TimeDiff('Sun Jul 15 2018 16:01:07 GMT+0530', 'Sun Jul 15 2018 16:02:55 GMT+0530');
// output: 2 minutes ago

TimeDiff('Sun Jul 15 2018 16:01:07 GMT+0530', new Date() );
// output: 2 days ago
```
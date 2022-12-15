console.log('----imported npm packages----')
const upper = require('upper-case') // imported uppercase package
const lower = require('lower-case')  //imported lowercase package
const moment = require('moment')   // imported moment package
const lodash = require('lodash')  // imported moment package
const axios = require('axios') // imported axios package

console.log('----upper-case example----')
console.log(upper.upperCase('patheya technology'))
console.log('----lower-case example----')
console.log(lower.lowerCase('WELCOME TO PATHEYA'))
console.log('----moment example----')
console.log(moment().millisecond());  // it gives miliseconds
console.log(moment().date());
console.log(moment().day(0));
console.log(moment().weekYear(3));
console.log(moment().set('year', 2013)); //to set the year
console.log(moment().set('date', 1));
console.log(moment().set('hour', 13));
console.log('---as per our requirement we can explore moment package---')
console.log('----lodash package-----')
console.log(lodash.groupBy([1,2,3,4,5,6,6,7,7,8,9,99,10,11,12,23,45]))
console.log(lodash.groupBy(['one','two','three','four','eleven','twelvee','thousandd'],'length'))


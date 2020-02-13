
function isCanadianPostalCode(s) {
  return /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/.test(s)
}

function isVisa(s) {
  return /^4(\d{15}|\d{12})$/.test(s)
}

function isMasterCard(s) {
  return /^5[1-5]\d{14}$/.test(s)
}
/**
function isAdaFloat(s) {
  return .test(s)
}

function isNotThreeEndingInOO(s) {
  return /^[^[a-zA-Z](O|o){2}]$/.test(s)
}
*/
function isDivisibleBy64(s) {
  return /^(0+|[0-1]*1000000)$/.test(s)
}

function isEightThroughTwentyNine(s) {
  return /^[8-9]|[1]\d|2[0-9]/.test(s)
}
/*
function isMLComment(s) {
  return .test(s)
}

function isNotDogDoorDenNoLookAround(s) {
  return /^[^d(en|(o(or|g)))]/.test(s)
}
/*
function isNotDogDoorDenWithLookAround() {
  return .test(s)
}
**/
module.exports = { 
  isCanadianPostalCode, 
  isVisa, 
  isMasterCard,
  isDivisibleBy64,
  isEightThroughTwentyNine
}
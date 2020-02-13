
function isCanadianPostalCode(s) {
  return /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/.test(s)
}


function isVisa(s) {
  return /(^4\d{15})$|(^4\d{12})$/.test(s)
}

//Double-check Mastercard validity; Toal's first failure test is accepted by this
function isMasterCard(s) {
  return /^5\d{15}$/.test(s)
}
/**
function isAdaFloat(s) {
  return .test(s)
}

function isNotThreeEndingInOO(s) {
  return /^[^[A-Za-z](O|o)(O|o)]$/.test(s)
}
*/
function isDivisibleBy64(s) {
  return /^(0+|[0-1]*1000000)$/.test(s)
}
/*
function isEightThroughTwentyNine(s) {
  return .test(s)
}

function isMLComment(s) {
  return .test(s)
}

function isNotDogDoorDenNoLookAround() {
  return .test(s)
}

function isNotDogDoorDenWithLookAround() {
  return .test(s)
}
**/
module.exports = { 
  isCanadianPostalCode, 
  isVisa, 
  isMasterCard,
  isDivisibleBy64}
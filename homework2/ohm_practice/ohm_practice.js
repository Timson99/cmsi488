
const ohm = require('ohm-js');

const HW2_Q2 = ohm.grammar(`HW2_Q2 {
  isCanadianPostalCode = letter digit letter " " digit letter digit
  isVisa = "4" digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit --first
         | digit digit digit digit digit digit digit digit digit digit digit digit --different
  isMasterCard = "5" digit digit digit digit digit digit digit digit digit digit digit digit digit digit
  isAdaFloat = space
  isNotThreeEndingInOO = space
  isDivisibleBy64 = space
  isEightThroughTwentyNine = space
  isMLComment = space
  isNotDogDoorDenNoLookAround = space
  isNotDogDoorDenWithLookAround = space

}`);

function isCanadianPostalCode(s) {
  return HW2_Q2.match(s, 'isCanadianPostalCode').succeeded();
}

function isVisa(s) {
  return HW2_Q2.match(s, 'isVisa').succeeded();
}

function isMasterCard(s) {
  return HW2_Q2.match(s, 'isMasterCard').succeeded();
}
/*
function isAdaFloat(s) {
  return HW2_Q2.match(s, 'isAdaFloat').succeeded();
}
/*
function isNotThreeEndingInOO(s) {
  return HW2_Q2.match(s, 'isNotThreeEndingInOO').succeeded();
}

function isDivisibleBy64(s) {
  return HW2_Q2.match(s, 'isDivisibleBy64').succeeded();
}

function isEightThroughTwentyNine(s) {
  return HW2_Q2.match(s, 'isEightThroughTwentyNine').succeeded();
}
/*
function isMLComment(s) {
  return HW2_Q2.match(s, 'isMLComment').succeeded();
}

function isNotDogDoorDenNoLookAround(s) {
  return HW2_Q2.match(s, 'isNotDogDoorDenNoLookAround').succeeded();
}
/*
function isNotDogDoorDenWithLookAround() {
  return HW2_Q2.match(s, 'isNotDogDoorDenWithLookAround').succeeded();
}
**/
module.exports = {
  isCanadianPostalCode,
  isVisa,
  isMasterCard
}

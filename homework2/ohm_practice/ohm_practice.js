const ohm = require('ohm-js');

const HW2_Q2 = ohm.grammar(`HW2_Q2 {
  isCanadianPostalCode = letter digit letter " " digit letter digit

  isVisa = "4" digit digit digit digit digit digit digit digit digit digit digit digit digit digit digit     --Fifteen
         | "4" digit digit digit digit digit digit digit digit digit digit digit digit                       --Twelve

  isMasterCard = "5" ("1"|"2"|"3"|"4"|"5") digit digit digit digit digit digit digit digit digit digit digit digit digit digit

  isAdaFloat = adaBasedLit | adaDecimalLit
  adaDecimalLit = adaInt ("." adaInt)? (("E"|"e")("+"|"-")? adaInt)?
  adaBasedLit = adaInt "#" adaExtInt ("." adaExtInt)? "#" (("E"|"e")("+"|"-")? adaInt)?
  adaInt = digit ("_"? digit)*
  adaExtInt = alnum ("_"? alnum)*

  isNotThreeEndingInOO =  ~(any ("o"|"O")("o"|"O")) any*

  isDivisibleBy64 = (~"1000000"  ("0" | "1"))*  "1000000"         --nonzero
                  |  ("0")+                                       --zero

  isEightThroughTwentyNine = ("8"|"9")                           --eightnine
                           |(("1"|"2") digit)                    --therest
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

function isAdaFloat(s) {
  return HW2_Q2.match(s, 'isAdaFloat').succeeded();
}

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
* */
module.exports = {
  isCanadianPostalCode,
  isVisa,
  isMasterCard,
  isAdaFloat,
  isNotThreeEndingInOO,
  isDivisibleBy64,
  isEightThroughTwentyNine,

};

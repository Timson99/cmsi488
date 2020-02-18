const ohm = require('ohm-js');

function isCanadianPostalCode(s) {
  const grammar = ohm.grammar(`isCPC {
    isCPC = upper digit upper " " digit upper digit
  }`);
  return grammar.match(s).succeeded();
}

function isVisa(s) {
  const grammar = ohm.grammar(`isVisa {
    isVisa = "4" digit digit digit digit digit digit digit
             digit digit digit digit digit (digit digit digit)?
  }`);
  return grammar.match(s).succeeded();
}

function isMasterCard(s) {
  const grammar = ohm.grammar(`isMasterCard {
    isMasterCard = "5" "1".."5" digit digit digit digit digit digit
                   digit digit digit digit digit digit digit digit
  }`);
  return grammar.match(s).succeeded();
}

function isAdaFloat(s) {
  const grammar = ohm.grammar(`isAdaFloat {
    isAdaFloat = adaBasedLit | adaDecimalLit
    adaDecimalLit = adaInt ("." adaInt)? (("E"|"e")("+"|"-")? adaInt)?
    adaBasedLit = adaInt "#" adaExtInt
                  ("." adaExtInt)? "#" (("E"|"e")("+"|"-")? adaInt)?
    adaInt = digit ("_"? digit)*
    adaExtInt = hexDigit ("_"? hexDigit)*
  }`);
  return grammar.match(s).succeeded();
}

function isNotThreeEndingInOO(s) {
  const grammar = ohm.grammar(`isNotThreeEndingInOO {
    isNotThreeEndingInOO =  ~(letter ("o"|"O")("o"|"O")) letter*
  }`);
  return grammar.match(s).succeeded();
}

function isDivisibleBy64(s) {
  const grammar = ohm.grammar(`isDivisibleBy64 {
    isDivisibleBy64 = (~"1000000"  ("0" | "1"))*  "1000000"  --nonzero
                    |  ("0")+                                --zero
  }`);
  return grammar.match(s).succeeded();
}

function isEightThroughTwentyNine(s) {
  const grammar = ohm.grammar(`isEightThroughTwentyNine {
    isEightThroughTwentyNine = ("8"|"9")         --eightnine
                             |(("1"|"2") digit)  --therest
  }`);
  return grammar.match(s).succeeded();
}

function isMLComment(s) {
  const grammar = ohm.grammar(`isMLComment {
    isMLComment = "(*" (~"(*" ~"*)"  any)* "*)"
  }`);
  return grammar.match(s).succeeded();
}

function isNotDogDoorDenNoLookAround(s) {
  const grammar = ohm.grammar(`DDDNoLookAround {
    DDDNoLookAround = dogdoorden letter+       --begins
                    | (dogdoorden)? letter+    --anywhere
                    | ""                       --nothing
    dogdoorden = "dog" | "door" | "den"
  }`);
  return grammar.match(s).succeeded();
}

function isNotDogDoorDenWithLookAround(s) {
  const grammar = ohm.grammar(`DDDWithLookAround {
    DDDWithLookAround = dogdoorden letter+     --begins
                      | ~dogdoorden letter*    --anywhere
    dogdoorden = "dog" | "door" | "den"
  }`);
  return grammar.match(s).succeeded();
}

module.exports = {
  isCanadianPostalCode,
  isVisa,
  isMasterCard,
  isAdaFloat,
  isNotThreeEndingInOO,
  isDivisibleBy64,
  isEightThroughTwentyNine,
  isMLComment,
  isNotDogDoorDenNoLookAround,
  isNotDogDoorDenWithLookAround,
};

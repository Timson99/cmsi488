function isCanadianPostalCode(s) {
  return /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/.test(s);
}

function isVisa(s) {
  return /^4(\d{15}|\d{12})$/.test(s);
}

function isMasterCard(s) {
  return /^5[1-5]\d{14}$/.test(s);
}

function isAdaFloat(s) {
  return /(\d*(.(\d+))?(E(-|\+)?\d*)?|)/.test(s)

function isNotThreeEndingInOO(s) {
  return /^^((?!^[a-zA-Z][Oo][Oo]$)[a-zA-Z]*)$$/.test(s)
}

function isDivisibleBy64(s) {
  return /^(0+|[0-1]*1000000)$/.test(s);
}

function isEightThroughTwentyNine(s) {
  return /^[8-9]|[1]\d|2[0-9]/.test(s);
}

function isMLComment(s) {
  return /^\(\*((?!\(\*)(?!\*\)).)*\*\)$/.test(s)
}

function isNotDogDoorDenNoLookAround(s) {
  return /^(|[^d][a-zA-Z]*|d([^eo][a-zA-Z]*)??|do([^go][a-zA-Z]*)??|de([^n][a-zA-Z]*)??|doo([^r][a-zA-Z]*)??|((dog|den|door)([a-zA-Z]+)))$/.test(s)
}

function isNotDogDoorDenWithLookAround(s) {
  return /^((?!(dog|door|den))[A-Za-z]*)|((dog|door|den)[A-Za-z]+)$/.test(s)
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
  isNotDogDoorDenWithLookAround
}
const assert = require('assert');
const regexModule = require('../regex_practice/regex_practice');
const ohmModule = require('../ohm_practice/ohm_practice');

const FIXTURE = {
  isCanadianPostalCode: {
    good: ['A7X 2P8', 'P8E 4R2', 'Q1V 9P2'],
    bad: ['A7X   9B2', 'C7E9U2', '', 'Dog', 'Q1V\t9P2', ' A7X 2P8', 'A7X 2P8 '],
  },
  isVisa: {
    good: ['4128976567772613', '4089655522138888', '4098562516243'],
    bad: ['43333', '42346238746283746823', '7687777777263211', 'foo', 'π', '4128976567772613 '],
  },
  isMasterCard: {
    good: ['5100000000000000', '5294837679998888', '5309888182838282'],
    bad: ['5763777373890002', '513988843211541', '51398884321108541', '', 'OH', '5432333xxxxxxxxx'],
  },
  isAdaFloat: {
    good: [
      '1',
      '23_5',
      '4#20#',
      '13#fD34_2_1#',
      '1.3e2',
      '11_3.3_3_222E-199',
      '3#1.2#E33',
      '4e+33',
    ],
    bad: ['dog', '4fe', 'p#ii#', '_', '_33', '3_', '5__2', '9#88#E-1e3', '-6'],
  },
  isNotThreeEndingInOO: {
    good: ['', 'fog', 'Tho', 'one', 'a', 'ab', 'food'],
    bad: ['fOo', 'gOO', 'HoO', 'zoo', 'MOO', '123', 'A15'],
  },
  isDivisibleBy64: {
    good: ['0', '00', '000', '00000', '00000', '000000', '00000000', '1101000000'],
    bad: ['1', '00000000100000', '1000000001', 'dog0000000'],
  },
  isEightThroughTwentyNine: {
    good: Array(22)
      .fill(0)
      .map((x, i) => i + 8),
    bad: ['1', '0', '00003', 'dog', '', '361', '90', '7', '-11'],
  },
  isMLComment: {
    good: ['(**)', '(*  *)', '(*756****)', '(*****)', '(*(*(******9*)'],
    bad: ['', '(*)', '(**', 'dog', '(* before (* inner *) after *)', '(* extra space *) '],
  },
  isNotDogDoorDenNoLookAround: {
    good: ['', 'dogs', 'doors', 'DOG', 'adog', 'zdoor', 'denn', 'deyn', 'dedoor'],
    bad: ['den', 'door', 'dog'],
  },
};

// Looks funny, but you can probably figure out what it does
FIXTURE.isNotDogDoorDenWithLookAround = FIXTURE.isNotDogDoorDenNoLookAround;

function runTests(moduleName, module) {
  describe(`In the ${moduleName} tester`, () => {
    Object.entries(module).forEach(([name, matchingFunction]) => {
      describe(`the function ${name}`, () => {
        FIXTURE[name].good.forEach((s) => {
          it(`accepts ${s}`, () => {
            assert.ok(matchingFunction(s));
          });
        });
        FIXTURE[name].bad.forEach((s) => {
          it(`rejects ${s}`, () => {
            assert.ok(!matchingFunction(s));
          });
        });
      });
    });
  });
}

runTests('Regex', regexModule);
runTests('Ohm', ohmModule);

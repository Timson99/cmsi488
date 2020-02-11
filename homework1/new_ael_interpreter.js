// An extended interpreter for Ael.
//
// Extensions Include:
//  1) A Exponentiation Operator, **
//        Associativity: Right Associative (2**2**3 = 2**8 = 256)
//        Negative Exponent Rules: To avoid ambiguity, no negative exponents are allowed.
//  2) A while loop, while() {}
//        Loop Condition: Takes in a number or id, breaks loop if 0.
//        Loop Block: A loop block must have at least one statement followed
//                    by a semicolon (since statement-less while loops run infinitely).
//
// Example usage:
//   node new_ael_interpreter.js "print 2; x = 22; print 1 + x / 2;"
//   2
//   12
//
//   node new_ael_interpreter.js "x = 2 ** 2; while x { x = x - 1; print x;}"
//   3
//   2
//   1
//   0
//
//   node new_ael_interpreter.js "print 2 ** 2 ** 3;"
//   256

const ohm = require('ohm-js');

const aelGrammar = ohm.grammar(`Ael {
  Program = (Statement)+
  Block = "{" (Statement)+ "}"
  Statement = id "=" Exp ";"                  --assign
            | print Exp  ";"                  --print
            | "while" (Exp) Block             --while
  Exp       = Exp "+" Term                    --plus
            | Exp "-" Term                    --minus
            | Term
  Term      = Term "*" Factor                 --times
            | Term "/" Factor                 --divide
            | Factor
  Factor    = "-" Primary                     --negate
            | Power
  Power     = Primary "**" Power              --raise
            | Primary
  Primary   = "(" Exp ")"                     --parens
            | number
            | id
  number    = digit+
  print     = "print" ~alnum
  id        = ~print ~"while" letter alnum*
}`);

const memory = new Map();

// This language is so simple, we don't need an AST.
const semantics = aelGrammar.createSemantics().addOperation('exec', {
  Program(ss) { ss.exec(); },
  Block(_open, ss, _close) { ss.exec(); },
  Statement_assign(i, _eq, e, _semicolon) { memory.set(i.sourceString, e.eval()); },
  Statement_print(_, e, _semicolon) { console.log(e.eval()); },
  Statement_while(_, id_num, block) { while (id_num.eval()) { block.exec(); } },
}).addOperation('eval', {
  Exp_plus(e, _op, t) { return e.eval() + t.eval(); },
  Exp_minus(e, _op, t) { return e.eval() - t.eval(); },
  Term_times(t, _op, f) { return t.eval() * f.eval(); },
  Term_divide(t, _op, f) { return t.eval() / f.eval(); },
  Factor_negate(_op, p) { return -p.eval(); },
  Power_raise(p, _op, pow) { return p.eval() ** pow.eval(); },
  Primary_parens(_open, e, _close) { return e.eval(); },
  number(_chars) { return +this.sourceString; },
  id(_firstChar, _restChars) { return memory.get(this.sourceString); },
});

const match = aelGrammar.match(process.argv[2]);
if (match.succeeded()) {
  semantics(match).exec();
} else {
  console.error(match.message);
  process.exitCode = 1;
}

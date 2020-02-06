3. (14 pts) Here are a few Ohm grammar rules from the Ada programming language:
    
    Exp     = Exp1 ("and" Exp1)* | Exp1 ("or" Exp1)* <br>
    Exp1    = Exp2 (relop Exp2)? <br>
    Exp2    = "-"? Exp3 (addop Exp3)* <br>
    Exp3    = Exp4 (mulop Exp4)* <br>
    Exp4    = Exp5 ("**"  Exp5)? | "not" Exp5 | "abs" Exp5 <br>
    comment = "--" (~"\n" any)* "\n" <br>

	**a. What can you say about the relative precedences of and and or?**

	Both "and" and "or" possess the same level of precedence, which is the lowest possible precedence in the overall context of the grammar.

	**b. If possible, give an AST for the expression X and Y or Z. (Assume, of course, that an Exp5 can lead to identifiers and numbers, etc.) If this is not possible, prove that it is not possible.**

	The given Ohm grammar does not permit the expression X and Y or Z. The grammar specifies that all expressions involved with the binary operators "and" and "or" must be of the type Exp1. The nonassociativity of the grammar's operators prevents any kind of recursive return back to Exp. Thus expressions containing multiple instances of "and" and "or" are illegal.

	**c. What are the associativities of the additive operators? The relational operators?**

	The additive operators and the relational operators are nonassociative. Rules for evaluating expressions after considering operator precedences are likely built into the language separately.

	**d. Is the not operator right associative? Why or why not?**

	The not operator is right associative in the sense that it is a unary operator that is applied to an expression provided at the right. Thus it is always evaluated in a right-to-left fashion, but its "associativity" differs from the associativity of binary operators.

	**e. Why do you think the negation operator was given a lower precedence than multiplication?**

	Giving the negation operator a lower precedence than multiplication likely makes computations slightly easier with the syntax. If a negative number is being multipled with another value, the multiplication occurs first, and then the negation is applied to the product. 

	**f. Give an abstract syntax tree for the expression -8 * 5.**

	![AST_1](https://github.com/Timson99/cmsi488/blob/master/homework1/ada_grammar_images/ada_ohm_grammar_AST_1.png)

	**g. Suppose the grammar were changed by dropping the negation from Exp2 and adding - Exp5 to Exp4. Give the abstract syntax tree for the expression -8 * 5 according to the new grammar.**

	![AST_2](https://github.com/Timson99/cmsi488/blob/master/homework1/ada_grammar_images/ada_ohm_grammar_AST_2.png)

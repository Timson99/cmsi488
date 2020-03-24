**PLEASE DOUBLE-CHECK THESE, I PROBABLY SCREWED UP ON SOME, THANK YOU**


**1.) Classify the following as a syntax error, semantic error, or not a compile time error. In the case where code is given, assume all identifiers are properly declared and in scope. All items refer to the Java language.**  

  a.) ```x+++-y``` is **not a compile time error**.  
  b.) ```x---+y``` is **not a compile time error**.  
  c.) Incrementing a read-only variable is a **semantic error**.  
  d.) Accessing a private field in another class is a **not a compile time error** (if you use getters and setters).  
  e.) Using an uninitialized variable is a **semantic error**.  
  f.) Dereferencing a null reference is a **not a compile time error** as a NullPointerException is thrown during runtime.  
  g.) ```null instanceof C``` is **not a compile time error**.  
  h.) ```!!x``` is a **syntax error** (but it's valid code in JavaScript, I think).  

**2.) Here’s a code fragment in some generic language:**
```
var x = 3;          // line 1
function f() {      // line 2
  print(x);         // line 3
  var x = x + 2;    // line 4
  print(x);         // line 5
}                   // line 6
f();                // line 7
```
**For each of the following outputs, state scope rules that would have caused them:** 

  a.) The code would output ```3``` then ```5``` if   
  b.) The code would output ```undefined NaN``` if 
  c.) The code would output ```Error on line 3: x is not declared``` if scope only deals with code blocks (?).
  d.) The code would output ```75354253672``` then ```75354253674``` if 
  e.) The code would output ```3``` then ```-23482937128``` if
  f.) The code would output ```Error on line 4: x used in its own declaration``` if

**3.) Describe the semantics of private in Ruby and C#. (Hint: they’re quite different.) Write well. You won’t get any points for a poorly written description.**  

  - Private in Ruby:  
  - Private in C#:  

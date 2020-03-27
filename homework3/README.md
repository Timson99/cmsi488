**PLEASE DOUBLE-CHECK THESE, I PROBABLY SCREWED UP ON SOME, THANK YOU**


**1.) Classify the following as a syntax error, semantic error, or not a compile time error. In the case where code is given, assume all identifiers are properly declared and in scope. All items refer to the Java language.**  

  a.) ```x+++-y``` is **not a compile time error**.  
  b.) ```x---+y``` is **not a compile time error**.  
  c.) Incrementing a read-only variable is a **semantic error**.  
  d.) Accessing a private field in another class is a **semantic error** (but not if you use getters and setters).  
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

  a.) The code would output ```3``` then ```5``` if the variable ```x``` is globally scoped.    
  b.) The code would output ```undefined NaN``` if the variable ```x``` is functionally scoped. Much like using var in JavaScript (*shudder*), the declaration of ```x``` within the function intializes as undefined, leading to the unwanted behavior produced by the print statement and reassignment.  
  c.) The code would output ```Error on line 3: x is not declared``` if the variable ```x``` is block scoped.   
  d.) The code would output ```75354253672``` then ```75354253674``` if the variable ```x``` is block scoped and the programming language does not automatically initialize declared variables. Instead, ```x``` in this case most likely refers to a random value already stored in memory.  
  e.) The code would output ```3``` then ```-23482937128``` if the program first uses the global variable ```x``` and then defines a local variable ```x``` that shadows the global ```x```. However, since the local ```x``` has not yet been initialized, it pulls a random value in memory in the expression ```x + 2```, leading to the strange output.  
  f.) The code would output ```Error on line 4: x used in its own declaration``` if the variable ```x``` is scoped much like variables in Ada, where the scope of a binding begins after the declaration finishes, but the variable name for the binding cannot be used within the declaration itself.  

**3.) Describe the semantics of private in Ruby and C#. (Hint: they’re quite different.) Write well. You won’t get any points for a poorly written description.**  

  - Private in Ruby: The ```private``` access modifier in Ruby only applies to methods, as class and instance variables are always essentially protected/private in Ruby by default. Private methods are only accessible within the object in which they are declared. 
  - Private in C#: The ```private``` access modifier in C# causes fields and methods to only be accessible within the class or struct in which they are declared. Attempting to reference a private field or method outside of the struct or class in which it was declared results in a compile-time error. 

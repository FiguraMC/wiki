I highly recommend reading the [Lua Reference](https://www.lua.org/manual/5.2/) and [Programming in Lua](https://www.lua.org/pil/contents.html) if you have the time. I provide a basic rundown of the most used functionality for Figura, but not everything gets covered.

# How a computer reads code
Code is basically just a list of instructions telling the computer step by step what to do.

* It is read line by line
* The instructions are executed right away

# Comments
When there are 2 minus signs `--`, everything after it is ignored by Lua.<br />
These are called comments.<br />
They have no effect on the code that is executed and can be safely removed.<br />
Their primary purpose is to add raw text that can be used to aid in the understanding of code.<br />
```lua
-- Comments are not compiled and do not affect code
local a = 2 -- Everything up to the next newline will be ignored.
-- Can also be used to hide code from the compiler without actually removing it:
-- local b = 4
```

Another form of comment is `--[[  ]]`.<br />
When this is used, everything between the square bracket pairs will be ignored. Newlines do not affect this.<br />
This type of comment is commonly referred to as a Long Comment.
```lua
local a = 2
--[[ comment comment
ignores newlines 
ignores pretty much everything
]] local b=2 --long comments end strictly at the `]]`
```

# Variables
Variables store values. Lua is a dynamically typed language, meaning any variable can store a value of any type.<br />
You can define a variable using the `local` keyword.<br />
Local variables are accessible below the line they were declared, but will not breach their scope.
```lua
local a
```
Most of the time, you will want to instantly assign a value to that variable. In lua, if you use `=` it will store the value on the right inside the variable on the left.
```lua
local a = 2 -- the variable named "a" now stores the value 2
```
After a variable has been declared, you can assign a new value to it by using `=` again. Note that the `local` keyword is only used when creating the variable for the first time.
```lua
local a = 2
a = 4 -- the variable "a" now stores 4
```
Multiple variables can be declared and assigned on one line.<br />
```lua
local a, b = 1, 2
```
Variables are limited in what characters can be used as an identifier (variable name).<br />
Only letters, numbers, and `_` can be used in a valid identifier, and it cannot start with a number. Also, you cannot use *any* of lua's keywords.
```lua
local a123
local _b
local KEKW
local 123A -- invalid. Starts with a number.
local has-water -- invalid. Uses character `-`
local and -- invalid. `and` is a lua keyword.
local local -- invalid. `local` is a lua keyword.
local _ -- This name specifically is used to denote throwaway variables in loops.
```
If you assign a value to a value to a variable that has not been declared using `local`, you will create a *global* variable. Global variables are accessible from the entire lua environment. This may seem like a good thing to the inexperienced, but because they are accessible literally anywhere it is common for users to make mistakes when they reuse global variables for other purposes and accidentally overwrite it.<br />
There is no good reason for using global variables, so always stick to `local`.
```lua
-- c was not declared local beforehand,
-- meaning there is now the value `10` at global variable `c`
c = 10
```
Variables can be used in place of values.
```lua
local a = 2
print(a) --> prints `2` to the chat
a = a + a
print(a) --> prints `4` to the chat
a = a + a
print(a) --> prints `8` to the chat
```
When you try to use a variable that hasnt been assigned a value, the value `nil` will be returned.
```lua
local a
print(a) --> nil
print(d) --> nil

print(c) --> 10 (global variable joke)
```

# Functions

A function contains code that can be executed by calling the function. This is useful if you want to use the same code multiple times and can make your code more structured.

To define a function you use the `function` keyword, then the name of the function and `()`.<br />
Any code after it will be considered inside this function, until you tell lua that the function is done here by using the `end` keyword. For better readability we indent the code inside the function using spaces or tabs.<br />
The print statement will not execute until the function is called.

```lua
function hello()
    print("Hello function!")
end
```

Whenever you call a function by putting `()` after the function name, all the code inside the function will run line by line first, before continuing with the rest of your code.

```lua
print("Outside.")
hello()
print("Below hello.")
```
This will output the following:
```
Outside.
Hello function!
Below hello.
```

You can also give the function some values to work with by putting variable names inside the `()`. These variables are called parameters. The function can also return a new value itself that is accessible from where the function is called. If no `return` is specified, the function returns `nil` (see "Types" section below).<br />
Here is an example of a function that calculates the sum of two numbers.

```lua
function sum(a,b)    -- parameters seperated by commas
    local s = a + b  -- calculate the sum
    return s         -- return the sum to be used by tha caller
end

local var1 = 2
local var2 = 8
local var3 = sum(var1, var2) -- call the function and pass two variables. note that these do not have to be called a and b
print(var3) --> 10, as you might have noticed, `print` is also a function that takes a parameter
```

# Values
Values represent some form of data.<br />
There are many types of values for storing different types of data.

## boolean
A boolean is a data type with 2 distinct values: `true` and `false`.

Most operators return a boolean and it's current state can be inverted with `not`.
```lua
local a = true
print(a) --> true
print(not a) --> false
a = not a
print(a) --> false
print(not a) --> true
```
## number
A number is, well, a number.<br />
Numbers can use arithmetic operators.
```lua
local a = 14
local b = 4
print(a+b) --> 18
print(a-b) --> 10
print(a*b) --> 56
print(a/b) --> 3.5
print(a%b) --> 2
local c = 3.1459
local d = math.pi
```
## string
A string is a sequence of characters.<br />
Mostly used for holding and manipulating text data.

[String functions](https://www.lua.org/manual/5.2/manual.html#6.4) are accessible through the `string` global variable. All string values also contain these functions within themselves.

Strings are defined by encasing text in double quotes (`"`) or single quotes (`'`).

If you try to put a newline in a string, lua will refuse and throw a syntax error. Newlines must be encoded into a string using other characters. Specifically `\n`.<br />
If you need to have either a `"` or `'` in a string and you cannot wrap the string in another quote type, you can escape the quote using `\`

Long Strings are defined by encasing text in 2 square brackets. Long strings capture every single character between the pairs of square brackets including raw newlines.
```lua
local str = "Katt is"
print(str .. " cute")                          --> Katt is cute

local a = "This string has \"quotes\" in it."
print(a)                                       --> This string has "quotes" in it.

local b = "This will result in
a syntax error"

local c = "This \nwill \nnot"

local d = [[neither 
will 
this]]
```
## table
A lua table is a data structure that stores many values.

Tables operate on key-value pairs. You give the table a key in the form of a value, and it returns a value.<br />
Assigning works the same way. Give the table a key, and assign a value to the table at that key.
```lua
-- Define an empty table
local tbl = {}
-- Store the value 23 in the table with the key 54
tbl[54] = 23
-- Store the value false in the table with the key "stringKey"
tbl["stringKey"] = false

-- variables can be inputted, using their value as the key.
-- Anyone remember what global c is? no? this is why you shouldn't use global variables
tbl[c] = "123"

tbl[67] = tbl[54]

print(tbl["stringKey"]) --> false
print(tbl[10]) --> "123"
print(tbl[67]) --> 23
```
If your key is a string, you can use a different way of indexing that is easier to do. Do note that only strings that abide by identifier rules can be used this way. If the string is not a valid identifier, use `[]` indexing
```lua
local data={}
data.name="Chocolate"
data.amount=100
data.delicious=true
```
Unlike other values which are passed around by value, tables are passed by reference.<br />
What this means is that when you create a table and assign it to a variable, then assign it to a different variable, you do not have 2 tables. You have 2 variables pointing to the same table.
```lua
local a = {}
local b = a
local c = {}
print(a) --> table4b8ab37d
print(b) --> table4b8ab37d
print(c) --> table82f1e9c2
-- table equality works on "is this the same table?".
-- The values inside do not matter.
print(a == b) --> true
print(a == c) --> false
-- same table in memory.
a.reeee = 2
print(b.reeee) --> 2
```

## nil
`nil` is commonly referred to as the absence of data.<br />
It is what is returned when no data is present.

## function
Yes, functions are also a type of variable.

An alternative way to name a function to what we learned before is by assigning a function to a variable.<br />

```lua
local a = function()
    print("function was called")
end
```

This is functionally the same thing as:

```lua
local function a()
    print("function was called")
end
```

Like tables, functions are pass by reference, and equality is based on "is this the same function?". The actual contents of the function are not evaluated, so identical looking functions, while similar, are not equal.
```lua
local a=print
print(a == print) --> true

local b=function() end
local c=function() end
print(b == c) --> false

c = b
print(b == c) --> true

print(b()) --> nil, because b does not return anything
```

Since functions are just another value type, they can be used as arguments to other functions.
```lua
local function do10(func)
    for i=1,10 do -- this just means "repeat 10 times" increasing the variable `i` every time
        func(i)
    end
end

do10(print) --> 1,2,3,4,5,6,7,8,9,10
do10(function(v)
    print(v*2)
end) --> 2,4,6,8,10,12,14,16,18,20
```
Functions have access to all variables defined above where the function gets defined. Variables below where the function is defined is considered "out of scope" of the function.<br />
If a variable is used that is not defined above the function, the global variable with that identifier will be used
```lua
local a = 10
local b = "string lol"
local function d()
    print(a)
    print(b)
    print(c) -- there is no `c` variable defined above here, so the global `c` will be used.
end
local c = 20
d()
--> 10
--> "string lol"
--> 10
-- did you forget that global `c` is defined to be 10 near the top of this page?
-- I hate global variables.

local function e(b)
    print(a)
    print(b)    -- variable `b` is redefined as a function parameter, so the other `b` is scope gets overshadowed
    print(c)    -- There *is* a `c` variable within scope this time
end
e("string kek")
--> 10
--> "string kek"
--> 20
```
If a function is one of the values in a table, special syntax can be used to have the table itself be the first argument to the function. By indexing the function with colon (`:`) Lua will put the table itself as the first argument.

This is used heavily in Figura for many of it's APIs. All objects of the same type share the exact same functions, differentiated only by the object placed in the first argument.
```lua
local tbl={}
tbl.key = function(t, a, b)
    t[a] = b
end

tbl:key("a", "b")

-- this is functionally equivalent
tbl.key(tbl, "a", "b")

-- You can also use `:` when creating functions. The implied `self` argument will be used to refer to the first argument
function tbl:key(a, b)
    self[a] = b
end
```
## userdata
Lua is commonly used when embedded in other software. In this case, it is embedded inside of Figura.<br />
userdata is the means of communicating with that software.

userdata is basically data initialized in Figura that gets interpreted as a Lua value. They function most similar to tables in the fact that they are indexed the same way to receive values, mostly functions.

This is why knowing when to use `:` to index userdata is important.
```lua
-- `models` is a value of type userdata. More specifically, it is a ModelPart created in Java and made accessible in Lua.
-- userdata commonly overrides what the print function returns to improve the ability to debug code.
print(models) --> models (ModelPart)
```
# Variable Scope
A Variable's Scope is the area the variable is accessible from.

A variable's scope begins when it is declared, and extends until the end of the current block.<br />
The scope of global variables is the lua environment itself and will not clear until lua itself is shut down.

All [Control Statement](#control-statements) will create new scopes when used. Functions also create their on scope when declared<br />
The `do end` statement can be used to create scopes, and doesn't have any other functionality. I will be using it to showcase how scopes affect variables, as explaining it raw will not get the point across. 

```lua
local a=4
local b=8
do
    -- a and b are accessible here
    local c = 12
    -- a, b, and c are accessible here
    a = 16 -- variable `a` in the outer scope is now `16`

    local b = 20 -- b in the other scope has been overshadowed by this variable. All future references to `b` will refer to this variable (until the end of the scope)

    print(a,b,c,d) --> 16, 20, 12, nil
end
print(a,b,c,d) --> 16, 8, 10, nil
-- global c is 10 yada yada you get the point about global variables being a sin.

local e
do
    local f=0

    -- interesting thing is that functions capture the current scope.
    -- Even if we leave the scope, the function remembers the upvalue `f` and will continue to use it even if the scope `f` belongs to ends
    -- oh yea `a` is overshadowed here too. But thats not as interesting.
    e=function(a)
        f=f+1
        print(f, a)
    end
    e()--> 1, nil
    e()--> 2, nil
end

e()    --> 3, nil
e("a") --> 4, "a"
```
# Value Truthiness
All values have an implicit truthiness when used in the context of a boolean.

It's simple to remember: `nil` and `false` are both considered `falsely`, and literally every other value is considered `truthy`.

Truthiness is used in control statements, see the section about it below.

# Operators
Operators, similar functions, take 1 or 2 values and outputs a result.<br />
They commonly take the form `leftSide operator rightSide`.<br />
I will continue to refer to the 2 values that operators operate on as `leftSide` and `rightSide` for the duration of this section.<br />

Operators have a priority system. It is surprisingly intuitive, but can be forced by surrounding the code you want to guarantee execute first in brackets `()`. For the true priority list, check out the [Lua Reference Manual](https://www.lua.org/manual/5.2/manual.html#3.4.7).

Do note that despite me saying that "Only x can use this operator", tables and userdata types are always exempt from this rule. However, they must be explicitly written to support these operators, so most will not support it by default.
## Arithmetic Addition (+)
Its addition. 1+1 returns 2. Basic stuff.<br />
Only numbers can use this operator.
## Arithmetic Subtraction (-)
Its subtraction. 2-3 returns -1. Basic stuff.<br />
Only numbers can use this operator.
## Arithmetic Multiplication (*)
Its multiplication. 2*4 returns 8. Basic stuff.<br />
Only numbers can use this operator.
## Arithmetic Division (/)
Its division. 5/2 returns 2.5. Basic stuff.<br />
Only numbers can use this operator.
## Arithmetic Modulo (%)
Division actually has 2 components. The whole component, and the remainder component.<br />
Modulo returns this remainder component after the division leftSide/rightSide is done.<br />
5%2 returns 1, because 2 goes into 5 2 whole times, 2*2=4, 5-4=1.<br />
Only numbers can use this operator.
## Arithmetic Exponentiation (^)
Its exponents. 2^3 returns 8. Basic stuff.<br />
Only numbers can use this operator.
## Arithmetic Negation (-)
Only operates on the rightSide.<br />
This operator negates the number, similar to just adding a negative symbol in front of it.<br />
```lua
local a= -2
a=-a
print(a) --> 2
```
## Relational Equality (==)
Returns `true` if both values are considered the same value, `false` otherwise.<br />
All values can use this operator.
## Relational Inequality (~=)
Returns `false` if both values are considered the same value, `true` otherwise.<br />
All values can use this operator.
## Relational Less Than (<)
Returns `true` if the leftSide is considered less then the rightSide, `false` otherwise.<br />
Numbers compare as expected.
Strings compare using their ascii representations, comparing each character left to right until they are not equal. Then the operator is applied to those 2 character's ascii numbers and returned.
## Relational Greater Than (>)
Returns `true` if the leftSide is considered greater then the rightSide, `false` otherwise.<br />
Numbers compare as expected.
Strings compare using their ascii representations, comparing each character left to right until they are not equal. Then the operator is applied to those 2 character's ascii numbers and returned.
## Relational Less Than or Equal To (<=)
Returns `true` if the leftSide is considered less then or equal to the rightSide using equality operator rules, `false` otherwise.<br />
Numbers compare as expected.
Strings compare using their ascii representations, comparing each character left to right until they are not equal. Then the operator is applied to those 2 character's ascii numbers and returned.
## Relational Greater Than or Equal To (>=)
Returns `true` if the leftSide is considered greater then or equal to the rightSide using equality operator rules, `false` otherwise.<br />
Numbers compare as expected.
Strings compare using their ascii representations, comparing each character left to right until they are not equal. Then the operator is applied to those 2 character's ascii numbers and returned.
## Logical And (and)
This operator operates on truthiness.<br />
If the leftSide is considered truthy, it returns the rightSide. Otherwise, it returns the leftSide.<br />
This ends up with the return value being truthy only if both leftSide *and* rightSide are truthy.<br />
The following table puts this visually. L is leftSide, R is rightSide. F and T represent if the value is falsy or truthy, and the column under O represents which value actually gets returned by `and` as well as the truthiness of it.

| L | R | O    |
|---|---|:----:|
| F | F | L(F) |
| F | T | L(F) |
| T | F | R(F) |
| T | T | R(T) |

The reason this is so complex is because it doesn't just work on booleans. It works on all value types.

## Logical Or (or)
This operator operates on truthiness.<br />
If the leftSide is considered truthy, it returns the leftSide. Otherwise, it returns the rightSide.<br />
This ends up with the return value being truthy either the leftSide *or* rightSide are truthy.<br />
The following table puts this visually. L is leftSide, R is rightSide. F and T represent if the value is falsy or truthy, and the column under O represents which value actually gets returned by `or` as well as the truthiness of it.

| L | R | O    |
|---|---|:----:|
| F | F | R(F) |
| F | T | R(T) |
| T | F | L(T) |
| T | T | L(T) |

The reason this is so complex is because it doesn't just work on booleans. It works on all value types.

## Logical Not (not)
Only operates on the rightSide.<br />
This operator evaluates the truthiness of the value, then returns the boolean representation of the opposite.<br />
`not true` is `false`, `not 2` is `false`, `not false` is `true`, `not {}` is `false`, and `not nil` is `true`.<br />
All values can use this operator.
## String Concatenation (..)
This returns a string from the values concatenated together.<br />
Only strings can use this operator.
## Length Operator (#)
Only operates on the rightSide.<br />
This returns the length of the value<br />
For strings, its the amount of bytes stored in the string. (UTF-8 characters are more than one byte)<br />
For tables, lua iterates over `t[1], t[2], t[3] ... t[n]` until a nil value is found and returns the number of non-nil values found.

# Control Statements
Control Statements affect the scope and flow of the program. 
## `if then end`
`if` statements allow for executing code only when a condition is met.

The basic structure looks like
```lua
if condition then
    print("condition is true")
end
```

`if` statements have an optional `elseif` clause, where if the previous condition failed this condition will be checked. In an `elseif` chain, only the first successful condition will actually execute, after which all other `elseif`s are ignored.

```lua
if condition then
    print("condition")
elseif condition2 then
    print("condition2")
elseif condition3 then
    print("condition3")
end
```

`if` statements also have an optional `else` clause, where if *all* previous conditions fail, the `else` clause will execute.

```lua
if condition then
    print("condition")
else
    print("not condition")
end

if condition then
    print("condition")
elseif condition2 then
    print("condition2")
else
    print("not condition or condition2")
end
```

`if` statements operate on [Value Truthiness](#value-truthiness)
```lua
local rand = math.random()<0.3
-- Use booleans as raw input to if statements
-- the `==` operator just returns a boolean anyways and is just wasted instructions
if rand then
    print("random print statement lol")
end

-- getVehicle returns either an Entity userdata, or nil
local vehicle=player:getVehicle()
if vehicle then
    print("Riding: ", vehicle:getName())
else
    print("No Mount")
end
```

## Loops

```lua
for i=1,10 do
    print(i)
end
--> 1,2,3,4,5,6,7,8,9,10

local x = 1
while x < 10 do
    x = x + 1
    print(x)
end
```

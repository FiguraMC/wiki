A function contains code that can be executed by calling the function. This is useful if you want to use the same code multiple times and can make your code more structured.

To define a function you use the function keyword, then the name of the function and ().

Any code after it will be considered inside this function, until you tell lua that the function is done here by using the end keyword. For better readability we indent the code inside the function using spaces or tabs.

The print statement will not execute until the function is called.

```lua
function hello()
    print("Hello function!")
end
```

Whenever you call a function by putting () after the function name, all the code inside the function will run line by line first, before continuing with the rest of your code.

```lua
print("Outside.")
hello()
print("Below hello.")
```

This will output the following:

```lua
"Outside."
"Hello function!"
"Below hello."
```

You can also give the function some values to work with by putting variable names inside the (). These variables are called parameters. The function can also return a new value itself that is accessible from where the function is called. If no return is specified, the function returns nil (see "Types" section below).
Here is an example of a function that calculates the sum of two numbers.

````lua
function sum(
a,
    b -- parameters seperated by commas
)
    local s = a + b -- calculate the sum
    return s -- return the sum to be used by the caller
end

local var1 = 2
local var2 = 8
local var3 = sum(var1, var2) -- call the function and pass two variables. note that these do not have to be called a and b
print(var3) --> 10, as you might have noticed, `print` is also a function that takes a parameter```
````

Some functions are called by Figura, you're probably familiar with events.

```lua
function events.render(delta, context)
    log(context)
end
```

In this case the function is run once a frame (per context) and the parameters are supplied by Figura.

Sometimes functions are used as parameters for methods, like setOnLeftClick for actions, and setOnPress for keybinds. Since those methods call the given function (and thus don't need a name to call them) they can be given anonymous functions. Anonymous functions are simply functions without names.

```lua
myKey:setOnPress(function()
    log("hi")
end)
```

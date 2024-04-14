A boolean is a Lua value that is either <code>true</code> or <code>false</code>.

Additionally, Lua treats all values as if they're 'truthy' or 'falsey'.

If a value is truthy and it's in an if statement or a function that wants a boolean value, it's treated like it's true.

Example:

```lua
if 0 then
    log("truthy") -- numbers are truthy so this will always be logged
else
    log("falsey")
end
```

If a value is falsey and it's in an if statement or a function that wants a boolean value, it's treated like it's false.

Example:

```lua
if nil then
    log("truthy")
else
    log("falsey") -- nil is falsey so this will always be logged
end
```

The only values that are falsey are false and nil, every other value (numbers, tables, modelparts, etc) is truthy. (nil as a value means there's no information. It's literally nothing)

The <code>not</code> operator flips the truthiness of the value into true or false.

Examples (all of these are true statements):

```lua
not true == false
not false == true
not nil == true -- a non-boolean value is turned into a boolean
not models == false -- models is a modelpart and truthy, so flipping it turns it into false
```

When used in methods <code>true</code> usually activates something, and <code>false</code> deactivates it. However in some places returning true may turn something off, always read the description of a method, field, or event to discover what boolean does what.

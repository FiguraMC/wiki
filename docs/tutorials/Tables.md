A table is a Lua value that can store values in specific keys. The act of getting a value from a table using a key is called "indexing".

## Initialize Table

A table can be created using curly brackets.

```lua
local t = {}
```

## Generic Indexing

<code>table[key]</code> is the way to index a table. You can either get what is currently at that key, or assign a value to that key. There is no limitation to what can be used as keys or values in a table. If you index a table with an unknown key, it will return <code>nil</code>. You can also use variables as a key to index a table using this method.

```lua
local v = 6
t[2] = "number key, string value"
t["string key, table value"] = {}
t[false] = true
t[v] = "ree"

print(t[2]) --> "number key, string value"
print(t["reeee"]) --> nil
print(t["string key, table value"]) --> table 3be7a8
```

## String Indexing Shorthand

If that seems like a lot of work to index by a string, yes it is.<br/>
<code>table.key</code> is the shorthand for indexing a table with a string. This has very specific restrictions for what the string can contain.

-   Cannot start with a number (<code>t.2fort</code> will not work. Use <code>[]</code> indexing, or use a different string)
-   Cannot contain spaces, periods, or other special characters
-   Cannot be Lua Keywords (true, false, local, function)

```lua
t.name = "Katt"
t.age = -1
t.gender = t.name
t.underscores_are_allowed = true
```

## Object Oriented Method Indexing

There is one more way to index a table. Many of the functions in Figura take in the object that called said function as the first parameter. This is because every object of the same type has the exact same functions. This is done via <code>table:key()</code>.<br/>

```lua
local posA = player:getPos()

local posB = player.getPos(player)
```

## Initialize Table with Values

You can assign values to keys when the table is initialized. Each key-value pair must be separated by a comma (<code>,</code>)<br/>

<!-- prettier-ignore -->
```lua
local a = {
    [false] = 1,
    ["string with spaces"] = "string",
    [v] = {
        ["a"] = 1,
        ["b"] = 2,
    },
    -- string shorthand rules still apply. This is equivalent to <code>["life"] = 42</code>
    life = 42,
}
```

If you do not specify an index, the provided values will automatically be assigned a numeric index, starting at <code>1</code>. This is how arrays are handled in lua, just a table that acts as an array. A table array if you will. Unlike other languages, Lua arrays begin indexing at <code>1</code> and functions that take in an array expect the first element at <code>1</code>.

<!-- prettier-ignore -->
```lua
local array = {
    42,        -- [1] = 42
    36,        -- [2] = 36
    1024,      -- [3] = 1024
    1,         -- [4] = 1
    "string",  -- [5] = "string"
    v,         -- [6] = v
    t          -- [7] = t
}
-- newlines are ignored, as with everything in lua
local array2 = { 42, 36, 1024, 1, "string", v, t }
```

## Iterating Over a Table

Iterating over a table is simple.<br/>
You can iterate over every single index using <code>pairs</code>. This will go through every index, but it will be in an undefined order. <code>pairs</code> has 2 values it returns when used in a for loop: the current <code>key</code>, and the current <code>value</code> at that <code>key</code>.<br/>

```lua
for key, value in pairs(t) do
    print(key, value)
end
```

If the order of the iteration is important, you can use <code>ipairs</code>, but it only goes over numerical indices. This is what you want to use for table arrays. It starts at index <code>1</code>, and increments by <code>1</code> until the table returns <code>nil</code>. When used in a for loop, <code>ipairs</code> returns the current index and the <code>value</code> at that <code>index</code>.<br/>

```lua
for index, value in ipairs(array) do
    print(index, value)
end
```

## Length of Table Array

You can use the <code>#</code> operator to get the length of a table array. For tables with non-numeric indexes, you have to use <code>pairs</code> and calculate the length yourself, though the "length" of that kind of table isnt really useful. This follows the same rules as <code>ipairs</code> in the way that the table's length is every numeric index until one returns <code>nil</code>. So <code>#\{1,2,3,4}</code> will return <code>4</code>, and <code>#\{1,2,nil,4}</code> will return <code>2</code>.<br/>
As an example, <code>ipairs</code> is pretty much just this.

```lua
for index = 1, #array, 1 do
    print(index, array[index])
end
```

## Manipulating Table Arrays

Lua comes built in with ways to manipulate tables. Not all are described here, just the ones that I feel are most important.<br/>
All of these functions are available via the <code>tables</code> global.

### <code>table.insert(t, pos, value)</code>

This function can add a value at any index, shifting the other values to account for the added value.<br/>
<code>table.insert(array, 1, "e")</code> will insert <code>"e"</code> at the beggining of the table <code>array</code>, shifting every other value forward one index.<br/>
When adding elements to the end of the array, you use the function as <code>table.insert(t, value)</code>. So <code>table.insert(array, "l")</code> appends <code>"l"</code> to the end of the table <code>array</code>.

### <code>table.remove(t, pos)</code>

This function can remove a value at any index, shifting the other values to account for the removed value. The value that was removed will be returned by this function as well.<br/>
<code>table.remove(array, 1)</code> will remove the value at index <code>1</code> from the table, shifting all the values back an index.<br/>
<code>pos</code> is optional, with the default value being <code>#t</code>. <code>table.remove(array)</code> will remove the last value in the table.

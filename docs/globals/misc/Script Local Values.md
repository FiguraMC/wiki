Figura provides variables that are local to each executing script. These are provided via the VarArgs accessor (`...`)

This provides 2 values: The folder the script is executing in, and the script name itself.

```lua
local directory, scriptName = ...
print(...)
print(directory, scriptName)
```

This can be used to [`require`](./require.md) scripts within the same folder.

```lua
-- Folder.Script.lua

local directory, scriptName = ...

local scriptPath = "ScriptName"
-- This prepends the directory and a period seperator to the script name we are requiring, but only if this script is within a folder.
if directory ~= "" then
    scriptPath = directory .. "." .. scriptPath
end

print(scriptPath) --> "Folder.ScriptName"
require(scriptPath)
```

A one liner for this is

```lua
-- (...):gsub("(.)$", "%1.") is somewhat magical.
-- gsub("(.)$", "%1.") targets the end of the string and only puts a period if the directory is not the root ("")
-- due to the way lua VarArgs work, (...):gsub operators on the first value and throws away the second
local ScriptNamePath = ...:gsub("(.)$", "%1.") .. "ScriptName"
```

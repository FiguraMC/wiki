Takes any lua value, and converts it into a json string.

Does not accept functions, they will be treated as null.

```lua
local luaTable = { Property = "Value" }
local convertedJson = toJson(luaTable)
print(convertedJson) --> '{"Property":"Value"}'
```

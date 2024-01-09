Takes a json string as an argument, and converts it into a lua value.

Objects and arrays are converted to tables appropriately.

```lua
local json = '{"Property":"Value"}'
local parsedJson = parseJson(json)
print(parsedJson.Property) --> "Value"
```

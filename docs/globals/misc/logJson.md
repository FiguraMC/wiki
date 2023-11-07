This is an alias of [`printJson`](./printJson.md)

Takes a Minecraft json string as an argument. Prints it to the chat formatted without the lua print header.

Takes in a variable amount of arguemnts. Arguments will be formatted independantly then concatenated together.

Returns the formatted string.

```lua
local jsonText = '[{"text":"some json text","color":"#555555"}," ",{"text":"as an example","color":"#ff55ff"}]'
logJson(jsonText)
```

The first argument is either a Table, or it's a Userdata, which refers to any of the added Figura types

Prints the table out to chat, specially formatted

If userdata is passed in, it is automatically converted to a table or string, and displayed

In the case of tables inside of tables, the "maxDepth" parameter will be used to determine how far to go

Default value for maxDepth is 1

Third argument, "silent", will skip the chat print and will only return the string

```lua
printTable()
```

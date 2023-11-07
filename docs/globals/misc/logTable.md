This is an alias of [printTable](./printTable.md)

### logTable(tbl : table | userdata, depth : number?, silent : boolean?) : string

Prints a Table or Userdata object to the chat. Unlike `log`, this prints all indices of the Table or Userdata to chat.

This function also prints all indices of child tables, up to a depth of `depth`. If `depth` is undefined, `depth` is `1`.

If the `silent` argument is `true`, the function will not print to chat. This allows using the formatted table in your script.

Returns the string representation of the table formatted for chat for use in your script.

```lua
local tbl = {
    a = 2,
    b = "stringValue",
}
logTable(tbl)
```

Figura overrides lua's type() function

When used on Figura types, returns the type's name as seen in the docs and in the figuraMetatables global

When called on a table that has a metatable with a \_\_type key, returns the corresponding value

```lua
type(models)
```

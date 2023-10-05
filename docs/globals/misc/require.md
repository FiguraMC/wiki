The require() function takes the name of one of your scripts, without the .lua extension

If this script has not been already run before, it will run that script and return the value that script returns

If it has been run before, then it will not run the file again, but it will return the same thing as the first time

If a required script has no returns, then require() will return true

If the name you give isn't any of your scripts, it will error

**Examples**:
```lua
-- In the root directory
require("JimmyAnims")

-- In a nested folder (lib in this case)
require("lib.GSAnimBlend")
```

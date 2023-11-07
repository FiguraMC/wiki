import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

The `require` function takes the path to one of your scripts and returns the cached return value of that script.

The path to a script is always calclated from the `avatar.json` file, regardless of the location of the executing script. Additionally, the file path seperator is `.` instead of `/` and an extension of `.lua` is assumed.

All scripts in an avatar will execute exactly once.<br/>
If you `require` a script that has not executed yet, that script will execute. `require` will then return the value that that script returned.<br/>
If you `require` a script that has already executed, `require` will return the value that the script originally returned without executing it again.

If a script returns nothing, `require` will return `true`.

If you try to `require` a script that does not exist, it will error. This can be avoided by calling `require` in [`pcall`](https://www.lua.org/manual/5.2/manual.html#pdf-pcall), a base Lua function.

### Examples

#### Script in root folder

<FileTreeRoot>
  <FileTreeNode label="MyCoolAvatar" icon="file/folder">
    <FileTreeNode label="script" icon="file/lua"/>
    <FileTreeNode label="JimmyAnims" icon="file/lua"/>
  </FileTreeNode>
</FileTreeRoot>

```lua
-- script.lua
require("JimmyAnims")
```

#### Script in another folder

<FileTreeRoot>
  <FileTreeNode label="MyCoolAvatar" icon="file/folder">
    <FileTreeNode label="script" icon="file/lua"/>
    <FileTreeNode label="MyFolder" icon="file/folder">
      <FileTreeNode label="GSAnimBlend" icon="file/lua"/>
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

```lua
-- script.lua
require("MyFolder.GSAnimBlend")
```

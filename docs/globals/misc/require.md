import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

The require() function takes the name of one of your scripts, without the .lua extension

If this script has not been already run before, it will run that script and return the value that script returns

If it has been run before, then it will not run the file again, but it will return the same thing as the first time

If a required script has no returns, then require() will return true

If the name you give isn't any of your scripts, it will error

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

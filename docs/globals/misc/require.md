import Emoji from '@site/src/components/Emoji';

The require() function takes the name of one of your scripts, without the .lua extension

If this script has not been already run before, it will run that script and return the value that script returns

If it has been run before, then it will not run the file again, but it will return the same thing as the first time

If a required script has no returns, then require() will return true

If the name you give isn't any of your scripts, it will error

### Examples

#### Script in root folder

<pre>
<Emoji icon="file/folder"/> MyCoolAvatar/<br/>
├─ <Emoji icon="file/lua"/> script.lua<br/>
├─ <Emoji icon="file/lua"/> JimmyAnims.lua<br/>
</pre>

```lua
-- script.lua
require("JimmyAnims")
```

#### Script in another folder

<pre>
<Emoji icon="file/folder"/> MyCoolAvatar/<br/>
├─ <Emoji icon="file/lua"/> script.lua<br/>
├─ <Emoji icon="file/folder"/> MyFolder/<br/>
│  ├─ <Emoji icon="file/lua"/> GSAnimBlend.lua<br/>
</pre>

```lua
-- script.lua
require("MyFolder.GSAnimBlend")
```

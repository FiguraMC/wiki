import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

# Misc Globals

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Documentation for the various things Figura adds to the global lua state

---

### <code>figuraMetatables</code> \{#figuraMetatables}

A table containing all the metatables for Figura's object types

The metatables are editable

---

### <code>listFiles()</code> \{#listFiles}

A function that returns a table with all script file names from the specified path

If no path is specified, it will fetch from the root folder

A second argument, boolean, can be given to also list files inside subfolders

Folders can be accessed relative to the executing script using `./` and `../`

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
listFiles()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
listFiles(folder)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| folder | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
listFiles(folder, subFolders)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| folder     | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| subFolders | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Using autoscripts in avatar.json,
-- you can prevent loading scripts by default and instead require them like so
-- highlight-next-line
for _, script in ipairs(listFiles("/scripts"), true) do
    require(script)
end
```

---

### <code>parseJson()</code> \{#parseJson}

Takes a JSON string as an argument, and converts it into a lua value.

Objects and arrays are converted to tables appropriately.

```lua
parseJson(jsonString)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| jsonString | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua
function events.CHAT_RECEIVE_MESSAGE(msg, jsonStr)
    -- highlight-next-line
    local json = parseJson(jsonStr)
    -- Gets the name of message sender
    local sender = json.with[1].hoverEvent.contents.name.text
end
```

---

### <code>print()</code> \{#print}

**Aliases:** `log()`

A function that writes its arguments to chat

Even though the syntax says only one argument, you can put as many as you want

All of them will print, and they'll be separated by a tab space

Returns the string representation of all values

```lua
print(arg)
```

**Parameters:**

| Name | Type                 | Description | Default |
| ---- | -------------------- | ----------- | ------- |
| arg  | <code>AnyType</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
print("hello, world!")

print("Avatar:", avatar:getName())
```

---

### <code>printJson()</code> \{#printJson}

**Aliases:** `logJson()`

Takes a Minecraft JSON string as an argument, and prints it to the chat formatted, without the lua print header

Even though the syntax says only one argument, you can put as many as you want

All of them will print, and they'll be appended in the end of the previous argument

Returns the formatted string

```lua
printJson(json)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| json | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

<!-- prettier-ignore -->
```lua
local wikiAd = {
    "",
    { text = "Learn more about Figura " },
    {
        text = "here",
        underlined = true,
        color = "aqua",
        clickEvent = {
            action = "open_url",
            value = "https://wiki.figuramc.org",
        }
    },
    { text = ".\n" }
}

-- highlight-next-line
printJson(toJson(wikiAd))
```

---

### <code>printTable()</code> \{#printTable}

**Aliases:** `logTable()`

The first argument is either a Table, or it's a Userdata, which refers to any of the added Figura types

Prints the table out to chat, specially formatted

If userdata is passed in, it is automatically converted to a table or string, and displayed

In the case of tables inside of tables, the "maxDepth" parameter will be used to determine how far to go

Default value for maxDepth is 1

Third argument, "silent", will skip the chat print and will only return the string

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
printTable(table)
```

**Parameters:**

| Name  | Type                                          | Description | Default |
| ----- | --------------------------------------------- | ----------- | ------- |
| table | <code>[Table](/tutorials/types/Tables)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
printTable(javaObject)
```

**Parameters:**

| Name       | Type                  | Description | Default |
| ---------- | --------------------- | ----------- | ------- |
| javaObject | <code>Userdata</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
printTable(table, maxDepth)
```

**Parameters:**

| Name     | Type                                             | Description | Default |
| -------- | ------------------------------------------------ | ----------- | ------- |
| table    | <code>[Table](/tutorials/types/Tables)</code>    | -           | -       |
| maxDepth | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
printTable(javaObject, maxDepth)
```

**Parameters:**

| Name       | Type                                             | Description | Default |
| ---------- | ------------------------------------------------ | ----------- | ------- |
| javaObject | <code>Userdata</code>                            | -           | -       |
| maxDepth   | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>
    <TabItem value="overload-5" label="Overload 5">

```lua
printTable(table, maxDepth, silent)
```

**Parameters:**

| Name     | Type                                              | Description | Default |
| -------- | ------------------------------------------------- | ----------- | ------- |
| table    | <code>[Table](/tutorials/types/Tables)</code>     | -           | -       |
| maxDepth | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| silent   | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>
    <TabItem value="overload-6" label="Overload 6">

```lua
printTable(javaObject, maxDepth, silent)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| javaObject | <code>Userdata</code>                             | -           | -       |
| maxDepth   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| silent     | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
printTable(textures:getTextures())
```

---

### <code>require()</code> \{#require}

The require() function takes the name of one of your scripts, without the .lua extension

If this script has not been already run before, it will run that script and return the value that script returns

If it has been run before, then it will not run the file again, but it will return the same thing as the first time

If a required script has no returns, then require() will return true

If the name you give isn't any of your scripts, it will error

Scripts can be accessed relative to the executing script using `./` and `../`

```lua
require(scriptName)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| scriptName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Examples:**

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

---

### <code>toJson()</code> \{#toJson}

**Aliases:** `toJson()`

Takes any lua value, and converts it into a json string.

Does not accept functions, they will be treated as null.

```lua
toJson(value)
```

**Parameters:**

| Name  | Type                 | Description | Default |
| ----- | -------------------- | ----------- | ------- |
| value | <code>AnyType</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
nameplate.ALL:setText(
-- highlight-next-line
    toJson({
        text = "Wiki",
        color = "#99BBEE",
    })
)
```

---

### <code>type</code> \{#type}

Figura overrides lua's type() function

When used on Figura types, returns the type's name as seen in the docs and in the figuraMetatables global

When called on a table that has a metatable with a \_\_type key, returns the corresponding value

**Example:**

```lua
type(2) -- number
type("foo") -- string
type(models) -- ModelPart
type(setmetatable({}, { __type = "MyType" })) -- MyType
```

---

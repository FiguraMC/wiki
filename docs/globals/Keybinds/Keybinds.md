import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API containing a function to create new Keybind instances

:::warning
This page is a WIP.
:::

---

### <code>newKeybind()</code> \{#newKeybind}

**Aliases:** `of()`

Creates and returns a new Keybind

The name is used in the keybind menu

The key parameter is an identifier for a key, such as "key.keyboard.r"

The boolean gui indicates whether the keybind should always work, or if it should only work when you don't have a screen open

Check the docs enum command for all key names

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
newKeybind(name)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
newKeybind(name, key)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3" default>

```lua
newKeybind(name, key, gui)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| key  | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| gui  | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
local myKey = keybinds:newKeybind("Name", "key.keyboard.h", false)
```

---

### <code>getVanillaKey()</code> \{#getVanillaKey}

Gets the id of the key bound to the given action, as a string

Check the docs enum command for all key names and vanilla actions

```lua
getVanillaKey(id)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
local myKey = keybinds:newKeybind("Name", keybinds:getVanillaKey("key.attack"), false)
```

---

### <code>fromVanilla()</code> \{#fromVanilla}

Creates a new Keybind based from a vanilla key

```lua
fromVanilla(id)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | -           |

**Example:**

```lua
local myKey = keybinds:fromVanilla("key.attack")
```

---

### <code>getKeybinds()</code> \{#getKeybinds}

Returns a table with all registered keybinds

```lua
getKeybinds()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
keybinds:getKeybinds()
```

---

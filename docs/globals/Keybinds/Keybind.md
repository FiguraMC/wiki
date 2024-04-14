Represents a key binding for your script

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Instances are obtained using the KeybindAPI's newKeybind() function

For this entire page assuming:

```lua
local myKey = keybinds:newKeybind("Name", "key.keyboard.h", false)
```

---

## Press/Release

### <code>setOnPress()</code> \{#setOnPress}

**Aliases:** `onPress()`

Sets the function that is executed when this key is pressed

The function has two arguments

The first argument is a number containing a bitmask of the currently held modifier keys

Shift = 1, Ctrl = 2, Alt = 4

The second argument is this keybind itself

```lua
setOnPress(function)
```

**Parameters:**

| Name     | Type                                                | Description | Default |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
myKey:setOnPress(function()
    log("hi")
end)
```

---

### <code>setOnRelease()</code> \{#setOnRelease}

**Aliases:** `onRelease()`

Sets the function that is executed when this key is released

The function has two arguments

The first argument is a number containing a bitmask of the currently held modifier keys

Shift = 1, Ctrl = 2, Alt = 4

The second argument is this keybind itself

```lua
setOnRelease(function)
```

**Parameters:**

| Name     | Type                                                | Description | Default |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
myKey:setOnRelease(function()
    log("hi")
end)
```

---

### <code>isPressed()</code> \{#isPressed}

Gets whether this keybind is currently pressed down

```lua
isPressed()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myKey:isPressed()
```

---

## Key Properties

### <code>setEnabled()</code> \{#setEnabled}

**Aliases:** `enabled()`

Toggles if this keybind should be processed or not

```lua
setEnabled(bool)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
myKey:setEnabled(true)
```

---

### <code>setGUI()</code> \{#setGUI}

**Aliases:** `gui()`

Set whenever or not this keybind should run when a GUI screen is open

```lua
setGUI(bool)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
myKey:setGUI(true)
```

---

### <code>getID()</code> \{#getID}

Returns the numeric ID of this keybind

```lua
getID()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myKey:getID()
```

---

### <code>setKey()</code> \{#setKey}

**Aliases:** `key()`

Sets the key for this keybind

```lua
setKey(key)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
myKey:setKey("key.keyboard.l")
```

---

### <code>getKey()</code> \{#getKey}

Gets the current key for this keybind

```lua
getKey()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
myKey:getKey()
```

---

### <code>getKeyName()</code> \{#getKeyName}

Gets the name of the current key for this keybind

```lua
getKeyName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
myKey:getKeyName()
```

---

### <code>getName()</code> \{#getName}

Gets the name of the keybind, which you set when you created the keybind

```lua
getName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
myKey:getName()
```

---

### <code>isDefault()</code> \{#isDefault}

Checks whether this key is currently set to its default state (not been changed using the keybind menu)

```lua
isDefault()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myKey:isDefault()
```

---

### <code>isEnabled()</code> \{#isEnabled}

Returns if this keybind is enabled or not

```lua
isEnabled()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myKey:isEnabled()
```

---

### <code>isGuiEnabled()</code> \{#isGuiEnabled}

Returns if this keybind should work when a GUI screen (Chat, Inventory, etc) is open or not

```lua
isGuiEnabled()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myKey:isGuiEnabled()
```

---

## Fields

### <code>press</code> \{#press}

A function that runs when the key is pressed down

The function has two arguments

The first argument is a number containing a bitmask of the currently held modifier keys

Shift = 1, Ctrl = 2, Alt = 4

The second argument is this keybind itself

If the return value is true then all vanilla keybinds using same key will be ignored

See [`setOnPress`](#setOnPress) for an example of how to set this field

---

### <code>release</code> \{#release}

A function that runs when the key is released

The function has two arguments

The first argument is a number containing a bitmask of the currently held modifier keys

Shift = 1, Ctrl = 2, Alt = 4

The second argument is this keybind itself

If the return value is true then all vanilla keybinds using same key will be ignored

See [`setOnRelease`](#setOnRelease) for an example of how to set this field

---

:::danger
This page is a WIP.
:::

Represents a key binding for your script

Instances are obtained using the KeybindAPI's create() function

For this entire page assuming:

```lua
local myKey = keybinds:newKeybind("Name", "key.keyboard.h", false)
```

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
| Name | Type | Description | Default |
|----------|----------------------------|-------------|---------|
| function | <code>[Function](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------------------|---------------------------|
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
--todo
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
| Name | Type | Description | Default |
|----------|----------------------------|-------------|---------|
| function | <code>[Function](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------------------|---------------------------|
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>isPressed()</code> \{#isPressed}

Gets whether this keybind is currently pressed down

```lua
isPressed()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
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
| Name | Type | Description | Default |
|------|---------------------------|-------------|---------|
| bool | <code>[Boolean](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------------------|---------------------------|
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>setGUI()</code> \{#setGUI}

**Aliases:** `gui()`

Set whenever or not this keybind should run when a GUI screen is open

```lua
setGUI(bool)
```

**Parameters:**
| Name | Type | Description | Default |
|------|---------------------------|-------------|---------|
| bool | <code>[Boolean](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------------------|---------------------------|
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getID()</code> \{#getID}

Returns the numeric ID of this keybind

```lua
getID()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Integer](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>setKey()</code> \{#setKey}

**Aliases:** `key()`

Sets the key for this keybind

```lua
setKey(key)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| key | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------------------|---------------------------|
| <code>[Keybind](/globals/Keybinds/Keybind)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getKey()</code> \{#getKey}

Gets the current key for this keybind

```lua
getKey()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getKeyName()</code> \{#getKeyName}

Gets the name of the current key for this keybind

```lua
getKeyName()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getName()</code> \{#getName}

Gets the name of the keybind, which you set when you created the keybind

```lua
getName()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>isDefault()</code> \{#isDefault}

Checks whether this key is currently set to its default state (not been changed using the keybind menu)

```lua
isDefault()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>isEnabled()</code> \{#isEnabled}

Returns if this keybind is enabled or not

```lua
isEnabled()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>isGuiEnabled()</code> \{#isGuiEnabled}

Returns if this keybind should work when a GUI screen (Chat, Inventory, etc) is open or not

```lua
isGuiEnabled()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
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

**Example:**

```lua
--todo
```

---

### <code>release</code> \{#release}

A function that runs when the key is released

The function has two arguments

The first argument is a number containing a bitmask of the currently held modifier keys

Shift = 1, Ctrl = 2, Alt = 4

The second argument is this keybind itself

If the return value is true then all vanilla keybinds using same key will be ignored

**Example:**

```lua
--todo
```

---

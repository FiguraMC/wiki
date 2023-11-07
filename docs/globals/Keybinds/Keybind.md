Represents a key binding for your script

Instances are obtained using the KeybindAPI's newKeybind() function

For this entire page assume:

```lua
local myKey = keybinds:newKeybind("Name", "key.keyboard.h", false)
```

## Press/Release \{#Press-Release}

### `setOnPress(fn)` \{#setOnPress}

Sets the function that is executed when this key is pressed

The function has two arguments

The first argument is a number, meaning the modifiers bitmask

Shift = 1, Ctrl = 2, Alt = 4

The second argument is this keybind itself

**Example**:

```lua
myKey:setOnPress(function()
    log("hi")
end)
```

---

### `setOnRelease(fn)` \{#setOnRelease}

Sets the function that is executed when this key is released

The function has two arguments

The first argument is a number, meaning the modifiers bitmask

Shift = 1, Ctrl = 2, Alt = 4

The second argument is this keybind itself

**Example**:

```lua
myKey:setOnRelease(function()
    log("hi")
end)
```

---

### `isPressed()` \{#isPressed}

Gets whether this keybind is currently pressed down

**Example**:

```lua
myKey:isPressed()
```

## Key Properites \{#Key-Properties}

### `setKey(string)` \{#setKey}

Sets the key for this keybind

**Example**:

```lua
myKey:setKey("key.keyboard.l")
```

---

### `getKey()` \{#getKey}

Gets the current key for this keybind

**Example**:

```lua
myKey:getKey()
```

---

### `isDefault()` \{#isDefault}

Checks whether this key is currently set to its default state (not been changed using the keybind menu)

**Example**:

```lua
myKey:isDefault()
```

---

### `getName()` \{#getName}

Gets the name of the keybind, which you set when you created the keybind

**Example**:

```lua
myKey:getName()
```

---

### `getKeyName()` \{#getKeyName}

Gets the name of the current key for this keybind

**Example**:

```lua
myKey:getKeyName()
```

---

### `getID()` \{#getID}

Returns the numeric ID of this keybind

**Example**:

```lua
myKey:getID()
```

---

### `setEnabled(bool)` \{#setEnabled}

Toggles if this keybind should be processed or not

**Example**:

```lua
myKey:setEnabled(true)
```

---

### `isEnabled()` \{#isEnabled}

Returns if this keybind is enabled or not

**Example**:

```lua
myKey:isEnabled()
```

---

### `setGUI(bool)` \{#setGUI}

Set whenever or not this keybind should run when a GUI screen is open

**Example**:

```lua
myKey:setGUI(true)
```

---

### `isGuiEnabled()` \{#isGuiEnabled}

Returns if this keybind should work when a GUI screen (Chat, Inventory, etc) is open or not

**Example**:

```lua
myKey:isGuiEnabled()
```

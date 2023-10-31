The global instance of the KeybindAPI and its subtypes

---

### `newKeybind(string,string,bool)` \{#newKeybind}

Creates and returns a new Keybind

The name is used in the keybind menu

The key parameter is an identifier for a key, such as "key.keyboard.r"

The boolean gui indicates whether the keybind should always work, or if it should only work when you don't have a screen open

Check the docs enum command for all key names

**Example**:

```lua
local myKey = keybinds:newKeybind("Name", "key.keyboard.h", false)
```

---

### `getVanillaKey(string)` \{#getVanillaKey}

Gets the id of the key bound to the given action, as a string

Check the docs enum command for all key names and vanilla actions

**Example**:

```lua
local myKey = keybinds:newKeybind("Name", keybinds:getVanillaKey("key.attack"), false)
```

---

### `fromVanilla(string)` \{#fromVanilla}

Creates a new Keybind based from a vanilla key

**Example**:

```lua
local myKey = keybinds:fromVanilla("key.attack")
```

---

### `getKeybinds()` \{#getKeybinds}

Returns a table with all registered keybinds

**Example**:

```lua
keybinds:getKeybinds()
```

---

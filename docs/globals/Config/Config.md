The global instance of the ConfigAPI

---

### `setName(string)` \{#setName}

Sets the name of the destination file, data will be saved and loaded from that file

Defaults to the avatar name

**Example**:

```lua
config:setName("Something")
```

---

### `getName()` \{#getName}

Returns the name of the destination file

**Example**:

```lua
config:getName()
```

---

### `save(string,any)` \{#save}

Save to disk a variable under the specific key

If the value is nil, the variable is removed from the file

**Example**:

```lua
config:save("apple", false)
```

---

### `load(string)` \{#load}

Loads a saved variable under the specific key

If no key is given, it will return a table with all saved variables

**Example**:

```lua
config:load("apple")
```

A hook for a certain event in Minecraft

You may register functions to one, and those functions will be called when the event occurs

### `register(fn,string)` \{#register}

Register a function on this event

Functions are run in registration order

An optional string argument can be given, grouping functions under that name, for an easier management later on

**Example**:

```lua
events.TICK:register(function() end, "Name")
```

---

### `clear()` \{#clear}

Clears the given event of all its functions

**Example**:

```lua
events.TICK:clear()
```

---

### `remove(string or fn)` \{#remove}

Removes either a function from this event, or when given a string, remove all functions registred under that name

Returns the number of functions that were removed

**Example**:

```lua
events.TICK:remove("Name")
```

---

### `getRegisteredCount(string)` \{#getRegisteredCount}

Returns a number of how many functions is registered by this name

**Example**:

```lua
events.TICK:getRegisteredCount("Name")
```

---

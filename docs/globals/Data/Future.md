Object that contains result of operation that cant be finished immediately

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

### <code>getOrError()</code> \{#getOrError}

Throws error if it occurred while execution of this future, returns value otherwise

```lua
getOrError()
```

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>getValue()</code> \{#getValue}

Returns value of this future object if future was executed successfully

```lua
getValue()
```

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>hasError()</code> \{#hasError}

Checks if error occurred while this future execution

```lua
hasError()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>isDone()</code> \{#isDone}

Checks if future is done, either successfully or with error

```lua
isDone()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>throwError()</code> \{#throwError}

Throws an error if it occurred while execution of this future.

```lua
throwError()
```

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

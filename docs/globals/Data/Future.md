Object that contains result of operation that cant be finished immediately

### <code>getOrError()</code> \{#getOrError}

Throws error if it occurred while execution of this future, returns value otherwise

```lua
getOrError()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[AnyType](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getValue()</code> \{#getValue}

Returns value of this future object if future was executed successfully

```lua
getValue()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[AnyType](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>hasError()</code> \{#hasError}

Checks if error occurred while this future execution

```lua
hasError()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Boolean](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isDone()</code> \{#isDone}

Checks if future is done, either successfully or with error

```lua
isDone()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Boolean](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>throwError()</code> \{#throwError}

Throws an error if it occurred while execution of this future.

```lua
throwError()
```

**Returns:**

| Type                  | Description |
| --------------------- | ----------- |
| <code>[nil](#)</code> | -           |

**Example:**

```lua
--todo
```

---

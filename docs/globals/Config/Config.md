import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

A global API used to save and load avatar data between game sessions

### <code>setName()</code> \{#setName}

**Aliases:** `name()`

Sets the name of the destination file, data will be saved and loaded from that file

Defaults to the avatar name

```lua
setName(name)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| name | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|-------------------------------------------|---------------------------|
| <code>[ConfigAPI](/globals/Config)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getName()</code> \{#getName}

Returns the name of the destination file

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

### <code>load()</code> \{#load}

Loads a saved variable under the specific key

If no key is given, it will return a table with all saved variables

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
load()
```

**Returns:**
| Type | Description |
|-------------------------|-------------|
| <code>[Table](#)</code> | - |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
load(key)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| key | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[AnyType](#)</code> | - |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>save()</code> \{#save}

Save to disk a variable under the specific key

If the value is nil, the variable is removed from the file

```lua
save(key, value)
```

**Parameters:**
| Name | Type | Description | Default |
|-------|---------------------------|-------------|---------|
| key | <code>[String](#)</code> | - | - |
| value | <code>[AnyType](#)</code> | - | - |

**Returns:**
| Type | Description |
|-------------------------------------------|---------------------------|
| <code>[ConfigAPI](/globals/Config)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

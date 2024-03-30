import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

Contains functions which Figura adds to the default Lua "math" library table

## Methods

### <code>clamp()</code> \{#clamp}

Clamps the given value between min and max

```lua
clamp(value, min, max)
```

**Parameters:**

| Name | Type | Description | Default |
|-------|--------------------------|-------------|---------|
| value | <code>[Number](#)</code> | - | - |
| min | <code>[Number](#)</code> | - | - |
| max | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>lerp()</code> \{#lerp}

Linearly interpolates from its first argument to its second argument, with the third argument as the parameter

Works on both regular numbers, vectors of the same type, and matrices of the same type

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
lerp(a, b, t)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| a | <code>[Number](#)</code> | - | - |
| b | <code>[Number](#)</code> | - | - |
| t | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
lerp(a, b, t)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| a | <code>[Vector](#)</code> | - | - |
| b | <code>[Vector](#)</code> | - | - |
| t | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Vector](#)</code> | - |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
lerp(a, b, t)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| a | <code>[Matrix](#)</code> | - | - |
| b | <code>[Matrix](#)</code> | - | - |
| t | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Matrix](#)</code> | - |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>lerpAngle()</code> \{#lerpAngle}

Similar to the default lerp function, but numbers are limited to the range of 0-360

Lerp is done towards the shortest angle

For example, a lerp of 340 and 20, with a factor of 0.75, will return 10

```lua
lerpAngle(a, b, t)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| a | <code>[Number](#)</code> | - | - |
| b | <code>[Number](#)</code> | - | - |
| t | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>map()</code> \{#map}

Maps the given value from one range to another

For example, if you have a value of 20 in the range 0-200, and you want to map it to the range 100-200, the result will be 110

```lua
map(value, oldMin, oldMax, newMin, newMax)
```

**Parameters:**

| Name | Type | Description | Default |
|--------|--------------------------|-------------|---------|
| value | <code>[Number](#)</code> | - | - |
| oldMin | <code>[Number](#)</code> | - | - |
| oldMax | <code>[Number](#)</code> | - | - |
| newMin | <code>[Number](#)</code> | - | - |
| newMax | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>round()</code> \{#round}

Rounds the given number to the nearest whole integer

```lua
round(value)
```

**Parameters:**

| Name | Type | Description | Default |
|-------|--------------------------|-------------|---------|
| value | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>shortAngle()</code> \{#shortAngle}

Returns the shortest angle between two angles

For example, if you have an angle of 350 degrees and you want to get the shortest angle between it and 0 degrees, the result will be 10 degrees

```lua
shortAngle(from, to)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| from | <code>[Number](#)</code> | - | - |
| to | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>sign()</code> \{#sign}

Returns the sign of the given number

Returns 1 if the number is positive, -1 if it's negative, and 0 if it's 0

```lua
sign(value)
```

**Parameters:**

| Name | Type | Description | Default |
|-------|--------------------------|-------------|---------|
| value | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

## Fields

### <code>playerScale</code> \{#playerScale}

The constant of the player scaling related to the world

**Example:**

```lua
--todo
```

---

### <code>worldScale</code> \{#worldScale}

The constant of the world scaling related with the player

**Example:**

```lua
--todo
```

---

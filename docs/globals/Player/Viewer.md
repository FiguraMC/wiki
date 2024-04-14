import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Viewer is an alias of [Player](../Player). It's used to access people who are viewing your avatar to allow access to some host-only functions. All methods available to `player` are also available under `viewer` with the addition of those documented below.

Accessed via `client:getViewer()`.

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

For this page assume:

```lua
local myViewer = client:getViewer()
```

---

### <code>getAir()</code> \{#getAir}

Gets the remaining amount of air of the player

```lua
getAir()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myViewer:getAir()
```

---

### <code>getAttackCharge()</code> \{#getAttackCharge}

Returns a fraction (0 to 1) of the charge of the player attack

If less than 1, every attack will result in a weak attack

```lua
getAttackCharge()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myViewer:getAttackCharge()
```

---

### <code>getReachDistance()</code> \{#getReachDistance}

Returns the current reach distance of the player

```lua
getReachDistance()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myViewer:getReachDistance()
```

---

### <code>getStatusEffects()</code> \{#getStatusEffects}

Returns a table of all of the player's status effects

The table contains sub-tables, each of which contains the name, amplifier, duration, and particle visibility of each status effect

```lua
getStatusEffects()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
for _, effect in pairs(myViewer:getStatusEffects()) do
    logTable(effect)
end
```

---

### <code>isFlying()</code> \{#isFlying}

Checks if the player is currently flying

```lua
isFlying()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myViewer:isFlying()
```

---

### <code>isJumping()</code> \{#isJumping}

Checks if the player is jumping

Note this is only true during the first tick the player started jumping

```lua
isJumping()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myViewer:isJumping()
```

---

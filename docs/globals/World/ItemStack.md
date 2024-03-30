:::danger
This page is a WIP.
:::

A proxy for an item stack from Minecraft

For all exmaples on this page assume:

```lua
local item = player:getHeldItem()
```

---

### <code>getBlockstate()</code> \{#getBlockstate}

Returns the blockstate representation of this item stack

If this item has no block representation, returns nil

```lua
getBlockstate()
```

**Returns:**
| Type | Description |
|------------------------------------------------------|-------------|
| <code>[BlockState](/globals/World/BlockState)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getCount()</code> \{#getCount}

Gets the number of items in this stack

```lua
getCount()
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

### <code>getDamage()</code> \{#getDamage}

Gets the damage value of the item in this stack

Works on things like tools, or other things with a durability bar

```lua
getDamage()
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

### <code>getEquipmentSlot()</code> \{#getEquipmentSlot}

Returns the slot name of where this item is used

```lua
getEquipmentSlot()
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

### <code>getID()</code> \{#getID}

Gets the ID of this stack

```lua
getID()
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

### <code>getMaxCount()</code> \{#getMaxCount}

Gets the maximum stack size of this item

```lua
getMaxCount()
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

### <code>getMaxDamage()</code> \{#getMaxDamage}

Gets the maximum durability of this item stack

```lua
getMaxDamage()
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

### <code>getName()</code> \{#getName}

Gets the name of the item

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

### <code>getPopTime()</code> \{#getPopTime}

Gets the item's animation bobbing time, in ticks. This value is used to move an item to the player when it is picked up

```lua
getPopTime()
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

### <code>getRarity()</code> \{#getRarity}

Gets the rarity of this item stack

COMMON = white, UNCOMMON = yellow, RARE = aqua, EPIC = light purple

```lua
getRarity()
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

### <code>getRepairCost()</code> \{#getRepairCost}

Gets the repair cost modifier, in an anvil, for this item stack

```lua
getRepairCost()
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

### <code>getTag()</code> \{#getTag}

Gets a table of the NBT tags of this stack

```lua
getTag()
```

**Returns:**
| Type | Description |
|-------------------------|-------------|
| <code>[Table](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getTags()</code> \{#getTags}

Gets all the tags of this item as strings in a table

```lua
getTags()
```

**Returns:**
| Type | Description |
|-------------------------|-------------|
| <code>[Table](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getUseAction()</code> \{#getUseAction}

Returns the name of the animation that plays when using this item

```lua
getUseAction()
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

### <code>getUseDuration()</code> \{#getUseDuration}

Gets the number of ticks needed to "use" this item

Currently only has a use for food items

Always 32 for food items except kelp, which is 16

```lua
getUseDuration()
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

### <code>copy()</code> \{#copy}

Returns a copy of this item stack

```lua
copy()
```

**Returns:**
| Type | Description |
|----------------------------------------------------|---------------------------|
| <code>[ItemStack](/globals/World/ItemStack)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>hasGlint()</code> \{#hasGlint}

Returns true if this item glows with enchantment glint

```lua
hasGlint()
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

### <code>isArmor()</code> \{#isArmor}

Checks if this item is Armor

```lua
isArmor()
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

### <code>isBlockItem()</code> \{#isBlockItem}

Returns true if this item represents a block

```lua
isBlockItem()
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

### <code>isDamageable()</code> \{#isDamageable}

Returns true if this item stack has durability

```lua
isDamageable()
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

### <code>isEnchantable()</code> \{#isEnchantable}

Returns true if this item stack can be put in an enchanting table

```lua
isEnchantable()
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

### <code>isFood()</code> \{#isFood}

Returns true if this item is edible

```lua
isFood()
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

### <code>isStackable()</code> \{#isStackable}

Returns true if the item is stackable

```lua
isStackable()
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

### <code>isTool()</code> \{#isTool}

Check if this item is a Tool (Axe, Shovel, Pickaxe, …)

```lua
isTool()
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

### <code>toStackString()</code> \{#toStackString}

Converts this ItemStack to a string, as you'd see in a command

```lua
toStackString()
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

## Fields

### <code>id</code> \{#id}

Contains the id of the item this ItemStack refers to

**Example:**

```lua
--todo
```

---

### <code>tag</code> \{#tag}

A table containing the NBT tag of this ItemStack

If this ItemStack has nothing in its tag, it is nil

**Example:**

```lua
--todo
```

---

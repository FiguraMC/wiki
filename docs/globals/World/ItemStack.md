A proxy for an item stack from Minecraft

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

For all exmaples on this page assume:

```lua
local item = player:getHeldItem()
```

---

## General

### <code>getCount()</code> \{#getCount}

Gets the number of items in this stack

```lua
getCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
item:getCount()
```

---

### <code>getID()</code> \{#getID}

Gets the ID of this stack

```lua
getID()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
item:getID()
```

---

### <code>getMaxCount()</code> \{#getMaxCount}

Gets the maximum stack size of this item

```lua
getMaxCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
item:getMaxCount()
```

---

### <code>getName()</code> \{#getName}

Gets the name of the item

```lua
getName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
item:getName()
```

---

### <code>getPopTime()</code> \{#getPopTime}

Gets the item's animation bobbing time, in ticks. This value is used to move an item to the player when it is picked up

```lua
getPopTime()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
item:getPopTime()
```

---

### <code>getRarity()</code> \{#getRarity}

Gets the rarity of this item stack

COMMON = white, UNCOMMON = yellow, RARE = aqua, EPIC = light purple

```lua
getRarity()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
item:getRarity()
```

---

### <code>getTag()</code> \{#getTag}

Gets a table of the NBT tags of this stack

```lua
getTag()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
item:getTag()
```

---

### <code>getTags()</code> \{#getTags}

Gets all the tags of this item as strings in a table

```lua
getTags()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
item:getTags()
```

---

### <code>getUseAction()</code> \{#getUseAction}

Returns the name of the animation that plays when using this item

```lua
getUseAction()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
item:getUseAction()
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

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
item:getUseDuration()
```

---

### <code>copy()</code> \{#copy}

Returns a copy of this item stack

```lua
copy()
```

**Returns:**

| Type                                               | Description               |
| -------------------------------------------------- | ------------------------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | Returns self for chaining |

**Example:**

```lua
item:copy()
```

---

### <code>hasGlint()</code> \{#hasGlint}

Returns true if this item glows with enchantment glint

```lua
hasGlint()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:hasGlint()
```

---

### <code>isFood()</code> \{#isFood}

Returns true if this item is edible

```lua
isFood()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:isFood()
```

---

### <code>isStackable()</code> \{#isStackable}

Returns true if the item is stackable

```lua
isStackable()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:isStackable()
```

---

### <code>toStackString()</code> \{#toStackString}

Converts this ItemStack to a string, as you'd see in a command

```lua
toStackString()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
item:toStackString()
```

---

## Equipment/Tools

### <code>getDamage()</code> \{#getDamage}

Gets the damage value of the item in this stack

Works on things like tools, or other things with a durability bar

```lua
getDamage()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
item:getDamage()
```

---

### <code>getEquipmentSlot()</code> \{#getEquipmentSlot}

Returns the slot name of where this item is used

```lua
getEquipmentSlot()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
item:getEquipmentSlot()
```

---

### <code>getMaxDamage()</code> \{#getMaxDamage}

Gets the maximum durability of this item stack

```lua
getMaxDamage()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
item:getMaxDamage()
```

---

### <code>getRepairCost()</code> \{#getRepairCost}

Gets the repair cost modifier, in an anvil, for this item stack

```lua
getRepairCost()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
item:getRepairCost()
```

---

### <code>isArmor()</code> \{#isArmor}

Checks if this item is Armor

```lua
isArmor()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:isArmor()
```

---

### <code>isDamageable()</code> \{#isDamageable}

Returns true if this item stack has durability

```lua
isDamageable()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:isDamageable()
```

---

### <code>isEnchantable()</code> \{#isEnchantable}

Returns true if this item stack can be put in an enchanting table

```lua
isEnchantable()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:isEnchantable()
```

---

### <code>isTool()</code> \{#isTool}

Check if this item is a Tool (Axe, Shovel, Pickaxe, …)

```lua
isTool()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:isTool()
```

---

## Block Items

### <code>getBlockstate()</code> \{#getBlockstate}

Returns the blockstate representation of this item stack

If this item has no block representation, returns nil

```lua
getBlockstate()
```

**Returns:**

| Type                                                 | Description |
| ---------------------------------------------------- | ----------- |
| <code>[BlockState](/globals/World/BlockState)</code> | -           |

**Example:**

```lua
item:getBlockstate()
```

---

### <code>isBlockItem()</code> \{#isBlockItem}

Returns true if this item represents a block

```lua
isBlockItem()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
item:isBlockItem()
```

---

## Fields

### <code>id</code> \{#id}

Contains the id of the item this ItemStack refers to

**Example:**

```lua
item.id
```

---

### <code>tag</code> \{#tag}

A table containing the NBT tag of this ItemStack

If this ItemStack has nothing in its tag, it is nil

**Example:**

```lua
item.tag
```

---

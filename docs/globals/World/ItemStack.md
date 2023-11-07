A proxy for an item stack from Minecraft

For all exmaples on this page assume:

```lua
local item = player:getHeldItem()
```

### `getName()` \{#getName}

Gets the name of the item

**Example**:

```lua
item:getName()
```

---

### `copy()` \{#copy}

Returns a copy of this item stack

**Example**:

```lua
item:copy()
```

---

### `getCount()` \{#getCount}

Gets the number of items in this stack

**Example**:

```lua
item:getCount()
```

---

### `getTag()` \{#getTag}

Gets a table of the NBT tags of this stack

**Example**:

```lua
item:getTag()
```

---

### `getTags()` \{#getTags}

Gets all the tags of this item as strings in a table

**Example**:

```lua
item:getTags()
```

---

### `getID()` \{#getID}

Gets the ID of this stack

**Example**:

```lua
item:getID()
```

---

### `getDamage()` \{#getDamage}

Gets the damage value of the item in this stack

Works on things like tools, or other things with a durability bar

**Example**:

```lua
item:getDamage()
```

---

### `isEnchantable()` \{#isEnchantable}

Returns true if this item stack can be put in an enchanting table

**Example**:

```lua
item:isEnchantable()
```

---

### `hasGlint()` \{#hasGlint}

Returns true if this item glows with enchantment glint

**Example**:

```lua
item:hasGlint()
```

---

### `getMaxCount()` \{#getMaxCount}

Gets the maximum stack size of this item

**Example**:

```lua
item:getMaxCount()
```

---

### `getMaxDamage()` \{#getMaxDamage}

Gets the maximum durability of this item stack

**Example**:

```lua
item:getMaxDamage()
```

---

### `isDamageable()` \{#isDamageable}

Returns true if this item stack has durability

**Example**:

```lua
item:isDamageable()
```

---

### `isStackable()` \{#isStackable}

Returns true if the item is stackable

**Example**:

```lua
item:isStackable()
```

---

### `getUseDuration()` \{#getUseDuration}

Gets the number of ticks needed to "use" this item

Currently only has a use for food items

Always 32 for food items except kelp, which is 16

**Example**:

```lua
item:getUseDuration()
```

---

### `isFood()` \{#isFood}

Returns true if this item is edible

**Example**:

```lua
item:isFood()
```

---

### `getPopTime()` \{#getPopTime}

Gets the item's animation bobbing time, in ticks. This value is used to move an item to the player when it is picked up

**Example**:

```lua
item:getPopTime()
```

---

### `getRepairCost()` \{#getRepairCost}

Gets the repair cost modifier, in an anvil, for this item stack

**Example**:

```lua
item:getRepairCost()
```

---

### `toStackString()` \{#toStackString}

Converts this ItemStack to a string, like you'd see in a command

**Example**:

```lua
item:toStackString()
```

---

### `getRarity()` \{#getRarity}

Gets the rarity of this item stack

COMMON = white, UNCOMMON = yellow, RARE = aqua, EPIC = light purple

**Example**:

```lua
item:getRarity()
```

---

### `getUseAction()` \{#getUseAction}

Returns the name of the animation that plays when using this item

**Example**:

```lua
item:getUseAction()
```

---

### `isTool()` \{#isTool}

Check if this item is a Tool (Axe, Shovel, Pickaxe, ...)

**Example**:

```lua
item:isTool()
```

---

### `isBlockItem()` \{#isBlockItem}

Returns true if this item represents a block

**Example**:

```lua
item:isBlockItem()
```

---

### `getBlockstate()` \{#getBlockstate}

Returns the blockstate representation of this item stack

If this item has no block representation, returns nil

**Example**:

```lua
item:getBlockstate()
```

---

### `getEquipmentSlot()` \{#getEquipmentSlot}

Returns the slot name of where this item is used

**Example**:

```lua
item:getEquipmentSlot()
```

---

### `isArmor()` \{#isArmor}

Checks if this item is a Armor

**Example**:

```lua
item:isArmor()
```

---

### `id` \{#id}

Contains the id of the item this ItemStack refers to

**Example**:

```lua
item.id
```

---

### `tag` \{#tag}

A table containing the NBT tag of this ItemStack

If this ItemStack has nothing in its tag, it is nil

**Example**:

```lua
item.tag
```

---

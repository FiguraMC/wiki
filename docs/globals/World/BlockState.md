import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A proxy for a block state from Minecraft

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Instances are obtained through the WorldAPI

This proxy also contains a saved position for the BlockState

For all exmaples on this page assume:

```lua
local block = world.getBlockState(player:getPos():sub(0, 0.5, 0))
```

---

## Redstone Properties

### <code>getComparatorOutput()</code> \{#getComparatorOutput}

Gets the amount of signal strength a comparator would get from this BlockState

```lua
getComparatorOutput()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getComparatorOutput()
```

---

### <code>emitsRedstonePower()</code> \{#emitsRedstonePower}

Gets whether or not this BlockState emits redstone power

```lua
emitsRedstonePower()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:emitsRedstonePower()
```

---

## Player Effects

### <code>getJumpVelocityMultiplier()</code> \{#getJumpVelocityMultiplier}

Gets the jump velocity multiplier of this BlockState

(Literally just honey blocks in vanilla)

```lua
getJumpVelocityMultiplier()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getJumpVelocityMultiplier()
```

---

### <code>getVelocityMultiplier()</code> \{#getVelocityMultiplier}

Gets the velocity multiplier of this BlockState

(Only Soul sand, honey blocks in vanilla)

```lua
getVelocityMultiplier()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getVelocityMultiplier()
```

---

## Shape

### <code>getCollisionShape()</code> \{#getCollisionShape}

Returns a table representing the bounding boxes of the collision shape

The table a list of every shape, containing two Vector3, where the first vector is one corner of the box and the other vector is the other corner

```lua
getCollisionShape()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getCollisionShape()
```

---

### <code>getOutlineShape()</code> \{#getOutlineShape}

Returns a table representing the bounding boxes of the outline shape

The table a list of every shape, containing two Vector3, where the first vector is one corner of the box and the other vector is the other corner

```lua
getOutlineShape()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getOutlineShape()
```

---

## Visual Properties

### <code>getLuminance()</code> \{#getLuminance}

Gets the emission light level of this BlockState

```lua
getLuminance()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getLuminance()
```

---

### <code>getMapColor()</code> \{#getMapColor}

Gets the map color of this BlockState, as a Vector3 with R,G,B ranging 0 to 1

```lua
getMapColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
block:getMapColor()
```

---

### <code>getOpacity()</code> \{#getOpacity}

Gets the opacity of the BlockState, in terms of how much it affects light levels

```lua
getOpacity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getOpacity()
```

---

### <code>getTextures()</code> \{#getTextures}

Returns a List of this BlockState's textures

The keys represents the Culling Direction, while the values is another table with all texture paths (string)

Note this only works for normal blocks, special blocks (water, beds, …) will return an empty table

```lua
getTextures()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getTextures()
```

---

### <code>hasEmissiveLighting()</code> \{#hasEmissiveLighting}

Gets whether or not the BlockState uses emissive lighting

```lua
hasEmissiveLighting()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:hasEmissiveLighting()
```

---

## Physical Properties

### <code>getBlastResistance()</code> \{#getBlastResistance}

Gets the blast resistance of this BlockState

```lua
getBlastResistance()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getBlastResistance()
```

---

### <code>getFriction()</code> \{#getFriction}

Gets the friction of this BlockState

(Slime blocks and ice in vanilla)

```lua
getFriction()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getFriction()
```

---

### <code>getHardness()</code> \{#getHardness}

Gets the hardness of the BlockState

```lua
getHardness()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
block:getHardness()
```

---

### <code>hasCollision()</code> \{#hasCollision}

Returns true if this block has collision

```lua
hasCollision()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:hasCollision()
```

---

### <code>isAir()</code> \{#isAir}

Checks if this block is air

```lua
isAir()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:isAir()
```

---

### <code>isFullCube()</code> \{#isFullCube}

Gets whether or not the BlockState has a full cube as its collision hitbox

```lua
isFullCube()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:isFullCube()
```

---

### <code>isOpaque()</code> \{#isOpaque}

Gets whether or not this BlockState is opaque

```lua
isOpaque()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:isOpaque()
```

---

### <code>isSolidBlock()</code> \{#isSolidBlock}

Gets whether or not the BlockState is considered a "solid" block by Minecraft

```lua
isSolidBlock()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:isSolidBlock()
```

---

### <code>isTranslucent()</code> \{#isTranslucent}

Gets whether or not the BlockState would propagate sky light downwards

```lua
isTranslucent()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:isTranslucent()
```

---

## Misc

### <code>getEntityData()</code> \{#getEntityData}

Returns the nbt of the Block Entity associated with this BlockState, at its position, as a table

Since the mod is only on client side, this NBT might not actually contain the real nbt, which is stored server-side

```lua
getEntityData()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getEntityData()
```

---

### <code>getFluidTags()</code> \{#getFluidTags}

Returns a table containing all the fluid tags of this block, as strings

```lua
getFluidTags()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getFluidTags()
```

---

### <code>getID()</code> \{#getID}

Returns this BlockState identifier

```lua
getID()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
block:getID()
```

---

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Sets the saved position for this BlockState proxy

The saved position is used in BlockState functions that require a position

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setPos(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                                 | Description               |
| ---------------------------------------------------- | ------------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPos(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                 | Description               |
| ---------------------------------------------------- | ------------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
block:setPos(player:getPos())
```

---

### <code>getPos()</code> \{#getPos}

Returns the saved position for this BlockState proxy

The saved position is used in BlockState functions that require a position

```lua
getPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
block:getID()
```

---

### <code>getProperties()</code> \{#getProperties}

Returns a table with the properties of this BlockState

```lua
getProperties()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getProperties()
```

---

### <code>getSounds()</code> \{#getSounds}

Gets the names of all the sounds which can play from this BlockState, as well as their pitch and volume

Stored in a table

```lua
getSounds()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getSounds()
```

---

### <code>getTags()</code> \{#getTags}

Returns a table containing all the tags of this block, as strings

```lua
getTags()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
block:getTags()
```

---

### <code>asItem()</code> \{#asItem}

Returns an ItemStack representing this block in item form, whatever Minecraft deems that to be

If it cannot find an item for this block, it will return nil

```lua
asItem()
```

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**Example:**

```lua
block:asItem()
```

---

### <code>hasBlockEntity()</code> \{#hasBlockEntity}

Gets whether or not this BlockState has an associated block entity

```lua
hasBlockEntity()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
block:hasBlockEntity()
```

---

### <code>toStateString()</code> \{#toStateString}

Converts this BlockState into a string, like you'd see in a Minecraft command

```lua
toStateString()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
block:toStateString()
```

---

## Fields

### <code>id</code> \{#id}

The identifier of the block this BlockState comes from

**Example:**

```lua
block.id
```

---

### <code>properties</code> \{#properties}

A table containing the properties of this BlockState

If this BlockState has no properties, it is nil

**Example:**

```lua
block.properties
```

---

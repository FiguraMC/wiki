A proxy for a block state from Minecraft

Instances are obtained through the WorldAPI

This proxy also contains a saved position for the BlockState

For all exmaples on this page assume:

```lua
local block = world.getBlockState(player:getPos():sub(0, 0.5, 0))
```

### `getProperties()` \{#getProperties}

Returns a table with the properties of this BlockState

**Example**:

```lua
block:getProperties()
```

---

### `isOpaque()` \{#isOpaque}

Gets whether or not this BlockState is opaque

**Example**:

```lua
block:isOpaque()
```

---

### `getID()` \{#getID}

Returns this BlockState identifier

**Example**:

```lua
block:getID()
```

---

### `getPos()` \{#getPos}

Returns the saved position for this BlockState proxy

The saved position is used in BlockState functions that require a position

**Example**:

```lua
block:getID()
```

---

### `setPos(Vector3)` \{#setPos}

Sets the saved position for this BlockState proxy

The saved position is used in BlockState functions that require a position

**Example**:

```lua
block:setPos(player:getPos())
```

---

### `setOpacity()` \{#setOpacity}

Gets the opacity of the BlockState, in terms of how much it affects light levels

**Example**:

```lua
block:setOpacity()
```

---

### `getTags()` \{#getTags}

Returns a table containing all the tags of this block, as strings

**Example**:

```lua
block:getTags()
```

---

### `isSolidBlock()` \{#isSolidBlock}

Gets whether or not the BlockState is considered a "solid" block by Minecraft

**Example**:

```lua
block:isSolidBlock()
```

---

### `getBlastResistance()` \{#getBlastResistance}

Gets the blast resistance of this BlockState

**Example**:

```lua
block:getBlastResistance()
```

---

### `isFullCube()` \{#isFullCube}

Gets whether or not the BlockState has a full cube as its collision hitbox

**Example**:

```lua
block:isFullCube()
```

---

### `asItem()` \{#asItem}

Returns an ItemStack representing this block in item form, whatever Minecraft deems that to be

If it cannot find an item for this block, it will return nil

**Example**:

```lua
block:asItem()
```

---

### `hasBlockEntity()` \{#hasBlockEntity}

Gets whether or not this BlockState has an associated block entity

**Example**:

```lua
block:hasBlockEntity()
```

---

### `getCollisionShape()` \{#getCollisionShape}

Returns a table representing the bounding boxes of the collision shape

The table a list of every shape, containing two Vector3, where the first vector is one corner of the box and the other vector is the other corner

**Example**:

```lua
block:getCollisionShape()
```

---

### `getOutlineShape()` \{#getOutlineShape}

Returns a table representing the bounding boxes of the outline shape

The table a list of every shape, containing two Vector3, where the first vector is one corner of the box and the other vector is the other corner

**Example**:

```lua
block:getOutlineShape()
```

---

### `isTranslucent()` \{#isTranslucent}

Gets whether or not the BlockState would propagate sky light downwards

**Example**:

```lua
block:isTranslucent()
```

---

### `getMapColor()` \{#getMapColor}

Gets the map color of this BlockState, as a Vector3 with R,G,B ranging 0 to 1

**Example**:

```lua
block:getMapColor()
```

---

### `emitsRedstonePower()` \{#emitsRedstonePower}

Gets whether or not this BlockState emits redstone power

**Example**:

```lua
block:emitsRedstonePower()
```

---

### `getFriction()` \{#getFriction}

Gets the friction of this BlockState

(Slime blocks and ice in vanilla)

**Example**:

```lua
block:getFriction()
```

---

### `toStateString()` \{#toStateString}

Converts this BlockState into a string, like you'd see in a Minecraft command

**Example**:

```lua
block:toStateString()
```

---

### `getEntityData()` \{#getEntityData}

Returns the nbt of the Block Entity associated with this BlockState, at its position, as a table

Since the mod is only on client side, this NBT might not actually contain the real nbt, which is stored server-side

**Example**:

```lua
block:getEntityData()
```

---

### `isAir()` \{#isAir}

Checks if this block is air

**Example**:

```lua
block:isAir()
```

---

### `getFluidTags()` \{#getFluidTags}

Returns a table containing all the fluid tags of this block, as strings

**Example**:

```lua
block:getFluidTags()
```

---

### `getSounds()` \{#getSounds}

Gets the names of all the sounds which can play from this BlockState, as well as their pitch and volume

Stored in a table

**Example**:

```lua
block:getSounds()
```

---

### `getVelocityMultiplier()` \{#getVelocityMultiplier}

Gets the velocity multiplier of this BlockState

(Only soul sand, honey blocks in vanilla)

**Example**:

```lua
block:getVelocityMultiplier()
```

---

### `getJumpVelocityMultiplier()` \{#getJumpVelocityMultiplier}

Gets the jump velocity multiplier of this BlockState

(Literally just honey blocks in vanilla)

**Example**:

```lua
block:getJumpVelocityMultiplier()
```

---

### `getLuminance()` \{#getLuminance}

Gets the emission light level of this BlockState

**Example**:

```lua
block:getLuminance()
```

---

### `getHardness()` \{#getHardness}

Gets the hardness of the BlockState

**Example**:

```lua
block:getHardness()
```

---

### `getTextures()` \{#getTextures}

Returns a List of this BlockState's textures

The keys represents the Culling Direction, while the values is another table with all texture paths (string)

Note this only work for normal blocks, special blocks (water, beds, ...) will return an empty table

**Example**:

```lua
block:getTextures()
```

---

### `hasCollision()` \{#hasCollision}

Returns true if this block has collision

**Example**:

```lua
block:hasCollision()
```

---

### `hasEmissiveLighting()` \{#hasEmissiveLighting}

Gets whether or not the BlockState uses emissive lighting

**Example**:

```lua
block:hasEmissiveLighting()
```

---

### `getComparatorOutput()` \{#getComparatorOutput}

Gets the amount of signal strength a comparator would get from this BlockState

**Example**:

```lua
block:getComparatorOutput()
```

---

### `id` \{#id}

The identifier of the block this BlockState comes from

**Example**:

```lua
block.id
```

---

### `properties` \{#properties}

A table containing the properties of this BlockState

If this BlockState has no properties, it is nil

**Example**:

```lua
block.properties
```

---

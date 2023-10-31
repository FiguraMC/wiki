The world API is accessed through the <code>world</code> global. Like so: <code>world.getTime()</code>. Note how the world API uses a period (.) instead of a colon (:) like most other APIs.

---

### `exists()` \{#exists}

Checks whether or not a world currently exists

This will almost always be true, but might be false on some occasions such as while traveling between dimensions

**Example**:

```lua
world:exists()
```

---

### `getPlayers()` \{#getPlayers}

Returns a table containing instances of Player for all players in the world

The players are indexed by their names

**Example**:

```lua
for _, players in pairs(world:getPlayers()) do
    log(players)
end
```

---

### `getTime()` \{#getTime}

Gets the current game time of the world

If delta is passed in, then it adds delta to the time

The default value of delta is zero

**Example**:

```lua
world:getTime()
```

---

### `getTimeOfDay()` \{#getTimeOfDay}

Gets the current day time of the world

If delta is passed in, then it adds delta to the time

The default value of delta is zero

**Example**:

```lua
world:getTimeOfDay()
```

---

### `getMoonPhase()` \{#getMoonPhase}

Gets the current moon phase of the world, stored as an integer

**Example**:

```lua
world:getMoonPhase()
```

---

### `getDimension()` \{#getDimension}

Gets the dimension name of this world

**Example**:

```lua
world:getDimension()
```

---

### `getBiome(Vector3)` \{#getBiome}

Gets the Biome located at the given position

**Example**:

```lua
world:getBiome(player:getPos())
```

---

### `getEntity(string)` \{#getEntity}

Returns an EntityAPI object from this UUID's entity, or nil if no entity was found

**Example**:

```lua
world.getEntity("5003b2ce-7a8d-4c56-8b91-ec705985fe08")
```

---

### `getBlockState(Vector3)` \{#getBlockState}

Gets the BlockState of the block at the given position

**Example**:

```lua
world:getBlockState(player:getPos())
```

---

### `getStrongRedstonePower(Vector3)` \{#getStrongRedstonePower}

Gets the direct redstone power level of the block at the given position

**Example**:

```lua
world:getStrongRedstonePower(player:getPos())
```

---

### `getRedstonePower(Vector3)` \{#getRedstonePower}

Gets the redstone power level of the block at the given position

**Example**:

```lua
world:getRedstonePower(player:getPos())
```

---

### `getSkyLightLevel(Vector3)` \{#getSkyLightLevel}

Gets the sky light level of the block at the given position

**Example**:

```lua
world:getSkyLightLevel(player:getPos())
```

---

### `getBlockLightLevel(Vector3)` \{#getBlockLightLevel}

Gets the block light level of the block at the given position

**Example**:

```lua
world:getBlockLightLevel(player:getPos())
```

---

### `getLightLevel(Vector3)` \{#getLightLevel}

Gets the overall light level of the block at the given position

**Example**:

```lua
world:getLightLevel(player:getPos())
```

---

### `isOpenSky(Vector3)` \{#isOpenSky}

Gets whether or not the sky is open at the given position

**Example**:

```lua
world:isOpenSky(player:getPos())
```

---

### `getRainGradient(delta)` \{#getRainGradient}

Gets the current rain gradient in the world, interpolated from the previous tick to the current one

The default value of delta is 1, which is the current tick

**Example**:

```lua
world:getRainGradient()
```

---

### `isThundering()` \{#isThundering}

Gets whether or not there is currently thunder/lightning happening in the world

**Example**:

```lua
world:isThundering()
```

---

### `getBuildHeight()` \{#getBuildHeight}

Returns the minimum and maximum build height of the world, as varargs

**Example**:

```lua
world:getBuildHeight()
```

---

### `getSpawnPoint()` \{#getSpawnPoint}

Returns a vector with the coordinates of the world spawn

**Example**:

```lua
world:getSpawnPoint()
```

---

### `getBlocks(Vector3,Vector3)` \{#getBlocks}

Gets a list of all BlockStates in the specified area

The maximum area size is 8 x 8 x 8

---

### `newItem(string,integer,integer)` \{#newItem}

Parses and create a new ItemStack from the given string

A count and damage can be given, to be applied on this itemstack

Note: This doesn't create an item in the world, if you want to make a fake item you want [item tasks](../globals/Models/ItemTask)

**Example**:

```lua
world:newItem("grass_block", 64, 5)
```

---

### `newBlock(string,Vector3)` \{#newBlock}

Parses and create a new BlockState from the given string

A world position can be optionally given for the blockstate functions that relies on its position

Note: This doesn't create a block in the world, if you want to make a fake block you want [block tasks](../globals/Models/BlockTask)

**Example**:

```lua
world:newBlock("grass_block", player:getPos())
```

---

### `avatarVars()` \{#avatarVars}

Returns a table containing variables stored from all loaded Avatars "avatar:store()" function
The table will be indexed by the avatar's owner UUID

**Example**:

```lua
world:avatarVars()
```

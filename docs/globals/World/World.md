The world API is accessed through the <code>world</code> global. Like so: <code>world.getTime()</code>. Note how the world API uses a period (.) instead of a colon (:) like most other APIS.

---

### `exists()` {#exists}

Checks whether or not a world currently exists

This will almost always be true, but might be false on some occasions such as while traveling between dimensions

---

### `getPlayers()` {#getPlayers}

Returns a table containing instances of Player for all players in the world

The players are indexed by their names

---

### `getTime()` {#getTime}

Gets the current game time of the world

If delta is passed in, then it adds delta to the time

The default value of delta is zero

---

### `getTimeOfDay()` {#getTimeOfDay}

Gets the current day time of the world

If delta is passed in, then it adds delta to the time

The default value of delta is zero

---

### `getMoonPhase()` {#getMoonPhase}

Gets the current moon phase of the world, stored as an integer

---

### `getDimension()` {#getDimension}

Gets the dimension name of this world

---

### `getBiome(vec3)` {#getBiome}

Gets the Biome located at the given position

---

### `getEntity(string)` {#getEntity}

Returns an EntityAPI object from this UUID's entity, or nil if no entity was found

---

### `getBlockState(vec3)` {#getBlockState}

Gets the BlockState of the block at the given position

---

### `getStrongRedstonePower(vec3)` {#getStrongRedstonePower}

Gets the direct redstone power level of the block at the given position

---

### `getRedstonePower(vec3)` {#getRedstonePower}

Gets the redstone power level of the block at the given position

---

### `getSkyLightLevel(vec3)` {#getSkyLightLevel}

Gets the sky light level of the block at the given position

---

### `getBlockLightLevel(vec3)` {#getBlockLightLevel}

Gets the block light level of the block at the given position

---

### `getLightLevel(vec3)` {#getLightLevel}

Gets the overall light level of the block at the given position

---

### `isOpenSky(vec3)` {#isOpenSky}

Gets whether or not the sky is open at the given position

---

### `getRainGradient(delta)` {#getRainGradient}

Gets the current rain gradient in the world, interpolated from the previous tick to the current one

The default value of delta is 1, which is the current tick

---

### `isThundering()` {#isThundering}

Gets whether or not there is currently thunder/lightning happening in the world

---

### `getBuildHeight()` {#getBuildHeight}

Returns the minimum and maximum build height of the world, as varargs

---

### `getSpawnPoint()` {#getSpawnPoint}

Returns a vector with the coordinates of the world spawn

---

### `getBlocks(vec3,vec3)` {#getBlocks}

Gets a list of all BlockStates in the specified area

The maximum area size is 8 x 8 x 8

---

### `newItem(string,integer,integer)` {#newItem}

Parses and create a new ItemStack from the given string

A count and damage can be given, to be applied on this itemstack

---

### `newBlock(string,vec3)` {#newBlock}

Parses and create a new BlockState from the given string

A world position can be optionally given for the blockstate functions that relies on its position

---

### `avatarVars()` {#avatarVars}

Returns a table containing variables stored from all loaded Avatars "avatar:store()" function
The table will be indexed by the avatar's owner UUID

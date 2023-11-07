A proxy for a Minecraft biome

Instances are obtained through the WorldAPI

This proxy also contains a saved position for the Biome

For this page assume:

```lua
local biome = world.getBiome(player:getPos())
```

---

### `getPos()` \{#getPos}

Returns the saved position for this Biome's proxy

The saved position is used in Biome functions that require a position

**Example**:

```lua
biome:getPos()
```

---

### `setPos(Vector3)` \{#setPos}

Returns the saved position for this Biome's proxy

The saved position is used in Biome functions that require a position

**Example**:

```lua
biome:setPos(player:getPos())
```

---

### `getTags()` \{#getTags}

Gets the worldgen related tags from this Biome

**Example**:

```lua
biome:getTags()
```

---

### `getTemperature()` \{#getTemperature}

Gets the temperature of this biome

**Example**:

```lua
biome:getTemperature()
```

---

### `getWaterColor()` \{#getWaterColor}

Gets this biome's water color as a RGB vector

**Example**:

```lua
biome:getWaterColor()
```

---

### `getWaterFogColor()` \{#getWaterFogColor}

Gets this biome's water fog color as a RGB vector

**Example**:

```lua
biome:getWaterFogColor()
```

---

### `isHot()` \{#isHot}

Checks if this biome is hot

**Example**:

```lua
biome:isHot()
```

---

### `isCold()` \{#isCold}

Checks if this biome is cold

**Example**:

```lua
biome:isCold()
```

---

### `getPrecipitation()` \{#getPrecipitation}

Gets the rain type of this biome

The type can be "NONE", "RAIN" or "SNOW"

**Example**:

```lua
biome:getPrecipitation()
```

---

### `getDownfall()` \{#getDownfall}

Gets this biome's humidity

**Example**:

```lua
biome:getDownfall()
```

---

### `getSkyColor()` \{#getSkyColor}

Gets this biome's sky color as a RGB vector

**Example**:

```lua
biome:getSkyColor()
```

---

### `getFogColor()` \{#getFogColor}

Gets this biome's fog color as a RGB vector

**Example**:

```lua
biome:getFogColor()
```

---

### `getGrassColor()` \{#getGrassColor}

Gets this biome's grass color as a RGB vector

**Example**:

```lua
biome:getGrassColor()
```

---

### `getFoliageColor()` \{#getFoliageColor}

Gets this biome's foliage color as a RGB vector

**Example**:

```lua
biome:getFoliageColor()
```

---

### `id` \{#id}

The id of this biome

**Example**:

```lua
biome.id
```

---

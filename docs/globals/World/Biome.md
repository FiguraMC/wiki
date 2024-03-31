import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

A proxy for a Minecraft biome

Instances are obtained through the WorldAPI

This proxy also contains a saved position for the Biome

For this page assume:

```lua
local biome = world.getBiome(player:getPos())
```

---

## Weather

### <code>getDownfall()</code> \{#getDownfall}

Gets this biome's humidity

```lua
getDownfall()
```

**Returns:**

| Type                     | Description |
| ------------------------ | ----------- |
| <code>[Number](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getPrecipitation()</code> \{#getPrecipitation}

Gets the rain type of this biome

The type can be "NONE", "RAIN" or "SNOW"

```lua
getPrecipitation()
```

**Returns:**

| Type                     | Description |
| ------------------------ | ----------- |
| <code>[String](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTemperature()</code> \{#getTemperature}

Gets the temperature of this biome

```lua
getTemperature()
```

**Returns:**

| Type                     | Description |
| ------------------------ | ----------- |
| <code>[Number](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isCold()</code> \{#isCold}

Checks if this biome is cold

```lua
isCold()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Boolean](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isHot()</code> \{#isHot}

Checks if this biome is hot

```lua
isHot()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Boolean](#)</code> | -           |

**Example:**

```lua
--todo
```

---

## Biome Colors

### <code>getFogColor()</code> \{#getFogColor}

Gets this biome's fog color as an RGB vector

```lua
getFogColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getFoliageColor()</code> \{#getFoliageColor}

Gets this biome's foliage color as an RGB vector

```lua
getFoliageColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getGrassColor()</code> \{#getGrassColor}

Gets this biome's grass color as an RGB vector

```lua
getGrassColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getSkyColor()</code> \{#getSkyColor}

Gets this biome's sky color as an RGB vector

```lua
getSkyColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getWaterColor()</code> \{#getWaterColor}

Gets this biome's water color as an RGB vector

```lua
getWaterColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getWaterFogColor()</code> \{#getWaterFogColor}

Gets this biome's water fog color as an RGB vector

```lua
getWaterFogColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

## Biome Data

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Sets the saved position for this Biome's proxy

The saved position is used in Biome functions that require a position

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

| Type                                       | Description               |
| ------------------------------------------ | ------------------------- |
| <code>[Biome](/globals/World/Biome)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPos(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                       | Description               |
| ------------------------------------------ | ------------------------- |
| <code>[Biome](/globals/World/Biome)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getPos()</code> \{#getPos}

Returns the saved position for this Biome's proxy

The saved position is used in Biome functions that require a position

```lua
getPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTags()</code> \{#getTags}

Gets the worldgen related tags from this Biome

```lua
getTags()
```

**Returns:**

| Type                    | Description |
| ----------------------- | ----------- |
| <code>[Table](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>id</code> \{#id}

The id of this biome

**Example:**

```lua
--todo
```

---

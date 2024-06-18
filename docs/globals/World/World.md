---
sidebar_position: 1
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API dedicated to reading information from the Minecraft world.

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

The world API is accessed through the <code>world</code> global. Like so: <code>world.getTime()</code>.

:::info

The functions in the World API never receive `self` as a parameter. Because of this they should be called with a `.` instead of `:`

```lua
-- error-next-line
world:getBlockState(player:getPos())

-- highlight-next-line
world.getBlockState(player:getPos())
```

:::

---

## Enviroment

### <code>exists()</code> \{#exists}

Checks whether or not a world currently exists

This will almost always be true, but might be false on some occasions such as while traveling between dimensions

```lua
exists()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
world.exists()
```

---

### <code>getBiome()</code> \{#getBiome}

Gets the Biome located at the given position

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getBiome(pos)
```

**Parameters:**

| Name | Type                                             | Description                                   | Default  |
| ---- | ------------------------------------------------ | --------------------------------------------- | -------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | The position in the world to get the biome of | Required |

**Returns:**

| Type                                       | Description                 |
| ------------------------------------------ | --------------------------- |
| <code>[Biome](/globals/World/Biome)</code> | Biome of the given position |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getBiome(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description                                           | Default  |
| ---- | ----------------------------------------------- | ----------------------------------------------------- | -------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | The x world position in the world to get the biome of | Required |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | The y world position in the world to get the biome of | Required |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | The z world position in the world to get the biome of | Required |

**Returns:**

| Type                                       | Description                 |
| ------------------------------------------ | --------------------------- |
| <code>[Biome](/globals/World/Biome)</code> | Biome of the given position |

</TabItem>
</Tabs>

**Example:**

```lua
world.getBiome(player:getPos())
```

---

### <code>getBuildHeight()</code> \{#getBuildHeight}

Returns the minimum and maximum build height of the world, as multiple results

```lua
getBuildHeight()
```

**Returns:**

| Type                                             | Description          |
| ------------------------------------------------ | -------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | Minimum build height |
| <code>[Integer](/tutorials/types/Numbers)</code> | Maximum build height |

**Example:**

```lua
local min, max = world.getBuildHeight()
```

---

### <code>getDimension()</code> \{#getDimension}

Gets the dimension name of this world

```lua
getDimension()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
world.getDimension()
```

---

### <code>getHeight()</code> \{#getHeight}

Returns the highest point at the given position according to the provided heightmap

Defaults to MOTION_BLOCKING if no heightmap is provided

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getHeight(pos, heightmap)
```

**Parameters:**

| Name      | Type                                             | Description | Default |
| --------- | ------------------------------------------------ | ----------- | ------- |
| pos       | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |
| heightmap | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getHeight(x, z, heightmap)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| x         | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z         | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| heightmap | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getHeight(player:getPos().xz)
```

---

### <code>getSpawnPoint()</code> \{#getSpawnPoint}

Returns a vector with the coordinates of the world spawn

```lua
getSpawnPoint()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
world.getSpawnPoint()
```

---

### <code>isChunkLoaded()</code> \{#isChunkLoaded}

Checks if the position has a chunk loaded

If you need to access the block, it's usually more efficient to use `getBlockState()`

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
isChunkLoaded(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
isChunkLoaded(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.isChunkLoaded(player:getPos())
```

---

### <code>isOpenSky()</code> \{#isOpenSky}

Gets whether or not the sky is open at the given position

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
isOpenSky(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
isOpenSky(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.isOpenSky(player:getPos())
```

---

## Blocks and Items

### <code>getBlockState()</code> \{#getBlockState}

Gets the BlockState of the block at the given position

If it is not loaded, returns void_air

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getBlockState(pos)
```

**Parameters:**

| Name | Type                                             | Description                                                     | Default  |
| ---- | ------------------------------------------------ | --------------------------------------------------------------- | -------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | The position of a block in the world to get the `BlockState` of | Required |

**Returns:**

| Type                                                 | Description                        |
| ---------------------------------------------------- | ---------------------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | `BlockState` of the given position |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getBlockState(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description                                                       | Default  |
| ---- | ----------------------------------------------- | ----------------------------------------------------------------- | -------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | The x position of a block in the world to get the `BlockState` of | Required |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | The y position of a block in the world to get the `BlockState` of | Required |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | The z position of a block in the world to get the `BlockState` of | Required |

**Returns:**

| Type                                                 | Description                        |
| ---------------------------------------------------- | ---------------------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | `BlockState` of the given position |

</TabItem>
</Tabs>

**Example:**

```lua
world.getBlockState(player:getPos())
```

---

### <code>getBlocks()</code> \{#getBlocks}

Gets a list of all BlockStates in the specified area

The maximum area size is 8 x 8 x 8

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getBlocks(min, max)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| min  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| max  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getBlocks(minX, minY, minZ, max)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| minX | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| minY | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| minZ | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| max  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
getBlocks(min, maxX, maxY, maxZ)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| min  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| maxX | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| maxY | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| maxZ | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
<TabItem value="overload-4" label="Overload 4">

```lua
getBlocks(minX, minY, minZ, maxX, maxY, maxZ)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| minX | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| minY | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| minZ | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxX | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxY | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxZ | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
local pos = player:getPos()
local min = pos - vec(4, 4, 4)
local max = pos + vec(4, 4, 4)
-- highlight-next-line
local blocks = world.getBlocks(min, max)
```

---

### <code>newBlock()</code> \{#newBlock}

Parses and creates a new BlockState from the given string

A world position can be optionally given for the blockstate functions that rely on its position

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
newBlock(block)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| block | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                 | Description |
| ---------------------------------------------------- | ----------- |
| <code>[BlockState](/globals/World/BlockState)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
newBlock(block, pos)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| block | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| pos   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                                 | Description |
| ---------------------------------------------------- | ----------- |
| <code>[BlockState](/globals/World/BlockState)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
newBlock(block, x, y, z)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| block | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| x     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                 | Description |
| ---------------------------------------------------- | ----------- |
| <code>[BlockState](/globals/World/BlockState)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.newBlock("minecraft:dirt")
```

---

### <code>newItem()</code> \{#newItem}

Parses and creates a new ItemStack from the given string

A count and damage can be given, to be applied on this itemstack

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
newItem(item)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| item | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
newItem(item, count)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| item  | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| count | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
newItem(item, count, damage)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| item   | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| count  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| damage | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.newItem("grass_block", 64, 5)
```

---

## Entities

### <code>avatarVars()</code> \{#avatarVars}

Returns a table containing variables stored from all loaded Avatars "avatar:store()" function

The table will be indexed by the avatar's owner UUID

```lua
avatarVars()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
world.avatarVars()
```

---

### <code>getEntity()</code> \{#getEntity}

Returns an EntityAPI object from this UUID's entity, or nil if no entity was found

```lua
getEntity(UUID)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| UUID | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**Example:**

```lua
world.getEntity("5003b2ce-7a8d-4c56-8b91-ec705985fe08")
```

---

### <code>getPlayers()</code> \{#getPlayers}

Returns a table containing instances of Player for all players in the world

The players are indexed by their names

```lua
getPlayers()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
for _, value in pairs(world.getPlayers()) do
    log(value)
end
```

---

## Time

### <code>getDay()</code> \{#getDay}

Gets the current day

If delta is passed in, then it adds delta to the time

The default value of delta is zero

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getDay()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getDay(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getDay()
```

---

### <code>getDayTime()</code> \{#getDayTime}

Gets the time of the current day between 0 and 24000

If delta is passed in, then it adds delta to the time

The default value of delta is zero

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getDayTime()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getDayTime(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getDayTime()
```

---

### <code>getMoonPhase()</code> \{#getMoonPhase}

Gets the current moon phase of the world, stored as an integer

```lua
getMoonPhase()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
world.getMoonPhase()
```

---

### <code>getTime()</code> \{#getTime}

Gets the current game time of the world

If delta is passed in, then it adds delta to the time

The default value of delta is zero

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getTime()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getTime(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getTime()
```

---

### <code>getTimeOfDay()</code> \{#getTimeOfDay}

Gets the current day time of the world

If delta is passed in, then it adds delta to the time

The default value of delta is zero

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getTimeOfDay()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getTimeOfDay(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getTimeOfDay()
```

---

## Light

### <code>getBlockLightLevel()</code> \{#getBlockLightLevel}

Gets the block light level of the block at the given position.
Read more about block light on the [Minecraft Wiki](https://minecraft.wiki/w/Light#Block_light).

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getBlockLightLevel(pos)
```

**Parameters:**

| Name | Type                                             | Description                                               | Default  |
| ---- | ------------------------------------------------ | --------------------------------------------------------- | -------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | The position in the world to get the block light level of | Required |

**Returns:**

| Type                                             | Description            |
| ------------------------------------------------ | ---------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | The light level (0-15) |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getBlockLightLevel(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description                                                 | Default  |
| ---- | ----------------------------------------------- | ----------------------------------------------------------- | -------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | The x position in the world to get the block light level of | Required |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | The y position in the world to get the block light level of | Required |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | The z position in the world to get the block light level of | Required |

**Returns:**

| Type                                             | Description            |
| ------------------------------------------------ | ---------------------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | The light level (0-15) |

</TabItem>
</Tabs>

**Example:**

```lua
world.getBlockLightLevel(player:getPos())
```

---

### <code>getLightLevel()</code> \{#getLightLevel}

Gets the overall light level of the block at the given position

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getLightLevel(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getLightLevel(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getLightLevel(player:getPos())
```

---

### <code>getSkyLightLevel()</code> \{#getSkyLightLevel}

Gets the skylight level of the block at the given position

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getSkyLightLevel(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getSkyLightLevel(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getSkyLightLevel(player:getPos())
```

---

## Weather

### <code>getRainGradient()</code> \{#getRainGradient}

Gets the current rain gradient in the world, interpolated from the previous tick to the current one

The default value of delta is 1, which is the current tick

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getRainGradient()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getRainGradient(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getRainGradient()
```

---

### <code>isThundering()</code> \{#isThundering}

Gets whether or not there is currently thunder/lightning happening in the world

```lua
isThundering()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
world.isThundering()
```

---

## Redstone

### <code>getRedstonePower()</code> \{#getRedstonePower}

Gets the redstone power level of the block at the given position

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getRedstonePower(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getRedstonePower(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getRedstonePower(player:getPos())
```

---

### <code>getStrongRedstonePower()</code> \{#getStrongRedstonePower}

Gets the direct redstone power level of the block at the given position

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
getStrongRedstonePower(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getStrongRedstonePower(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
world.getStrongRedstonePower(player:getPos())
```

---

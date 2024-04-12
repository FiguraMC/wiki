import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A task for rendering a single Sprite from [newSprite](.#newSprite)

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

For this entire page assume:

```lua
local mySprite = models:newSprite("myCoolSpritesName")
```

---

## Sprite Task

### <code>setTexture()</code> \{#setTexture}

**Aliases:** `texture()`

Sets this task's texture

The texture's width and height must be provided if the texture is a location

For custom textures, the dimensions are optional

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setTexture(textureLocation, width, height)
```

**Parameters:**

| Name            | Type                                             | Description | Default |
| --------------- | ------------------------------------------------ | ----------- | ------- |
| textureLocation | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| width           | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height          | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setTexture(texture)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setTexture(texture, width, height)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setTexture(textureLocation, dimensions)
```

**Parameters:**

| Name            | Type                                             | Description | Default |
| --------------- | ------------------------------------------------ | ----------- | ------- |
| textureLocation | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| dimensions      | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-5" label="Overload 5">

```lua
setTexture(texture, dimensions)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| texture    | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| dimensions | <code>[Vector2](/globals/Vectors/Vector2)</code>  | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- using a resource location
mySprite:setTexture("textures/item/turtle_egg.png", 16, 16)

-- using a custom texture
mySprite:setTexture(textures["myTexture"])

-- using a custom texture with dimensions
mySprite:setTexture(textures["myTexture"], 16, 16)
```

---

### <code>getTexture()</code> \{#getTexture}

Returns this task's current texture

```lua
getTexture()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
mySprite:getTexture()
```

---

### <code>setColor()</code> \{#setColor}

**Aliases:** `color()`

Sets a color multiplier for this sprite

Values are RGBA from 0 to 1

Default values are 1, alpha is optional

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setColor(rgb)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setColor(rgba)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setColor(r, g, b, a)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
mySprite:setColor(world.getBiome():getWaterColor())
```

---

### <code>getColor()</code> \{#getColor}

Gets the current color multiplier of this sprite

Values are RGBA from 0 to 1

```lua
getColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**Example:**

```lua
mySprite:getColor()
```

---

### <code>setDimensions()</code> \{#setDimensions}

**Aliases:** `dimensions()`

Sets the texture dimensions, used in UV calculation

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setDimensions(dimensions)
```

**Parameters:**

| Name       | Type                                             | Description | Default |
| ---------- | ------------------------------------------------ | ----------- | ------- |
| dimensions | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setDimensions(width, height)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- use the long water_flow texture then make it one block
mySprite:setTexture("textures/block/water_flow.png", 16, 16)
-- highlight-next-line
mySprite:setDimensions(32, 1024)
```

---

### <code>getDimensions()</code> \{#getDimensions}

Returns the texture dimensions, used in UV calculation

```lua
getDimensions()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
mySprite:getDimensions()
```

---

### <code>setRegion()</code> \{#setRegion}

**Aliases:** `region()`

Sets the texture UV region

Uses its dimensions to calculate the max UV

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setRegion(region)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| region | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setRegion(width, height)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
mySprite:setRegion(64, 64)
```

---

### <code>getRegion()</code> \{#getRegion}

Gets the texture UV region

```lua
getRegion()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
mySprite:getRegion()
```

---

### <code>setRenderType()</code> \{#setRenderType}

**Aliases:** `renderType()`

Sets the current render type of this sprite

TRANSLUCENT by default

Check the docs enum command for all render types

```lua
setRenderType(renderType)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| renderType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

**Example:**

```lua
mySprite:setRenderType("CUTOUT")
```

---

### <code>getRenderType()</code> \{#getRenderType}

Gets the name of the current render type for this sprite

```lua
getRenderType()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
mySprite:getRenderType()
```

---

### <code>setSize()</code> \{#setSize}

**Aliases:** `size()`

Sets the width and height used to render this sprite

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setSize(size)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| size | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setSize(width, height)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- make my small egg bigger
mySprite:setTexture("textures/item/turtle_egg.png", 8, 8)
mySprite:setSize(16, 16)
```

---

### <code>getSize()</code> \{#getSize}

Returns the width and height used to render this sprite

```lua
getSize()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
mySprite:getSize()
```

---

### <code>setUV()</code> \{#setUV}

**Aliases:** `uv()`

Sets this texture UV offset

The Region and Dimension are used to calculate the end UV

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setUV(uv)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| uv   | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setUV(u, v)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| u    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Let's make a sprite task of flowing water!
mySprite:setTexture("textures/block/water_flow.png", 16, 16)
mySprite:setDimensions(32, 1024)
mySprite:setColor(world.getBiome():getWaterColor())

local t = 0

function events.tick()
    -- highlight-next-line
    mySprite:setUV(1, t / 32)
    t = t + 1
end
```

---

### <code>getUV()</code> \{#getUV}

Gets this texture UV offset

```lua
getUV()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
mySprite:getUV()
```

---

### <code>setUVPixels()</code> \{#setUVPixels}

**Aliases:** `uvPixels()`

Set this texture UV offset, in pixels, based on the texture's dimension

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setUVPixels(uv)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| uv   | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setUVPixels(u, v)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| u    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Let's make a sprite task of flowing water!
mySprite:setTexture("textures/block/water_flow.png", 16, 16)
mySprite:setDimensions(32, 1024)
mySprite:setColor(world.getBiome():getWaterColor())

local t = 0

function events.tick()
    -- highlight-next-line
    mySprite:setUVPixels(1, t)
    t = t - 1
end
```

---

### <code>getUVPixels()</code> \{#getUVPixels}

Get this texture UV offset, in pixels, based on the texture's dimension

```lua
getUVPixels()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
mySprite:getUVPixels()
```

---

### <code>getVertices()</code> \{#getVertices}

Returns a table with all 4 vertices of this sprite

Changing the values through other functions will reset those vertices

```lua
getVertices()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
mySprite:getVertices()
```

---

## Render Task

### <code>setLight()</code> \{#setLight}

**Aliases:** `light()`

Sets the light override value of this task

Values are given from 0 to 15, indicating the block light and sky light levels you want to use

Passing nil will reset the lighting override for this task

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setLight(light)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| light | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setLight(blockLight, skyLight)
```

**Parameters:**

| Name       | Type                                             | Description | Default |
| ---------- | ------------------------------------------------ | ----------- | ------- |
| blockLight | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| skyLight   | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
mySprite:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

Returns the light override value of this task

```lua
getLight()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
mySprite:getLight()
```

---

### <code>setMatrix()</code> \{#setMatrix}

**Aliases:** `matrix()`

Sets the given matrix as the position matrix for this render task

The normal matrix is automatically calculated as the inverse transpose of this matrix

Calling this DOES NOT CHANGE the values of position, rot, or scale in the render task

If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

```lua
setMatrix(matrix)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**Example:**

```lua
mySprite:setMatrix(matrices.mat4())
```

---

### <code>getName()</code> \{#getName}

Get this task's name

```lua
getName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
mySprite:getName()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

Recalculates the normal matrix for this render task, based on its current position, rotation, scale, and pivot, then returns this matrix

```lua
getNormalMatrix()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
mySprite:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this render task

The Raw version of the function is different in that it doesn't recalculate the matrix before returning it

```lua
getNormalMatrixRaw()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
mySprite:getNormalMatrixRaw()
```

---

### <code>setOverlay()</code> \{#setOverlay}

**Aliases:** `overlay()`

Sets the overlay override value of this task

Values you give are 0 to 15, indicating the white overlay and the damage overlay levels you want to use

Passing nil will reset the overlay override for this task

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setOverlay(overlay)
```

**Parameters:**

| Name    | Type                                             | Description | Default |
| ------- | ------------------------------------------------ | ----------- | ------- |
| overlay | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setOverlay(whiteOverlay, hurtOverlay)
```

**Parameters:**

| Name         | Type                                             | Description | Default |
| ------------ | ------------------------------------------------ | ----------- | ------- |
| whiteOverlay | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| hurtOverlay  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
local hurt = player:getNbt.HurtTime > 0
mySprite:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

Returns the overlay override value of this task

```lua
getOverlay()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
mySprite:getOverlay()
```

---

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Sets the position of the task, relative to its attached part

Uses model coordinates

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

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

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

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
mySprite:setPos(0, 16, 0)
```

---

### <code>getPos()</code> \{#getPos}

Gets this task position

```lua
getPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
mySprite:getPos()
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

Recalculates the matrix for this render task, based on its current position, rotation, scale, and pivot, then returns this matrix

```lua
getPositionMatrix()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
mySprite:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

Returns the position matrix for this render task

The Raw version of the function is different in that it doesn't recalculate the matrix before getting it

```lua
getPositionMatrixRaw()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
mySprite:getPositionMatrixRaw()
```

---

### <code>setRot()</code> \{#setRot}

**Aliases:** `rot()`

Sets the rotation of the task, relative to its attached part

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setRot(rot)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setRot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
mySprite:setRot(0, 45, 22.5)
```

---

### <code>getRot()</code> \{#getRot}

Gets this task rotation

```lua
getRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
mySprite:getRot()
```

---

### <code>setScale()</code> \{#setScale}

**Aliases:** `scale()`

Sets the scale of the task, relative to its attached part

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setScale(scale)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| scale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setScale(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
mySprite:setScale(0.4, 0.4, 0.4) -- mySprite:setScale(0.4) also works
```

---

### <code>getScale()</code> \{#getScale}

Gets this task scale

```lua
getScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
mySprite:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**Aliases:** `visible()`

Sets whether or not this task should be rendered

```lua
setVisible(visible)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**Example:**

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    mySprite:setVisible(state)
end)
```

---

### <code>isVisible()</code> \{#isVisible}

Checks if this task is visible

```lua
isVisible()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
if mySprite:isVisible() then
    -- do something
end
```

---

### <code>remove()</code> \{#remove}

Removes this render task from the parent model part

```lua
remove()
```

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**Example:**

```lua
mySprite:remove()
```

---

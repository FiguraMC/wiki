A task for rendering a single Sprite from [newSprite](.#newSprite)

For this entire page assume:

```lua
local mySprite = models:newSprite("myCoolSpritesName")
```

---

### <code>setTexture(texture: [Texture](../Textures/Texture) | string, width: number?, height: number?): [SpriteTask](./SpriteTask)</code> \{#setTexture}

Sets this task's texture
The texture dimensions, Width and Height, must be provided if the texture is a location
For custom textures, the dimensions are optional

**Parameters**

| Name    | Type                                        | Description                                                    |
| ------- | ------------------------------------------- | -------------------------------------------------------------- |
| texture | <code>[Texture](../Textures/Texture)</code> | Either a custom texture or a resource location.                |
| width   | number?                                     | Width of the texture in pixels. Optional for custom textures.  |
| height  | number?                                     | Height of the texture in pixels. Optional for custom textures. |

**Returns**

| Name       | Type                                    | Description                                                      |
| ---------- | --------------------------------------- | ---------------------------------------------------------------- |
| spriteTask | <code>[SpriteTask](./SpriteTask)</code> | The SpriteTask you called this function on to allow for chaining |

**Example**:

```lua
-- using a resource location
mySprite:setTexture("textures/item/turtle_egg.png", 16, 16)

-- using a custom texture
mySprite:setTexture(textures["myTexture"])

-- using a custom texture with dimensions
mySprite:setTexture(textures["myTexture"], 16, 16)
```

---

### <code>getTexture(): [Texture](../Textures/Texture)</code> \{#getTexture}

Returns this task's current texture

**Example**:

```lua
mySprite:getTexture()
```

---

### <code>setDimensions(dimensions: [Vector2](../Vectors/Vector2)): [SpriteTask](./SpriteTask)</code> \{#setDimensions}

Sets the texture dimensions, used in UV calculation. Accepts a `Vector2` of dimension values or a number per value.

**Example**:

```lua
-- use the long water_flow texture then make it one block
mySprite:setTexture("textures/block/water_flow.png", 16, 16)
-- highlight-next-line
mySprite:setDimensions(32, 1024)
```

---

### <code>getDimensions(): [Vector2](../Vectors/Vector2)</code> \{#getDimensions}

Returns the texture dimensions, used in UV calculation

**Example**:

```lua
mySprite:getDimensions()
```

---

### <code>setSize(size: [Vector2](../Vectors/Vector2)): [SpriteTask](./SpriteTask)</code> \{#setSize}

Sets the width and height used to render this sprite. Accepts a `Vector2` of size values or a number per value.

**Example**:

```lua
-- make my small egg bigger
mySprite:setTexture("textures/item/turtle_egg.png", 8, 8)
mySprite:setSize(16, 16)
```

---

### <code>getSize(): [Vector2](../Vectors/Vector2)</code> \{#getSize}

Returns the width and height used to render this sprite

**Example**:

```lua
mySprite:getSize()
```

---

### <code>setRegion(region: [Vector2](../Vectors/Vector2)): [SpriteTask](./SpriteTask)</code> \{#setRegion}

Sets the texture UV region. Accepts a `Vector2` of region values or a number per value. Uses its dimensions to calculate the max UV.

**Example**:

```lua
mySprite:setRegion(64, 64)
```

---

### <code>getRegion(): [Vector2](../Vectors/Vector2)</code> \{#getRegion}

Gets the texture UV region

**Example**:

```lua
mySprite:getRegion()
```

---

### <code>setUV(uv: [Vector2](../Vectors/Vector2)): [SpriteTask](./SpriteTask)</code> \{#setUV}

Sets this texture UV offset. Accepts a `Vector2` of UV values or a number per value. The Region and Dimension are used to calculate the end UV.

**Example**:

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

### <code>getUV(): [Vector2](../Vectors/Vector2)</code> \{#getUV}

Gets this texture UV offset

**Example**:

```lua
mySprite:getUV()
```

---

### <code>setUVPixels(uv: [Vector2](../Vectors/Vector2)): [SpriteTask](./SpriteTask)</code> \{#setUVPixels}

Set this texture UV offset, in pixels, based on the texture's dimension. Accepts a `Vector2` of UV values or a number per value.

**Example**:

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

### <code>getUVPixels(): [Vector2](../Vectors/Vector2)</code> \{#getUVPixels}

Get this texture UV offset, in pixels, based on the texture's dimension

**Example**:

```lua
mySprite:getUVPixels()
```

---

### <code>setColor(rgba: [Vector4](../Vectors/Vector4)): [SpriteTask](./SpriteTask)</code> \{#setColor}

Sets a color multiplier for this sprite. Values are RGBA from 0 to 1. Default values are 1, alpha is optional. Takes a `Vector4` of rgba values or a number per value.

**Example**:

```lua
mySprite:setColor(world.getBiome():getWaterColor())
```

---

### <code>getColor(): [Vector4](../Vectors/Vector4)</code> \{#getColor}

Gets the current color multiplier of this sprite
Values are RGBA from 0 to 1

**Example**:

```lua
mySprite:getColor()
```

---

### <code>setRenderType(renderType: [RenderType](../../enums/RenderTypes)): [SpriteTask](./SpriteTask)</code> \{#setRenderType}

Sets the current render type of this sprite
TRANSLUCENT by default
Check the docs enum command for all render types

**Example**:

```lua
mySprite:setRenderType("CUTOUT")
```

---

### <code>getRenderType(): [RenderType](../../enums/RenderTypes)</code> \{#getRenderType}

Gets the name of the current render type for this sprite

**Example**:

```lua
mySprite:getRenderType()
```

---

### <code>getVertices(): [Vertex](./Vertex)[]</code> \{#getVertices}

Returns a table with all 4 vertices of this sprite
Changing the values through other functions will reset those vertices

**Example**:

```lua
mySprite:getVertices()
```

---

### <code>remove(): [SpriteTask](./SpriteTask)</code> \{#remove}

Removes this sprite task from the parent model part

**Example**:

```lua
mySprite:remove()
```

---

### <code>getName(): string</code> \{#getName}

Get this task's name

**Example**:

```lua
mySprite:getName()
```

---

### <code>setVisible(state: boolean): [SpriteTask](./SpriteTask)</code> \{#setVisible}

Sets whether or not this task should be rendered

**Example**:

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    mySprite:setVisible(state)
end)
```

---

### <code>isVisible(): boolean</code> \{#isVisible}

Checks if this task is visible

**Example**:

```lua
if mySprite:isVisible() then
    -- do something
end
```

---

### <code>setLight(blockLight: number?, skyLight: number?): [SpriteTask](./SpriteTask)</code> \{#setLight}

Sets the light override value of this task
Values are given from 0 to 15, indicating the block light and sky light levels you want to use
Passing nil will reset the lighting override for this task

**Example**:

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
mySprite:setLight(blockLight, skyLight)
```

---

### <code>getLight(): [Vector2](../Vectors/Vector2)</code> \{#getLight}

Returns the light override value of this task

**Example**:

```lua
mySprite:getLight()
```

---

### <code>setOverlay(whiteOverlay: number?, hurtOverlay: number?): [SpriteTask](./SpriteTask)</code> \{#setOverlay}

Sets the overlay override value of this task
Values you give are 0 to 15, indicating the white overlay and the damage overlay levels you want to use
Passing nil will reset the overlay override for this task

**Example**:

```lua
local hurt = player:getNbt.HurtTime > 0
mySprite:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay(): [Vector2](../Vectors/Vector2)</code> \{#getOverlay}

Returns the overlay override value of this task

**Example**:

```lua
mySprite:getOverlay()
```

---

### <code>setPos(pos: [Vector3](../Vectors/Vector3)): [SpriteTask](./SpriteTask)</code> \{#setPos}

Sets the position of the task, relative with its attached part
Uses model coordinates

**Example**:

```lua
mySprite:setPos(0, 16, 0)
```

---

### <code>getPos(): [Vector3](../Vectors/Vector3)</code> \{#getPos}

Gets this task position

**Example**:

```lua
mySprite:getPos()
```

---

### <code>setRot(rot: [Vector3](../Vectors/Vector3)): [SpriteTask](./SpriteTask)</code> \{#setRot}

Sets the rotation of the task, relative with its attached part

**Example**:

```lua
mySprite:setRot(0, 45, 22.5)
```

---

### <code>getRot(): [Vector3](../Vectors/Vector3)</code> \{#getRot}

Gets this task rotation

**Example**:

```lua
mySprite:getRot()
```

---

### <code>setScale(scale: [Vector3](../Vectors/Vector3)): [SpriteTask](./SpriteTask)</code> \{#setScale}

Sets the scale of the task, relative with its attached part

**Example**:

```lua
mySprite:setScale(0.4, 0.4, 0.4) -- mySprite:setScale(0.4) also works
```

---

### <code>getScale(): [SpriteTask](./SpriteTask)</code> \{#getScale}

Gets this task scale

**Example**:

```lua
mySprite:getScale()
```

---

### <code>setMatrix(matrix: [Matrix4](../Matrices/Matrix4)): [SpriteTask](./SpriteTask)</code> \{#setMatrix}

Sets the given matrix as the position matrix for this sprite task
The normal matrix is automatically calculated as the inverse transpose of this matrix
Calling this DOES NOT CHANGE the values of position, rot, or scale in the sprite task
If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

**Example**:

```lua
mySprite:setMatrix(matrices.mat4())
```

---

### <code>getPositionMatrix(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrix}

Recalculates the matrix for this sprite task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
mySprite:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrixRaw}

Returns the position matrix for this sprite task
The Raw version of the function is different in that it doesn't recalculate the matrix before getting it

**Example**:

```lua
mySprite:getPositionMatrixRaw()
```

---

### <code>getNormalMatrix(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrix}

Recalculates the normal matrix for this sprite task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
mySprite:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this sprite task
The Raw version of the function is different in that it doesn't recalculate the matrix before returning it

**Example**:

```lua
mySprite:getNormalMatrixRaw()
```

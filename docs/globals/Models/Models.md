---
sidebar_position: 1
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Represents a node in the model tree, basically a group/cube/mesh in Blockbench

Each bbmodel file is itself a ModelPart, and all of your models are contained in a global ModelPart called `models`

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

## Transformations

### <code>setVisible()</code> \{#setVisible}

**Aliases:** `visible()`

Sets this part to be visible or invisible

The default value is nil, meaning the part copies its visibility from its parent part

```lua
setVisible(visible)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:setVisible(false)
```

---

### <code>getVisible()</code> \{#getVisible}

Gets whether or not this model part is visible

The default value is nil, meaning it copies the visibility of its parent part during rendering

```lua
getVisible()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
models:getVisible()
```

---

### <code>setRot()</code> \{#setRot}

**Aliases:** `rot()`

Sets the absolute rotation for this part

Nil values for rotation are assumed to be 0

Angles are given in degrees

For relative rotation values, check out the "offset" rot functions

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setRot(0, 90, 0)
```

---

### <code>getRot()</code> \{#getRot}

Gets the rotation of the model part, including its rotation in Blockbench

For relative rotation values, check out the "offset" rot functions

```lua
getRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:setRot()
```

---

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Sets the position offset for this part from its Blockbench position

Nil values for position are assumed to be 0

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setPos(0, 5, 0)
```

---

### <code>getPos()</code> \{#getPos}

Gets the position of the model part, as an offset from its position in Blockbench

Only changes from \{0,0,0} when you call setPos()

```lua
getPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getPos()
```

---

### <code>setScale()</code> \{#setScale}

**Aliases:** `scale()`

Sets the scale factor for this part

Nil values for scale are assumed to be 1

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setScale(2, 2, 2)
```

---

### <code>getScale()</code> \{#getScale}

Gets the scale of the model part, as a multiple of its Blockbench size

Only changes from \{1,1,1} when you call setScale()

```lua
getScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getScale()
```

---

### <code>setPivot()</code> \{#setPivot}

**Aliases:** `pivot()`

Sets the absolute pivot for this part

Nil values are assumed to be 0

For relative pivot offsets, check out the "offset" pivot functions

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setPivot(pivot)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| pivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPivot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setPivot(0, 5, 0)
```

---

### <code>getPivot()</code> \{#getPivot}

Gets the pivot point of the model part, including its pivot in Blockbench

For relative values, check out the "offset" pivot functions

```lua
getPivot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getPivot()
```

---

### <code>setOffsetRot()</code> \{#setOffsetRot}

**Aliases:** `offsetRot()`

Sets the rotation offset for this part

Nil values for rotation are assumed to be 0

Angles are given in degrees

For absolute rotation values, check out the non-offset rot functions

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setOffsetRot(offsetRot)
```

**Parameters:**

| Name      | Type                                             | Description | Default |
| --------- | ------------------------------------------------ | ----------- | ------- |
| offsetRot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setOffsetRot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setOffsetRot(0, 90, 0)
```

---

### <code>getOffsetRot()</code> \{#getOffsetRot}

Gets the rotation offset of the model part, offset from its rotation in Blockbench

For absolute rotation values, check out the non-offset rot functions

```lua
getOffsetRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getOffsetRot()
```

---

### <code>setOffsetScale()</code> \{#setOffsetScale}

**Aliases:** `offsetScale()`

Sets the scale offset for this part

Nil values are assumed to be 1

For absolute scale values, check out the non-offset rot functions

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setOffsetScale(offsetScale)
```

**Parameters:**

| Name        | Type                                             | Description | Default |
| ----------- | ------------------------------------------------ | ----------- | ------- |
| offsetScale | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setOffsetScale(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setOffsetScale(2, 2, 2)
```

---

### <code>getOffsetScale()</code> \{#getOffsetScale}

Gets the scale offset of the model part, offset from its default scale

For absolute scale values, check out the non-offset rot functions

```lua
getOffsetScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getOffsetScale()
```

---

### <code>setOffsetPivot()</code> \{#setOffsetPivot}

**Aliases:** `offsetPivot()`

Sets the pivot offset point for this part (multiplicative)

Nil values are assumed to be 0

For absolute pivot point values, check out the non-offset pivot functions

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setOffsetPivot(offsetPivot)
```

**Parameters:**

| Name        | Type                                             | Description | Default |
| ----------- | ------------------------------------------------ | ----------- | ------- |
| offsetPivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setOffsetPivot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setOffsetPivot(0, 5, 0)
```

---

### <code>getOffsetPivot()</code> \{#getOffsetPivot}

Gets the pivot offset of the model part, offset from its pivot in Blockbench

For absolute pivot point values, check out the non-offset pivot functions

```lua
getOffsetPivot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getOffsetPivot()
```

---

### <code>setMatrix()</code> \{#setMatrix}

**Aliases:** `matrix()`

Sets the given matrix as the position matrix for this model part

The normal matrix is automatically calculated as the inverse transpose of this matrix

Calling this DOES NOT CHANGE the values of position, rot, or scale in the model part

If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

```lua
setMatrix(matrix)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:setMatrix(matrices.mat4())
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

Recalculates the matrix for this model part, based on its current position, rotation, scale, and pivot, then returns this matrix

```lua
getPositionMatrix()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
models:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

Returns the position matrix for this model part

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
models:getPositionMatrixRaw()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

Recalculates the normal matrix for this model part, based on its current position, rotation, scale, and pivot, then returns this matrix

```lua
getNormalMatrix()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
models:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this model part

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
models:getNormalMatrixRaw()
```

---

## Part Information

### <code>getName()</code> \{#getName}

The name of this model part

```lua
getName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
models:getName()
```

---

### <code>getType()</code> \{#getType}

Returns whether this part is a "GROUP", a "CUBE", or a "MESH"

```lua
getType()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
models:getType()
```

---

### <code>getTrueRot()</code> \{#getTrueRot}

Gets the true rotation of this model part, which is a sum of the rotation, the offset rotation and the animation position

```lua
getTrueRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getTrueRot()
```

---

### <code>getTruePos()</code> \{#getTruePos}

Gets the true position of this model part, which is a sum of the position and the animation position

```lua
getTruePos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getTruePos()
```

---

### <code>getTrueScale()</code> \{#getTrueScale}

Gets the true scale of this model part, which is a sum of the scale, the offset scale and the animation scale

```lua
getTrueScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getTrueScale()
```

---

### <code>getTruePivot()</code> \{#getTruePivot}

Gets the true pivot of this model part, which is a sum of the pivot and the offset pivot

```lua
getTruePivot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getTruePivot()
```

---

### <code>partToWorldMatrix()</code> \{#partToWorldMatrix}

Gets a matrix which transforms a point from this part's position to a world location

Recommended to use this in POST_RENDER, as by then the matrix is updated

In RENDER it will be 1 frame behind the part's visual position for that frame

Also, if the model is not rendered in-world, the part's matrix will not be updated

Paperdoll rendering and other UI renderings will not affect this matrix

```lua
partToWorldMatrix()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
models:partToWorldMatrix():apply()
```

---

## Rendering

### <code>setPrimaryRenderType()</code> \{#setPrimaryRenderType}

**Aliases:** `primaryRenderType()`

Sets the current primary render type of this model part

Nil by default, meaning the part copies the primary render type of its parent during rendering

Check the docs enum command for all render types

```lua
setPrimaryRenderType(renderType)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| renderType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:setPrimaryRenderType("END_PORTAL")
```

---

### <code>getPrimaryRenderType()</code> \{#getPrimaryRenderType}

Gets the current primary render type of this model part

Nil by default, meaning the part copies the primary render type of its parent

```lua
getPrimaryRenderType()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
models:getPrimaryRenderType() == "TRANSLUCENT_CULL"
```

---

### <code>setSecondaryRenderType()</code> \{#setSecondaryRenderType}

**Aliases:** `secondaryRenderType()`

Sets the current secondary render type of this model part

Nil by default, meaning the part copies the secondary render type of its parent during rendering

Check the docs enum command for all render types

```lua
setSecondaryRenderType(renderType)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| renderType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:setSecondaryRenderType("GLINT")
```

---

### <code>getSecondaryRenderType()</code> \{#getSecondaryRenderType}

Gets the current secondary render type of this model part

Nil by default, meaning the part copies the secondary render type of its parent

```lua
getSecondaryRenderType()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
models:getSecondaryRenderType() == "LINES"
```

---

### <code>setOpacity()</code> \{#setOpacity}

**Aliases:** `opacity()`

Sets the opacity multiplier of this part

Note that opacity settings will only take effect if the part has a suitable Render Type for them, mainly TRANSLUCENT

Check out modelPart.setPrimaryRenderType() for how to do this

```lua
setOpacity(opacity)
```

**Parameters:**

| Name    | Type                                            | Description | Default |
| ------- | ----------------------------------------------- | ----------- | ------- |
| opacity | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:setOpacity(0.5)
```

---

### <code>getOpacity()</code> \{#getOpacity}

Gets the opacity multiplier of this part

Note that opacity settings will only take effect if the part has a suitable Render Type for them, mainly TRANSLUCENT

Check out modelPart.setPrimaryRenderType() for how to do this

```lua
getOpacity()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
models:getOpacity()
```

---

### <code>setLight()</code> \{#setLight}

**Aliases:** `light()`

Sets the light level to be used when rendering this part

Values you give are 0 to 15, indicating the block light and sky light levels you want to use

Passing nil will reset the lighting override for this part

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Example for mimicking vanilla lighting
local blockLight = world.getBlockLightLevel(player:getPos():add(0, .4, 0))
local skyLight = world.getSkyLightLevel(player:getPos():add(0, .4, 0))
models:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

Gets the light level you set earlier to this part

Does not interact with Minecraft's lighting system, only retrieving values you set earlier with setLight()

```lua
getLight()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
models:getOpacity()
```

---

### <code>setOverlay()</code> \{#setOverlay}

**Aliases:** `overlay()`

Sets the overlay color to be used when rendering this part

Values you give are 0 to 15, indicating the white overlay and the damage overlay levels you want to use

Passing nil will reset the overlay override for this part

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Example for a hurt overlay
local hurt = player:getNbt().HurtTime > 0
models:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

Gets the overlay color you set earlier to this part

Does not interact with Minecraft's overlay system, only retrieving values you set earlier with setOverlay()

```lua
getOverlay()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
models:getOverlay()
```

---

### <code>setColor()</code> \{#setColor}

**Aliases:** `color()`

Sets the color multiplier for this part for primary and secondary colors

Values are RGB from 0 to 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setColor(color)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getColor()</code> \{#getColor}

Returns the average set color from this part, as adding the primary color with the secondary, then dividing them

Values are RGB from 0 to 1

```lua
getColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getColor()
```

---

### <code>setPrimaryColor()</code> \{#setPrimaryColor}

**Aliases:** `primaryColor()`

Sets the primary color multiplier for this part

Values are RGB from 0 to 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setPrimaryColor(color)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPrimaryColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setPrimaryColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getPrimaryColor()</code> \{#getPrimaryColor}

Gets the primary color multiplier of this part

Values are RGB from 0 to 1

```lua
getPrimaryColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getPrimaryColor()
```

---

### <code>setSecondaryColor()</code> \{#setSecondaryColor}

**Aliases:** `secondaryColor()`

Sets the secondary color multiplier for this part

Values are RGB from 0 to 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setSecondaryColor(color)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setSecondaryColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setSecondaryColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getSecondaryColor()</code> \{#getSecondaryColor}

Gets the secondary color multiplier of this part

Values are RGB from 0 to 1

```lua
getSecondaryColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getSecondaryColor()
```

---

### <code>setPreRender()</code> \{#setPreRender}

Sets a function to run before this part starts being rendered

```lua
setPreRender(function)
```

**Parameters:**

| Name     | Type                                                | Description | Default |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:getAnimRot()
```

---

### <code>setMidRender()</code> \{#setMidRender}

Sets a function to run during the middle of this part's rendering, after its matrices are calculated

```lua
setMidRender(function)
```

**Parameters:**

| Name     | Type                                                | Description | Default |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:getAnimRot()
```

---

### <code>setPostRender()</code> \{#setPostRender}

Sets a function to run after this part and its children are rendered

```lua
setPostRender(function)
```

**Parameters:**

| Name     | Type                                                | Description | Default |
| -------- | --------------------------------------------------- | ----------- | ------- |
| function | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:getAnimRot()
```

---

## Animations

### <code>getAnimRot()</code> \{#getAnimRot}

Gets the rotation offset provided by the currently active animation of this model part

```lua
getAnimRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getAnimRot()
```

---

### <code>getAnimPos()</code> \{#getAnimPos}

Gets the position offset provided by the currently active animation of this model part

```lua
getAnimPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getAnimPos()
```

---

### <code>getAnimScale()</code> \{#getAnimScale}

Gets the scale multiplier provided by the currently active animation of this model part

```lua
getAnimScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
models:getAnimScale()
```

---

### <code>overrideVanillaRot()</code> \{#overrideVanillaRot}

Returns if this part vanilla rotation is being overridden by an animation

```lua
overrideVanillaRot()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
models:overrideVanillaRot()
```

---

### <code>overrideVanillaPos()</code> \{#overrideVanillaPos}

Returns if this part vanilla position is being overridden by an animation

```lua
overrideVanillaPos()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
models:overrideVanillaPos()
```

---

### <code>overrideVanillaScale()</code> \{#overrideVanillaScale}

Returns if this part vanilla scale is being overridden by an animation

```lua
overrideVanillaScale()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
models:overrideVanillaScale()
```

---

## Texturing

### <code>setPrimaryTexture()</code> \{#setPrimaryTexture}

**Aliases:** `primaryTexture()`

Sets the primary texture override of this part

Check the TextureType types in the list docs

If using "resource", the second parameter should indicate the path to the Minecraft texture you want to use

If using "custom", the second parameter should indicate a texture object

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setPrimaryTexture(textureType)
```

**Parameters:**

| Name        | Type                                            | Description | Default |
| ----------- | ----------------------------------------------- | ----------- | ------- |
| textureType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPrimaryTexture(resource, path)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| resource | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| path     | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setPrimaryTexture(custom, texture)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| custom  | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Vanilla Skin
models:setPrimaryTexture("Skin")
-- Custom Texture
models:setPrimaryTexture("Custom", textures["myTexture"])
-- Minecraft Resource
models:setPrimaryTexture("Resource", "textures/entity/pig/pig.png")
```

---

### <code>getPrimaryTexture()</code> \{#getPrimaryTexture}

Gets the primary texture of this part

Returns two values, first being the override type, second being the value, if any.

```lua
getPrimaryTexture()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Varargs](/tutorials/types/Varargs)</code> | -           |

**Example:**

```lua
models:getPrimaryTexture()
```

---

### <code>getPrimaryDefinedTextures()</code> \{#getPrimaryDefinedTextures}

Gets the primary textures of this part

Returns a table of each texture for the specified face.

```lua
getPrimaryDefinedTextures()
```

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua

```

---

### <code>setSecondaryTexture()</code> \{#setSecondaryTexture}

**Aliases:** `secondaryTexture()`

Sets the secondary texture override of this part

Check the TextureType types in the list docs

If using "resource", the second parameter should indicate the path to the Minecraft texture you want to use

If using "custom", the second parameter should indicate a texture object

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setSecondaryTexture(textureType)
```

**Parameters:**

| Name        | Type                                            | Description | Default |
| ----------- | ----------------------------------------------- | ----------- | ------- |
| textureType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setSecondaryTexture(resource, path)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| resource | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| path     | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setSecondaryTexture(custom, texture)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| custom  | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Vanilla Skin
models:setSecondaryTexture("Skin")
-- Custom Texture
models:setSecondaryTexture("Custom", textures["myTexture"])
-- Minecraft Resource
models:setSecondaryTexture("Resource", "textures/entity/pig/pig.png")
```

---

### <code>getSecondaryTexture()</code> \{#getSecondaryTexture}

Gets the secondary texture of this part

Returns two values, first being the override type, second being the value, if any.

```lua
getSecondaryTexture()
```

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua
models:getSecondaryTexture()
```

---

### <code>getSecondaryDefinedTextures()</code> \{#getSecondaryDefinedTextures}

Gets the secondary textures of this part

Returns a table of each texture for the specified face.

```lua
getSecondaryDefinedTextures()
```

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

**Example:**

```lua

```

---

### <code>getTextures()</code> \{#getTextures}

Returns a table with all textures used by this part

Does not include children textures, so groups usually will return an empty table

```lua
getTextures()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
models:getTextures()
```

---

### <code>getTextureSize()</code> \{#getTextureSize}

Gets the width, height of this part's texture in pixels

Throws an error if this part has multiple different-sized textures on it, or if the part is a Group

```lua
getTextureSize()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
models:getTextureSize()
```

---

### <code>setUV()</code> \{#setUV}

**Aliases:** `uv()`

Sets the UV of this part

This function is normalized, meaning it works with values 0 to 1

If you say setUV(0.5, 0.25), for example, it will scroll by half of your texture width to the right, and one-fourth of the texture width downwards

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setUV(0.5, 0.5)
```

---

### <code>getUV()</code> \{#getUV}

Gets the UV of this part

This function is normalized, meaning it will return values between 0 to 1

```lua
getUV()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
models:getUV()
```

---

### <code>setUVPixels()</code> \{#setUVPixels}

**Aliases:** `uvPixels()`

Sets the UV of this part in pixels

Automatically divides by the results of getTextureSize(), so you can just input the number of pixels you want the UV to scroll by

Errors if the part has multiple different-sized textures

If this part is a Group, it will attempt to setUVPixels on its children

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

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

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:setUVPixels(16.16)
```

---

### <code>getUVPixels()</code> \{#getUVPixels}

Gets the UV of this part

Automatically multiplies the result by getTextureSize()

Errors if the part has multiple different-sized textures of if the part is a Group

```lua
getUVPixels()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
models:getUVPixels()
```

---

### <code>setUVMatrix()</code> \{#setUVMatrix}

**Aliases:** `uvMatrix()`

Sets the UV matrix of this part

This matrix is applied to all UV points during the transform, with the UVs treated as homogeneous vectors

setUV() and setUVPixels() are just simpler ways of setting this matrix

```lua
setUVMatrix(matrix)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:setUVMatrix(matrices.mat3())
```

---

### <code>getUVMatrix()</code> \{#getUVMatrix}

Gets the UV matrix of this part

```lua
getUVMatrix()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
models:getUVMatrix()
```

---

## Render Tasks

### <code>newText()</code> \{#newText}

Adds a new Text Render Task on this part

```lua
newText(taskName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | -           |

**Example:**

```lua
models:newText("Example")
```

---

### <code>newEntity()</code> \{#newEntity}

Adds a new Entity Render Task on this part

```lua
newEntity(taskName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[EntityTask](/globals/Models/EntityTask)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>newItem()</code> \{#newItem}

Adds a new Item Render Task on this part

```lua
newItem(taskName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[ItemTask](/globals/Models/ItemTask)</code> | -           |

**Example:**

```lua
models:newItem("Example")
```

---

### <code>newBlock()</code> \{#newBlock}

Adds a new Block Render Task on this part

```lua
newBlock(taskName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[BlockTask](/globals/Models/BlockTask)</code> | -           |

**Example:**

```lua
models:newBlock("Example")
```

---

### <code>newSprite()</code> \{#newSprite}

Adds a new Sprite Render Task on this part

```lua
newSprite(taskName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[SpriteTask](/globals/Models/SpriteTask)</code> | -           |

**Example:**

```lua
models:newSprite("Example")
```

---

### <code>addTask()</code> \{#addTask}

Adds the given Render Task on this part

```lua
addTask(renderTask)
```

**Parameters:**

| Name       | Type                                                  | Description | Default |
| ---------- | ----------------------------------------------------- | ----------- | ------- |
| renderTask | <code>[RenderTask](/globals/Models/RenderTask)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTask()</code> \{#getTask}

Gets the Render Task with the given name from this part

Returns a table with all tasks if a name is not given

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getTask()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getTask(taskName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                  | Description |
| ----------------------------------------------------- | ----------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
models:getTask()
```

---

### <code>removeTask()</code> \{#removeTask}

Removes the Task with the given name from this part

Removes ALL tasks if a name is not given

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
removeTask()
```

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
removeTask(taskName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| taskName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
removeTask(renderTask)
```

**Parameters:**

| Name       | Type                                                  | Description | Default |
| ---------- | ----------------------------------------------------- | ----------- | ------- |
| renderTask | <code>[RenderTask](/globals/Models/RenderTask)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
models:removeTask()
```

---

## Misc

### <code>setParentType()</code> \{#setParentType}

**Aliases:** `parentType()`

Sets the parent type of the part

See the ParentType parts in the list docs for legal types

```lua
setParentType(parentType)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| parentType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:setParentType("Head")
```

---

### <code>getParentType()</code> \{#getParentType}

Returns the current parent type of the part

```lua
getParentType()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
models:getParentType()
```

---

### <code>getVertices()</code> \{#getVertices}

Return a table with all vertices from the given texture id

Returns nil if no vertices were found

```lua
getVertices(textureID)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| textureID | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
models:getVertices("myTexture")
```

---

### <code>getAllVertices()</code> \{#getAllVertices}

Return a table of all texture ids and their vertices

```lua
getAllVertices()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
models:getAllVertices()
```

---

### <code>getParent()</code> \{#getParent}

Gets the parent part of this part

If this part has no parent, returns nil

```lua
getParent()
```

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:getParentType()
```

---

### <code>remove()</code> \{#remove}

Removes this part from the parent model part

```lua
remove()
```

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getChildren()</code> \{#getChildren}

Gets the children of this part, stored in a table

```lua
getChildren()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
models:getChildren()
```

---

### <code>isChildOf()</code> \{#isChildOf}

Checks if this part is a child of the given part

```lua
isChildOf(part)
```

**Parameters:**

| Name | Type                                      | Description | Default |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
models:isChildOf(models)
```

---

### <code>moveTo()</code> \{#moveTo}

Moves this part to be a child of the given part

```lua
moveTo(part)
```

**Parameters:**

| Name | Type                                      | Description | Default |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
-- error-next-line
models:moveTo(models)
-- This is recursive
```

---

### <code>addChild()</code> \{#addChild}

Adds the given part into this part's children list

```lua
addChild(part)
```

**Parameters:**

| Name | Type                                      | Description | Default |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
-- error-next-line
models:addChild(models)
-- This is recursive
```

---

### <code>removeChild()</code> \{#removeChild}

Removes the given part from this part's children list

```lua
removeChild(part)
```

**Parameters:**

| Name | Type                                      | Description | Default |
| ---- | ----------------------------------------- | ----------- | ------- |
| part | <code>[ModelPart](/globals/Models)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
-- error-next-line
models:removeChild(models)
-- This is recursive
```

---

### <code>copy()</code> \{#copy}

Returns a copy of this part, with all customizations and vertices copied

Children parts are passed as reference, in a new list

```lua
copy(name)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

**Example:**

```lua
models:copy("Example")
```

---

### <code>newPart()</code> \{#newPart}

Creates a new, empty, group model part as a child of this part, at the same pivot point

Takes two arguments, the new part's name, and optionally its parent type

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
newPart(name)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
newPart(name, parentType)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| name       | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| parentType | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                      | Description               |
| ----------------------------------------- | ------------------------- |
| <code>[ModelPart](/globals/Models)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- Example with same parent type
models:newPart("Example")
-- Example with different parent type
models:newPart("Example", "Head")
```

---

## Fields

### <code>preRender</code> \{#preRender}

Function to run before this part starts being rendered

**Example:**

```lua
--todo
```

---

### <code>midRender</code> \{#midRender}

Function to run during the middle of this part's rendering, after its matrices are calculated

**Example:**

```lua
--todo
```

---

### <code>postRender</code> \{#postRender}

Function to run after this part and its children are rendered

**Example:**

```lua
--todo
```

---

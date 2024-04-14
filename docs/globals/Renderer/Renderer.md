import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

A global API providing functions that change the way Minecraft renders your player

---

## Altering the Camera

### <code>setCameraMatrix()</code> \{#setCameraMatrix}

**Aliases:** `cameraMatrix()`

Sets the camera matrix with the given matrix

```lua
setCameraMatrix(matrix)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
-- I hope you don't get dizzy
local t = 1

function events.tick()
    t = t + 1
end

function events.render(delta)
    local theta = 2 * math.pi * ((t + delta) / 20)
    local rotMat = matrices.mat4():rotateY(math.deg(theta))
    -- highlight-next-line
    renderer:setCameraMatrix(rotMat)
end
```

---

### <code>getCameraMatrix()</code> \{#getCameraMatrix}

Returns the modified camera matrix

```lua
getCameraMatrix()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
renderer:getCameraMatrix()
```

---

### <code>setCameraNormal()</code> \{#setCameraNormal}

**Aliases:** `cameraNormal()`

Sets the camera normal matrix with the given matrix

```lua
setCameraNormal(matrix)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| matrix | <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
local t = 0
local flipped = false

function events.tick()
    if t % 20 == 0 then
        flipped = not flipped
    end
    local rotMat = matrices.mat3():rotateY(flipped and 180 or 0)
    -- highlight-next-line
    renderer:setCameraNormal(rotMat)
    t = t + 1
end
```

---

### <code>getCameraNormal()</code> \{#getCameraNormal}

Returns the modified camera normal matrix

```lua
getCameraNormal()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
renderer:getCameraNormal()
```

---

### <code>getCameraOffsetPivot()</code> \{#getCameraOffsetPivot}

Gets the offset pivot for the camera

```lua
getCameraOffsetPivot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
renderer:getCameraOffsetPivot()
```

---

### <code>getCameraOffsetRot()</code> \{#getCameraOffsetRot}

Gets the offset rotation for the camera

```lua
getCameraOffsetRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
renderer:getCameraOffsetRot()
```

---

### <code>setCameraPivot()</code> \{#setCameraPivot}

**Aliases:** `cameraPivot()`

Sets the absolute pivot for the camera

The pivot will also move the camera

Its values are relative to the World

Nil values for pivot are assumed to be 0

For relative rotation values, check out the "offset" pivot function

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCameraPivot(pivot)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| pivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCameraPivot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
-- I wonder what's going on at spawn
renderer:setCameraPivot(0, 100, 0)
```

---

### <code>getCameraPivot()</code> \{#getCameraPivot}

Gets the absolute pivot for the camera

```lua
getCameraPivot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
renderer:getCameraPivot()
```

---

### <code>setCameraPos()</code> \{#setCameraPos}

**Aliases:** `cameraPos()`

Sets the position offset for the camera

Nil values for position are assumed to be 0

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCameraPos(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCameraPos(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setCameraPos(0, 2, 0)
```

---

### <code>getCameraPos()</code> \{#getCameraPos}

Gets the position offset for the camera

```lua
getCameraPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
renderer:getCameraPos()
```

---

### <code>setCameraRot()</code> \{#setCameraRot}

**Aliases:** `cameraRot()`

Sets the absolute rotation of the camera

The position is not taken into account for roll

Nil values for rotation are assumed to be 0

For relative rotation values, check out the "offset" rot function

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCameraRot(rot)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCameraRot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setCameraRot(0, 90, 0)
```

---

### <code>getCameraRot()</code> \{#getCameraRot}

Gets the absolute rotation of the camera

```lua
getCameraRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
renderer:getCameraRot()
```

---

### <code>setOffsetCameraPivot()</code> \{#setOffsetCameraPivot}

**Aliases:** `offsetCameraPivot()`

Sets the offset pivot for the camera

The pivot will also move the camera

Its values are relative to the world

Nil values for pivot are assumed to be 0

For relative rotation values, check out the non-offset pivot function

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setOffsetCameraPivot(pivot)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| pivot | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setOffsetCameraPivot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setOffsetCameraPivot(0, 2, 0)
```

---

### <code>setOffsetCameraRot()</code> \{#setOffsetCameraRot}

**Aliases:** `offsetCameraRot()`

Sets the offset rotation for the camera

Nil values for rotation are assumed to be 0

Angles are given in degrees

For absolute rotation values, check out the non-offset rot function

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setOffsetCameraRot(rot)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rot  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setOffsetCameraRot(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setOffsetCameraRot(0, 90, 0)
```

---

## Detecting Camera Information

### <code>isFirstPerson()</code> \{#isFirstPerson}

Checks if your camera is in the first person view

```lua
isFirstPerson()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:isFirstPerson()
```

---

### <code>isCameraBackwards()</code> \{#isCameraBackwards}

Checks if your camera is in the backward third person view

```lua
isCameraBackwards()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:isCameraBackwards()
```

---

## Element Rendering

### <code>setBlockOutlineColor()</code> \{#setBlockOutlineColor}

**Aliases:** `blockOutlineColor()`

Sets the color of the selected block outline

Default alpha is 0.4

Might not be compatible with shaders

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setBlockOutlineColor(rgb)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setBlockOutlineColor(rgba)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
setBlockOutlineColor(r, g, b, a)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setBlockOutlineColor(0, 0, 1, 0.4)
```

---

### <code>getBlockOutlineColor()</code> \{#getBlockOutlineColor}

Returns the set color for the selected block outline

Default nil

```lua
getBlockOutlineColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**Example:**

```lua
renderer:getBlockOutlineColor()
```

---

### <code>setCrosshairOffset()</code> \{#setCrosshairOffset}

**Aliases:** `crosshairOffset()`

Sets the offset of your crosshair

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setCrosshairOffset(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setCrosshairOffset(x, y)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| x    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setCrosshairOffset(20, 20)
```

---

### <code>getCrosshairOffset()</code> \{#getCrosshairOffset}

Gets the offset of your crosshair

```lua
getCrosshairOffset()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
renderer:getCrosshairOffset()
```

---

### <code>setEyeOffset()</code> \{#setEyeOffset}

**Aliases:** `eyeOffset()`

Sets an offset for the entity eye position, altering the targeted block and entity

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setEyeOffset(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setEyeOffset(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setEyeOffset(0, 2, 0)
```

---

### <code>getEyeOffset()</code> \{#getEyeOffset}

Returns the offset for the entity eye position

Default nil

```lua
getEyeOffset()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
renderer:getEyeOffset()
```

---

### <code>setFOV()</code> \{#setFOV}

**Aliases:** `fov()`

Sets the multiplier of your fov

The default value is nil, which means no changes will be applied to your fov

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setFOV()
```

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setFOV(fov)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| fov  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setFOV(2)
```

---

### <code>getFOV()</code> \{#getFOV}

Gets the multiplier of your fov

```lua
getFOV()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
renderer:getFOV()
```

---

### <code>setForcePaperdoll()</code> \{#setForcePaperdoll}

Sets if the paperdoll should forcefully be rendered

```lua
setForcePaperdoll(forcePaperdoll)
```

**Parameters:**

| Name           | Type                                              | Description | Default |
| -------------- | ------------------------------------------------- | ----------- | ------- |
| forcePaperdoll | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setForcePaperdoll(true)
```

---

### <code>setOutlineColor()</code> \{#setOutlineColor}

**Aliases:** `outlineColor()`

Sets the custom glowing effect's outline color

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setOutlineColor(rgb)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setOutlineColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setOutlineColor(0, 0, 1)
```

---

### <code>getOutlineColor()</code> \{#getOutlineColor}

Gets the custom glowing effect's outline color

```lua
getOutlineColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
renderer:getOutlineColor()
```

---

### <code>setPostEffect()</code> \{#setPostEffect}

**Aliases:** `postEffect()`

Sets the current rendering effect

Same as the discontinued Super Secret Settings

```lua
setPostEffect(effect)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| effect | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setPostEffect("invert")
```

---

### <code>setPrimaryFireTexture()</code> \{#setPrimaryFireTexture}

**Aliases:** `primaryFireTexture()`

Sets a custom primary fire texture, to render while the entity is on fire

The effect is compound by two layers

The secondary layer is what renders in first person

The absence of a secondary layer uses the primary layer as fallback

```lua
setPrimaryFireTexture(id)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setPrimaryFireTexture("textures/block/soul_fire_0")
```

---

### <code>getPrimaryFireTexture()</code> \{#getPrimaryFireTexture}

Gets the current custom primary fire texture

```lua
getPrimaryFireTexture()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
renderer:getPrimaryFireTexture()
```

---

### <code>setRenderCrosshair()</code> \{#setRenderCrosshair}

Sets if your crosshair should be rendered

```lua
setRenderCrosshair(renderCrosshair)
```

**Parameters:**

| Name            | Type                                              | Description | Default |
| --------------- | ------------------------------------------------- | ----------- | ------- |
| renderCrosshair | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setRenderCrosshair(false)
```

---

### <code>setRenderFire()</code> \{#setRenderFire}

Sets if the fire effect should be rendered

```lua
setRenderFire(renderFire)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| renderFire | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setRenderFire(false)
```

---

### <code>setRenderHUD()</code> \{#setRenderHUD}

Sets if the vanilla HUD should be rendered

```lua
setRenderHUD(renderHUD)
```

**Parameters:**

| Name      | Type                                              | Description | Default |
| --------- | ------------------------------------------------- | ----------- | ------- |
| renderHUD | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setRenderHUD(false)
```

---

### <code>setRenderLeftArm()</code> \{#setRenderLeftArm}

**Aliases:** `renderLeftArm()`

Toggle if the left arm should be rendered in first person, regardless if you are holding an item or not

```lua
setRenderLeftArm(bool)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setRenderLeftArm(true)
```

---

### <code>getRenderLeftArm()</code> \{#getRenderLeftArm}

Gets if the left arm should be rendered while in first person

```lua
getRenderLeftArm()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:getRenderLeftArm()
```

---

### <code>setRenderRightArm()</code> \{#setRenderRightArm}

**Aliases:** `renderRightArm()`

Toggle if the right arm should be rendered in first person, regardless if you are holding an item or not

```lua
setRenderRightArm(bool)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setRenderRightArm(true)
```

---

### <code>getRenderRightArm()</code> \{#getRenderRightArm}

Gets if the right arm should be rendered while in first person

```lua
getRenderRightArm()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:getRenderRightArm()
```

---

### <code>setRenderVehicle()</code> \{#setRenderVehicle}

Sets if your vehicle should be rendered

```lua
setRenderVehicle(renderVehicle)
```

**Parameters:**

| Name          | Type                                              | Description | Default |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| renderVehicle | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setRenderVehicle(false)
```

---

### <code>setRootRotationAllowed()</code> \{#setRootRotationAllowed}

**Aliases:** `rootRotationAllowed()`

Sets if the model should have root rotations applied to it or not

Default true

```lua
setRootRotationAllowed(bool)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setRootRotationAllowed(true)
```

---

### <code>getRootRotationAllowed()</code> \{#getRootRotationAllowed}

Gets if the model should have root rotations applied

```lua
getRootRotationAllowed()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:getRootRotationAllowed()
```

---

### <code>setSecondaryFireTexture()</code> \{#setSecondaryFireTexture}

**Aliases:** `secondaryFireTexture()`

Sets a custom secondary fire texture, to render while the entity is on fire

The effect is compound by two layers

The secondary layer is what renders in first person

The absence of a secondary layer uses the primary layer as fallback

```lua
setSecondaryFireTexture(id)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setSecondaryFireTexture("textures/block/soul_fire_1")
```

---

### <code>getSecondaryFireTexture()</code> \{#getSecondaryFireTexture}

Gets the current custom secondary fire texture

```lua
getSecondaryFireTexture()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
renderer:getSecondaryFireTexture()
```

---

### <code>setShadowRadius()</code> \{#setShadowRadius}

**Aliases:** `shadowRadius()`

Sets the radius of your shadow

The default value is nil, which means to use the vanilla default of 0.5 for players

The maximum value is 12

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setShadowRadius()
```

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setShadowRadius(radius)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| radius | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
renderer:setShadowRadius(12)
```

---

### <code>getShadowRadius()</code> \{#getShadowRadius}

Gets the radius of your shadow

```lua
getShadowRadius()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
renderer:getShadowRadius()
```

---

### <code>setUpsideDown()</code> \{#setUpsideDown}

**Aliases:** `upsideDown()`

Sets if this entity will be rendered upside down

```lua
setUpsideDown(upsideDown)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| upsideDown | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description               |
| --------------------------------------------- | ------------------------- |
| <code>[RendererAPI](/globals/Renderer)</code> | Returns self for chaining |

**Example:**

```lua
renderer:setUpsideDown(true)
```

---

### <code>isUpsideDown()</code> \{#isUpsideDown}

Checks if this entity should be rendered upside down

```lua
isUpsideDown()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:isUpsideDown()
```

---

### <code>shouldForcePaperdoll()</code> \{#shouldForcePaperdoll}

Check if the paperdoll should forcefully be rendered

```lua
shouldForcePaperdoll()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:shouldForcePaperdoll()
```

---

### <code>shouldRenderCrosshair()</code> \{#shouldRenderCrosshair}

Check if your crosshair should be rendered

```lua
shouldRenderCrosshair()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:shouldRenderCrosshair()
```

---

### <code>shouldRenderFire()</code> \{#shouldRenderFire}

Checks if the fire effect should be rendered

```lua
shouldRenderFire()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:shouldRenderFire()
```

---

### <code>shouldRenderHUD()</code> \{#shouldRenderHUD}

Check if the vanilla HUD should be rendered

```lua
shouldRenderHUD()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:shouldRenderHUD()
```

---

### <code>shouldRenderVehicle()</code> \{#shouldRenderVehicle}

Check if your vehicle should be rendered

```lua
shouldRenderVehicle()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
renderer:shouldRenderVehicle()
```

---

## Fields

### <code>renderFire</code> \{#renderFire}

Whether or not you should visually have the fire effect while on fire

True by default

---

### <code>renderVehicle</code> \{#renderVehicle}

Whether or not your vehicle (boat, minecart, horse, whatever) will be rendered

True by default

---

### <code>renderCrosshair</code> \{#renderCrosshair}

Toggles whether or not your crosshair should render

True by default

---

### <code>forcePaperdoll</code> \{#forcePaperdoll}

Toggles if the paperdoll should render regardless of the player doing an action

If the paperdoll is disabled, or set to always render, nothing will change

False by default

---

### <code>renderHUD</code> \{#renderHUD}

Toggles whether or not the vanilla HUD should be rendered

Hands and the Figura HUD are not included

---

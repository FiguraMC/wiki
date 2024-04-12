import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A task for rendering some text from [newText](.#newText)

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

For this entire page assume:

```lua
local myText = models:newText("myCoolTextsName")
```

---

## Text Task

### <code>setText()</code> \{#setText}

**Aliases:** `text()`

Sets the Text for this task render

```lua
setText(text)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setText("Hi mom!")
```

---

### <code>getText()</code> \{#getText}

Returns the Text from this task

```lua
getText()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
myText:getText()
```

---

### <code>setAlignment()</code> \{#setAlignment}

**Aliases:** `alignment()`

Sets this Text alignment

Can be either "LEFT", "RIGHT" or "CENTER"

Default "LEFT"

```lua
setAlignment(alignment)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| alignment | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setAlignment("CENTER")
```

---

### <code>getAlignment()</code> \{#getAlignment}

Returns this Text alignment

Default "LEFT"

```lua
getAlignment()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
myText:getAlignment()
```

---

### <code>setBackground()</code> \{#setBackground}

**Aliases:** `background()`

Sets if this text should render its background

Defaults to false

```lua
setBackground(background)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| background | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setBackground(true)
```

---

### <code>setBackgroundColor()</code> \{#setBackgroundColor}

**Aliases:** `backgroundColor()`

Sets the background color of this text

If the alpha value is not given, it will use the vanilla value (as in the accessibility settings)

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setBackgroundColor(rgba)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setBackgroundColor(r, g, b, a)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| a    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
myText:setBackgroundColor(63 / 255, 255 / 255, 192 / 255, 203 / 255)
```

---

### <code>getBackgroundColor()</code> \{#getBackgroundColor}

Gets this text's background color

```lua
getBackgroundColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**Example:**

```lua
myText:getBackgroundColor()
```

---

### <code>setOpacity()</code> \{#setOpacity}

**Aliases:** `opacity()`

Sets the opacity of this text

```lua
setOpacity(opacity)
```

**Parameters:**

| Name    | Type                                            | Description | Default |
| ------- | ----------------------------------------------- | ----------- | ------- |
| opacity | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setOpacity(0.5)
```

---

### <code>getOpacity()</code> \{#getOpacity}

Gets the opacity of this text

```lua
getOpacity()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myText:getOpacity()
```

---

### <code>setOutline()</code> \{#setOutline}

**Aliases:** `outline()`

Toggles if the text should render with an outline

The text will always render at full brightness if it is given an outline

Not compatible with "Shadow" and "Emissive" modes

```lua
setOutline(outline)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| outline | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setOutline(true)
```

---

### <code>setOutlineColor()</code> \{#setOutlineColor}

**Aliases:** `outlineColor()`

Sets the outline color this Text should render

Only compatible with "Outline" mode

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setOutlineColor(color)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

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

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
myText:setOutline(true)
-- highlight-next-line
myText:setOutlineColor(255 / 255, 192 / 255, 203 / 255)
```

---

### <code>getOutlineColor()</code> \{#getOutlineColor}

Gets this tasks text outline color

```lua
getOutlineColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
myText:getOutlineColor()
```

---

### <code>setSeeThrough()</code> \{#setSeeThrough}

**Aliases:** `seeThrough()`

Sets if this text can be seen behind walls

Defaults to false

```lua
setSeeThrough(seeThrough)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| seeThrough | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setSeeThrough(true)
```

---

### <code>setShadow()</code> \{#setShadow}

**Aliases:** `shadow()`

Toggles if the Text should render with a drop shadow

Not compatible with "Outline" mode

```lua
setShadow(shadow)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| shadow | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setShadow(true)
```

---

### <code>setWidth()</code> \{#setWidth}

**Aliases:** `width()`

Sets this text's max width, wrapping the text into multiple lines

A width of 0 or less does not wrap the text

Defaults to 0

```lua
setWidth(width)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| width | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setWidth(1)
```

---

### <code>getWidth()</code> \{#getWidth}

Gets this text's max width

Defaults to 0

```lua
getWidth()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myText:getWidth()
```

---

### <code>setWrap()</code> \{#setWrap}

**Aliases:** `wrap()`

Sets if this text should wrap lines

```lua
setWrap(wrap)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| wrap | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[TextTask](/globals/Models/TextTask)</code> | Returns self for chaining |

**Example:**

```lua
myText:setWrap(true)
```

---

### <code>hasBackground()</code> \{#hasBackground}

Check if this text should render its background

Defaults to false

```lua
hasBackground()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myText:hasBackground()
```

---

### <code>hasOutline()</code> \{#hasOutline}

Checks if this task text has an outline

```lua
hasOutline()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myText:hasOutline()
```

---

### <code>hasShadow()</code> \{#hasShadow}

Checks if this task text has shadow

```lua
hasShadow()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myText:hasShadow()
```

---

### <code>hasWrap()</code> \{#hasWrap}

Check if this text should wrap lines

```lua
hasWrap()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myText:hasWrap()
```

---

### <code>isSeeThrough()</code> \{#isSeeThrough}

Check if this text can be seen behind walls

Defaults to false

```lua
isSeeThrough()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myText:isSeeThrough()
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
myBlock:setLight(blockLight, skyLight)
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
myBlock:getLight()
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
myBlock:setMatrix(matrices.mat4())
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
myBlock:getName()
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
myBlock:getNormalMatrix()
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
myBlock:getNormalMatrixRaw()
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
myBlock:setOverlay(hurt and 0 or nil, 1)
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
myBlock:getOverlay()
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
myBlock:setPos(0, 16, 0)
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
myBlock:getPos()
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
myBlock:getPositionMatrix()
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
myBlock:getPositionMatrixRaw()
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
myBlock:setRot(0, 45, 22.5)
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
myBlock:getRot()
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
myBlock:setScale(0.4, 0.4, 0.4) -- myBlock:setScale(0.4) also works
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
myBlock:getScale()
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
    myBlock:setVisible(state)
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
if myBlock:isVisible() then
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
myBlock:remove()
```

---

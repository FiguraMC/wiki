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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
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
--todo
```

---

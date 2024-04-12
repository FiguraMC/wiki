import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Represents a rendering task for Figura to complete each frame

An abstract superclass of ItemTask, BlockTask, TextTask, and SpriteTask

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

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

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

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

---

### <code>remove()</code> \{#remove}

Removes this render task from the parent model part

```lua
remove()
```

**Returns:**

| Type                                                  | Description               |
| ----------------------------------------------------- | ------------------------- |
| <code>[RenderTask](/globals/Models/RenderTask)</code> | Returns self for chaining |

---

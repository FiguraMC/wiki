import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Represents a model part in a vanilla model

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Can be queried for vanilla transform values

---

### <code>setOffsetRot()</code> \{#setOffsetRot}

**Aliases:** `offsetRot()`

Offsets this part's rotation, adding on top of the vanilla values

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
vanilla_model.HEAD:setOffsetRot(0, 90, 0)
```

---

### <code>getOffsetRot()</code> \{#getOffsetRot}

Gets this part's rotation offset

```lua
getOffsetRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getOffsetRot()
```

---

### <code>setOffsetScale()</code> \{#setOffsetScale}

**Aliases:** `offsetScale()`

Offsets this part's scale, multiplying with the vanilla values

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
vanilla_model.HEAD:setOffsetScale(2, 2, 2)
```

---

### <code>getOffsetScale()</code> \{#getOffsetScale}

Gets this part's scale offset

```lua
getOffsetScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getOffsetScale()
```

---

### <code>getOriginPos()</code> \{#getOriginPos}

Gets the position offset to this vanilla model part currently applied by Minecraft

```lua
getOriginPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getOriginPos()
```

---

### <code>getOriginRot()</code> \{#getOriginRot}

Gets the rotation to this vanilla model part currently applied by Minecraft

```lua
getOriginRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getOriginRot()
```

---

### <code>getOriginScale()</code> \{#getOriginScale}

Gets the scale to this vanilla model part currently applied by Minecraft

```lua
getOriginScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getOriginScale()
```

---

### <code>getOriginVisible()</code> \{#getOriginVisible}

Gets if this vanilla model part is visible or not, without interference from your script

```lua
getOriginVisible()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getOriginVisible()
```

---

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Set this part's position, preserving the previous values

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
vanilla_model.HEAD:setPos(0, 10, 0)
```

---

### <code>getPos()</code> \{#getPos}

Get this part's set position

Returns the value set by the "set" function

```lua
getPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getPos()
```

---

### <code>setRot()</code> \{#setRot}

**Aliases:** `rot()`

Set this part's rotation

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
vanilla_model.HEAD:setRot(0, 90, 0)
```

---

### <code>getRot()</code> \{#getRot}

Get this part's set rotation

Returns the value set by the "set" function

```lua
getRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getRot()
```

---

### <code>setScale()</code> \{#setScale}

**Aliases:** `scale()`

Set this part's scale

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

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

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
vanilla_model.HEAD:setScale(2, 2, 2)
```

---

### <code>getScale()</code> \{#getScale}

Get this part's set scale

Returns the value set by the "set" function

```lua
getScale()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getScale()
```

---

### <code>setVisible()</code> \{#setVisible}

**Aliases:** `visible()`

Sets this part to be visible or invisible

```lua
setVisible(visible)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| visible | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                                           | Description |
| -------------------------------------------------------------- | ----------- |
| <code>[VanillaPart](/globals/Vanilla-Model/VanillaPart)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:setVisible(false)
```

---

### <code>getVisible()</code> \{#getVisible}

Gets whether you have set this part to be visible or invisible

```lua
getVisible()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
vanilla_model.HEAD:getVisible()
```

---

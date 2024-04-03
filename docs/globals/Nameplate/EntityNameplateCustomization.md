import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

A nameplate customization that is specialized for entities

## Text

### <code>setText()</code> \{#setText}

The text to use in this nameplate

```lua
setText(text)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| text | <code>[String](#)</code> | -           | -       |

**Returns:**

| Type                                                                             | Description |
| -------------------------------------------------------------------------------- | ----------- |
| <code>[NameplateCustomization](/globals/Nameplate/NameplateCustomization)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getText()</code> \{#getText}

The text to use in this nameplate

```lua
getText()
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

### <code>setOutline()</code> \{#setOutline}

**Aliases:** `outline()`

Sets whether or not the nameplate should have outline

Incompatible with "shadow"

```lua
setOutline(outline)
```

**Parameters:**

| Name    | Type                      | Description | Default |
| ------- | ------------------------- | ----------- | ------- |
| outline | <code>[Boolean](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>hasOutline()</code> \{#hasOutline}

figura.docs.nameplate_entity.has_outline

```lua
hasOutline()
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

### <code>setOutlineColor()</code> \{#setOutlineColor}

**Aliases:** `outlineColor()`

Sets the color used for the outline in the outline mode

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

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setOutlineColor(r, g, b)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| r    | <code>[Number](#)</code> | -           | -       |
| g    | <code>[Number](#)</code> | -           | -       |
| b    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>setShadow()</code> \{#setShadow}

**Aliases:** `shadow()`

Sets whether or not the nameplate should have shadow

Incompatible with "outline"

```lua
setShadow(shadow)
```

**Parameters:**

| Name   | Type                      | Description | Default |
| ------ | ------------------------- | ----------- | ------- |
| shadow | <code>[Boolean](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>hasShadow()</code> \{#hasShadow}

Gets whether or not the nameplate should have shadow

```lua
hasShadow()
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

## Nameplate Properties

### <code>setBackgroundColor()</code> \{#setBackgroundColor}

**Aliases:** `backgroundColor()`

Sets the color of the nameplate background

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

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setBackgroundColor(r, g, b, a)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| r    | <code>[Number](#)</code> | -           | -       |
| g    | <code>[Number](#)</code> | -           | -       |
| b    | <code>[Number](#)</code> | -           | -       |
| a    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getBackgroundColor()</code> \{#getBackgroundColor}

Gets the set color of the nameplate background

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

### <code>setLight()</code> \{#setLight}

**Aliases:** `light()`

Sets the light override value

Values are given from 0 to 15, indicating the block light and sky light levels you want to use

Passing nil will reset the lighting override

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

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setLight(blockLight, skyLight)
```

**Parameters:**

| Name       | Type                      | Description | Default |
| ---------- | ------------------------- | ----------- | ------- |
| blockLight | <code>[Integer](#)</code> | -           | -       |
| skyLight   | <code>[Integer](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getLight()</code> \{#getLight}

Gets the lighting override value

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

### <code>setPivot()</code> \{#setPivot}

**Aliases:** `pivot()`

Sets the pivot of the nameplate, in world coordinates

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

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPivot(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getPivot()</code> \{#getPivot}

Gets the pivot of the nameplate, in world coordinates

```lua
getPivot()
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

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Sets the position offset of the nameplate, in world coordinates

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

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

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

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getPos()</code> \{#getPos}

Gets the position offset of the nameplate, in world coordinates

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

### <code>setScale()</code> \{#setScale}

**Aliases:** `scale()`

Sets the scale factor of the nameplate

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

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setScale(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getScale()</code> \{#getScale}

Gets scale factor of the nameplate

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

Sets whether or not the nameplate should be rendered

```lua
setVisible(visible)
```

**Parameters:**

| Name    | Type                      | Description | Default |
| ------- | ------------------------- | ----------- | ------- |
| visible | <code>[Boolean](#)</code> | -           | -       |

**Returns:**

| Type                                                                                         | Description               |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| <code>[EntityNameplateCustomization](/globals/Nameplate/EntityNameplateCustomization)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>isVisible()</code> \{#isVisible}

Gets whether or not the nameplate should be rendered

```lua
isVisible()
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

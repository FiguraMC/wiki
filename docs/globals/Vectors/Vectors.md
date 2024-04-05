---
sidebar_position: 1
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API which provides functions dedicated to creating and otherwise manipulating vectors

:::danger
This page is a WIP.
:::

Accessed using the name `vectors`

---

## Vector Creation

### <code>vec()</code> \{#vec}

Creates and returns a vector of the appropriate size to hold the arguments passed in

For example; if you call vec(3, 4, 0, 2), then the function will return a Vector4 containing those values

There is a global alias "vec" for this function, meaning the "vectors." can be omitted

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
vec(x, y)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
vec(x, y, z)
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
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
vec(x, y, z, w)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| w    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>vec2()</code> \{#vec2}

Creates and returns a Vector2 with the given values

Nil values become zero

```lua
vec2(x, y)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>vec3()</code> \{#vec3}

Creates and returns a Vector3 with the given values

Nil values become zero

```lua
vec3(x, y, z)
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
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>vec4()</code> \{#vec4}

Creates and returns a Vector4 with the given values

Nil values become zero

```lua
vec4(x, y, z, w)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| w    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**Example:**

```lua
--todo
```

## Colors

### <code>hexToRGB()</code> \{#hexToRGB}

Parses a Hex string color into an RGB format vector

The hex "#" is optional, and it can have any length, however only the first 6 hex digits are evaluated, short hex (length 3) is also supported

For example, "#42" is the same as "420000", and "F0B" is the same as "FF00BB"

```lua
hexToRGB(hex)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| hex  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>hsvToRGB()</code> \{#hsvToRGB}

Converts the given color from HSV format to RGB format

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
hsvToRGB(hsv)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| hsv  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
hsvToRGB(h, s, v)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| h    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| s    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| v    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>intToRGB()</code> \{#intToRGB}

Converts the given color from Integer format to RGB format

```lua
intToRGB(color)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>rgbToHSV()</code> \{#rgbToHSV}

Converts the given color from RGB format to HSV format

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
rgbToHSV(rgb)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
rgbToHSV(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>rgbToHex()</code> \{#rgbToHex}

Converts the given color from RGB format to Hex format

The "#" is not included on the return value

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
rgbToHex(rgb)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
rgbToHex(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>rgbToInt()</code> \{#rgbToInt}

Converts the given color from RGB format to Integer format

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
rgbToInt(rgb)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| rgb  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
rgbToInt(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

## Misc

### <code>angleToDir()</code> \{#angleToDir}

Converts a pitch/yaw angle (in degrees) into a direction vector

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
angleToDir(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
angleToDir(pitch, yaw)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| pitch | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| yaw   | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>rotateAroundAxis()</code> \{#rotateAroundAxis}

Rotates a vector relative to a rotation vector

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
rotateAroundAxis(angle, vec, axis)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| vec   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| axis  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
rotateAroundAxis(angle, x, y, z, axis)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| x     | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| y     | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| z     | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| axis  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
rotateAroundAxis(angle, vec, axisX, axisY, axisZ)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| vec   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| axisX | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| axisY | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |
| axisZ | <code>[Number](/tutorials/types/Numbers)</code>  | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
rotateAroundAxis(angle, x, y, z, axisX, axisY, axisZ)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| x     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z     | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| axisX | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| axisY | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| axisZ | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>toCameraSpace()</code> \{#toCameraSpace}

Converts a position in the world into a position relative to the viewer's camera

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
toCameraSpace(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
toCameraSpace(x, y, z)
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
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>worldToScreenSpace()</code> \{#worldToScreenSpace}

Converts a position in the world into a position relative to the viewer's screen

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
worldToScreenSpace(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
worldToScreenSpace(x, y, z)
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
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

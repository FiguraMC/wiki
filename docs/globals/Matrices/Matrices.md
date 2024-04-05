import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API which provides functions dedicated to creating and otherwise manipulating matrices

:::warning
This page is a WIP.
:::

Accessed using the name "matrices"

---

## Matrix2

### <code>mat2()</code> \{#mat2}

Creates a Matrix2 using the given parameters as columns

If you call the function with no parameters, returns the 2x2 identity matrix

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
mat2()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
mat2(col1, col2)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| col1 | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |
| col2 | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.mat2()
```

---

### <code>rotation2()</code> \{#rotation2}

Creates a new Matrix2 that rotates by the specified angle

Angle is given in degrees

```lua
rotation2(angle)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           |

**Example:**

```lua
matrices.rotation2(90)
```

---

### <code>scale2()</code> \{#scale2}

Creates a new Matrix2 that scales by the specified factors

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
scale2(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
scale2(x, y)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.scale2(2, 2)
```

---

## Matrix3

### <code>mat3()</code> \{#mat3}

Creates a Matrix3 using the given parameters as columns

If you call the function with no parameters, returns the 3x3 identity matrix

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
mat3()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
mat3(col1, col2, col3)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| col1 | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| col2 | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| col3 | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.mat3()
```

---

### <code>rotation3()</code> \{#rotation3}

Creates a new Matrix3 that rotates by the specified angles

Angles are given in degrees, and the rotation order is ZYX

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
rotation3(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
rotation3(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.rotation3(90, 90, 90)
```

---

### <code>scale3()</code> \{#scale3}

Creates a new Matrix3 that scales by the specified factors

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
scale3(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
scale3(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.scale3(2, 2, 2)
```

---

### <code>translate3()</code> \{#translate3}

Creates a new Matrix3 that translates by the specified offset

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
translate3(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
translate3(x, y)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.translate3(90, 90)
```

---

### <code>xRotation3()</code> \{#xRotation3}

Creates a new Matrix3 that rotates by the specified angle around the X axis

Angle is given in degrees

```lua
xRotation3(angle)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
matrices.xRotation3(90)
```

---

### <code>yRotation3()</code> \{#yRotation3}

Creates a new Matrix3 that rotates by the specified angle around the Y axis

Angle is given in degrees

```lua
yRotation3(angle)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
matrices.yRotation3(90)
```

---

### <code>zRotation3()</code> \{#zRotation3}

Creates a new Matrix3 that rotates by the specified angle around the Z axis

Angle is given in degrees

```lua
zRotation3(angle)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
matrices.zRotation3(90)
```

---

## Matrix4

### <code>mat4()</code> \{#mat4}

Creates a Matrix4 using the given parameters as columns

If you call the function with no parameters, returns the 4x4 identity matrix

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
mat4()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
mat4(col1, col2, col3, col4)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| col1 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |
| col2 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |
| col3 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |
| col4 | <code>[Vector4](/globals/Vectors/Vector4)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.mat4()
```

---

### <code>rotation4()</code> \{#rotation4}

Creates a new Matrix4 that rotates by the specified angles

Angles are given in degrees, and the rotation order is ZYX

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
rotation4(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
rotation4(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.rotation4(90, 90, 90)
```

---

### <code>scale4()</code> \{#scale4}

Creates a new Matrix4 that scales by the specified factors

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
scale4(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
scale4(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.scale4(2, 2, 2)
```

---

### <code>translate4()</code> \{#translate4}

Creates a new Matrix4 that translates by the specified offset

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
translate4(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
translate4(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
matrices.translate4(90, 90, 90)
```

---

### <code>xRotation4()</code> \{#xRotation4}

Creates a new Matrix4 that rotates by the specified angle around the X axis

Angle is given in degrees

```lua
xRotation4(angle)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
matrices.xRotation4(90)
```

---

### <code>yRotation4()</code> \{#yRotation4}

Creates a new Matrix4 that rotates by the specified angle around the Y axis

Angle is given in degrees

```lua
yRotation4(angle)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
matrices.yRotation4(90)
```

---

### <code>zRotation4()</code> \{#zRotation4}

Creates a new Matrix4 that rotates by the specified angle around the Z axis

Angle is given in degrees

```lua
zRotation4(angle)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| angle | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           |

**Example:**

```lua
matrices.zRotation4(90)
```

---

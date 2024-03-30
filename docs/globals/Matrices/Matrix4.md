import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

A matrix with 4 rows and 4 columns

---

## Math

### <code>add()</code> \{#add}

Adds the other matrix to this one

Returns self for chaining

```lua
add(other)
```

**Parameters:**

| Name  | Type                                              | Description | Default |
| ----- | ------------------------------------------------- | ----------- | ------- |
| other | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>sub()</code> \{#sub}

Subtracts the other matrix from this one

Returns self for chaining

```lua
sub(other)
```

**Parameters:**

| Name  | Type                                              | Description | Default |
| ----- | ------------------------------------------------- | ----------- | ------- |
| other | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>det()</code> \{#det}

Calculates and returns the determinant of this matrix

```lua
det()
```

**Returns:**

| Type                     | Description |
| ------------------------ | ----------- |
| <code>[Number](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>invert()</code> \{#invert}

Inverts this matrix, changing the values inside

Returns self for chaining

```lua
invert()
```

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>inverted()</code> \{#inverted}

Returns a copy of this matrix, but inverted

```lua
inverted()
```

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>multiply()</code> \{#multiply}

Multiplies this matrix by the other matrix, with the other matrix on the left

Returns self for chaining

```lua
multiply(other)
```

**Parameters:**

| Name  | Type                                              | Description | Default |
| ----- | ------------------------------------------------- | ----------- | ------- |
| other | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>rightMultiply()</code> \{#rightMultiply}

Multiplies this matrix by the other matrix, with the other matrix on the right

Returns self for chaining

```lua
rightMultiply(other)
```

**Parameters:**

| Name  | Type                                              | Description | Default |
| ----- | ------------------------------------------------- | ----------- | ------- |
| other | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

## Accessors

### <code>getColumn()</code> \{#getColumn}

Gets the given column of this matrix, as a vector

Indexing starts at 1, as usual

```lua
getColumn(col)
```

**Parameters:**

| Name | Type                      | Description | Default |
| ---- | ------------------------- | ----------- | ------- |
| col  | <code>[Integer](#)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getRow()</code> \{#getRow}

Gets the given row of this matrix, as a vector

Indexing starts at 1, as usual

```lua
getRow(row)
```

**Parameters:**

| Name | Type                      | Description | Default |
| ---- | ------------------------- | ----------- | ------- |
| row  | <code>[Integer](#)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

**Example:**

```lua
--todo
```

---

## Transformation

### <code>apply()</code> \{#apply}

Treats the given values as a vector, augments this vector with a 1, multiplies it against the matrix, and returns a deaugmented vector of the first values

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
apply(vec)
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
apply(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

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

### <code>applyDir()</code> \{#applyDir}

Treats the given values as a vector, augments this vector with a 0, multiplies it against the matrix, and returns a deaugmented vector of the first values

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
applyDir(vec)
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
applyDir(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

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

### <code>rotate()</code> \{#rotate}

Rotates this matrix by the specified amount, changing the values inside

Angles are given in degrees

Returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
rotate(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
rotate(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>rotateX()</code> \{#rotateX}

Rotates this matrix around the X axis by the specified number of degrees

Returns self for chaining

```lua
rotateX(degrees)
```

**Parameters:**

| Name    | Type                     | Description | Default |
| ------- | ------------------------ | ----------- | ------- |
| degrees | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>rotateY()</code> \{#rotateY}

Rotates this matrix around the Y axis by the specified number of degrees

Returns self for chaining

```lua
rotateY(degrees)
```

**Parameters:**

| Name    | Type                     | Description | Default |
| ------- | ------------------------ | ----------- | ------- |
| degrees | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>rotateZ()</code> \{#rotateZ}

Rotates this matrix around the Z axis by the specified number of degrees

Returns self for chaining

```lua
rotateZ(degrees)
```

**Parameters:**

| Name    | Type                     | Description | Default |
| ------- | ------------------------ | ----------- | ------- |
| degrees | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>scale()</code> \{#scale}

Scales this matrix by the specified amount, changing the values inside

Returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
scale(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
scale(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>translate()</code> \{#translate}

Translates this matrix by the specified amount, changing the values inside

Returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
translate(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
translate(x, y, z)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| x    | <code>[Number](#)</code> | -           | -       |
| y    | <code>[Number](#)</code> | -           | -       |
| z    | <code>[Number](#)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>transpose()</code> \{#transpose}

Transposes this matrix, changing the values inside

Transposing means to swap the rows and the columns

Returns self for chaining

```lua
transpose()
```

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>transposed()</code> \{#transposed}

Returns a copy of this matrix, but transposed

Transposing means to swap the rows and the columns

```lua
transposed()
```

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

## Utility

### <code>set()</code> \{#set}

Sets this matrix to have the same values as the matrix passed in

Returns self for chaining

```lua
set(other)
```

**Parameters:**

| Name  | Type                                              | Description | Default |
| ----- | ------------------------------------------------- | ----------- | ------- |
| other | <code>[Matrix4](/globals/Matrices/Matrix4)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>copy()</code> \{#copy}

Creates and returns a new copy of this matrix

```lua
copy()
```

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>deaugmented()</code> \{#deaugmented}

Deaugments this matrix, removing a row and column

```lua
deaugmented()
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

### <code>reset()</code> \{#reset}

Resets this matrix back to the identity matrix

Returns self for chaining

```lua
reset()
```

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix4](/globals/Matrices/Matrix4)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

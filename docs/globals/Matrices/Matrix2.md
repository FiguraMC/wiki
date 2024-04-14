import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A matrix with 2 rows and 2 columns

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

For this entire page assume:

```lua
local myMat = matrices.mat2()
```

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
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:add(matrices.mat2():scale(2))
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
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:sub(matrices.mat2():scale(2))
```

---

### <code>det()</code> \{#det}

Calculates and returns the determinant of this matrix

```lua
det()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myMat:det()
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
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:invert()
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
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:inverted()
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
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:multiply(matrices.mat2():scale(2))
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
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:rightMultiply(matrices.mat2():scale(2))
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

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| col  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
myMat:getColumn(1)
```

---

### <code>getRow()</code> \{#getRow}

Gets the given row of this matrix, as a vector

Indexing starts at 1, as usual

```lua
getRow(row)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| row  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
myMat:getRow(1)
```

---

## Transformation

### <code>apply()</code> \{#apply}

Treats the given values as a vector, augments this vector with a 1, multiplies it against the matrix, and returns a deaugmented vector of the first values

```lua
apply(x)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myMat:apply()
```

---

### <code>applyDir()</code> \{#applyDir}

Treats the given values as a vector, augments this vector with a 0, multiplies it against the matrix, and returns a deaugmented vector of the first values

```lua
applyDir(x)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myMat:applyDir()
```

---

### <code>rotate()</code> \{#rotate}

Rotates this matrix by the specified amount, changing the values inside

Angles are given in degrees

Returns self for chaining

```lua
rotate(degrees)
```

**Parameters:**

| Name    | Type                                            | Description | Default |
| ------- | ----------------------------------------------- | ----------- | ------- |
| degrees | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:rotate(90)
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
| vec  | <code>[Vector2](/globals/Vectors/Vector2)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
scale(x, y)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
myMat:scale(2, 2)
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
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:transpose()
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
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:transposed()
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
| other | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           | -       |

**Returns:**

| Type                                              | Description               |
| ------------------------------------------------- | ------------------------- |
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:set()
```

---

### <code>augmented()</code> \{#augmented}

Augments this matrix, adding an additional row and column

Puts a 1 along the diagonal in the new spot, and the rest are zero

```lua
augmented()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Matrix3](/globals/Matrices/Matrix3)</code> | -           |

**Example:**

```lua
myMat:augmented()
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
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:copy()
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
| <code>[Matrix2](/globals/Matrices/Matrix2)</code> | Returns self for chaining |

**Example:**

```lua
myMat:reset()
```

---

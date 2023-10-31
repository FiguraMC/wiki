A matrix with 4 rows and 4 columns

For this page assume:

```lua
local myMat = matrices.mat4()
```

---

### `add(Matrix4)` \{#add}

Adds the other matrix to this one

Returns self for chaining

---

### `scale(Vector3)` \{#scale}

Adds the other matrix to this one

Returns self for chaining

**Example**:

```lua
myMat:scale(2, 2, 2)
```

---

### `apply(Vector3)` \{#apply}

Treats the given values as a vector, augments this vector with a 1, multiplies it against the matrix, and returns a deaugmented vector of the first values

**Example**:

```lua
myMat:apply()
```

---

### `set(Matrix4)` \{#set}

Sets this matrix to have the same values as the matrix passed in

Returns self for chaining

**Example**:

```lua
myMat:set()
```

---

### `copy()` \{#copy}

Creates and returns a new copy of this matrix

**Example**:

```lua
myMat:copy()
```

---

### `reset()` \{#reset}

Resets this matrix back to the identity matrix

Returns self for chaining

**Example**:

```lua
myMat:reset()
```

---

### `multiply(Matrix4)` \{#multiply}

Multiplies this matrix by the other matrix, with the other matrix on the left

Returns self for chaining

---

### `rotate(Vector3)` \{#rotate}

Rotates this matrix by the specified amount, changing the values inside

Angles are given in degrees

Returns self for chaining

**Example**:

```lua
myMat:rotate(90, 90, 90)
```

---

### `sub(Matrix4)` \{#sub}

Subtracts the other matrix from this one

Returns self for chaining

---

### `inverted()` \{#inverted}

Returns a copy of this matrix, but inverted

**Example**:

```lua
myMat:inverted()
```

---

### `translate(Vector3)` \{#translate}

Translates this matrix by the specified amount, changing the values inside

Returns self for chaining

**Example**:

```lua
myMat:translate(2, 2, 2)
```

---

### `transposed()` \{#transposed}

Returns a copy of this matrix, but transposed

Transposing means to swap the rows and the columns

**Example**:

```lua
myMat:transposed()
```

---

### `rightMultiplty(Matrix4)` \{#transposed}

Multiplies this matrix by the other matrix, with the other matrix on the right

Returns self for chaining

---

### `applyDir(Vector3)` \{#applyDir}

Treats the given values as a vector, augments this vector with a 0, multiplies it against the matrix, and returns a deaugmented vector of the first values

**Example**:

```lua
myMat:applyDir()
```

---

### `deaugmented()` \{#deaugmented}

Deaugments this matrix, removing a row and column

**Example**:

```lua
myMat:deaugmented()
```

---

### `det()` \{#det}

Calculates and returns the determinant of this matrix

**Example**:

```lua
myMat:det()
```

---

### `transpose()` \{#transpose}

Transposes this matrix, changing the values inside

Transposing means to swap the rows and the columns

Returns self for chaining

**Example**:

```lua
myMat:transpose()
```

---

### `getColumn(int)` \{#getColumn}

Gets the given column of this matrix, as a vector

Indexing starts at 1, as usual

**Example**:

```lua
myMat:getColumn(1)
```

---

### `getRow(int)` \{#getRow}

Gets the given row of this matrix, as a vector

Indexing starts at 1, as usual

**Example**:

```lua
myMat:getRow(1)
```

---

### `rotateX(number)` \{#rotateX}

Rotates this matrix around the X axis by the specified number of degrees

Returns self for chaining

**Example**:

```lua
myMat:rotateX(90)
```

---

### `rotateY(number)` \{#rotateY}

Rotates this matrix around the Y axis by the specified number of degrees

Returns self for chaining

**Example**:

```lua
myMat:rotateY(90)
```

---

### `rotateZ(number)` \{#rotateZ}

Rotates this matrix around the Z axis by the specified number of degrees

Returns self for chaining

**Example**:

```lua
myMat:rotateZ(90)
```

---

### `invert()` \{#invert}

Inverts this matrix, changing the values inside

Returns self for chaining

**Example**:

```lua
myMat:invert()
```

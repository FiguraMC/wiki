A vector that holds 2 numbers

Can be created using functions in the "vectors" api

For this entire page assume:

```lua
local vec2 = vec(2, 5)
```

---

### add(Vector2) \{#add}

Adds the given vector or values to this one, and returns self for chaining

**Example**:

```lua
vec2:add(2, 0.5)
```

---

### length() \{#length}

Returns the length of this vector

**Example**:

```lua
vec2:length()
```

---

### floor() \{#floor}

Returns a copy of this vector with its values rounded down

**Example**:

```lua
vec2:floor()
```

---

### ceil() \{#ceil}

Returns a copy of this vector with its values rounded up

**Example**:

```lua
vec2:ceil()
```

---

### scale(Number) \{#scale}

Scales this vector by the given factor, and returns self for chaining

**Example**:

```lua
vec2:scale(2)
```

---

### offset(Number) \{#offset}

Offsets this vector by the given factor, adding the factor to all components, and returns self for chaining

**Example**:

```lua
vec2:offset(2)
```

---

### transform(Matrix2) \{#transform}

Transforms this vector by the given matrix, and returns self for chaining

**Example**:

```lua
vec2:transform(matrices.mat2())
```

---

### dot(Vector2) \{#dot}

Returns the dot product of this vector with the other

**Example**:

```lua
vec2:dot(vec(2, 2))
```

---

### set(Vector2) \{#set}

Sets this vector to have the given values

Nil values are treated as zero

Returns self for chaining

**Example**:

```lua
vec2:set(10, 3)
```

---

### copy() \{#copy}

Creates and returns a copy of this vector

**Example**:

```lua
vec2:copy()
```

---

### normalize() \{#normalize}

Modifies this vector so that its length is 1, unless its length was originally 0

Returns self for chaining

**Example**:

```lua
vec2:normalize()
```

---

### reset() \{#reset}

Resets this vector back to being all zeroes, and returns itself for chaining

**Example**:

```lua
vec2:reset()
```

---

### reduce(Vector2) \{#reduce}

Reduces this vector modulo the given vector or values, and returns self for chaining

**Example**:

```lua
vec2:reduce(1, 0.5)
```

---

### normalized() \{#normalized}

Returns a copy of this vector with length 1, unless its length was originally 0

**Example**:

```lua
vec2:normalized()
```

---

### sub(Vector2) \{#sub}

Subtracts the given vector or values from this one, and returns self for chaining

**Example**:

```lua
vec2:sub(1, 0.5)
```

---

### mul(Vector2) \{#mul}

Multiplies the given vector or values into this one, and returns self for chaining

**Example**:

```lua
vec2:mul(2, 3)
```

---

### div(Vector2) \{#div}

Divides this vector by the given vector or values, and returns self for chaining

**Example**:

```lua
vec2:mul(2, 3)
```

---

### applyFunc(func: fun(value: number, index: number): number): Vector2 \{#applyFunc}

Calls the given function on each element of this vector, and sets the values of the vector to the returns

The current index and its value is given as arguments of the function

Returns self for chaining

**Examples**:

```lua
-- Example 1:
vec2:applyFunc(math.sqrt)
-- Example 2:
vec2:applyFunc(function(v)
    return v + math.random() - 0.5
end)
```

---

### toRad() \{#toRad}

Returns a copy of this vector, in radians

**Example**:

```lua
vec2:toRad()
```

---

### toDeg() \{#toDeg}

Returns a copy of this vector, in degrees

**Example**:

```lua
vec2:toDeg()
```

---

### clampLength(Number,Number) \{#clampLength}

Modifies this vector so that its length is between minLength and maxLength

If the vector has length zero, it is unmodified

Returns self for chaining

**Example**:

```lua
vec2:clampLength(1, 5)
```

---

### augmented(Number) \{#augmented}

Returns the augmented form of this vector

The augmented form is a Vector of the same length + 1

The new axis will have the given value, or 1 when it is not specified

**Example**:

```lua
vec2:augmented(4)
```

---

### unpack() \{#unpack}

Returns each of this vector values as argument

**Example**:

```lua
vec2:unpack()
```

---

### clamped(Number,Number) \{#clamped}

Returns a modified copy of this vector, with its length clamped from minLength to maxLength

If the vector has length zero, then the copy does too

**Example**:

```lua
vec2:clamped(1, 3)
```

---

### lengthSquared() \{#lengthSquared}

Returns the length of this vector squared

Suitable when you only care about relative lengths, because it avoids a square root

**Example**:

```lua
vec2:lengthSquared()
```

---

### x \{#x}

The first coordinate of this vector

Can also be gotten with the indices "r" and [1]

**Example**:

```lua
vec2.x
```

---

### y \{#y}

The second coordinate of this vector

Can also be gotten with the indices "g" and [2]

**Example**:

```lua
vec2.y
```

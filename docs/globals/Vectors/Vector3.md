A vector that holds 3 numbers

Can be created using functions in the "vectors" api

For this entire page assume:

```lua
local vec3 = vec(2, 5, 3)
```

---

### add(Vector3) \{#add}

Adds the given vector or values to this one, and returns self for chaining

**Example**:

```lua
vec3:add(2, 0.5, 4)
```

---

### length() \{#length}

Returns the length of this vector

**Example**:

```lua
vec3:length()
```

---

### floor() \{#floor}

Returns a copy of this vector with its values rounded down

**Example**:

```lua
vec3:floor()
```

---

### ceil() \{#ceil}

Returns a copy of this vector with its values rounded up

**Example**:

```lua
vec3:ceil()
```

---

### scale(Number) \{#scale}

Scales this vector by the given factor, and returns self for chaining

**Example**:

```lua
vec3:scale(2)
```

---

### offset(Number) \{#offset}

Offsets this vector by the given factor, adding the factor to all components, and returns self for chaining

**Example**:

```lua
vec3:offset(2)
```

---

### transform(Matrix3) \{#transform}

Transforms this vector by the given matrix, and returns self for chaining

**Example**:

```lua
vec3:transform(matrices.mat3())
```

---

### dot(Vector3) \{#dot}

Returns the dot product of this vector with the other

**Example**:

```lua
vec3:dot(vec(2, 2, 3))
```

---

### set(Vector3) \{#set}

Sets this vector to have the given values

Nil values are treated as zero

Returns self for chaining

**Example**:

```lua
vec3:set(10, 3, 2)
```

---

### copy() \{#copy}

Creates and returns a copy of this vector

**Example**:

```lua
vec3:copy()
```

---

### normalize() \{#normalize}

Modifies this vector so that its length is 1, unless its length was originally 0

Returns self for chaining

**Example**:

```lua
vec3:normalize()
```

---

### reset() \{#reset}

Resets this vector back to being all zeroes, and returns itself for chaining

**Example**:

```lua
vec3:reset()
```

---

### reduce(Vector3) \{#reduce}

Reduces this vector modulo the given vector or values, and returns self for chaining

**Example**:

```lua
vec3:reduce(1, 0.5, 2)
```

---

### normalized() \{#normalized}

Returns a copy of this vector with length 1, unless its length was originally 0

**Example**:

```lua
vec3:normalized()
```

---

### sub(Vector3) \{#sub}

Subtracts the given vector or values from this one, and returns self for chaining

**Example**:

```lua
vec3:sub(1, 0.5, 1)
```

---

### mul(Vector3) \{#mul}

Multiplies the given vector or values into this one, and returns self for chaining

**Example**:

```lua
vec3:mul(2, 3, 2)
```

---

### div(Vector3) \{#div}

Divides this vector by the given vector or values, and returns self for chaining

**Example**:

```lua
vec3:mul(2, 3, 2)
```

---

### applyFunc(fun) \{#applyFunc}

Calls the given function on each element of this vector, and sets the values of the vector to the returns

The current index and its value is given as arguments of the function

Returns self for chaining

**Examples**:

```lua
-- Example 1:
vec3:applyFunc(math.sqrt)
-- Example 2:
vec3:applyFunc(function(v)
    return v + math.random() - 0.5
end)
```

---

### toRad() \{#toRad}

Returns a copy of this vector, in radians

**Example**:

```lua
vec3:toRad()
```

---

### toDeg() \{#toDeg}

Returns a copy of this vector, in degrees

**Example**:

```lua
vec3:toDeg()
```

---

### clampLength(Number,Number) \{#clampLength}

Modifies this vector so that its length is between minLength and maxLength

If the vector has length zero, it is unmodified

Returns self for chaining

**Example**:

```lua
vec3:clampLength(1, 5)
```

---

### augmented(Number) \{#augmented}

Returns the augmented form of this vector

The augmented form is a Vector of the same length + 1

The new axis will have the given value, or 1 when it is not specified

**Example**:

```lua
vec3:augmented(4)
```

---

### crossed(Vector3) \{#crossed}

Returns a new vector which is the cross product of this and the other one

**Example**:

```lua
vec3:crossed(vec(2, 5, 4))
```

---

### unpack() \{#unpack}

Returns each of this vector values as argument

**Example**:

```lua
vec3:unpack()
```

---

### clamped(Number,Number) \{#clamped}

Returns a modified copy of this vector, with its length clamped from minLength to maxLength

If the vector has length zero, then the copy does too

**Example**:

```lua
vec3:clamped(1, 3)
```

---

### lengthSquared() \{#lengthSquared}

Returns the length of this vector squared

Suitable when you only care about relative lengths, because it avoids a square root

**Example**:

```lua
vec3:lengthSquared()
```

---

### cross(Vector3) \{#cross}

Sets this vector to the cross product of itself and the other vector

Returns self for chaining

**Example**:

```lua
vec3:cross(vec(2, 3, 5))
```

---

### x \{#x}

The first coordinate of this vector

Can also be gotten with the indices "r" and [1]

**Example**:

```lua
vec3.x
```

---

### y \{#y}

The second coordinate of this vector

Can also be gotten with the indices "g" and [2]

**Example**:

```lua
vec3.y
```

---

### z \{#z}

The third coordinate of this vector

Can also be gotten with the indices "b" and [3]

**Example**:

```lua
vec3.z
```

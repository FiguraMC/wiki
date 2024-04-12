import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A vector that holds 3 numbers

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Can be created using functions in the "vectors" api

For this entire page assume:

```lua
local vec3 = vec(2, 5, 3)
```

---

## Math

### <code>add()</code> \{#add}

Adds the given vector or values to this one, and returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
add(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
add(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
vec3:add(2, 0.5, 4)
```

---

### <code>div()</code> \{#div}

Divides this vector by the given vector or values, and returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
div(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
div(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
vec3:div(2, 3, 2)
```

---

### <code>mul()</code> \{#mul}

Multiplies the given vector or values into this one, and returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
mul(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
mul(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
vec3:mul(2, 3, 2)
```

---

### <code>sub()</code> \{#sub}

Subtracts the given vector or values from this one, and returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
sub(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
sub(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
vec3:sub(1, 0.5, 1)
```

---

### <code>ceil()</code> \{#ceil}

Returns a copy of this vector with its values rounded up

```lua
ceil()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:ceil()
```

---

### <code>clampLength()</code> \{#clampLength}

Modifies this vector so that its length is between minLength and maxLength

If the vector has length zero, it is unmodified

Returns self for chaining

```lua
clampLength(minLength, maxLength)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| minLength | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxLength | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:clampLength(1, 5)
```

---

### <code>clamped()</code> \{#clamped}

Returns a modified copy of this vector, with its length clamped from minLength to maxLength

If the vector has length zero, then the copy does too

```lua
clamped(minLength, maxLength)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| minLength | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| maxLength | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:clamped(1, 3)
```

---

### <code>cross()</code> \{#cross}

Sets this vector to the cross product of itself and the other vector

Returns self for chaining

```lua
cross(other)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| other | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:cross(vec(2, 3, 5))
```

---

### <code>crossed()</code> \{#crossed}

Returns a new vector which is the cross product of this and the other one

```lua
crossed(other)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| other | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:crossed(vec(2, 5, 4))
```

---

### <code>dot()</code> \{#dot}

Returns the dot product of this vector with the other

```lua
dot(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
vec3:dot(vec(2, 2, 3))
```

---

### <code>floor()</code> \{#floor}

Returns a copy of this vector with its values rounded down

```lua
floor()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:floor()
```

---

### <code>length()</code> \{#length}

Returns the length of this vector

```lua
length()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
vec3:length()
```

---

### <code>lengthSquared()</code> \{#lengthSquared}

Returns the length of this vector squared

Suitable when you only care about relative lengths, because it avoids a square root

```lua
lengthSquared()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
vec3:lengthSquared()
```

---

## Transformations

### <code>scale()</code> \{#scale}

Scales this vector by the given factor, and returns self for chaining

```lua
scale(factor)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| factor | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:scale(2)
```

---

### <code>normalize()</code> \{#normalize}

Modifies this vector so that its length is 1 unless its length was originally 0

Returns self for chaining

```lua
normalize()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:normalize()
```

---

### <code>normalized()</code> \{#normalized}

Returns a copy of this vector with length 1 unless its length was originally 0

```lua
normalized()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:normalized()
```

---

### <code>offset()</code> \{#offset}

Offsets this vector by the given factor, adding the factor to all components, and returns self for chaining

```lua
offset(factor)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| factor | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:offset(2)
```

---

### <code>reduce()</code> \{#reduce}

Reduces this vector modulo the given vector or values, and returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
reduce(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
reduce(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
vec3:reduce(1, 0.5, 2)
```

---

### <code>transform()</code> \{#transform}

Transforms this vector by the given matrix, and returns self for chaining

```lua
transform(mat)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| mat  | <code>[Matrix2](/globals/Matrices/Matrix2)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:transform(matrices.mat3())
```

---

## Utility

### <code>set()</code> \{#set}

Sets this vector to have the given values

Nil values are treated as zero

Returns self for chaining

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
set(vec)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| vec  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
set(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
vec3:set(1, 2, 3)
```

---

### <code>applyFunc()</code> \{#applyFunc}

Calls the given function on each element of this vector, and sets the values of the vector to the returns

The current index and its value is given as arguments of the function

Returns self for chaining

```lua
applyFunc(func)
```

**Parameters:**

| Name | Type                                                | Description | Default |
| ---- | --------------------------------------------------- | ----------- | ------- |
| func | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
-- Example 1:
vec3:applyFunc(math.sqrt)
-- Example 2:
vec3:applyFunc(function(v)
    return v + math.random() - 0.5
end)
```

---

### <code>augmented()</code> \{#augmented}

Returns the augmented form of this vector

The augmented form is a Vector of the same length + 1

The new axis will have the given value, or 1 when it is not specified

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
augmented()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
augmented(value)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| value | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector4](/globals/Vectors/Vector4)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
vec3:augmented(4)
```

---

### <code>copy()</code> \{#copy}

Creates and returns a copy of this vector

```lua
copy()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:copy()
```

---

### <code>reset()</code> \{#reset}

Resets this vector back to being all zeroes, and returns itself for chaining

```lua
reset()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:reset()
```

---

### <code>unpack()</code> \{#unpack}

Returns this vector's values as separate numbers

```lua
unpack()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Varargs](/tutorials/types/Varargs)</code> | -           |

**Example:**

```lua
vec3:unpack()
```

---

## Conversion

### <code>toDeg()</code> \{#toDeg}

Returns a copy of this vector, in degrees

```lua
toDeg()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:toDeg()
```

---

### <code>toRad()</code> \{#toRad}

Returns a copy of this vector, in radians

```lua
toRad()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Returns self for chaining |

**Example:**

```lua
vec3:toRad()
```

---

## Fields

### <code>x</code> \{#x}

The first coordinate of this vector

Can also be gotten with the indices "r" and [1]

**Example:**

```lua
vec3.x
vec3.r
vec3[1]
```

---

### <code>y</code> \{#y}

The second coordinate of this vector

Can also be gotten with the indices "g" and [2]

**Example:**

```lua
vec3.y
vec3.g
vec3[2]
```

---

### <code>z</code> \{#z}

The third coordinate of this vector

Can also be gotten with the indices "b" and [3]

**Example:**

```lua
vec3.z
vec3.b
vec3[3]
```

---

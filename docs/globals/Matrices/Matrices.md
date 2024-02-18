The global instance of the MatricesAPI and its subtypes

## Matrix2

### `mat2()` \{#mat2}

Creates a Matrix2 using the given parameters as columns

If you call the function with no parameters, returns the 2x2 identity matrix

**Example**:

```lua
matrices.mat2()
```

---

### `rotation2(number)` \{#rotation2}

Creates a new Matrix2 that rotates by the specified angle

Angle is given in degrees

**Example**:

```lua
matrices.rotation2(90)
```

---

### `scale2(Vector2)` \{#scale2}

Creates a new Matrix2 that scales by the specified factors

**Example**:

```lua
matrices.scale2(2, 2)
```

## Matrix3

### `mat3()` \{#mat3}

Creates a Matrix3 using the given parameters as columns

If you call the function with no parameters, returns the 3x3 identity matrix

**Example**:

```lua
matrices.mat3()
```

---

### `rotation3(Vector3)` \{#rotation3}

Creates a new Matrix3 that rotates by the specified angles

Angles are given in degrees, and the rotation order is ZYX

**Example**:

```lua
matrices.rotation3(90, 90, 90)
```

---

### `xRotation3(number)` \{#xRotation3}

Creates a new Matrix3 that rotates by the specified angle around the X axis

Angle is given in degrees

**Example**:

```lua
matrices.xRotation3(90)
```

---

### `yRotation3(number)` \{#yRotation3}

Creates a new Matrix3 that rotates by the specified angle around the Y axis

Angle is given in degrees

**Example**:

```lua
matrices.yRotation3(90)
```

---

### `zRotation3(number)` \{#zRotation3}

Creates a new Matrix3 that rotates by the specified angle around the Z axis

Angle is given in degrees

**Example**:

```lua
matrices.zRotation3(90)
```

---

### `translate3(Vector2)` \{#translate3}

Creates a new Matrix3 that translates by the specified offset

**Example**:

```lua
matrices.translate3(90, 90)
```

---

### `scale3(Vector3)` \{#scale3}

Creates a new Matrix3 that scales by the specified factors

**Example**:

```lua
matrices.scale3(2, 2, 2)
```

## Matrix4

### `mat4()` \{#mat4}

Creates a Matrix4 using the given parameters as columns

If you call the function with no parameters, returns the 4x4 identity matrix

**Example**:

```lua
matrices.mat4()
```

---

### `rotation4(Vector3)` \{#rotation4}

Creates a new Matrix4 that rotates by the specified angles

Angles are given in degrees, and the rotation order is ZYX

**Example**:

```lua
matrices.rotation4(90, 90, 90)
```

---

### `xRotation4(number)` \{#xRotation4}

Creates a new Matrix4 that rotates by the specified angle around the X axis

Angle is given in degrees

**Example**:

```lua
matrices.xRotation4(90)
```

---

### `yRotation4(number)` \{#yRotation4}

Creates a new Matrix4 that rotates by the specified angle around the Y axis

Angle is given in degrees

**Example**:

```lua
matrices.yRotation4(90)
```

---

### `zRotation4(number)` \{#zRotation4}

Creates a new Matrix4 that rotates by the specified angle around the Z axis

Angle is given in degrees

**Example**:

```lua
matrices.zRotation4(90)
```

---

### `translate4(Vector3)` \{#translate4}

Creates a new Matrix4 that translates by the specified offset

**Example**:

```lua
matrices.translate4(90, 90, 90)
```

---

### `scale4(Vector3)` \{#scale4}

Creates a new Matrix4 that scales by the specified factors

**Example**:

```lua
matrices.scale4(2, 2, 2)
```

The global instance of the VectorsAPI and its subtypes

## Vector Creation

### `vec()` \{#vec}

Creates and returns a vector of the appropriate size to hold the arguments passed in

For example, if you call vec(3, 4, 0, 2), then the function will return a Vector4 containing those values

There is a global alias "vec" for this function, meaning the "vectors." can be omitted

---

### `vec2(number,number)` \{#vec2}

Creates and returns a Vector2 with the given values

Nil values become zero

**Example**:

```lua
vectors.vec2(90, 90)
```

---

### `vec3(number,number,number)` \{#vec3}

Creates and returns a Vector3 with the given values

Nil values become zero

**Example**:

```lua
vectors.vec3(90, 90, 90)
```

---

### `vec4(number,number,number,number)` \{#vec4}

Creates and returns a Vector3 with the given values

Nil values become zero

**Example**:

```lua
vectors.vec4(90, 90, 90, 90)
```

## Colors

### `rgbToInt(Vector3)` \{#rgbToInt}

Converts the given color from RGB format to Integer format

**Example**:

```lua
vectors.rgbToInt(50, 50, 50)
```

---

### `rgbToHex(Vector3)` \{#rgbToHex}

Converts the given color from RGB format to Hex format

The "#" is not included on the return value

**Example**:

```lua
vectors.rgbToHex(81, 68, 66)
```

---

### `rgbToHSV(Vector3)` \{#rgbToHSV}

Converts the given color from HSV format to RGB format

**Example**:

```lua
vectors.rgbToHSV(81, 68, 66)
```

---

### `intToRGB(int)` \{#intToRGB}

Converts the given color from Integer format to RGB format

**Example**:

```lua
vectors.intToRGB(838860750)
```

---

### `hexToRGB(string)` \{#hexToRGB}

Parses a Hex string color into a RGB format vector

The hex "#" is optional, and it can have any length, however only the first 6 hex digits are evaluated, short hex (length 3) is also supported

For example, "#42" is the same as "420000", and "F0B" is the same as "FF00BB"

**Example**:

```lua
vectors.hexToRGB(#5bbcf4)
```

---

### `hsvToRGB(Vector3)` \{#hsvToRGB}

Converts the given color from HSV format to RGB format

**Example**:

```lua
vectors.hsvToRGB(181, 68, 66)
```

## Other

### `rotateAroundAxis(number,Vector3,Vector3)` \{#rotateAroundAxis}

Parses a Hex string color into a RGB format vector

The hex "#" is optional, and it can have any length, however only the first 6 hex digits are evaluated, short hex (length 3) is also supported

For example, "#42" is the same as "420000", and "F0B" is the same as "FF00BB"

---

### `worldToScreenSpace(Vector3)` \{#worldToScreenSpace}

Converts a position in the world into a position relative to the viewer's screen

---

### `toCameraSpace(Vector3)` \{#toCameraSpace}

Converts a position in the world into a position relative to the viewer's camera

---

### `angleToDir(Vector2)` \{#angleToDir}

Converts a pitch/yaw angle (in degrees) into a direction vector

**Example**:

```lua
vectors.angleToDir(90, 70)
```

---

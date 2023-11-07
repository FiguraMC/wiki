Contains functions which Figura adds to the default Lua "math" library table. These are accessed via the `math` global.

## Math Functions

---

### `map(number, number, number, number, number)` \{#map}

Maps the given value from one range to another

For example, if you have a value of 20 in the range 0-200, and you want to map it to the range 100-200, the result will be 110

**Example**

```lua
math.map(20, 0, 200, 100, 200) -- returns 110
```

---

### `round(number)` \{#round}

Rounds the given number to the nearest whole integer

**Example**

```lua
math.round(21.74) -- returns 22
```

---

### `sign(number)` \{#sign}

Returns the sign of the given number

Returns 1 if the number is positive, -1 if it's negative, and 0 if it's 0

**Example**

```lua
math.sign(124) -- returns 1
math.sign(-12) -- returns -1
math.sign(0) -- returns 0
```

---

### `lerpAngle(number, number, number)` \{#lerpAngle}

Similar to the default lerp function, but numbers are limited to the range of 0-360

Lerp is done towards the shortest angle

For example, a lerp of 340 and 20, with factor of 0.75, will return 10

**Example**

```lua
math.lerpAngle(340, 20, 0.75) -- returns 10
```

---

### `shortAngle(number, number)` \{#shortAngle}

Returns the shortest angle between two angles

For example, if you have an angle of 350 degrees and you want to get the shortest angle between it and 0 degrees, the result will be 10 degrees

**Example**

```lua
math.shortAngle(350, 0) -- returns 10
```

---

### `clamp(number, number, number)` \{#clamp}

Clamps the given value between min and max

**Example**

```lua
math.clamp(58, 0, 50) -- returns 50
math.clamp(-12, 0, 50) -- returns 0
math.clamp(26, 0, 50) -- returns 26
```

---

### `lerp(a, b, number)` \{#lerp}

Linearly interpolates from its first argument to its second argument, with the third argument as the parameter

Works on both regular numbers, vectors of the same type and matrices of the same type

**Example**

```lua
local rot = 0
local _rot = 0

function events.tick()
    _rot = rot
    rot = rot + 1
end

function events.render(delta)
    math.lerp(_rot, rot, delta)
end
```

---

## Numbers

---

### `playerScale` \{#playerScale}

The constant of the player scaling related to the world

**Example**

```lua
math.playerScale
```

---

### `worldScale` \{#worldScale}

The constant of the world scaling related with the player

**Example**

```lua
math.worldScale
```

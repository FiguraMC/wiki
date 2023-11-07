Represents a particle that can be spawned and modified

Obtained by indexing the ParticleAPI

Exists as an object-oriented alternative to particles:addParticle()

For the examples on this page assume:

```lua
myParticle = particles["explosion"]
```

---

### `spawn()` \{#spawn}

Spawns the particle with its current properties (set with the other functions)

**Example**:

```lua
myParticle:spawn()
```

---

### `setPos(Vector3)` \{#setPos}

Sets the position of the particle

**Example**:

```lua
myParticle:setPos(player:getPos())
```

---

### `getPos()` \{#getPos}

Gets the position of the particle

**Example**:

```lua
myParticle:getPos()
```

---

### `setColor(Vector3 or Vector4)` \{#setColor}

Sets the particle color, most particles don't support it. The alpha value can be excluded

**Example**:

```lua
myParticle:setColor(0, 0, 1)
```

---

### `getColor()` \{#getColor}

Gets the color as set by setcolor

**Example**:

```lua
myParticle:getColor()
```

---

### `setScale(Vector3)` \{#setScale}

Sets the scale of the particle

**Example**:

```lua
myParticle:setScale(2, 2, 2)
```

---

### `getScale()` \{#getScale}

Gets the scale of the particle

**Example**:

```lua
myParticle:getScale()
```

### `setVelocity(Vector3)` \{#setVelocity}

Sets the velocity of the particle

**Example**:

```lua
myParticle:setVelocity(2, 2, 2)
```

---

### `getVelocity()` \{#getVelocity}

Gets the velocity of the particle

**Example**:

```lua
myParticle:getVelocity()
```

### `setLifetime(integer)` \{#setLifetime}

Sets how long the particle should stay in the world. Particles with animations will animate in relation to their life left, so longer lives will make the animation play slower.

**Example**:

```lua
myParticle:setLifetime(200)
```

---

### `getLifetime()` \{#getLifetime}

Gets the lifetime

**Example**:

```lua
myParticle:getLifetime()
```

### `setPower(number)` \{#setPower}

Multiplies the particle's velocity every time it's run

**Example**:

```lua
myParticle:setPower(5)
```

---

### `getPower()` \{#getPower}

Silly power

:::caution
getPower doesn't get the particle's actual power, but the number last passed into setPower
:::

**Example**:

```lua
myParticle:getPower()
```

### `setGravity(number)` \{#setGravity}

Sets the strength of gravity

**Example**:

```lua
myParticle:setGravity(5)
```

---

### `getGravity()` \{#getGravity}

Gets the gravity value

**Example**:

```lua
myParticle:getGravity()
```

### `setPhysics(bool)` \{#setPhysics}

Sets if the particle will experience physics

**Example**:

```lua
myParticle:setPhysics(false)
```

---

### `hasPhysics()` \{#hasPhysics}

Gets if the particle has physics

**Example**:

```lua
myParticle:hasPhysics()
```

### `setSize(number)` \{#setSize}

Sets the scale of the particle, identical to setScale

**Example**:

```lua
myParticle:setSize(5)
```

---

### `getSize()` \{#getSize}

Gets the size of the particle

**Example**:

```lua
myParticle:getSize()
```

---

### `isAlive()` \{#isAlive}

Gets if the particle is still in the world

**Example**:

```lua
myParticle:isAlive()
```

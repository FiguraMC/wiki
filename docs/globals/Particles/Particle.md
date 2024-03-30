import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Represents a particle that can be spawned and modified

Obtained by indexing the ParticleAPI

Exists as an object-oriented alternative to particles:addParticle()

For the examples on this page assume:

```lua
myParticle = particles["explosion"]
```

---

### <code>spawn()</code> \{#spawn}

Spawns this particle with the current properties

```lua
spawn()
```

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Spawns the particle in the world |

**Example:**

```lua
myParticle:spawn()
```

---

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Sets this particle position

The position is given in world coordinates

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setPos(pos)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------------------------------|-------------|---------|
| pos | <code>[Vector3](/globals/Vectors/Vector3)</code> | Sets the position of the particle in the world | `vec(0,0,0)` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPos(x, y, z)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| x | <code>[Number](#)</code> | Sets the x position of the particle in the world | `0` |
| y | <code>[Number](#)</code> | TSets the y position of the particle in the world | `0` |
| z | <code>[Number](#)</code> | Sets the x position of the particle in the world | `0` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- player position example
myParticle:setPos(player:getPos())
-- model part position example
myParticle:setPos(modelpart:partToWorldMatrix():apply())
```

---

### <code>getPos()</code> \{#getPos}

Gets this particle position

```lua
getPos()
```

**Returns:**

| Type | Description |
|--------------------------------------------------|-------------|
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Gets the position the particle is at |

**Example:**

```lua
myParticle:getPos()
```

---

### <code>setColor()</code> \{#setColor}

**Aliases:** `color()`

Sets this particle's color, values must be between 0 and 1

Accepts an alpha value, but most particles do not support it

Default RGBA of 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setColor(rgb)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------------------------------|-------------|---------|
| rgb | <code>[Vector3](/globals/Vectors/Vector3)</code> | The RGB color applied to the particle | `vec(1,1,1)` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setColor(rgba)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------------------------------|-------------|---------|
| rgba | <code>[Vector4](/globals/Vectors/Vector4)</code> | The RGBA color applied to the particle | `vec(1,1,1,1)` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setColor(r, g, b, a)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| r | <code>[Number](#)</code> | The R tint applied to the particle | `1` |
| g | <code>[Number](#)</code> | The G tint applied to the particle | `1` |
| b | <code>[Number](#)</code> | The B tint applied to the particle | `1` |
| a | <code>[Number](#)</code> | The A tint applied to the particle | `1` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
myParticle:setColor(1, 0, 1)
```

---

### <code>getColor()</code> \{#getColor}

Gets this particle color

```lua
getColor()
```

**Returns:**

| Type | Description |
|--------------------------------------------------|-------------|
| <code>[Vector4](/globals/Vectors/Vector4)</code> | Gets the RGBA color applied to the particle by [setColor](./Particle#setColor) |

**Example:**

```lua
myParticle:getColor()
```

---

### <code>setScale()</code> \{#setScale}

**Aliases:** `scale()`, `setSize()`, `size()`

Sets this particle scale

```lua
setScale(scale)
```

**Parameters:**

| Name | Type | Description | Default |
|-------|--------------------------|-------------|---------|
| scale | <code>[Number](#)</code> | Sets the scale of both axes of the particle | 1 |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

**Example:**

```lua
myParticle:setScale(2)
```

---

### <code>getScale()</code> \{#getScale}

**Aliases:** `getSize()`

Gets this particle scale

```lua
getScale()
```

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | Gets the scale of the particle |

**Example:**

```lua
myParticle:getScale()
```

---

### <code>setVelocity()</code> \{#setVelocity}

**Aliases:** `velocity()`

Sets the velocity of this particle

The velocity is given in world coordinates

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setVelocity(velocity)
```

**Parameters:**

| Name | Type | Description | Default |
|----------|--------------------------------------------------|-------------|---------|
| velocity | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | The default velocity of the particle |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setVelocity(x, y, z)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| x | <code>[Number](#)</code> | - | The default x velocity of the particle |
| y | <code>[Number](#)</code> | - | The default y velocity of the particle |
| z | <code>[Number](#)</code> | - | The default z velocity of the particle |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
myParticle:setVelocity(0, 5, 0)
```

---

### <code>getVelocity()</code> \{#getVelocity}

Gets the velocity of this particle

```lua
getVelocity()
```

**Returns:**

| Type | Description |
|--------------------------------------------------|-------------|
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Gets the velocity of the |

**Example:**

```lua
myParticle:getVelocity()
```

---

### <code>setLifetime()</code> \{#setLifetime}

**Aliases:** `lifetime()`

Sets this particle lifetime, which is how many ticks this particle should stay in the world

```lua
setLifetime(lifetime)
```

**Parameters:**

| Name | Type | Description | Default |
|----------|---------------------------|-------------|---------|
| lifetime | <code>[Integer](#)</code> | How long the particle will stay in the world in ticks | The default lifetime of the particle |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

**Example:**

```lua
myParticle:setLifeTime(100)
```

---

### <code>getLifetime()</code> \{#getLifetime}

Gets this particle current lifetime

```lua
getLifetime()
```

**Returns:**

| Type | Description |
|---------------------------|-------------|
| <code>[Integer](#)</code> | Gets how long the particle will stay in the world in ticks |

**Example:**

```lua
myParticle:getLifetime()
```

---

### <code>setPower()</code> \{#setPower}

**Aliases:** `power()`

Multiplies the particle's velocity every time it's run

```lua
setPower(power)
```

**Parameters:**

| Name | Type | Description | Default |
|-------|--------------------------|-------------|---------|
| power | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

**Example:**

```lua
--todo
```

---

### <code>getPower()</code> \{#getPower}

Gets the last number passed into setPower, but not the total power of the particle

```lua
getPower()
```

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | Gets the power of the particle |

**Example:**

```lua
myParticle:getPower()
```

---

### <code>setGravity()</code> \{#setGravity}

**Aliases:** `gravity()`

Sets the strength of the particle's gravity

```lua
setGravity(gravity)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|--------------------------|-------------|---------|
| gravity | <code>[Number](#)</code> | Sets the strength of the particle's gravity | `1` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

**Example:**

```lua
--todo
```

---

### <code>getGravity()</code> \{#getGravity}

Gets this particle gravity

```lua
getGravity()
```

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | Gets the strength of the particle's gravity |

**Example:**

```lua
myParticle:getGravity()
```

---

### <code>setPhysics()</code> \{#setPhysics}

**Aliases:** `physics()`

Sets if this particle has physics

```lua
setPhysics(physics)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------|-------------|---------|
| physics | <code>[Boolean](#)</code> | Boolean that turns physics on if true, and turns physics off if false | `true` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

**Example:**

```lua
myParticle:setPhysics(false)
```

---

### <code>hasPhysics()</code> \{#hasPhysics}

Gets if this particle has physics

```lua
hasPhysics()
```

**Returns:**

| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | Gets if this particle has physics |

**Example:**

```lua
myParticle:hasPhysics()
```

---

### <code>remove()</code> \{#remove}

Removes this particle from the world

```lua
remove()
```

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the particle for chaining |

**Example:**

```lua
myParticle:remove()
```

---

### <code>isAlive()</code> \{#isAlive}

Checks if this particle is not flagged for removal

```lua
isAlive()
```

**Returns:**

| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | Returns if the particle is alive |

**Example:**

```lua
myParticle:isAlive()
```

---

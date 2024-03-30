import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API which is used for dealing with Minecraft's particles

Particles instances are created when indexing their id

Accessed using the name "particles"

### <code>newParticle()</code> \{#newParticle}

Creates a particle with the given name at the specified position, with the given velocity

Some particles have special properties, like the "dust" particle

For these particles, the special properties can be put into the "name" parameter, the same way as it works for commands

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
newParticle(name, pos)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------------------------------|-------------|---------|
| name | <code>[String](#)</code> | The particle's [java edition id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | Required |
| pos | <code>[Vector3](/globals/Vectors/Vector3)</code> | The position in the world the particle will spawn in at | Required |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the spawned particle for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
newParticle(name, pos, vel)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------------------------------|-------------|---------|
| name | <code>[String](#)</code> | The particle's [java edition id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | Required |
| pos | <code>[Vector3](/globals/Vectors/Vector3)</code> | The position in the world the particle will spawn in at | Required |
| vel | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | The particle's original velocity |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the spawned particle for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
newParticle(name, posX, posY, posZ)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| name | <code>[String](#)</code> | The particle's [java edition id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | Required |
| posX | <code>[Number](#)</code> | The x position in the world the particle will spawn in at | Required |
| posY | <code>[Number](#)</code> | The y position in the world the particle will spawn in at | `0` |
| posZ | <code>[Number](#)</code> | The z position in the world the particle will spawn in at | `0` |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the spawned particle for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
newParticle(name, pos, velX, velY, velZ)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------------------------------|-------------|---------|
| name | <code>[String](#)</code> | The particle's [java edition id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | Required |
| pos | <code>[Vector3](/globals/Vectors/Vector3)</code> | The position in the world the particle will spawn in at | Required |
| velX | <code>[Number](#)</code> | - | The particle's original x velocity |
| velY | <code>[Number](#)</code> | - | The particle's original y velocity |
| velZ | <code>[Number](#)</code> | - | The particle's original z velocity |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the spawned particle for chaining |

    </TabItem>
    <TabItem value="overload-5" label="Overload 5">

```lua
newParticle(name, posX, posY, posZ, vel)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------------------------------|-------------|---------|
| name | <code>[String](#)</code> | The particle's [java edition id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | Required |
| posX | <code>[Number](#)</code> | The x position in the world the particle will spawn in at | Required |
| posY | <code>[Number](#)</code> | The y position in the world the particle will spawn in at | `0` |
| posZ | <code>[Number](#)</code> | The z position in the world the particle will spawn in at | `0` |
| vel | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | The particle's original velocity |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the spawned particle for chaining |

    </TabItem>
    <TabItem value="overload-6" label="Overload 6">

```lua
newParticle(name, posX, posY, posZ, velX, velY, velZ)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| name | <code>[String](#)</code> | The particle's [java edition id](<https://minecraft.wiki/w/Particles_(Java_Edition)>) | Required |
| posX | <code>[Number](#)</code> | The x position in the world the particle will spawn in at | Required |
| posY | <code>[Number](#)</code> | The y position in the world the particle will spawn in at | `0` |
| posZ | <code>[Number](#)</code> | The z position in the world the particle will spawn in at | `0` |
| velX | <code>[Number](#)</code> | - | The particle's original x velocity |
| velY | <code>[Number](#)</code> | - | The particle's original y velocity |
| velZ | <code>[Number](#)</code> | - | The particle's original z velocity |

**Returns:**

| Type | Description |
|------------------------------------------------------|-------------|
| <code>[Particle](/globals/Particles/Particle)</code> | Returns the spawned particle for chaining |

    </TabItem>

</Tabs>

**Example (Overload 2):**

```lua
-- smoke example
particles:newParticle("smoke", player:getPos(), vec(0, 5, 0))
-- dust example
particles:newParticle("dust 1 0 1 1", player:getPos(), vec(0, 5, 0))
```

---

### <code>removeParticles()</code> \{#removeParticles}

Removes all particles spawned from this avatar

```lua
removeParticles()
```

**Returns:**

| Type | Description |
|------------------------------------------------|-------------|
| <code>[ParticleAPI](/globals/Particles)</code> | Returns the particle api for chaining |

**Example:**

```lua
particles:removeParticles()
```

---

### <code>isPresent()</code> \{#isPresent}

Checks if this particle id is registered

```lua
isPresent(id)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| id | <code>[String](#)</code> | The particle name | `nil` |

**Returns:**

| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | Returns true or false value depending on if the particle is registered |

**Example:**

```lua
particles:isPresent("minecraft:smoke")
```

---

The global instance of ParticleAPI

### `newParticle(string,Vector3)` \{#newParticle}

Creates a particle with the given name at the specified position, with the given velocity

Some particles have special properties, like the "dust" particle

For these particles, the special properties can be put into the "name" parameter, the same way as it works for commands

Optionally you can also add the velocity after the position

:::caution
Particle behavior and spawning methods vary per particle, refer to the /particle command for assistance spawning some particles
:::

**Example**:

```lua
particles:newParticle("explosion", player:getPos())
```

---

### `removeParticles()` \{#removeParticles}

**Example**:

```lua
particles:removeParticles()
```

---

### `isPresent(string)` \{#isPresent}

**Example**:

```lua
particles:isPresent("explosion")
```

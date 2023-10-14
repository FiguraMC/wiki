This page is a WIP!

---

### `spawn()` {#spawn}

Spawns the particle with its current properties (set with the other functions)

---

### `setPos(Vec3)` {#setPos}

Sets the position of the particle

---

### `setColor(Vec3 or Vec4)` {#setColor}

Sets the particle color, most particles don't support it. The alpha value can be excluded

---

### `setScale(Vec3)` {#setScale}

Sets the scale of the particle

---

### `setVelocity(Vec3)` {#setVelocity}

Sets the velocity of the particle

---

### `setLifetime(integer)` {#setLifetime}

Sets how long the particle should stay in the world. Particles with animations will animate in relation to their life left, so longer lives will make the animation play slower.

---

### `setPower()` {#setPower}

I honestly don't know what this does at time of writing

---

### `setGravity(number)` {#setGravity}

Sets the strength of gravity

---

### `setPhysics(bool)` {#setPhysics}

Sets if the particle will experience physics

---

### `setSize(number)` {#setSize}

Sets the scale of the particle, identical to setScale

---

### `isAlive()` {#isAlive}

Gets if the particle is still in the world

---

### `getPos()` {#getPos}

Gets the position of the particle

---

### `getColor()` {#getColor}

Gets the color as set by setcolor

---

### `getScale()` {#getScale}

Gets the scale of the particle

---

### `getVelocity()` {#getVelocity}

Gets the velocity of the particle

---

### `getLifetime()` {#getLifetime}

Gets the lifetime

---

### `getGravity()` {#getGravity}

Gets the gravity value

---

### `getPower()` {#getPower}

Silly power

---

### `hasPhysics()` {#hasPhysics}

Gets if the particle has physics

---

### `getSize()` {#getSize}

Gets the size of the particle

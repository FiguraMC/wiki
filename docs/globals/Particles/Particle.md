This page is a WIP!

### spawn

Spawns the particle with its current properties (set with the other functions)

### isAlive

Gets if the particle is still in the world

### setPos(vec3)

Sets the position of the particle

### getPos

Gets the position of the particle

### setColor(vec3 or vec4)

Sets the particle color, most particles don't support it. The alpha value can be excluded

### getColor

Gets the color as set by setcolor

### setScale(vec3)

Sets the scale of the particle

### getScale

Gets the scale of the particle

### setVelocity(vec3)

Sets the velocity of the particle

### getVelocity

Gets the velocity of the particle

### setLifetime(integer)

Sets how long the particle should stay in the world. Particles with animations will animate in relation to their life left, so longer lives will make the animation play slower.

### getLifetime

Gets the lifetime

### setGravity(number)

Sets the strength of gravity

### getGravity

Gets the gravity value

### setPower

I honestly don't know what this does at time of writing

### getPower

Gets the power

### setPhysics(bool)

Sets if the particle will experience physics

### hasPhysics

Gets if the particle has physics

### setSize(number)

Sets the scale of the particle, identical to setScale

### getSize

Gets the size of the particle

Using the particle API you can spawn particles from Minecraft. These work similarly to the <code>/particle</code> command in-game. For particles with special properties like dust, they are placed in the name.

Most of the article assumes you know to avoid calling the player in init.

## Spawning Particles

```lua
particles:newParticle(particleID,position,velocity)
```

If you're looking on the [Minecraft wiki](https://minecraft.fandom.com/wiki/Particles) then the particle id is the name under the 'Java Edition ID Name' column. Or, it's the same id used by the /particle command. If you're using Minecraft particles you can exclude the Minecraft "mod name".

```lua
particles:newParticle("minecraft:explosion",player:getPos())
```

I've added the player position, but excluded the velocity.

Dust example, it's color is included in its name:

```lua
particles:newParticle("dust 0 1 1 1",player:getPos())
```

This will spawn an aqua dust particle as the color values need a number between 0 and 1, the fourth number is the alpha. I excluded the 'minecraft:' mod name to demonstrate that it's unnecessary.

## Spawning At A Part Location

To spawn a particle at a modelPart's position you'll need to get the position matrix of that part, and insert it into the position like normal.

```lua
particles:newParticle("explosion",modelPart:partToWorldMatrix():apply())
```

Where <code>modelPart</code> is a reference to a real modelPart in your avatar.

## An Alternative Method

You can store a reference to a specific particle, and then use it later to change its properties wile it still exists in the world.

```lua
local boom = particles["explosion"]

function events.entity_init()
    boom:spawn():setPos(player:getPos())
end
```

It's in an entity_init event to protect from an entity init error

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

## Community Resources

### Confetti by Manuel

Spawns custom particles that you make in Blockbench. [Find here in the Discord.](https://discord.com/channels/1129805506354085959/1132326640718970990)

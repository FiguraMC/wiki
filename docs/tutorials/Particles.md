Using the particle API you can spawn particles from Minecraft. These work similarly to the <code>/particle</code> command in-game. For particles with special properties like dust, they are placed in the name.

Most of the article assumes you know to avoid calling the player in init.

## Spawning Particles

```lua
particles:newParticle(particleID, position, velocity)
```

If you're looking on the [Minecraft wiki](https://minecraft.wiki/w/Particles) then the particle id is the name under the 'Java Edition ID Name' column. Or, it's the same id used by the /particle command. If you're using Minecraft particles you can exclude the Minecraft "mod name".

```lua
particles:newParticle("minecraft:explosion", player:getPos())
```

I've added the player position, but excluded the velocity.

Dust example, it's color is included in its name:

```lua
particles:newParticle("dust 0 1 1 1", player:getPos())
```

This will spawn an aqua dust particle as the color values need a number between 0 and 1, the fourth number is the alpha. I excluded the 'minecraft:' mod name to demonstrate that it's unnecessary.

## Spawning At A Part Location

To spawn a particle at a modelPart's position you'll need to get the position matrix of that part, and insert it into the position like normal.

```lua
particles:newParticle("explosion", modelPart:partToWorldMatrix():apply())
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

## Community Resources

### Confetti by Manuel

Spawns custom particles that you make in Blockbench. [Find it here on GitHub](https://github.com/Manuel-3/confetti)

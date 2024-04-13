---
sidebar_position: 1
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

The player API inherits functions from the [living entity API](../globals/Player/LivingEntity)

The player API is accessed through the `player` global. Like so: `player:isGliding()`

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Player information that isn't synced between clients is kept in the host API. Examples of unsynced data are: Creative flying, status effects, and remaining air amount.

:::note

There are times during a script's functioning where the script will run, but the player global will be empty. This will cause the "Tried to access the EntityAPI before its initialization" error. To solve this, move the player API call into a protected event, like [`tick`](globals/Events#TICK). If you wish to initialize a check during the initialization phase of a script (outside of any other event) you can use the [`entity_init`](globals/Events#TICK) event.

:::

All provided examples assume you're using a tick event.

To reiterate:

```lua
-- error-next-line
player:isGliding() -- will error
function events.entity_init()
    player:isGliding() -- will not error, but will only play once
end

-- error-next-line
player:isGliding() -- will error
function events.tick()
    player:isGliding() -- won't error, and will update once a tick
end

-- error-next-line
player:isGliding() -- will error
```

---

## Player Transformations

### <code>getPos()</code> \{#getPos}

Gets the position of the entity in the world

If delta is passed in, then it will be used to linearly interpolate the position of the entity between the previous tick and the current tick

The default value of delta is 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getPos(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
player:getPos()
```

---

### <code>getRot()</code> \{#getRot}

Gets the rotation of the entity in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the entity between the previous tick and the current tick

The default value of delta is 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getRot(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
player:getRot()
```

---

### <code>getBodyYaw()</code> \{#getBodyYaw}

Gets the yaw of this entity's body in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the body between the previous tick and the current tick

The default value of delta is 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getBodyYaw()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getBodyYaw(delta)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| delta | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
player:getBodyYaw()
```

---

### <code>getLookDir()</code> \{#getLookDir}

Returns a unit vector pointing in the direction that this entity is looking

See the blue line in the F3+B screen for an example

```lua
getLookDir()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
player:getLookDir()
```

---

### <code>getVelocity()</code> \{#getVelocity}

Gets the current velocity of this entity in world coordinates, calculated as its position this tick minus its position last tick

```lua
getVelocity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
player:getVelocity()
```

---

## Player Actions

### <code>getPose()</code> \{#getPose}

Returns the current pose of the player

This can be one of: "STANDING", "FALL_FLYING", "SLEEPING", "SWIMMING", "SPIN_ATTACK", "CROUCHING", "LONG_JUMPING", or "DYING"

```lua
getPose()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getPose() == "CROUCHING"
```

---

### <code>isCrouching()</code> \{#isCrouching}

Returns true if this entity is visually sneaking

```lua
isCrouching()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isCrouching()
```

---

### <code>isGliding()</code> \{#isGliding}

Returns if this entity is gliding with an elytra

```lua
isGliding()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- error-next-line
player:isGliding() -- will error
function events.entity_init()
    player:isGliding() -- will not error, but will only play once
end

-- error-next-line
player:isGliding() -- will error
function events.tick()
    player:isGliding() -- won't error, and will update once a tick
end

-- error-next-line
player:isGliding() -- will error
```

---

### <code>isFishing()</code> \{#isFishing}

Returns if the player is currently fishing

```lua
isFishing()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isFishing()
```

---

### <code>isBlocking()</code> \{#isBlocking}

Return if this entity is blocking with a shield

```lua
isBlocking()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isBlocking()
```

---

### <code>isVisuallySwimming()</code> \{#isVisuallySwimming}

Returns if this entity has the swimming pose

```lua
isVisuallySwimming()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isVisuallySwimming()
```

---

### <code>isClimbing()</code> \{#isClimbing}

Returns true if the entity is currently using a climbable block, like a ladder or vine

```lua
isClimbing()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isClimbing()
```

---

### <code>isSneaking()</code> \{#isSneaking}

Returns true if this entity is logically sneaking (can't fall from blocks edges, can't see nameplate behind walls, etc)

```lua
isSneaking()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isSneaking()
```

---

### <code>isSprinting()</code> \{#isSprinting}

Returns true if this entity is currently sprinting

```lua
isSprinting()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isSprinting()
```

---

### <code>riptideSpinning()</code> \{#riptideSpinning}

Returns if this entity is riptide spinning

```lua
riptideSpinning()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:riptideSpinning()
```

---

## Player Data

### <code>isLoaded()</code> \{#isLoaded}

Checks if this entity object is still being updated and loaded

A non-loaded entity would be someone or something which is in another dimension or out of the render distance for example

```lua
isLoaded()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isLoaded()
```

---

### <code>getNbt()</code> \{#getNbt}

Gets a table containing the NBT of this entity

Please note that not all values in the entity's NBT may be synced, as some are handled only on the server side

```lua
getNbt()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
player:getNbt()
```

---

### <code>getChargedAttackDelay()</code> \{#getChargedAttackDelay}

Returns the delay (in ticks) of charged attacks

```lua
getChargedAttackDelay()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getChargedAttackDelay()
```

---

### <code>getExperienceProgress()</code> \{#getExperienceProgress}

Gets the progress of the way towards the player's next level, as a value from 0 to 1

```lua
getExperienceProgress()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getExperienceProgress()
```

---

### <code>getExperienceLevel()</code> \{#getExperienceLevel}

Gets the player's current level

```lua
getExperienceLevel()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getExperienceLevel()
```

---

### <code>getShoulderEntity()</code> \{#getShoulderEntity}

Returns a table of the nbt of this entity left or right shoulder entity

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getShoulderEntity()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getShoulderEntity(right)
```

**Parameters:**

| Name  | Type                                              | Description | Default |
| ----- | ------------------------------------------------- | ----------- | ------- |
| right | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
player:getShoulderEntity()
```

---

### <code>getTeamInfo()</code> \{#getTeamInfo}

Returns a table with information about the team of this player

Returns nil if the player doesn't have a team

```lua
getTeamInfo()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
player:getTeamInfo()
```

---

### <code>getFood()</code> \{#getFood}

Gets the current food level of the player, from 0 to 20

```lua
getFood()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getFood()
```

---

### <code>getGamemode()</code> \{#getGamemode}

Returns "SURVIVAL", "CREATIVE", "ADVENTURE", or "SPECTATOR" depending on the player's gamemode

If the gamemode is unknown, returns nil

```lua
getGamemode()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getGamemode()
```

---

### <code>getSaturation()</code> \{#getSaturation}

Gets the current saturation level of the player

```lua
getSaturation()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getSaturation()
```

---

### <code>getExhaustion()</code> \{#getExhaustion}

Gets the current exhaustion level of the player

```lua
getExhaustion()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getExhaustion()
```

---

### <code>getAbsorptionAmount()</code> \{#getAbsorptionAmount}

Returns the amount of this entity's absorption (yellow hearts)

```lua
getAbsorptionAmount()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getAbsorptionAmount()
```

---

### <code>getArmor()</code> \{#getArmor}

Returns the amount of armor points this entity has

```lua
getArmor()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getArmor()
```

---

### <code>getMaxHealth()</code> \{#getMaxHealth}

Returns the maximum amount of health this entity can have

```lua
getMaxHealth()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getMaxHealth()
```

---

### <code>getHealth()</code> \{#getHealth}

Returns the amount of health this entity has remaining

```lua
getHealth()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getHealth()
```

---

### <code>getDeathTime()</code> \{#getDeathTime}

Returns the number of ticks this entity has been dead for

```lua
getDeathTime()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getDeathTime()
```

---

### <code>getStingerCount()</code> \{#getStingerCount}

Returns the number of bee stingers sticking out of this entity

```lua
getStingerCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getStingerCount()
```

---

### <code>getArrowCount()</code> \{#getArrowCount}

Returns the number of arrows sticking out of this entity

```lua
getArrowCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getArrowCount()
```

---

### <code>getEntityCategory()</code> \{#getEntityCategory}

Returns the category of this entity

The categories are: "ARTHROPOD", "UNDEAD", "WATER", "ILLAGER" and by default, "UNDEFINED"

```lua
getEntityCategory()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getEntityCategory() == "UNDEAD"
```

---

### <code>isSensitiveToWater()</code> \{#isSensitiveToWater}

Returns if this entity takes damage to water

```lua
isSensitiveToWater()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isSensitiveToWater()
```

---

### <code>getName()</code> \{#getName}

Gets the name of this entity, if it has a custom name

If it doesn't, returns a translated form of getType()

```lua
getName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getName()
```

---

### <code>isAlive()</code> \{#isAlive}

Returns whether this entity is alive or not

```lua
isAlive()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isAlive()
```

---

### <code>getType()</code> \{#getType}

Gets the Minecraft identifier of this entity

For instance, "minecraft:pig"

```lua
getType()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getType()
```

---

### <code>getControlledVehicle()</code> \{#getControlledVehicle}

Return the vehicle that this entity is controlling

```lua
getControlledVehicle()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**Example:**

```lua
player:getControlledVehicle()
```

---

### <code>getControllingPassenger()</code> \{#getControllingPassenger}

Returns the entity that is controlling this entity

```lua
getControllingPassenger()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**Example:**

```lua
player:getControllingPassenger()
```

---

### <code>getPassengers()</code> \{#getPassengers}

Returns a List of entities of all passengers this entity has

```lua
getPassengers()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
player:getPassengers()
```

---

### <code>getFrozenTicks()</code> \{#getFrozenTicks}

Gets the number of ticks this entity has been freezing in powder snow for

```lua
getFrozenTicks()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getFrozenTicks()
```

---

### <code>getMaxAir()</code> \{#getMaxAir}

Gets the maximum amount of air this entity can have

```lua
getMaxAir()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getMaxAir()
```

---

### <code>getDimensionName()</code> \{#getDimensionName}

Gets the Minecraft identifier of the dimension this entity is in

```lua
getDimensionName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getDimensionName()
```

---

### <code>isUnderwater()</code> \{#isUnderwater}

Returns true if this entity's eyes are touching water

```lua
isUnderwater()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isUnderwater()
```

---

### <code>isInWater()</code> \{#isInWater}

Returns true if this entity is currently in a water block, including waterlogging

```lua
isInWater()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isInWater()
```

---

### <code>isInRain()</code> \{#isInRain}

Returns true if this entity is currently standing in rain

```lua
isInRain()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isInRain()
```

---

### <code>isWet()</code> \{#isWet}

Returns true in any of three conditions: if the entity is in water, if the entity is in rain, or if the entity is in a bubble column

Otherwise, returns false

```lua
isWet()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isWet()
```

---

### <code>isInLava()</code> \{#isInLava}

Returns true if this entity is currently in lava

```lua
isInLava()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isInLava()
```

---

### <code>isOnFire()</code> \{#isOnFire}

Returns true if this entity is currently on fire

```lua
isOnFire()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isOnFire()
```

---

### <code>isInvisible()</code> \{#isInvisible}

Returns true if this entity is invisible, for one reason or another

```lua
isInvisible()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isInvisible()
```

---

### <code>getVehicle()</code> \{#getVehicle}

Returns a proxy for the entity that this player is currently riding

If the player isn't riding anything, returns nil

```lua
getVehicle()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**Example:**

```lua
-- highlight-next-line
local vehicle = player:getVehicle()
-- We make sure `vehicle` isn't nil so we can safely call `getType()`
if vehicle and vehicle:getType() == "minecraft:pig" then
    log("You're riding a pig")
end
```

---

### <code>isSilent()</code> \{#isSilent}

Returns true if this entity is silent

```lua
isSilent()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isSilent()
```

---

### <code>isGlowing()</code> \{#isGlowing}

Returns true if this entity is currently glowing

```lua
isGlowing()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isGlowing()
```

---

### <code>getBoundingBox()</code> \{#getBoundingBox}

Returns the size of this entity's bounding box as a Vector3

\{x, y, z} are the width, height, and width

Minecraft entity hitboxes always have square bases

```lua
getBoundingBox()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
player:getBoundingBox()
```

---

### <code>isOnGround()</code> \{#isOnGround}

Returns whether or not this entity is currently on the ground

:::caution

Due to a glitch in Minecraft's code this function is unreliable, and will misfire in multiple situations such as being underwater, standing on a boat, or standing on a slime block.

**Work Around:**

```lua
-- check the blockstate of the block directly underneath the player
world.getBlockState(player:getPos():add(0, -0.1, 0)):isSolidBlock()
```

:::

```lua
isOnGround()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isOnGround()
```

---

### <code>getEyeY()</code> \{#getEyeY}

Returns the Y level of this entity's eyes

Not to be confused with getEyeHeight, this function also takes the entity itself's Y position into account

```lua
getEyeY()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getEyeY()
```

---

### <code>getEyeHeight()</code> \{#getEyeHeight}

Returns the current eye height of this entity

```lua
getEyeHeight()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getEyeHeight()
```

---

### <code>getTargetedEntity()</code> \{#getTargetedEntity}

Returns a proxy for your currently targeted Entity

This Entity appears on the F3 screen

Maximum and Default distance is 20, Minimum is 0

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getTargetedEntity()
```

**Returns:**

| Type                                             | Description     |
| ------------------------------------------------ | --------------- |
| <code>[Entity](/globals/Player/Entity)</code>    | Targeted entity |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Hit position    |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getTargetedEntity(distance)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| distance | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description     |
| ------------------------------------------------ | --------------- |
| <code>[Entity](/globals/Player/Entity)</code>    | Targeted entity |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | Hit position    |

    </TabItem>

</Tabs>

**Example:**

```lua
local entity, pos = player:getTargetedEntity(host:getReachDistance() or 4.5) -- host is not synced
if entity and entity:getType() == "minecraft:creeper" then
    log("You're looking at a creeper")
end
```

---

### <code>getTargetedBlock()</code> \{#getTargetedBlock}

Returns a proxy for your currently targeted BlockState

This BlockState appears on the F3 screen

The maximum (and default) distance is 20, minimum is -20

Returns the block, the hit position, and the targeted block face as three separate values

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getTargetedBlock()
```

**Returns:**

| Type                                                 | Description         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | Targeted block      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | Hit position        |
| <code>[String](/tutorials/types/Strings)</code>      | Targeted block face |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getTargetedBlock(ignoreLiquids)
```

**Parameters:**

| Name          | Type                                              | Description | Default |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| ignoreLiquids | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                                 | Description         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | Targeted block      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | Hit position        |
| <code>[String](/tutorials/types/Strings)</code>      | Targeted block face |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
getTargetedBlock(ignoreLiquids, distance)
```

**Parameters:**

| Name          | Type                                              | Description | Default |
| ------------- | ------------------------------------------------- | ----------- | ------- |
| ignoreLiquids | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |
| distance      | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

**Returns:**

| Type                                                 | Description         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | Targeted block      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | Hit position        |
| <code>[String](/tutorials/types/Strings)</code>      | Targeted block face |

    </TabItem>

</Tabs>

**Example:**

```lua
local block, hitPos, side = player:getTargetedBlock(true, 4.5)
if block.id == "minecraft:grass_block" then
    log("You're looking at grass")
end
```

---

### <code>hasInventory()</code> \{#hasInventory}

Checks if the entity has an inventory (Horses, Camels, LLamas, …)

```lua
hasInventory()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:hasInventory()
```

---

### <code>hasContainer()</code> \{#hasContainer}

Checks if the entity has a container (Chest Boats, Minecarts with Chests, …)

```lua
hasContainer()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:hasContainer()
```

---

### <code>isLiving()</code> \{#isLiving}

Gets if this entity is a Living Entity

```lua
isLiving()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isLiving()
```

---

### <code>isPlayer()</code> \{#isPlayer}

Gets if this entity is a Player Entity

```lua
isPlayer()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isPlayer()
```

---

### <code>getPermissionLevel()</code> \{#getPermissionLevel}

Returns the permission level number of this entity

Server Operators, by default, have the permission level of 4

```lua
getPermissionLevel()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getPermissionLevel()
```

---

## Vanilla Settings

### <code>getModelType()</code> \{#getModelType}

Returns "SLIM" or "DEFAULT", depending on the player's model type

```lua
getModelType()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getModelType() == "DEFAULT"
```

---

### <code>hasCape()</code> \{#hasCape}

Returns whether the player has a cape loaded

```lua
hasCape()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:hasCape()
```

---

### <code>hasSkin()</code> \{#hasSkin}

Returns whether the player has a custom skin loaded

```lua
hasSkin()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:hasSkin()
```

---

### <code>isSkinLayerVisible()</code> \{#isSkinLayerVisible}

Returns whether the specified skin layer, from the Skin Customizations settings, is currently visible

```lua
isSkinLayerVisible(part)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| part | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isSkinLayerVisible("HAT")
```

---

## Item Functions

### <code>getItem()</code> \{#getItem}

Gets an ItemStack for the item in the given slot

For the player, slots are indexed with 1 as the main hand, 2 as the off hand, and 3,4,5,6 as the 4 armor slots from the boots to the helmet

If an invalid slot number is given, this will return nil

```lua
getItem(index)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**Example:**

```lua
if player:getItem(5).id == "minecraft:elytra" then
    log("You're wearing an elytra")
end
```

---

### <code>getHeldItem()</code> \{#getHeldItem}

Returns an ItemStack representing the item in this entity's main hand

If true is passed in for "offhand", then it will instead look at the item in the entity's offhand

If the entity isn't holding an item in that hand, returns air

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getHeldItem()
```

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getHeldItem(offhand)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| offhand | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
if player:getHeldItem(false).id ~= "minecraft:air" then
    log("Item in mainhand")
end
if player:getHeldItem(true).id ~= "minecraft:air" then
    log("Item in offhand")
end
```

---

### <code>isUsingItem()</code> \{#isUsingItem}

Returns true if the entity is currently using an item

```lua
isUsingItem()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isUsingItem()
```

---

### <code>getActiveItem()</code> \{#getActiveItem}

Returns an ItemStack representing the item the entity is currently using

If they're not using any item, returns air

```lua
getActiveItem()
```

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

**Example:**

```lua
player:getActiveItem()
```

---

### <code>getActiveItemTime()</code> \{#getActiveItemTime}

Returns the ticks this entity's active item has been used for

```lua
getActiveItemTime()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getActiveItemTime()
```

---

### <code>getCooldownPercent()</code> \{#getCooldownPercent}

Returns the whether a given ItemStack has an active cool down as a percent from 0.0 to 1.0

If it has none, it returns 0.0

Takes two parameters stack, and delta, delta offsets the cooldown's tick count by it, used for smoother animation.

```lua
getCooldownPercent(stack, delta)
```

**Parameters:**

| Name  | Type                                               | Description | Default |
| ----- | -------------------------------------------------- | ----------- | ------- |
| stack | <code>[ItemStack](/globals/World/ItemStack)</code> | -           | -       |
| delta | <code>[Number](/tutorials/types/Numbers)</code>    | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
local function bar(percent)
    local progress = math.ceil(percent * 20)
    local remaining = 20 - progress
    return string.rep("▆", progress) .. string.rep("▁", remaining)
end

function events.tick()
    local heldItem = player:getHeldItem()
    if heldItem:getID() ~= "minecraft:ender_pearl" then
        host:setActionbar("")
        return
    end
    -- highlight-next-line
    local cooldown = player:getCooldownPercent(heldItem)
    host:setActionbar(bar(1 - cooldown))
end
```

---

### <code>isLeftHanded()</code> \{#isLeftHanded}

Returns true if the entity's main hand is its left

```lua
isLeftHanded()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isLeftHanded()
```

---

### <code>isSwingingArm()</code> \{#isSwingingArm}

Returns true if the entity is currently swinging its arm

```lua
isSwingingArm()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:isSwingingArm()
```

---

### <code>getSwingDuration()</code> \{#getSwingDuration}

Returns the number of ticks this entity will have while swinging its arms

```lua
getSwingDuration()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getSwingDuration()
```

---

### <code>getSwingTime()</code> \{#getSwingTime}

Returns the number of ticks this entity has the arm swinging

```lua
getSwingTime()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
player:getSwingTime()
```

---

### <code>getActiveHand()</code> \{#getActiveHand}

Returns "OFF_HAND" or "MAIN_HAND", depending on which hand this entity uses an item with

```lua
getActiveHand()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getActiveHand() == "MAIN_HAND"
```

---

### <code>getSwingArm()</code> \{#getSwingArm}

Returns "OFF_HAND" or "MAIN_HAND", based on the arm this entity is currently swinging

```lua
getSwingArm()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getSwingArm() == "OFF_HAND"
```

---

## Miscellaneous

### <code>getUUID()</code> \{#getUUID}

Gets the UUID of the proxied entity

```lua
getUUID()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
player:getUUID()
```

---

### <code>getVariable()</code> \{#getVariable}

Gets the value of a variable this entity stored in themselves using the Avatar API's store() function

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getVariable()
```

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getVariable(key)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| key  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
player:getVariable()
```

---

### <code>hasAvatar()</code> \{#hasAvatar}

Returns true if Figura has an avatar loaded for this entity

```lua
hasAvatar()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
player:hasAvatar()
```

---

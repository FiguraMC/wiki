The player API inherits functions from the [living entity API](../globals/Player/LivingEntity)

The player API is accessed through the <code>player</code> global. Like so: <code>player:isGliding()</code>

Player information that isn't synced between clients is kept in the host API. Examples of unsynced data are: Creative flying, status effects, and remaining air amount.

**_Note:_** There are times during a script's functioning where the script will run, but the player global will be empty. This will cause the "Tried to access the EntityAPI before its initialization" error. To solve this, move the player API call into a protected event. If you wish to initialize a check during the initialization phase of a script (outside of any other event) you can use the <code>entity_init</code> event.

For most other circumstances you will want the <code>tick</code> event, as checks like <code>player:isGliding()</code> will be updated once a game tick inside that event. (There are 20 ticks in a second, and this is how often Minecraft updates information- some player functions work better in a tick event for this reason).

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

## Player Transformations

---

### `getPos()` \{#getPos}

Gets the position of the entity in the world

If delta is passed in, then it will be used to linearly interpolate the position of the entity between the previous tick and the current tick

The default value of delta is 1

**Example**:

```lua
player:getPos()
```

---

### `getRot()` \{#getRot}

Gets the rotation of the entity in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the entity between the previous tick and the current tick

The default value of delta is 1

**Example**:

```lua
player:getRot()
```

---

### `getBodyYaw()` \{#getBodyYaw}

Gets the yaw of this entity's body in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the body between the previous tick and the current tick

The default value of delta is 1

**Example**:

```lua
player:getBodyYaw()
```

---

### `getLookDir()` \{#getLookDir}

Returns a unit vector pointing in the direction that this entity is looking

See the blue line in the F3+B screen for an example

**Example**:

```lua
player:getLookDir()
```

---

### `getVelocity()` \{#getVelocity}

Gets the current velocity of this entity in world coordinates, calculated as its position this tick minus its position last tick

**Example**:

```lua
player:getVelocity()
```

Gets the current velocity of this entity in world coordinates, calculated as its position this tick minus its position last tick

## Player Actions

---

### `getPose()` \{#getPose}

Returns the current pose of the player

For players this can be one of: "STANDING", "FALL_FLYING", "SLEEPING", "SWIMMING", "SPIN_ATTACK", or "CROUCHING"

**Example**:

```lua
player:getPose() == "CROUCHING"
```

---

### `isCrouching()` \{#isCrouching}

Returns true if this entity is visually sneaking

**Example**:

```lua
player:isCrouching()
```

---

### `isGliding()` \{#isGliding}

Returns if this entity is gliding with an elytra

**Example**:

```lua
player:isGliding()
```

---

### `isFishing()` \{#isFishing}

Returns if the player is currently fishing

**Example**:

```lua
player:isFishing()
```

---

### `isBlocking()` \{#isBlocking}

Return if this entity is blocking with a shield

**Example**:

```lua
player:isBlocking()
```

---

### `isVisuallySwimming()` \{#isVisuallySwimming}

Returns if this entity have the swimming pose

**Example**:

```lua
player:isVisuallySwimming()
```

---

### `isClimbing()` \{#isClimbing}

Returns true if the entity is currently using a climbable block, like a ladder or vine

**Example**:

```lua
player:isClimbing()
```

---

### `isSneaking()` \{#isSneaking}

Returns true if this entity is logically sneaking (can't fall from blocks edges, can't see nameplate behind walls, etc)

**Example**:

```lua
player:isSneaking()
```

---

### `isSprinting()` \{#isSprinting}

Returns true if this entity is currently sprinting

**Example**:

```lua
player:isSprinting()
```

---

### `riptideSpinning()` \{#riptideSpinning}

Returns if this entity is riptide spinning

**Example**:

```lua
player:riptideSpinning()
```

Returns if this entity is riptide spinning

## Player Data

---

### `isLoaded()` \{#isLoaded}

Checks if this entity object is still being updated and loaded

A non loaded entity would be someone who is in another dimension or out of the render distance for example

**Example**:

```lua
player:isLoaded()
```

---

### `getNbt()` \{#getNbt}

Gets a table containing the NBT of this entity

Please note that not all values in the entity's NBT may be synced, as some are handled only on server side

**Example**:

```lua
player:getNbt()
```

---

### `getChargedAttackDelay()` \{#getChargedAttackDelay}

Returns the delay (in ticks) of charged attacks

**Example**:

```lua
player:getChargedAttackDelay()
```

---

### `getExperienceProgress()` \{#getExperienceProgress}

Gets the progress of the way towards the player's next level, as a value from 0 to 1

**Example**:

```lua
player:getExperienceProgress()
```

---

### `getExperienceLevel()` \{#getExperienceLevel}

Gets the player's current level

**Example**:

```lua
player:getExperienceLevel()
```

---

### `getShoulderEntity()` \{#getShoulderEntity}

Returns a table of the nbt of this entity left or right shoulder entity

**Example**:

```lua
player:getShoulderEntity()
```

---

### `getTeamInfo()` \{#getTeamInfo}

Returns a table with information about the team of this player

Returns nil if the player doesnt have a team

**Example**:

```lua
player:getTeamInfo()
```

---

### `getFood()` \{#getFood}

Gets the current food level of the player, from 0 to 20

**Example**:

```lua
player:getfood()
```

---

### `getGamemode()` \{#getGamemode}

Returns "SURVIVAL", "CREATIVE", "ADVENTURE", or "SPECTATOR" depending on the player's gamemode

If the gamemode is unknown, returns nil

**Example**:

```lua
player:getGamemode()
```

---

### `getSaturation()` \{#getSaturation}

Gets the current saturation level of the player

**Example**:

```lua
player:getSaturation()
```

---

### `getExhaustion()` \{#getExhaustion}

Gets the current exhaustion level of the player

**Example**:

```lua
player:getExhaustion()
```

---

### `getAbsorptionAmount()` \{#getAbsorptionAmount}

Returns the amount of this entity's absorption (yellow hearts)

**Example**:

```lua
player:getAbsorptionAmount()
```

---

### `getArmor()` \{#getArmor}

Returns the amount of armor points this entity has

**Example**:

```lua
player:getArmor()
```

---

### `getMaxHealth()` \{#getMaxHealth}

Returns the maximum amount of health this entity can have

**Example**:

```lua
player:getMaxHealth()
```

---

### `getHealth()` \{#getHealth}

Returns the amount of health this entity has remaining

**Example**:

```lua
player:getHealth()
```

---

### `getDeathTime()` \{#getDeathTime}

Returns the number of ticks this entity has been dead for

**Example**:

```lua
player:getDeathTime()
```

---

### `getStingerCount()` \{#getStingerCount}

Returns the number of bee stingers sticking out of this entity

**Example**:

```lua
player:getStingercount()
```

---

### `getArrowCount()` \{#getArrowCount}

Returns the number of arrows sticking out of this entity

**Example**:

```lua
player:getArrowCount()
```

---

### `getEntityCategory()` \{#getEntityCategory}

Returns the category of this entity

The categories are: "ARTHROPOD", "UNDEAD", "WATER", "ILLAGER" and by default, "UNDEFINED"

**Example**:

```lua
player:getEntityCategory() == "UNDEAD"
```

---

### `isSensitiveToWater()` \{#isSensitiveToWater}

Returns if this entity takes damage to water

**Example**:

```lua
player:isSensitiveToWater()
```

---

### `getName()` \{#getName}

Gets the name of this entity, if it has a custom name

If it doesn't, returns a translated form of getType()

**Example**:

```lua
player:getName()
```

---

### `isAlive()` \{#isAlive}

Returns whether this entity is alive or not

**Example**:

```lua
player:isAlive()
```

---

### `getType()` \{#getType}

Gets the Minecraft identifier of this entity

For instance, "minecraft:pig"
**Example**:

```lua
player:getType() == "minecraft:player"
```

---

### `getControlledVehicle()` \{#getControlledVehicle}

Return the vehicle that this entity is controlling

**Example**:

```lua
player:getControlledVehicle()
```

---

### `getControllingPassenger()` \{#getControllingPassenger}

Returns the entity that is controlling this entity

**Example**:

```lua
player:getControllingPassenger()
```

---

### `getPassengers()` \{#getPassengers}

Returns a List of entities of all passengers this entity have

**Example**:

```lua
player:getPassengers()
```

---

### `getFrozenTicks()` \{#getFrozenTicks}

Gets the number of ticks this entity has been freezing in powder snow for

**Example**:

```lua
player:getFrozenTicks()
```

---

### `getMaxAir()` \{#getMaxAir}

Gets the maximum amount of air this entity can have

**Example**:

```lua
player:getMaxAir()
```

---

### `getDimensionName()` \{#getDimensionName}

Gets the Minecraft identifier of the dimension this entity is in

**Example**:

```lua
player:getDimensionName()
```

---

### `isUnderwater()` \{#isUnderwater}

Returns true if this entity's eyes are touching water

**Example**:

```lua
player:isUnderwater()
```

---

### `isInWater()` \{#isInWater}

Returns true if this entity is currently in a water block, including waterlogging

**Example**:

```lua
player:isInWater()
```

---

### `isInRain()` \{#isInRain}

Returns true if this entity is currently standing in rain

**Example**:

```lua
player:isInRain()
```

---

### `isWet()` \{#isWet}

Returns true in any of three conditions: if the entity is in water, if the entity is in rain, or if the entity is in a bubble column

Otherwise, returns false

**Example**:

```lua
player:isWet()
```

---

### `isInLava()` \{#isInLava}

Returns true if this entity is currently in lava

**Example**:

```lua
player:isInLava()
```

---

### `isOnFire()` \{#isOnFire}

Returns true if this entity is currently on fire

**Example**:

```lua
player:isOnFire()
```

---

### `isInvisible()` \{#isInvisible}

Returns true if this entity is invisible, for one reason or another

**Example**:

```lua
player:isInvisible()
```

---

### `getVehicle()` \{#getVehicle}

Returns a proxy for the entity that this player is currently riding

If the player isn't riding anything, returns nil

**Example** combined with getType and with a nil check, the first <code>player:getVehicle()</code> is preventing a nil value from being check by <code>getType()</code> after the and:

```lua
if player:getVehicle() and player:getVehicle():getType() == "minecraft:pig" then
    log("You're riding a pig")
end
```

---

### `isSilent()` \{#isSilent}

Returns true if this entity is silent

**Example**:

```lua
player:isSilent()
```

---

### `isGlowing()` \{#isGlowing}

Returns true if this entity is currently glowing

**Example**:

```lua
player:isGlowing()
```

---

### `getBoundingBox()` \{#getBoundingBox}

Returns the size of this entity's bounding box as a Vector3

---

\{x, y, z} are the width, height, and width

Minecraft entity hitboxes always have square bases

**Example**:

```lua
player:getBoundingBox()
```

---

### `isOnGround()` \{#isOnGround}

Returns whether or not this entity is currently on the ground

:::cation Due to a glitch in Minecraft's code this function is unreliable, and will misfire in multiple situations such as being underwater, standing on a boat, or standing on a slime block. One workaround is to check the blockstate of the block directly underneath the player like so: <code>world.getBlockState(player:getPos():add(0,-0.1,0)):isSolidBlock()</code>
:::

**Example**:

```lua
player:isOnGround()
```

---

### `getEyeY()` \{#getEyeY}

Returns the Y level of this entity's eyes

Not to be confused with getEyeHeight, this function also takes the entity itself's Y position into account

**Example**:

```lua
player:getEyeY()
```

---

### `getEyeHeight()` \{#getEyeHeight}

Returns the current eye height of this entity

**Example**:

```lua
player:getEyeHeight()
```

---

### `getTargetedEntity(distance : number?) : Entity, Vector3` \{#getTargetedEntity}

Used to access the entity you are looking at.

#### Parameters

| Name     | Type   | Description                                                           |
| -------- | ------ | --------------------------------------------------------------------- |
| distance | number | How far in blocks to check for an entity. Default and maximum are 20. |

#### Returns

| Name   | Type                         | Description                                  |
| ------ | ---------------------------- | -------------------------------------------- |
| entity | [Entity](./Player/Entity)    | A reference to the targeted entity           |
| pos    | [Vector3](./Vectors/Vector3) | The world coordinates of the targeted entity |

**Example:**

```lua
local entity, pos = player:getTargetedEntity(host:getReachDistance() or 4.5) -- host is not synced
if entity and entity:getType() == "minecraft:creeper" then
    log("You're looking at a creeper")
end
```

---

### `getTargetedBlock(bool, number)` \{#getTargetedBlock}

Returns a proxy for your currently targeted BlockState

This BlockState appears on the F3 screen

The bool is for ignoring liquids and the number is the distance in blocks to check

Maximum and Default distance is 20, Minimum is -20

Returns a vararg of the block, the hit position and the block face the hit collided

**Example:**

```lua
if player:getTargetedBlock(true, 4.5).id == "minecraft:grass_block" then
    log("You're looking at grass")
end
```

---

### `hasInventory()` \{#hasInventory}

Checks if the entity has an inventory (Horses, Camels, Llamas, ...)

**Example**:

```lua
player:hasInventory()
```

---

### `hasContainer()` \{#hasContainer}

Checks if the entity has a container (Chest Boats, Minecarts with Chests, ...)

**Example**:

```lua
player:hasContainer()
```

---

### `isLiving()` \{#isLiving}

Gets if this entity is a Living Entity

**Example**:

```lua
player:isLiving()
```

---

### `isPlayer()` \{#isPlayer}

Gets if this entity is a Player Entity

**Example**:

```lua
player:isPlayer()
```

---

### `getPermissionLevel()` \{#getPermissionLevel}

Returns the permission level number of this entity

Server Operators, by default, have the permission level of 4

**Example**:

```lua
player:getPermissionLevel()
```

## Vanilla Settings

---

### `getModelType()` \{#getModelType}

Returns "SLIM" or "DEFAULT", depending on the player's model type

**Example**:

```lua
player:getModelType() == "DEFAULT"
```

---

### `hasCape()` \{#hasCape}

Returns whether the player has a cape loaded

**Example**:

```lua
player:hasCape()
```

---

### `hasSkin()` \{#hasSkin}

Returns whether the player has a custom skin loaded

**Example**:

```lua
player:hasSkin()
```

---

### `isSkinLayerVisible(string)` \{#isSkinLayerVisible}

Returns whether the specified skin layer, from the Skin Customizations settings, is currently visible

[Parts list](../enums/PlayerModelParts)

**Example**:

```lua
player:isSkinLayerVisible("HAT")
```

## Item Functions

---

### `getItem(integer)` \{#getItem}

Gets an ItemStack for the item in the given slot

For the player, slots are indexed with 1 as the main hand, 2 as the off hand, and 3,4,5,6 as the 4 armor slots from the boots to the helmet

If an invalid slot number is given, this will return nil

**Example:**

```lua
if player:getItem(5).id == "minecraft:elytra" then
    log("You're wearing an elytra")
end
```

---

### `getHeldItem(bool)` \{#getHeldItem}

Returns an ItemStack representing the item in this entity's main hand

If true is passed in for "offhand", then it will instead look at the item in the entity's offhand

If the entity isn't holding an item in that hand, returns air

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

### `isUsingItem()` \{#isUsingItem}

Returns true if the entity is currently using an item

**Example**:

```lua
player:isUsingItem()
```

---

### `getActiveItem()` \{#getActiveItem}

Returns an ItemStack representing the item the entity is currently using

If they're not using any item, returns air

**Example**:

```lua
player:getActiveItem()
```

---

### `getActiveItemTime()` \{#getActiveItemTime}

Returns the ticks this entity's active item has been used for

**Example**:

```lua
player:getActiveItemTime()
```

## Hand Functions

---

### `isLeftHanded()` \{#isLeftHanded}

Returns true if the entity's main hand is its left

**Example**:

```lua
player:isLeftHanded()
```

---

### `isSwingingArm()` \{#isSwingingArm}

Returns true if the entity is currently swinging its arm

**Example**:

```lua
player:isSwingingArm()
```

---

### `getSwingDuration()` \{#getSwingDuration}

Returns the number of ticks this entity will have while swinging its arms

**Example**:

```lua
player:getSwingDuration()
```

---

### `getSwingTime()` \{#getSwingTime}

Returns the number of ticks this entity has the arm swinging

**Example**:

```lua
player:getSwingTime()
```

---

### `getActiveHand()` \{#getActiveHand}

Returns "OFF_HAND" or "MAIN_HAND", depending on which hand this entity uses an item with

**Example**:

```lua
player:getActiveHand() == "MAIN_HAND"
```

---

### `getSwingArm()` \{#getSwingArm}

Returns "OFF_HAND" or "MAIN_HAND", based on the arm this entity is currently swinging

**Example**:

```lua
player:getSwingArm() == "OFF_HAND"
```

## Miscellaneous

---

### `getIPAddress()` \{#getIPAddress}

Returns this player's IP address

**Example**:

```lua
player:getIPAddress()
```

---

### `getUUID()` \{#getUUID}

Gets the UUID of the proxied entity

**Example**:

```lua
player:getUUID()
```

---

### `hasAvatar()` \{#hasAvatar}

Returns true if Figura has an avatar loaded for this entity

**Example**:

```lua
player:hasAvatar()
```

---

### `getVariable()` \{#getVariable}

Gets the value of a variable this entity stored in themselves using the Avatar api's store() function

**Example**:

```lua
player:getVariable()
```

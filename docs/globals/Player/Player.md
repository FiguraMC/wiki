The player API inherits functions from the [living entity API](../globals/Player/LivingEntity)

The player API is accessed through the <code>player</code> global. Like so: <code>player:isGliding()</code>

Player information that isn't synced between clients is kept in the host API. Examples of unsynced data are: Creative flying, status effects, and remaining air amount.

***Note:*** There are times during a script's functioning where the script will run, but the player global will be empty. This will cause the "Tried to access the EntityAPI before its initialization" error. To solve this, move the player API call into a protected event. If you wish to initialize a check during the initialization phase of a script (outside of any other event) you can use the <code>entity_init</code> event.

For most other circumstances you will want the <code>tick</code> event, as checks like <code>player:isGliding()</code> will be updated once a game tick inside that event. (There are 20 ticks in a second, and this is how often Minecraft updates information- some player functions work better in a tick event for this reason).

All provided examples assume you're using a tick event.

To reiterate:
```lua
player:isGliding() -- will error

function events.entity_init()
    player:isGliding() -- will not error, but will only play once
end

player:isGliding() -- will error

function events.tick()
    player:isGliding() -- won't error, and will update once a tick
end

player:isGliding() -- will error
```

## Player Transformations
***
### `getPos()`
Gets the position of the entity in the world

If delta is passed in, then it will be used to linearly interpolate the position of the entity between the previous tick and the current tick

The default value of delta is 1

**Example**:
```lua
player:getPos()
```
***
### `getRot()`
Gets the rotation of the entity in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the entity between the previous tick and the current tick

The default value of delta is 1

**Example**:
```lua
player:getRot()
```
***
### `getBodyYaw()`
Gets the yaw of this entity's body in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the body between the previous tick and the current tick

The default value of delta is 1

**Example**:
```lua
player:getBodyYaw()
```
***
### `getLookDir()`
Returns a unit vector pointing in the direction that this entity is looking

See the blue line in the F3+B screen for an example

**Example**:
```lua
player:getLookDir()
```
***
### `getVelocity()`
Gets the current velocity of this entity in world coordinates, calculated as its position this tick minus its position last tick

**Example**:
```lua
player:getVelocity()
```







## Player Actions
***
### `getPose()`
Returns the current pose of the player

For players this can be one of: "STANDING", "FALL_FLYING", "SLEEPING", "SWIMMING", "SPIN_ATTACK", or "CROUCHING"

**Example**:
```lua
player:getPose() == "CROUCHING"
```
***
### `isCrouching()`
Returns true if this entity is visually sneaking

**Example**:
```lua
player:isCrouching()
```
***
### `isGliding()`
Returns if this entity is gliding with an elytra

**Example**:
```lua
player:isGliding()
```
***
### `isFishing()`
Returns if the player is currently fishing

**Example**:
```lua
player:isFishing()
```
***
### `isBlocking()`
Return if this entity is blocking with a shield

**Example**:
```lua
player:isBlocking()
```
***
### `isVisuallySwimming()`
Returns if this entity have the swimming pose

**Example**:
```lua
player:isVisuallySwimming()
```
***
### `isClimbing()`
Returns true if the entity is currently using a climbable block, like a ladder or vine

**Example**:
```lua
player:isClimbing()
```
***
### `isSneaking()`
Returns true if this entity is logically sneaking (can't fall from blocks edges, can't see nameplate behind walls, etc)

**Example**:
```lua
player:isSneaking()
```
***
### `isSprinting()`
Returns true if this entity is currently sprinting

**Example**:
```lua
player:isSprinting()
```
***
### `riptideSpinning()`
Returns if this entity is riptide spinning

**Example**:
```lua
player:riptideSpinning()
```



## Player Data
***
### `isLoaded()`
Checks if this entity object is still being updated and loaded

A non loaded entity would be someone who is in another dimension or out of the render distance for example

**Example**:
```lua
player:isLoaded()
```
***
### `getNbt()`
Gets a table containing the NBT of this entity

Please note that not all values in the entity's NBT may be synced, as some are handled only on server side

**Example**:
```lua
player:getNbt()
```
***
### `getChargedAttackDelay()`
Returns the delay (in ticks) of charged attacks

**Example**:
```lua
player:getChargedAttackDelay()
```
***
### `getExperienceProgress()`
Gets the progress of the way towards the player's next level, as a value from 0 to 1

**Example**:
```lua
player:getExperienceProgress()
```
***
### `getExperienceLevel()`
Gets the player's current level

**Example**:
```lua
player:getExperienceLevel()
```
***
### `getShoulderEntity()`
Returns a table of the nbt of this entity left or right shoulder entity

**Example**:
```lua
player:getShoulderEntity()
```
***
### `getTeamInfo()`
Returns a table with information about the team of this player

Returns nil if the player doesnt have a team

**Example**:
```lua
player:getTeamInfo()
```
***
### `getFood()`
Gets the current food level of the player, from 0 to 20

**Example**:
```lua
player:getfood()
```
***
### `getGamemode()`
Returns "SURVIVAL", "CREATIVE", "ADVENTURE", or "SPECTATOR" depending on the player's gamemode

If the gamemode is unknown, returns nil

**Example**:
```lua
player:getGamemode()
```
***
### `getSaturation()`
Gets the current saturation level of the player

**Example**:
```lua
player:getSaturation()
```
***
### `getExhaustion()`
Gets the current exhaustion level of the player

**Example**:
```lua
player:getExhaustion()
```
***
### `getAbsorptionAmount()`
Returns the amount of this entity's absorption (yellow hearts)

**Example**:
```lua
player:getAbsorptionAmount()
```
***
### `getArmor()`
Returns the amount of armor points this entity has

**Example**:
```lua
player:getArmor()
```
***
### `getMaxHealth()`
Returns the maximum amount of health this entity can have

**Example**:
```lua
player:getMaxHealth()
```
***
### `getHealth()`
Returns the amount of health this entity has remaining

**Example**:
```lua
player:getHealth()
```
***
### `getDeathTime()`
Returns the number of ticks this entity has been dead for

**Example**:
```lua
player:getDeathTime()
```
***
### `getStingerCount()`
Returns the number of bee stingers sticking out of this entity

**Example**:
```lua
player:getStingercount()
```
***
### `getArrowCount()`
Returns the number of arrows sticking out of this entity

**Example**:
```lua
player:getArrowCount()
```
***
### `getEntityCategory()`
Returns the category of this entity

The categories are: "ARTHROPOD", "UNDEAD", "WATER", "ILLAGER" and by default, "UNDEFINED"

**Example**:
```lua
player:getEntityCategory() == "UNDEAD"
```
***
### `isSensitiveToWater()`
Returns if this entity takes damage to water

**Example**:
```lua
player:isSensitiveToWater()
```
***
### `getName()`
Gets the name of this entity, if it has a custom name

If it doesn't, returns a translated form of getType()

**Example**:
```lua
player:getName()
```
***
### `isAlive()`
Returns whether this entity is alive or not

**Example**:
```lua
player:isAlive()
```
***
### `getType()`
Gets the Minecraft identifier of this entity

For instance, "minecraft:pig"

**Example**:
```lua
player:getType() == "minecraft:player"
```
***
### `getControlledVehicle()`
Return the vehicle that this entity is controlling

**Example**:
```lua
player:getControlledVehicle()
```
***
### `getControllingPassenger()`
Returns the entity that is controlling this entity

**Example**:
```lua
player:getControllingPassenger()
```
***
### `getPassengers()`
Returns a List of entities of all passengers this entity have

**Example**:
```lua
player:getPassengers()
```
***
### `getFrozenTicks()`
Gets the number of ticks this entity has been freezing in powder snow for

**Example**:
```lua
player:getFrozenTicks()
```
***
### `getMaxAir()`
Gets the maximum amount of air this entity can have

**Example**:
```lua
player:getMaxAir()
```
***
### `getDimensionName()`
Gets the Minecraft identifier of the dimension this entity is in

**Example**:
```lua
player:getDimensionName()
```
***
### `isUnderwater()`
Returns true if this entity's eyes are touching water

**Example**:
```lua
player:isUnderwater()
```
***
### `isInWater()`
Returns true if this entity is currently in a water block, including waterlogging

**Example**:
```lua
player:isInWater()
```
***
### `isInRain()`
Returns true if this entity is currently standing in rain

**Example**:
```lua
player:isInRain()
```
***
### `isWet()`
Returns true in any of three conditions: if the entity is in water, if the entity is in rain, or if the entity is in a bubble column

Otherwise, returns false

**Example**:
```lua
player:isWet()
```
***
### `isInLava()`
Returns true if this entity is currently in lava

**Example**:
```lua
player:isInLava()
```
***
### `isOnFire()`
Returns true if this entity is currently on fire

**Example**:
```lua
player:isOnFire()
```
***
### `isInvisible()`
Returns true if this entity is invisible, for one reason or another

**Example**:
```lua
player:isInvisible()
```
***
### `getVehicle()`
Returns a proxy for the entity that this player is currently riding

If the player isn't riding anything, returns nil

**Example** combined with getType and with a nil check, the first <code>player:getVehicle()</code> is preventing a nil value from being check by <code>getType()</code> after the and:
```lua
if player:getVehicle() and player:getVehicle():getType() == "minecraft:pig" then
    log("You're riding a pig")
end
```
***
### `isSilent()`
Returns true if this entity is silent

**Example**:
```lua
player:isSilent()
```
***
### `isGlowing()`
Returns true if this entity is currently glowing

**Example**:
```lua
player:isGlowing()
```
***
### `getBoundingBox()`
Returns the size of this entity's bounding box as a Vector3
***
{x, y, z} are the width, height, and width

Minecraft entity hitboxes always have square bases

**Example**:
```lua
player:getBoundingBox()
```
***
### `isOnGround()`
Returns whether or not this entity is currently on the ground

***Note:*** Due to a glitch in Minecraft's code this function is unreliable, and will misfire in multiple situations such as being underwater, standing on a boat, or standing on a slime block. One workaround is to check the blockstate of the block directly underneath the player like so: <code>world.getBlockState(player:getPos():add(0,-0.1,0)):isSolidBlock()</code>

**Example**:
```lua
player:isOnGround()
```
***
### `getEyeY()`
Returns the Y level of this entity's eyes

Not to be confused with getEyeHeight, this function also takes the entity itself's Y position into account

**Example**:
```lua
player:getEyeY()
```
***
### `getEyeHeight()`
Returns the current eye height of this entity

**Example**:
```lua
player:getEyeHeight()
```
***
### ``getTargetedEntity(number)`` {#getTargetedEntity}
Returns a proxy for your currently targeted Entity

This Entity appears on the F3 screen

The number is for distance in blocks to check

Maximum and Default distance is 20, Minimum is 0

**Example with a nil check:**
```lua
if player:getTargetedEntity(4.5) and player:getTargetedEntity(4.5):getType() == "minecraft:creeper" then
    log("You're looking at a creeper")
end
```
***
### ``getTargetedBlock(bool, number)`` {#getTargetedBlock}
Returns a proxy for your currently targeted BlockState

This BlockState appears on the F3 screen

The bool is for ignoring liquids and the number is the distance in blocks to check

Maximum and Default distance is 20, Minimum is -20

Returns a vararg of the block, the hit position and the block face the hit collided

**Example:**
```lua
if player:getTargetedBlock(true,4.5).id == "minecraft:grass_block" then
    log("You're looking at grass")
end
```
***
### `hasInventory()`
Checks if the entity has an inventory (Horses, Camels, Llamas, ...)

**Example**:
```lua
player:hasInventory()
```
***
### `hasContainer()`
Checks if the entity has a container (Chest Boats, Minecarts with Chests, ...)

**Example**:
```lua
player:hasContainer()
```
***
### `isLiving()`
Gets if this entity is a Living Entity

**Example**:
```lua
player:isLiving()
```
***
### `isPlayer()`
Gets if this entity is a Player Entity

**Example**:
```lua
player:isPlayer()
```
***
### `getPermissionLevel()`
Returns the permission level number of this entity

Server Operators, by default, have the permission level of 4

**Example**:
```lua
player:getPermissionLevel()
```





## Vanilla Settings
***
### `getModelType()`
Returns "SLIM" or "DEFAULT", depending on the player's model type

**Example**:
```lua
player:getModelType() == "DEFAULT"
```
***
### `hasCape()`
Returns whether the player has a cape loaded

**Example**:
```lua
player:hasCape()
```
***
### `hasSkin()`
Returns whether the player has a custom skin loaded

**Example**:
```lua
player:hasSkin()
```
***
### `isSkinLayerVisible(string)` {#isSkinLayerVisible}
Returns whether the specified skin layer, from the Skin Customizations settings, is currently visible

[Parts list](../enums/PlayerModelParts)

**Example**:
```lua
player:isSkinLayerVisible("HAT")
```






## Item Functions
***
### `getItem(integer)` {#getItem}
Gets an ItemStack for the item in the given slot

For the player, slots are indexed with 1 as the main hand, 2 as the off hand, and 3,4,5,6 as the 4 armor slots from the boots to the helmet

If an invalid slot number is given, this will return nil

**Example:**
```lua
if player:getItem(5).id == "minecraft:elytra" then
    log("You're wearing an elytra")
end
```
***
### `getHeldItem(bool)` {#getHeldItem}
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
***
### ``isUsingItem()``
Returns true if the entity is currently using an item

**Example**:
```lua
player:isUsingItem()
```
***
### ``getActiveItem()``
Returns an ItemStack representing the item the entity is currently using

If they're not using any item, returns air

**Example**:
```lua
player:getActiveItem()
```
***
### ``getActiveItemTime()``
Returns the ticks this entity's active item has been used for

**Example**:
```lua
player:getActiveItemTime()
```





## Hand Functions
***
### ``isLeftHanded()``
Returns true if the entity's main hand is its left

**Example**:
```lua
player:isLeftHanded()
```
***
### ``isSwingingArm()``
Returns true if the entity is currently swinging its arm

**Example**:
```lua
player:isSwingingArm()
```
***
### ``getSwingDuration()``
Returns the number of ticks this entity will have while swinging its arms

**Example**:
```lua
player:getSwingDuration()
```
***
### ``getSwingTime()``
Returns the number of ticks this entity has the arm swinging

**Example**:
```lua
player:getSwingTime()
```
***
### ``getActiveHand()``
Returns "OFF_HAND" or "MAIN_HAND", depending on which hand this entity uses an item with

**Example**:
```lua
player:getActiveHand() == "MAIN_HAND"
```
***
### ``getSwingArm()``
Returns "OFF_HAND" or "MAIN_HAND", based on the arm this entity is currently swinging

**Example**:
```lua
player:getSwingArm() == "OFF_HAND"
```






## Miscellaneous
***
### ``getIPAddress()``
Returns this player's IP address

**Example**:
```lua
player:getIPAddress()
```
***
### ``getUUID()``
Gets the UUID of the proxied entity

**Example**:
```lua
player:getUUID()
```
***
### ``hasAvatar()``
Returns true if Figura has an avatar loaded for this entity

**Example**:
```lua
player:hasAvatar()
```
***
### ``getVariable()``
Gets the value of a variable this entity stored in themselves using the Avatar api's store() function

**Example**:
```lua
player:getVariable()
```

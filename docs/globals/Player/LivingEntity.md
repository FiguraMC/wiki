Acts as a proxy for a living entity in the Minecraft world

For this page assume:

```lua
local thisEntity = thisEntity:getTargetedEntity()
```

## Living Entity Transformations

---

### `getPos()` \{#getPos}

Gets the position of the entity in the world

If delta is passed in, then it will be used to linearly interpolate the position of the entity between the previous tick and the current tick

The default value of delta is 1

**Example**:

```lua
thisEntity:getPos()
```

---

### `getRot()` \{#getRot}

Gets the rotation of the entity in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the entity between the previous tick and the current tick

The default value of delta is 1

**Example**:

```lua
thisEntity:getRot()
```

---

### `getBodyYaw()` \{#getBodyYaw}

Gets the yaw of this entity's body in degrees

If delta is passed in, then it will be used to linearly interpolate the rotation of the body between the previous tick and the current tick

The default value of delta is 1

**Example**:

```lua
thisEntity:getBodyYaw()
```

---

### `getLookDir()` \{#getLookDir}

Returns a unit vector pointing in the direction that this entity is looking

See the blue line in the F3+B screen for an example

**Example**:

```lua
thisEntity:getLookDir()
```

---

### `getVelocity()` \{#getVelocity}

Gets the current velocity of this entity in world coordinates, calculated as its position this tick minus its position last tick

**Example**:

```lua
thisEntity:getVelocity()
```

Gets the current velocity of this entity in world coordinates, calculated as its position this tick minus its position last tick

## Living Entity Actions

---

### `getPose()` \{#getPose}

Returns the current pose of the living entity

**Example**:

```lua
thisEntity:getPose() == "CROUCHING"
```

---

### `isCrouching()` \{#isCrouching}

Returns true if this entity is visually sneaking

**Example**:

```lua
thisEntity:isCrouching()
```

---

### `isGliding()` \{#isGliding}

Returns if this entity is gliding with an elytra

**Example**:

```lua
thisEntity:isGliding()
```

---

### `isBlocking()` \{#isBlocking}

Return if this entity is blocking with a shield

**Example**:

```lua
thisEntity:isBlocking()
```

---

### `isVisuallySwimming()` \{#isVisuallySwimming}

Returns if this entity have the swimming pose

**Example**:

```lua
thisEntity:isVisuallySwimming()
```

---

### `isClimbing()` \{#isClimbing}

Returns true if the entity is currently using a climbable block, like a ladder or vine

**Example**:

```lua
thisEntity:isClimbing()
```

---

### `isSneaking()` \{#isSneaking}

Returns true if this entity is logically sneaking (can't fall from blocks edges, can't see nameplate behind walls, etc)

**Example**:

```lua
thisEntity:isSneaking()
```

---

### `isSprinting()` \{#isSprinting}

Returns true if this entity is currently sprinting

**Example**:

```lua
thisEntity:isSprinting()
```

---

### `riptideSpinning()` \{#riptideSpinning}

Returns if this entity is riptide spinning

**Example**:

```lua
thisEntity:riptideSpinning()
```

Returns if this entity is riptide spinning

## Living Entity Data

---

### `isLoaded()` \{#isLoaded}

Checks if this entity object is still being updated and loaded

A non loaded entity would be someone who is in another dimension or out of the render distance for example

**Example**:

```lua
thisEntity:isLoaded()
```

---

### `getNbt()` \{#getNbt}

Gets a table containing the NBT of this entity

Please note that not all values in the entity's NBT may be synced, as some are handled only on server side

**Example**:

```lua
thisEntity:getNbt()
```

---

### `getAbsorptionAmount()` \{#getAbsorptionAmount}

Returns the amount of this entity's absorption (yellow hearts)

**Example**:

```lua
thisEntity:getAbsorptionAmount()
```

---

### `getArmor()` \{#getArmor}

Returns the amount of armor points this entity has

**Example**:

```lua
thisEntity:getArmor()
```

---

### `getMaxHealth()` \{#getMaxHealth}

Returns the maximum amount of health this entity can have

**Example**:

```lua
thisEntity:getMaxHealth()
```

---

### `getHealth()` \{#getHealth}

Returns the amount of health this entity has remaining

**Example**:

```lua
thisEntity:getHealth()
```

---

### `getDeathTime()` \{#getDeathTime}

Returns the number of ticks this entity has been dead for

**Example**:

```lua
thisEntity:getDeathTime()
```

---

### `getStingerCount()` \{#getStingerCount}

Returns the number of bee stingers sticking out of this entity

**Example**:

```lua
thisEntity:getStingercount()
```

---

### `getArrowCount()` \{#getArrowCount}

Returns the number of arrows sticking out of this entity

**Example**:

```lua
thisEntity:getArrowCount()
```

---

### `getEntityCategory()` \{#getEntityCategory}

Returns the category of this entity

The categories are: "ARTHROPOD", "UNDEAD", "WATER", "ILLAGER" and by default, "UNDEFINED"

**Example**:

```lua
thisEntity:getEntityCategory() == "UNDEAD"
```

---

### `isSensitiveToWater()` \{#isSensitiveToWater}

Returns if this entity takes damage to water

**Example**:

```lua
thisEntity:isSensitiveToWater()
```

---

### `getName()` \{#getName}

Gets the name of this entity, if it has a custom name

If it doesn't, returns a translated form of getType()

**Example**:

```lua
thisEntity:getName()
```

---

### `isAlive()` \{#isAlive}

Returns whether this entity is alive or not

**Example**:

```lua
thisEntity:isAlive()
```

---

### `getType()` \{#getType}

Gets the Minecraft identifier of this entity

For instance, "minecraft:pig"

**Example**:

```lua
thisEntity:getType() == "minecraft:pig"
```

---

### `getControlledVehicle()` \{#getControlledVehicle}

Return the vehicle that this entity is controlling

**Example**:

```lua
thisEntity:getControlledVehicle()
```

---

### `getControllingPassenger()` \{#getControllingPassenger}

Returns the entity that is controlling this entity

**Example**:

```lua
thisEntity:getControllingPassenger()
```

---

### `getPassengers()` \{#getPassengers}

Returns a List of entities of all passengers this entity have

**Example**:

```lua
thisEntity:getPassengers()
```

---

### `getFrozenTicks()` \{#getFrozenTicks}

Gets the number of ticks this entity has been freezing in powder snow for

**Example**:

```lua
thisEntity:getFrozenTicks()
```

---

### `getMaxAir()` \{#getMaxAir}

Gets the maximum amount of air this entity can have

**Example**:

```lua
thisEntity:getMaxAir()
```

---

### `getDimensionName()` \{#getDimensionName}

Gets the Minecraft identifier of the dimension this entity is in

**Example**:

```lua
thisEntity:getDimensionName()
```

---

### `isUnderwater()` \{#isUnderwater}

Returns true if this entity's eyes are touching water

**Example**:

```lua
thisEntity:isUnderwater()
```

---

### `isInWater()` \{#isInWater}

Returns true if this entity is currently in a water block, including waterlogging

**Example**:

```lua
thisEntity:isInWater()
```

---

### `isInRain()` \{#isInRain}

Returns true if this entity is currently standing in rain

**Example**:

```lua
thisEntity:isInRain()
```

---

### `isWet()` \{#isWet}

Returns true in any of three conditions: if the entity is in water, if the entity is in rain, or if the entity is in a bubble column

Otherwise, returns false

**Example**:

```lua
thisEntity:isWet()
```

---

### `isInLava()` \{#isInLava}

Returns true if this entity is currently in lava

**Example**:

```lua
thisEntity:isInLava()
```

---

### `isOnFire()` \{#isOnFire}

Returns true if this entity is currently on fire

**Example**:

```lua
thisEntity:isOnFire()
```

---

### `isInvisible()` \{#isInvisible}

Returns true if this entity is invisible, for one reason or another

**Example**:

```lua
thisEntity:isInvisible()
```

---

### `getVehicle()` \{#getVehicle}

Returns a proxy for the entity that this entity is currently riding

If the entity isn't riding anything, returns nil

**Example** combined with getType and with a nil check, the first <code>thisEntity:getVehicle()</code> is preventing a nil value from being check by <code>getType()</code> after the and:

```lua
if thisEntity:getVehicle() and thisEntity:getVehicle():getType() == "minecraft:pig" then
    log("You're riding a pig")
end
```

---

### `isSilent()` \{#isSilent}

Returns true if this entity is silent

**Example**:

```lua
thisEntity:isSilent()
```

---

### `isGlowing()` \{#isGlowing}

Returns true if this entity is currently glowing

**Example**:

```lua
thisEntity:isGlowing()
```

---

### `getBoundingBox()` \{#getBoundingBox}

Returns the size of this entity's bounding box as a Vector3

---

\{x, y, z} are the width, height, and width

Minecraft entity hitboxes always have square bases

**Example**:

```lua
thisEntity:getBoundingBox()
```

---

### `isOnGround()` \{#isOnGround}

Returns whether or not this entity is currently on the ground

:::caution Due to a glitch in Minecraft's code this function is unreliable, and will misfire in multiple situations such as being underwater, standing on a boat, or standing on a slime block. One workaround is to check the blockstate of the block directly underneath the entity like so: <code>world.getBlockState(thisEntity:getPos():add(0,-0.1,0)):isSolidBlock()</code>
:::

**Example**:

```lua
thisEntity:isOnGround()
```

---

### `getEyeY()` \{#getEyeY}

Returns the Y level of this entity's eyes

Not to be confused with getEyeHeight, this function also takes the entity itself's Y position into account

**Example**:

```lua
thisEntity:getEyeY()
```

---

### `getEyeHeight()` \{#getEyeHeight}

Returns the current eye height of this entity

**Example**:

```lua
thisEntity:getEyeHeight()
```

---

### `getTargetedEntity(number)` \{#getTargetedEntity}

Returns a proxy for your currently targeted Entity

This Entity appears on the F3 screen

The number is for distance in blocks to check

Maximum and Default distance is 20, Minimum is 0

**Example with a nil check:**

```lua
if thisEntity:getTargetedEntity(4.5) and thisEntity:getTargetedEntity(4.5):getType() == "minecraft:creeper" then
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
if thisEntity:getTargetedBlock(true, 4.5).id == "minecraft:grass_block" then
    log("You're looking at grass")
end
```

---

### `hasInventory()` \{#hasInventory}

Checks if the entity has an inventory (Horses, Camels, Llamas, ...)

**Example**:

```lua
thisEntity:hasInventory()
```

---

### `hasContainer()` \{#hasContainer}

Checks if the entity has a container (Chest Boats, Minecarts with Chests, ...)

**Example**:

```lua
thisEntity:hasContainer()
```

---

### `isLiving()` \{#isLiving}

Gets if this entity is a Living Entity

**Example**:

```lua
thisEntity:isLiving()
```

---

### `isPlayer()` \{#isPlayer}

Gets if this entity is a Player Entity

**Example**:

```lua
thisEntity:isPlayer()
```

---

### `getPermissionLevel()` \{#getPermissionLevel}

Returns the permission level number of this entity

Server Operators, by default, have the permission level of 4

**Example**:

```lua
thisEntity:getPermissionLevel()
```

## Item Functions

---

### `getItem(integer)` \{#getItem}

Gets an ItemStack for the item in the given slot

For entities, slots are indexed with 1 as the main hand, 2 as the off hand, and 3,4,5,6 as the 4 armor slots from the boots to the helmet

If an invalid slot number is given, this will return nil

**Example:**

```lua
if thisEntity:getItem(5).id == "minecraft:elytra" then
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
if thisEntity:getHeldItem(false).id ~= "minecraft:air" then
    log("Item in mainhand")
end
if thisEntity:getHeldItem(true).id ~= "minecraft:air" then
    log("Item in offhand")
end
```

---

### `isUsingItem()` \{#isUsingItem}

Returns true if the entity is currently using an item

**Example**:

```lua
thisEntity:isUsingItem()
```

---

### `getActiveItem()` \{#getActiveItem}

Returns an ItemStack representing the item the entity is currently using

If they're not using any item, returns air

**Example**:

```lua
thisEntity:getActiveItem()
```

---

### `getActiveItemTime()` \{#getActiveItemTime}

Returns the ticks this entity's active item has been used for

**Example**:

```lua
thisEntity:getActiveItemTime()
```

## Hand Functions

---

### `isLeftHanded()` \{#isLeftHanded}

Returns true if the entity's main hand is its left

**Example**:

```lua
thisEntity:isLeftHanded()
```

---

### `isSwingingArm()` \{#isSwingingArm}

Returns true if the entity is currently swinging its arm

**Example**:

```lua
thisEntity:isSwingingArm()
```

---

### `getSwingDuration()` \{#getSwingDuration}

Returns the number of ticks this entity will have while swinging its arms

**Example**:

```lua
thisEntity:getSwingDuration()
```

---

### `getSwingTime()` \{#getSwingTime}

Returns the number of ticks this entity has the arm swinging

**Example**:

```lua
thisEntity:getSwingTime()
```

---

### `getActiveHand()` \{#getActiveHand}

Returns "OFF_HAND" or "MAIN_HAND", depending on which hand this entity uses an item with

**Example**:

```lua
thisEntity:getActiveHand() == "MAIN_HAND"
```

---

### `getSwingArm()` \{#getSwingArm}

Returns "OFF_HAND" or "MAIN_HAND", based on the arm this entity is currently swinging

**Example**:

```lua
thisEntity:getSwingArm() == "OFF_HAND"
```

## Miscellaneous

---

### `getUUID()` \{#getUUID}

Gets the UUID of the proxied entity

**Example**:

```lua
thisEntity:getUUID()
```

---

### `hasAvatar()` \{#hasAvatar}

Returns true if Figura has an avatar loaded for this entity

**Example**:

```lua
thisEntity:hasAvatar()
```

---

### `getVariable()` \{#getVariable}

Gets the value of a variable this entity stored in themselves using the Avatar api's store() function

**Example**:

```lua
thisEntity:getVariable()
```

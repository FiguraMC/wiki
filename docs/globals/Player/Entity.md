import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Acts as a proxy for an entity in the Minecraft world

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

For this page assume:

```lua
local thisEntity = thisEntity:getTargetedEntity()
```

---

## Entity Transformations

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
thisEntity:getPos()
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
thisEntity:getRot()
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
thisEntity:getVelocity()
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
thisEntity:getLookDir()
```

---

## Entity Actions

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
thisEntity:getBoundingBox()
```

---

### <code>getControlledVehicle()</code> \{#getControlledVehicle}

Return the vehicle that this entity is controlling

```lua
getControlledVehicle()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | Returns self for chaining |

**Example:**

```lua
thisEntity:getControlledVehicle()
```

---

### <code>getControllingPassenger()</code> \{#getControllingPassenger}

Returns the entity that is controlling this entity

```lua
getControllingPassenger()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | Returns self for chaining |

**Example:**

```lua
thisEntity:getControllingPassenger()
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
thisEntity:getDimensionName()
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
thisEntity:getEyeY()
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
thisEntity:getEyeY()
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
thisEntity:getFrozenTicks()
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
thisEntity:getMaxAir()
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
thisEntity:getName()
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
thisEntity:getNbt()
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
thisEntity:getPassengers()
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
thisEntity:getPermissionLevel()
```

---

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
thisEntity:getPose() == "CROUCHING"
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
local block, hitPos, side = thisEntity:getTargetedBlock(true, 4.5)
if block.id == "minecraft:grass_block" then
    log("You're looking at grass")
end
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
local entity, hitPos = thisEntity:getTargetedEntity()
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
thisEntity:getName()
```

---

### <code>getVehicle()</code> \{#getVehicle}

Returns a proxy for the entity that this player is currently riding

If the player isn't riding anything, returns nil

```lua
getVehicle()
```

**Returns:**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | Returns self for chaining |

**Example:**

```lua
if thisEntity:getVehicle() and thisEntity:getVehicle():getType() == "minecraft:pig" then
    log("You're riding a pig")
end
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
thisEntity:hasContainer()
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
thisEntity:hasInventory()
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
thisEntity:isAlive()
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
thisEntity:isCrouching()
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
thisEntity:isGlowing()
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
thisEntity:isInLava()
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
thisEntity:isInRain()
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
thisEntity:isInWater()
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
thisEntity:isInvisible()
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
thisEntity:isLiving()
```

---

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
thisEntity:isLoaded()
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
thisEntity:isOnFire()
```

---

### <code>isOnGround()</code> \{#isOnGround}

Returns whether or not this entity is currently on the ground

```lua
isOnGround()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
thisEntity:isOnGround()
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
thisEntity:isPlayer()
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
thisEntity:isSilent()
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
thisEntity:isSneaking()
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
thisEntity:isSprinting()
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
thisEntity:isUnderwater()
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
thisEntity:isWet()
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
if thisEntity:getItem(5).id == "minecraft:elytra" then
    log("You're wearing an elytra")
end
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
thisEntity:getUUID()
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
thisEntity:getVariable()
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
thisEntity:hasAvatar()
```

---

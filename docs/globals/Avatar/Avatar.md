import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

A global API containing functions to interact with your avatar's metadata, and also to get information about the current script environment

---

## Metadata

### <code>getName()</code> \{#getName}

Gets the name string of this avatar

```lua
getName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getName()
```

---

### <code>getAuthors()</code> \{#getAuthors}

Gets the authors string of this avatar

```lua
getAuthors()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getAuthors()
```

---

### <code>getVersion()</code> \{#getVersion}

Gets the version string of this avatar

```lua
getVersion()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getVersion()
```

---

### <code>hasTexture()</code> \{#hasTexture}

Gets whether or not this avatar has a texture

```lua
hasTexture()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
avatar:hasTexture()
```

---

### <code>setColor()</code> \{#setColor}

**Aliases:** `color()`

Sets the current color string of your avatar, used as your avatar theme, if the user has a special badge, they can pass in the badge's name to set the color for it.

The color is a value between 0 and 1. Standard RGB values can be divided by 255 to get a number the function can use.

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setColor(color)
```

**Parameters:**

| Name  | Type                                             | Description                        | Default      |
| ----- | ------------------------------------------------ | ---------------------------------- | ------------ |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | The r,g,b values as a single value | `vec(1,1,1)` |

**Returns:**

| Type                                      | Description                         |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | Returns the avatar API for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
setColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description       | Default      |
| ---- | ----------------------------------------------- | ----------------- | ------------ |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | Red color value   | 1            |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | Green color value | Value of `r` |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | Blue color value  | Value of `r` |

**Returns:**

| Type                                      | Description                         |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | Returns the avatar API for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setColor(color, badgeName)
```

**Parameters:**

| Name      | Type                                             | Description                        | Default      |
| --------- | ------------------------------------------------ | ---------------------------------- | ------------ |
| color     | <code>[Vector3](/globals/Vectors/Vector3)</code> | The r,g,b values as a single value | `vec(1,1,1)` |
| badgeName | <code>[String](/tutorials/types/Strings)</code>  | Badge name                         | `nil`        |

**Returns:**

| Type                                      | Description                         |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | Returns the avatar API for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setColor(r, g, b, badgeName)
```

**Parameters:**

| Name      | Type                                            | Description       | Default      |
| --------- | ----------------------------------------------- | ----------------- | ------------ |
| r         | <code>[Number](/tutorials/types/Numbers)</code> | Red color value   | 1            |
| g         | <code>[Number](/tutorials/types/Numbers)</code> | Green color value | Value of `r` |
| b         | <code>[Number](/tutorials/types/Numbers)</code> | Blue color value  | Value of `r` |
| badgeName | <code>[String](/tutorials/types/Strings)</code> | Bagde name        | `nil`        |

**Returns:**

| Type                                      | Description                         |
| ----------------------------------------- | ----------------------------------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | Returns the avatar API for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
avatar:setColor(50 / 255, 0 / 255, 64 / 255)
```

---

### <code>getColor()</code> \{#getColor}

Gets the current color string of your avatar, used as your avatar theme

```lua
getColor()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getColor()
```

---

## Misc

### <code>store()</code> \{#store}

Store the given key-value pair inside your current avatar's metadata

Someone else can get this information from a different script with the avatarVars() function in World

The key must be a string

```lua
store(key, value)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| key   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| value | <code>AnyType</code>                            | -           | -       |

**Returns:**

| Type                                      | Description |
| ----------------------------------------- | ----------- |
| <code>[AvatarAPI](/globals/Avatar)</code> | -           |

**Example:**

```lua
avatar:store("storing", true)
```

---

### <code>getSize()</code> \{#getSize}

Gets the file size of this avatar in bytes

```lua
getSize()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getSize()
```

---

### <code>getEntityName()</code> \{#getEntityName}

Attempts to get the entity name of this avatar, defaulting to the avatar name

```lua
getEntityName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getEntityName()
```

---

### <code>getUUID()</code> \{#getUUID}

Returns the UUID of the owner of this avatar

```lua
getUUID()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getUUID()
```

---

### <code>getNBT()</code> \{#getNBT}

Gets the NBT data this avatar is stored as

```lua
getNBT()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
avatar:getNBT()
```

---

### <code>getBadges()</code> \{#getBadges}

**Aliases:** `badges()`

Gets the user's badges in a string.

```lua
getBadges()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getBadges()
```

---

### <code>hasScriptError()</code> \{#hasScriptError}

Gets whether this script currently has stopped due to an error (kinda useless lol)

```lua
hasScriptError()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
avatar:hasScriptError()
```

---

## Permissions

### <code>getPermissionLevel()</code> \{#getPermissionLevel}

Returns this avatar's current permission level

```lua
getPermissionLevel()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
avatar:getPermissionLevel()
```

---

### <code>getComplexity()</code> \{#getComplexity}

Gets the current complexity of this avatar

```lua
getComplexity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getComplexity()
```

---

### <code>getVolume()</code> \{#getVolume}

figura.docs.avatar.get_volume

```lua
getVolume()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getVolume()
```

---

### <code>getCurrentInstructions()</code> \{#getCurrentInstructions}

Gets the current number of instructions that have been executed by your avatar

Resets to 0 at the beginning of certain events

```lua
getCurrentInstructions()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getCurrentInstructions()
```

---

### <code>getInitCount()</code> \{#getInitCount}

Gets the number of initialization instructions of this avatar

```lua
getInitCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getInitCount()
```

---

### <code>getEntityInitCount()</code> \{#getEntityInitCount}

Gets the number of events.ENTITY_INIT instructions of this avatar

```lua
getEntityInitCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getEntityInitCount()
```

---

### <code>getMaxInitCount()</code> \{#getMaxInitCount}

Gets the maximum allowed instructions during initialization as permitted by the viewer

```lua
getMaxInitCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxInitCount()
```

---

### <code>getTickCount()</code> \{#getTickCount}

Gets the number of events.TICK instructions of this avatar last tick

```lua
getTickCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getTickCount()
```

---

### <code>getMaxTickCount()</code> \{#getMaxTickCount}

Gets the maximum allowed instructions in events.TICK as permitted by the viewer

```lua
getMaxTickCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxTickCount()
```

---

### <code>getRenderCount()</code> \{#getRenderCount}

Gets the number of events.RENDER and events.POST_RENDER instructions of this avatar's last frame

```lua
getRenderCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getRenderCount()
```

---

### <code>getMaxRenderCount()</code> \{#getMaxRenderCount}

Gets the maximum allowed instructions in events.RENDER and Events.POST_RENDER as permitted by the viewer

```lua
getMaxRenderCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxRenderCount()
```

---

### <code>getWorldTickCount()</code> \{#getWorldTickCount}

Gets the number of events.WORLD_TICK instructions of this avatar's last tick

```lua
getWorldTickCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getWorldTickCount()
```

---

### <code>getMaxWorldTickCount()</code> \{#getMaxWorldTickCount}

Gets the maximum allowed instructions in events.WORLD_TICK as permitted by the viewer

```lua
getMaxWorldTickCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxWorldTickCount()
```

---

### <code>getWorldRenderCount()</code> \{#getWorldRenderCount}

Gets the number of events.WORLD_RENDER and events.POST_WORLD_RENDER instructions of this avatar's last frame

```lua
getWorldRenderCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getWorldRenderCount()
```

---

### <code>getMaxWorldRenderCount()</code> \{#getMaxWorldRenderCount}

Gets the maximum allowed instructions in events.WORLD_RENDER and events.POST_WORLD_RENDER as permitted by the viewer

```lua
getMaxWorldRenderCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxWorldRenderCount()
```

---

### <code>getMaxComplexity()</code> \{#getMaxComplexity}

Gets the maximum allowed model complexity (number of faces) as permitted by the viewer

```lua
getMaxComplexity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxComplexity()
```

---

### <code>getRemainingParticles()</code> \{#getRemainingParticles}

Gets the remaining amount of particles this avatar can summon

```lua
getRemainingParticles()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getRemainingParticles()
```

---

### <code>getMaxParticles()</code> \{#getMaxParticles}

Gets the maximum allowed number of particles as permitted by the viewer

```lua
getMaxParticles()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxParticles()
```

---

### <code>getRemainingSounds()</code> \{#getRemainingSounds}

Gets the remaining amount of sound this avatar can play

```lua
getRemainingSounds()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getRemainingSounds()
```

---

### <code>getMaxSounds()</code> \{#getMaxSounds}

Gets the maximum allowed number of sounds as permitted by the viewer

```lua
getMaxSounds()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxSounds()
```

---

### <code>getAnimationComplexity()</code> \{#getAnimationComplexity}

Gets the current animation complexity of this avatar

```lua
getAnimationComplexity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getAnimationComplexity()
```

---

### <code>getMaxAnimationComplexity()</code> \{#getMaxAnimationComplexity}

Gets the maximum allowed animation complexity (number of playing channels) as permitted by the viewer

```lua
getMaxAnimationComplexity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxAnimationComplexity()
```

---

### <code>getAnimationCount()</code> \{#getAnimationCount}

Gets the number of Lua instructions used within animations

```lua
getAnimationCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getAnimationCount()
```

---

### <code>getMaxAnimationCount()</code> \{#getMaxAnimationCount}

Gets the maximum allowed Lua instructions in animations as permitted by the viewer

```lua
getMaxAnimationCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxAnimationCount()
```

---

### <code>getBuffersCount()</code> \{#getBuffersCount}

Returns count of buffers open by this avatar

```lua
getBuffersCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getBuffersCount()
```

---

### <code>getMaxBuffersCount()</code> \{#getMaxBuffersCount}

Returns maximum allowed count of buffers can be open by this avatar

```lua
getMaxBuffersCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxBuffersCount()
```

---

### <code>getMaxTextureSize()</code> \{#getMaxTextureSize}

Gets the max dimensions of custom textures that this avatar can create

```lua
getMaxTextureSize()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxTextureSize()
```

---

### <code>getMaxBufferSize()</code> \{#getMaxBufferSize}

Gets the max byte buffer size that this avatar can have

```lua
getMaxBufferSize()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
avatar:getMaxBufferSize()
```

---

### <code>canEditVanillaModel()</code> \{#canEditVanillaModel}

Gets whether or not the viewer allows your avatar to edit the vanilla models

```lua
canEditVanillaModel()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
avatar:canEditVanillaModel()
```

---

### <code>canEditNameplate()</code> \{#canEditNameplate}

Gets whether or not the viewer allows your avatar to edit your nameplate

```lua
canEditNameplate()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
avatar:canEditNameplate()
```

---

### <code>canRenderOffscreen()</code> \{#canRenderOffscreen}

Gets whether or not the viewer allows you to render the avatar off-screen

```lua
canRenderOffscreen()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
avatar:canRenderOffscreen()
```

---

### <code>canUseCustomSounds()</code> \{#canUseCustomSounds}

Gets whether or not the viewer allows your avatar to play custom sounds

```lua
canUseCustomSounds()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
avatar:canUseCustomSounds()
```

---

### <code>canHaveCustomSkull()</code> \{#canHaveCustomSkull}

Gets whether or not your avatar is allowed to have custom player skull

```lua
canHaveCustomSkull()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
avatar:canHaveCustomSkull()
```

---

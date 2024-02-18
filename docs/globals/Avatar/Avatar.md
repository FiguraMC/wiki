The global instance of AvatarAPI

## Metadata

### `getName()` \{#getName}

Gets the name string of this avatar

**Example**:

```lua
avatar:getName()
```

---

### `getAuthors()` \{#getAuthors}

Gets the authors string of this avatar

**Example**:

```lua
avatar:getAuthors()
```

---

### `getVersion()` \{#getVersion}

Gets the version string of this avatar

**Example**:

```lua
avatar:getVersion()
```

---

### `hasTexture()` \{#hasTexture}

Gets whether or not this avatar has a texture

**Example**:

```lua
avatar:hasTexture()
```

---

### `setColor(Vector3)` \{#setColor}

Sets the current color string of your avatar, used as your avatar theme

Can be given a rgb as Vector3 or three numbers, it expects numbers 0-1

**Example**:

```lua
avatar:setColor(50 / 255, 200 / 255, 200 / 255)
```

---

### `getColor()` \{#getColor}

Gets the current color string of your avatar, used as your avatar theme

**Example**:

```lua
avatar:getColor()
```

## Misc

### `store(string,any)` \{#store}

Store the given key-value pair inside your current avatar's metadata

Someone else can get this information from a different script with the avatarVars() function in World

The key must be a string

**Example**:

```lua
avatar:store("storing", true)
```

---

### `getSize()` \{#getSize}

Gets the file size of this avatar in bytes

**Example**:

```lua
avatar:getSize()
```

---

### `getEntityName()` \{#getEntityName}

Attempts to get the entity name of this avatar, defaulting to the avatar name

**Example**:

```lua
avatar:getEntityName()
```

---

### `getUUID()` \{#getUUID}

Returns the UUID of the owner of this avatar

**Example**:

```lua
avatar:getUUID()
```

### `getNBT()` \{#getNBT}

Gets the NBT data this avatar is stored as

**Example**:

```lua
avatar:getNBT()
```

### `hasScriptError()` \{#hasScriptError}

Gets whether this script currently has stopped due to an error (kinda useless lol)

**Example**:

```lua
avatar:hasScriptError()
```

---

## Permissions

### `getPermissionLevel()` \{#getPermissionLevel}

Returns this avatar current permission level

**Example**:

```lua
avatar:getPermissionLevel()
```

---

### `getComplexity()` \{#getComplexity}

Gets the current complexity of this avatar

**Example**:

```lua
avatar:getComplexity()
```

---

### `getMaxComplexity()` \{#getMaxComplexity}

Gets the maximum allowed model complexity (number of faces) as permitted by the viewer

**Example**:

```lua
avatar:getMaxComplexity()
```

---

### `getInitCount()` \{#getInitCount}

Gets the number of initialization instructions of this avatar

**Example**:

```lua
avatar:getInitCount()
```

---

### `getMaxInitCount()` \{#getMaxInitCount}

Gets the maximum allowed instructions during initialization as permitted by the viewer

**Example**:

```lua
avatar:getMaxInitCount()
```

---

### `getEntityInitCount()` \{#getEntityInitCount}

Gets the number of events.ENTITY_INIT instructions of this avatar

**Example**:

```lua
avatar:getEntityInitCount()
```

---

### `getTickCount()` \{#getTickCount}

Gets the number of events.TICK instructions of this avatar last tick

**Example**:

```lua
avatar:getTickCount()
```

---

### `getMaxTickCount()` \{#getMaxTickCount}

Gets the maximum allowed instructions in events.TICK as permitted by the viewer

**Example**:

```lua
avatar:getMaxTickCount()
```

---

### `getWorldTickCount()` \{#getWorldTickCount}

Gets the number of events.WORLD_TICK instructions of this avatar last tick

**Example**:

```lua
avatar:getWorldTickCount()
```

---

### `getMaxWorldTickCount()` \{#getMaxWorldTickCount}

Gets the maximum allowed instructions in events.WORLD_TICK as permitted by the viewer

**Example**:

```lua
avatar:getMaxWorldTickCount()
```

---

### `getRenderCount()` \{#getRenderCount}

Gets the number of events.RENDER and events.POST_RENDER instructions of this avatar last frame

**Example**:

```lua
avatar:getRenderCount()
```

---

### `getMaxRenderCount()` \{#getMaxRenderCount}

Gets the maximum allowed instructions in events.RENDER and Events.POST_RENDER as permitted by the viewer

**Example**:

```lua
avatar:getMaxRenderCount()
```

---

### `getWorldRenderCount()` \{#getWorldRenderCount}

Gets the number of events.WORLD_RENDER and events.POST_WORLD_RENDER instructions of this avatar last frame
**Example**:

```lua
avatar:getWorldRenderCount()
```

---

### `getMaxWorldRenderCount()` \{#getMaxWorldRenderCount}

Gets the maximum allowed instructions in events.WORLD_RENDER and events.POST_WORLD_RENDER as permitted by the viewer

**Example**:

```lua
avatar:getMaxWorldRenderCount()
```

---

### `getRemainingSounds()` \{#getRemainingSounds}

Gets the remaining amount of sound this avatar can play

**Example**:

```lua
avatar:getRemainingSounds()
```

---

### `getMaxSounds()` \{#getMaxSounds}

Gets the maximum allowed number of sounds as permitted by the viewer

**Example**:

```lua
avatar:getMaxSounds()
```

---

### `getAnimationCount()` \{#getAnimationCount}

Gets the number of Lua instructions used within animations

**Example**:

```lua
avatar:getAnimationCount()
```

---

### `getMaxAnimationCount()` \{#getMaxAnimationCount}

Gets the maximum allowed Lua instructions in animations as permitted by the viewer

**Example**:

```lua
avatar:getMaxAnimationCount()
```

---

### `getAnimationComplexity()` \{#getAnimationComplexity}

Gets the current animation complexity of this avatar

**Example**:

```lua
avatar:getAnimationComplexity()
```

---

### `getMaxAnimationComplexity()` \{#getMaxAnimationComplexity}

Gets the maximum allowed animation complexity (number of playing channels) as permitted by the viewer

**Example**:

```lua
avatar:getMaxAnimationComplexity()
```

---

### `getMaxTextureSize()` \{#getMaxTextureSize}

Gets the max dimensions of custom textures that this avatar can create

**Example**:

```lua
avatar:getMaxTextureSize()
```

---

### `getRemainingParticles()` \{#getRemainingParticles}

Gets the remaining amount of particles this avatar can summon

**Example**:

```lua
avatar:getRemainingParticles()
```

---

### `getMaxParticles()` \{#getMaxParticles}

Gets the maximum allowed number of particles as permitted by the viewer

**Example**:

```lua
avatar:getMaxParticles()
```

---

### `getCurrentInstructions()` \{#getCurrentInstructions}

Gets the current number of instructions that have been executed by your avatar

Resets to 0 at the beginning of certain events

**Example**:

```lua
avatar:getCurrentInstructions()
```

---

### `canEditVanillaModel()` \{#canEditVanillaModel}

Gets whether or not the viewer allows your avatar to edit the vanilla models

**Example**:

```lua
avatar:canEditVanillaModel()
```

---

### `canRenderOffscreen()` \{#canRenderOffscreen}

Gets whether or not the viewer allows you to render the avatar off-screen

**Example**:

```lua
avatar:canRenderOffscreen()
```

---

### `canHaveCustomSkull()` \{#canHaveCustomSkull}

Gets whether or not your avatar is allowed to have custom player skull

**Example**:

```lua
avatar:canHaveCustomSkull()
```

---

### `canUseCustomSounds()` \{#canUseCustomSounds}

Gets whether or not the viewer allows your avatar to play custom sounds

**Example**:

```lua
avatar:canUseCustomSounds()
```

---

### `canEditNameplate()` \{#canEditNameplate}

Gets whether or not the viewer allows your avatar to edit your nameplate

**Example**:

```lua
avatar:canEditNameplate()
```

---

### `getVolume()` \{#getVolume}

Gets the maximum allowed volume of this avatar as permitted by the viewer

**Example**:

```lua
avatar:getVolume()
```

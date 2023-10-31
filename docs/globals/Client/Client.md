The global instance of ClientAPI

### `getViewer()` \{#getViewer}

Returns the player entity from the running client

**Example**:

```lua
client:getViewer()
```

## Versions

### `getVersion()` \{#getVersion}

Returns the Minecraft version of your client

**Example**:

```lua
client:getVerison()
```

---

### `getVersionName()` \{#getVersionName}

Returns the extended name of the Minecraft version of your client

**Example**:

```lua
client:getVersionName()
```

---

### `getJavaVersion()` \{#getJavaVersion}

Returns your current Java version you're playing Minecraft with

**Example**:

```lua
client:getJavaVersion()
```

---

### `isSnapshot()` \{#isSnapshot}

Returns if the client is running a snapshot or full release version

**Example**:

```lua
client:isSnapshot()
```

---

### `getFiguraVersion()` \{#getFiguraVersion}

Gets the client Figura version

**Example**:

```lua
client:getFiguraVersion()
```

---

### `compareVersions()` \{#compareVersions}

Compares two versions if they are less than (-1), equals (0) or greater than (1)

**Example**:

```lua
client:compareVersions("0.1.0", "0.1.3")
```

---

### `isModLoaded(string)` \{#isModLoaded}

Checks if the client have loaded the given mod ID

**Example**:

```lua
client:isModLoaded("origins")
```

---

### `hasIris()` \{#hasIris}

Checks if the client has the Iris mod installed

**Example**:

```lua
client:hasIris()
```

---

### `hasIrisShader()` \{#hasIrisShader}

Checks if the client is currently using an Iris shader

**Example**:

```lua
client:hasIrisShader()
```

### `getClientBrand()` \{#getClientBrand}

Returns the "version type" of your client, usually the client modloader brand

**Example**:

```lua
client:getClientBrand()
```

---

### `getServerBrand()` \{#getServerBrand}

Returns the type of server you're on

In singleplayer, this is "Integrated"

**Example**:

```lua
client:getServerBrand()
```

## Client Camera

### `getCameraPos()` \{#getCameraPos}

Returns the position of the viewer's camera

**Example**:

```lua
client:getCameraPos()
```

---

### `getCameraRot()` \{#getCameraRot}

Returns the rotation of the viewer's camera

**Example**:

```lua
client:getCameraRot()
```

---

### `getFOV()` \{#getFOV}

Returns the current FOV option of the client, not including additional effects such as speed or sprinting

**Example**:

```lua
client:getFOV()
```

---

### `getWindowSize()` \{#getWindowSize}

Returns the size of the Minecraft window in pixels, as \{width, height}

**Example**:

```lua
client:getWindowSize()
```

---

### `getScaledWindowSize()` \{#getScaledWindowSize}

Returns the size of the window in Minecraft's interal GUI units

**Example**:

```lua
client:getScaledWindowSize()
```

---

### `getGuiScale()` \{#getGuiScale}

Returns the current value of your Gui Scale setting

If you use auto, then it gets the actual current scale

**Example**:

```lua
client:getGuiScale()
```

---

### `getMousePos()` \{#getMousePos}

Returns the position of the mouse in pixels, relative to the top-left corner

**Example**:

```lua
client:getMousePos()
```

---

### `getCameraDir()` \{#getCameraDir}

Returns a unit vector pointing in the direction that the camera is facing

**Example**:

```lua
client:getCameraDir()
```

---

### `getCameraEntity()` \{#getCameraEntity}

Returns the entity the camera is currently targeting, so returns the entity you are currently spectating, including yourself

**Example**:

```lua
client:getCameraEntity()
```

## Client State

### `isPaused()` \{#isPaused}

Returns true if the client is paused

**Example**:

```lua
client:isPaused()
```

---

### `isHudEnabled()` \{#isHudEnabled}

Returns true if the hud is enabled (F1 disables the HUD)

**Example**:

```lua
client:isHudEnabled()
```

---

### `isDebugOverlayEnabled()` \{#isDebugOverlayEnabled}

Returns true if the F3 screen is currently open

**Example**:

```lua
client:isDebugOverlayEnabled()
```

---

### `getActiveResourcePacks()` \{#getActiveResourcePacks}

Returns a table with the active resource pack names

**Example**:

```lua
client:getActiveResourcePacks()
```

---

### `hasResource()` \{#hasResource}

Checks if the specific resource exists withing the client resources

**Example**:

```lua
client:hasResource()
```

---

### `getActiveLang()` \{#getActiveLang}

Returns a string representation of the current game language

**Example**:

```lua
client:getActiveLang()
```

### `isWindowFocused()` \{#isWindowFocused}

Returns true if the Minecraft window is currently focused

**Example**:

```lua
client:isWindowFocused()
```

---

### `getCurrentEffect()` \{#getCurrentEffect}

Returns the path to the currently applied shader, used when spectating an entity that has different vision than normal

Normally returns nil

**Example**:

```lua
client:getCurrentEffect()
```

## Stats

### `getEntityStatistics()` \{#getEntityStatistics}

Returns a string containing information about the loaded entities on the client

This string appears in the F3 menu

**Example**:

```lua
client:getEntityStatistics()
```

---

### `getServerData()` \{#getServerData}

Returns a table with information of the current connected server (also for singleplayer worlds)

**Example**:

```lua
client:getServerData()
```

---

### `getDate()` \{#getDate}

Returns a table with information about the client current time

**Example**:

```lua
client:getDate()
```

---

### `getSystemTime()` \{#getSystemTime}

Returns the current system time in milliseconds

**Example**:

```lua
client:getSystemTime()
```

---

### `getFPS()` \{#getFPS}

Gets the FPS of the client

Returns 0 if the fps counter isn't ready yet (or if your pc is just that bad)

**Example**:

```lua
client:getFPS()
```

---

### `getFPSString()` \{#getFPSString}

Gets the FPS string of the client, displayed in the F3 menu

Contains info on the fps, the fps limit, vsync, cloud types, and biome blend radius

**Example**:

```lua
client:getFPSString()
```

---

### `getFrameTime()` \{#getFrameTime}

Returns the current fraction between the last tick and the next tick

This is the value used as "delta" in the RENDER event

**Example**:

```lua
client:getFrameTime()
```

---

### `getSoundStatistics()` \{#getSoundStatistics}

Returns a string containing information about the currently playing sounds on the client

This string appears in the F3 menu

**Example**:

```lua
client:getSoundStatistics()
```

---

### `getMaxMemory()` \{#getMaxMemory}

Returns the maximum amount of memory that Minecraft will try to use

**Example**:

```lua
client:getMaxMemory()
```

---

### `getAllocatedMemory()` \{#getAllocatedMemory}

Returns the maximum amount of memory that Minecraft can possibly use

**Example**:

```lua
client:getAllocatedMemory()
```

---

### `getChunkStatistics()` \{#getChunkStatistics}

Returns a string containing information about the player's chunk

This string appears in the F3 menu

**Example**:

```lua
client:getChunkStatistics()
```

---

### `getParticleCount()` \{#getParticleCount}

Returns the number of currently loaded particles

**Example**:

```lua
client:getParticleCount()
```

---

### `getUsedMemory()` \{#getUsedMemory}

Returns the number of bytes of memory Minecraft is currently using

**Example**:

```lua
client:getUsedMemory()
```

---

### `getEntityCount()` \{#getEntityCount}

Returns the number of currently loaded entities

**Example**:

```lua
client:getEntityCount()
```

## Misc

### `getTranslatedString(string,any)` \{#getTranslatedString}

Returns the translated string of the given key

Translation is done using the current client language

Optionally take a single argument, or a list with all arguments, that will populate the translation

**Example**:

```lua
client.getTranslatedString("figura.gui.wardrobe.drop_files")
```

---

### `listAtlases()` \{#listAtlases}

Returns a list of all registered atlases paths

**Example**:

```lua
client:listAtlases()
```

---

### `getAtlas(string)` \{#getAtlas}

Returns a TextureAtlasAPI object with information about the given atlas

Returns nil if the atlas was not found

**Example**:

```lua
client:getAtlas()
```

---

### `intUUIDToString(int,int,int,int)` \{#intUUIDToString}

Converts an int array UUID (as 4 separated arguments) into its hexadecimal string representation

**Example**:

```lua
client:intUUIDToString()
```

---

### `uuidToIntArray(string)` \{#uuidToIntArray}

Converts a string UUID into its int array representation, returning a varargs of 4 ints

**Example**:

```lua
client:uuidToIntArray("5003b2ce-7a8d-4c56-8b91-ec705985fe08")
```

---

### `getTextDimensions(string,int,bool)` \{#getTextDimensions}

Returns the width and height of the given text, wrapping lines and trimming to a max width

**Example**:

```lua
client:getTextDimensions("Example text", 40, true)
```

---

### `getTextWidth(string)` \{#getTextWidth}

Returns the width and height of the given text, wrapping lines and trimming to a max width

**Example**:

```lua
client:getTextWidth("Example text")
```

---

### `getTextHeight(string)` \{#getTextHeight}

Returns the height of the given text in pixels

**Example**:

```lua
client:getTextHeight("Example text")
```

---

### `getTabList()` \{#getTabList}

Returns a table with the text shown in the tablist

**Example**:

```lua
client:getTabList()
```

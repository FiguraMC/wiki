import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

A global API used to interact with the current Minecraft client

Most of its functions return things that can be found in the F3 menu

### <code>getViewer()</code> \{#getViewer}

Returns the player entity from the running client

```lua
getViewer()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[ViewerAPI](/globals/Player/Viewer)</code> | -           |

**Example:**

```lua
--todo
```

---

## Versions

### <code>getVersion()</code> \{#getVersion}

Returns the Minecraft version of your client

```lua
getVersion()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getVersionName()</code> \{#getVersionName}

Returns the extended name of the Minecraft version of your client

```lua
getVersionName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getJavaVersion()</code> \{#getJavaVersion}

Returns your current Java version you're playing Minecraft with

```lua
getJavaVersion()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isSnapshot()</code> \{#isSnapshot}

Returns if the client is running a snapshot or full release version

```lua
isSnapshot()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getFiguraVersion()</code> \{#getFiguraVersion}

Gets the client Figura version

```lua
getFiguraVersion()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>compareVersions()</code> \{#compareVersions}

Compares two versions if they are less than (-1), equals (0) or greater than (1)

```lua
compareVersions(version1, version2)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| version1 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| version2 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isModLoaded()</code> \{#isModLoaded}

Checks if the client has loaded the given mod ID

```lua
isModLoaded(modID)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| modID | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>hasShaderPackMod()</code> \{#hasShaderPackMod}

Checks if the client has a Shader Pack mod installed

```lua
hasShaderPackMod()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>hasShaderPack()</code> \{#hasShaderPack}

Checks if the client is currently using a Shader Pack

```lua
hasShaderPack()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getShaderPackName()</code> \{#getShaderPackName}

Returns a string with the current shader pack name, empty if none is being used.

```lua
getShaderPackName()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getClientBrand()</code> \{#getClientBrand}

Returns the "version type" of your client, usually the client modloader brand

```lua
getClientBrand()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getServerBrand()</code> \{#getServerBrand}

Returns the type of server you're on

In singleplayer, this is "Integrated"

```lua
getServerBrand()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

## Client Camera

### <code>getCameraPos()</code> \{#getCameraPos}

Returns the position of the viewer's camera

```lua
getCameraPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getCameraRot()</code> \{#getCameraRot}

Returns the rotation of the viewer's camera

```lua
getCameraRot()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getCameraDir()</code> \{#getCameraDir}

Returns a unit vector pointing in the direction that the camera is facing

```lua
getCameraDir()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getCameraEntity()</code> \{#getCameraEntity}

Returns the entity the camera is currently targeting, so returns the entity you are currently spectating, including yourself

```lua
getCameraEntity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getFOV()</code> \{#getFOV}

Returns the current FOV option of the client, not including additional effects such as speed or sprinting

```lua
getFOV()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getWindowSize()</code> \{#getWindowSize}

Returns the size of the Minecraft window in pixels, as (width, height)

```lua
getWindowSize()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getScaledWindowSize()</code> \{#getScaledWindowSize}

Returns the size of the window in Minecraft's internal GUI units

```lua
getScaledWindowSize()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getGuiScale()</code> \{#getGuiScale}

Returns the current value of your Gui Scale setting

If you use auto, then it gets the actual current scale

```lua
getGuiScale()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getMousePos()</code> \{#getMousePos}

Returns the position of the mouse in pixels, relative to the top-left corner

```lua
getMousePos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

**Example:**

```lua
--todo
```

---

## Client State

### <code>isPaused()</code> \{#isPaused}

Returns true if the client is paused

```lua
isPaused()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isHudEnabled()</code> \{#isHudEnabled}

Returns true if the hud is enabled (F1 disables the HUD)

```lua
isHudEnabled()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isDebugOverlayEnabled()</code> \{#isDebugOverlayEnabled}

Returns true if the F3 screen is currently open

```lua
isDebugOverlayEnabled()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getActiveResourcePacks()</code> \{#getActiveResourcePacks}

Returns a table with the active resource pack names

```lua
getActiveResourcePacks()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>hasResource()</code> \{#hasResource}

Checks if the specific resource exists within the client resources

```lua
hasResource(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getActiveLang()</code> \{#getActiveLang}

Returns a string representation of the current game language

```lua
getActiveLang()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isWindowFocused()</code> \{#isWindowFocused}

Returns true if the Minecraft window is currently focused

```lua
isWindowFocused()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getCurrentEffect()</code> \{#getCurrentEffect}

Returns the path to the currently applied shader, used when spectating an entity that has different vision than normal

Normally returns nil

```lua
getCurrentEffect()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

## Stats

### <code>getEntityCount()</code> \{#getEntityCount}

Returns the number of currently loaded entities

```lua
getEntityCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getEntityStatistics()</code> \{#getEntityStatistics}

Returns a string containing information about the loaded entities on the client

This string appears in the F3 menu

```lua
getEntityStatistics()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getServerData()</code> \{#getServerData}

Returns a table with information on the currently connected server (also for singleplayer worlds)

```lua
getServerData()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getDate()</code> \{#getDate}

Returns a table with information about the client's current time

```lua
getDate()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getSystemTime()</code> \{#getSystemTime}

Returns the current system time in milliseconds

```lua
getSystemTime()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getFPS()</code> \{#getFPS}

Gets the FPS of the client

Returns 0 if the fps counter isn't ready yet (or if your PC is just that bad)

```lua
getFPS()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getFPSString()</code> \{#getFPSString}

Gets the FPS string of the client, displayed in the F3 menu

Contains info on the fps, the fps limit, vsync, cloud types, and biome blend radius

```lua
getFPSString()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getFrameTime()</code> \{#getFrameTime}

Returns the current fraction between the last tick and the next tick

This is the value used as "delta" in the RENDER event

```lua
getFrameTime()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getSoundStatistics()</code> \{#getSoundStatistics}

Returns a string containing information about the currently playing sounds on the client

This string appears in the F3 menu

```lua
getSoundStatistics()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getMaxMemory()</code> \{#getMaxMemory}

Returns the maximum amount of memory that Minecraft will try to use

```lua
getMaxMemory()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getAllocatedMemory()</code> \{#getAllocatedMemory}

Returns the maximum amount of memory that Minecraft could possibly use

```lua
getAllocatedMemory()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getUsedMemory()</code> \{#getUsedMemory}

Returns the number of bytes of memory Minecraft is currently using

```lua
getUsedMemory()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getChunkStatistics()</code> \{#getChunkStatistics}

Returns a string containing information about the player's chunk

This string appears in the F3 menu

```lua
getChunkStatistics()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getParticleCount()</code> \{#getParticleCount}

Returns the number of currently loaded particles

```lua
getParticleCount()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

## Misc

### <code>getActionbar()</code> \{#getActionbar}

Returns the current actionbar text, or nil if the action bar isn't visible

```lua
getActionbar()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getAtlas()</code> \{#getAtlas}

Returns a TextureAtlasAPI object with information about the given atlas

Returns nil if the atlas was not found

```lua
getAtlas(path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                        | Description |
| ----------------------------------------------------------- | ----------- |
| <code>[TextureAtlas](/globals/Textures/TextureAtlas)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getEnum()</code> \{#getEnum}

Return an array containing the entries in the given enum

Enums can be found in /figura docs enums

```lua
getEnum(enumName)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| enumName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getRegistry()</code> \{#getRegistry}

Returns a list of all values in the specified registry

See the `registries` enum for a list of valid registries

```lua
getRegistry(registryName)
```

**Parameters:**

| Name         | Type                                            | Description | Default |
| ------------ | ----------------------------------------------- | ----------- | ------- |
| registryName | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getScoreboard()</code> \{#getScoreboard}

Returns data about the current scoreboard(s). Multiple scoreboards can be visible at the same time (sidebar, team sidebar, list, and below name), so each scoreboard is grouped by its display location

```lua
getScoreboard()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getSubtitle()</code> \{#getSubtitle}

Returns the current subtitle text, or nil if the title or subtitle isn't visible

```lua
getSubtitle()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTabList()</code> \{#getTabList}

Returns a table with the text shown in the tablist

```lua
getTabList()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTextDimensions()</code> \{#getTextDimensions}

Returns the width and height of the given text, wrapping lines and trimming to a max width

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getTextDimensions(text)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getTextDimensions(text, maxWidth, wrap)
```

**Parameters:**

| Name     | Type                                              | Description | Default |
| -------- | ------------------------------------------------- | ----------- | ------- |
| text     | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| maxWidth | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| wrap     | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector2](/globals/Vectors/Vector2)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getTextHeight()</code> \{#getTextHeight}

Returns the height of the given text in pixels

```lua
getTextHeight(text)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTextWidth()</code> \{#getTextWidth}

Returns the width of the given text in pixels

In case of multiple lines, return the largest width of all lines

```lua
getTextWidth(text)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTitle()</code> \{#getTitle}

Returns the current title text, or nil if the title isn't visible

```lua
getTitle()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTranslatedString()</code> \{#getTranslatedString}

Returns the translated string of the given key

Translation is done using the current client language

Optionally takes a single argument, or a list with all arguments, that will populate the translation

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getTranslatedString(text)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getTranslatedString(text, args)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| args | <code>AnyType</code>                            | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>generateUUID()</code> \{#generateUUID}

Generates a random UUID

```lua
generateUUID()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Varargs](/tutorials/types/Varargs)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>intUUIDToString()</code> \{#intUUIDToString}

Converts an int array UUID (as 4 separated arguments) into its hexadecimal string representation

```lua
intUUIDToString(a, b, c, d)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| a    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| c    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| d    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>listAtlases()</code> \{#listAtlases}

Returns a list of all registered atlases paths

```lua
listAtlases()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>uuidToIntArray()</code> \{#uuidToIntArray}

Converts a string UUID into its int array representation, returning a varargs of 4 ints

```lua
uuidToIntArray(uuid)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| uuid | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Varargs](/tutorials/types/Varargs)</code> | -           |

**Example:**

```lua
--todo
```

---

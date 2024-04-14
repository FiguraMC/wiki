import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Represents a sound that can be played

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Obtained by indexing the SoundAPI

Exists as an object-oriented alternative to sounds:playSound()

## Playing

### <code>play()</code> \{#play}

Plays this sound, or resume a paused sound

```lua
play()
```

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:play()
```

---

### <code>stop()</code> \{#stop}

Stops the playback of this sound

```lua
stop()
```

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:stop()
```

---

### <code>pause()</code> \{#pause}

Pauses the current playback of this sound

```lua
pause()
```

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:pause()
```

---

### <code>isPlaying()</code> \{#isPlaying}

Checks if this sound is being played

```lua
isPlaying()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
mySound:isPlaying()
```

---

### <code>isLooping()</code> \{#isLooping}

Checks if this sound is looping

```lua
isLooping()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
mySound:isLooping()
```

---

## Sound Properties

### <code>setPos()</code> \{#setPos}

**Aliases:** `pos()`

Sets the position of this sound

Position is given in world coordinates

Default 0

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
setPos(pos)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| pos  | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setPos(x, y, z)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| x    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| y    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| z    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
mySound:setPos(player:getPos())
```

---

### <code>getPos()</code> \{#getPos}

Get this sound position

```lua
getPos()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
mySound:getPos()
```

---

### <code>setAttenuation()</code> \{#setAttenuation}

**Aliases:** `attenuation()`

Sets the attenuation of this sound

Default 1

```lua
setAttenuation(attenuation)
```

**Parameters:**

| Name        | Type                                            | Description | Default |
| ----------- | ----------------------------------------------- | ----------- | ------- |
| attenuation | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:setAttenuation(5)
```

---

### <code>getAttenuation()</code> \{#getAttenuation}

Gets this sound attenuation

```lua
getAttenuation()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
mySound:getAttenuation()
```

---

### <code>setLoop()</code> \{#setLoop}

**Aliases:** `loop()`

Toggles if this sound should loop

Default false

```lua
setLoop(loop)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| loop | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:setLoop(true)
```

---

### <code>setPitch()</code> \{#setPitch}

**Aliases:** `pitch()`

Sets the pitch of this sound

Default 1

```lua
setPitch(pitch)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| pitch | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:setPitch(5)
```

---

### <code>getPitch()</code> \{#getPitch}

Gets this sound pitch

```lua
getPitch()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
mySound:getPitch()
```

---

### <code>setSubtitle()</code> \{#setSubtitle}

**Aliases:** `subtitle()`

Sets the subtitle text of this sound

```lua
setSubtitle(subtitle)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| subtitle | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:setSubtitle("Bat ecolocates")
```

---

### <code>getSubtitle()</code> \{#getSubtitle}

Gets the subtitle text from this sound

```lua
getSubtitle()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
mySound:getSubtitle()
```

---

### <code>setVolume()</code> \{#setVolume}

**Aliases:** `volume()`

Sets the volume of this sound

Default 1

```lua
setVolume(volume)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| volume | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[Sound](/globals/Sounds)</code> | Returns self for chaining |

**Example:**

```lua
mySound:setVolume(5)
```

---

### <code>getVolume()</code> \{#getVolume}

Gets this sound volume

```lua
getVolume()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
mySound:getVolume()
```

---

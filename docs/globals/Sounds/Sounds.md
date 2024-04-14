import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API which is used to play Minecraft sounds

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Accessed using the name "sounds"

---

### <code>playSound()</code> \{#playSound}

Plays the specified sound at the specified position with the given volume and pitch multipliers

The sound id is either an identifier or the custom sound name

Volume in Minecraft refers to how far away people can hear the sound from, not the actual loudness of it

If you don't give values for volume and pitch, the default values are 1

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
playSound(sound, pos)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| sound | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| pos   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                  | Description |
| ------------------------------------- | ----------- |
| <code>[Sound](/globals/Sounds)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
playSound(sound, posX, posY, posZ)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| sound | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| posX  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| posY  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| posZ  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description |
| ------------------------------------- | ----------- |
| <code>[Sound](/globals/Sounds)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
playSound(sound, pos, volume, pitch, loop)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| sound  | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| pos    | <code>[Vector3](/globals/Vectors/Vector3)</code>  | -           | -       |
| volume | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| pitch  | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| loop   | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                  | Description |
| ------------------------------------- | ----------- |
| <code>[Sound](/globals/Sounds)</code> | -           |

</TabItem>
<TabItem value="overload-4" label="Overload 4">

```lua
playSound(sound, posX, posY, posZ, volume, pitch, loop)
```

**Parameters:**

| Name   | Type                                              | Description | Default |
| ------ | ------------------------------------------------- | ----------- | ------- |
| sound  | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| posX   | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| posY   | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| posZ   | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| volume | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| pitch  | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| loop   | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                  | Description |
| ------------------------------------- | ----------- |
| <code>[Sound](/globals/Sounds)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
sounds:playSound("entity.bat.ambient", player:getPos(), 1, 1, false)
```

---

### <code>stopSound()</code> \{#stopSound}

Stops the playing sounds from this avatar

If an id is specified, it only stops the sounds from that id

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
stopSound()
```

**Returns:**

| Type                                           | Description               |
| ---------------------------------------------- | ------------------------- |
| <code>[SoundAPI](/globals/Sounds/Sound)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
stopSound(id)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                           | Description               |
| ---------------------------------------------- | ------------------------- |
| <code>[SoundAPI](/globals/Sounds/Sound)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
sounds:stopSound()
```

---

### <code>newSound()</code> \{#newSound}

Registers a new custom sound for this avatar

The first argument is the sound id while the second argument is either a byte array of the sound data or a base64 string representation of the same

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
newSound(name, byteArray)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| name      | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| byteArray | <code>[Table](/tutorials/types/Tables)</code>   | -           | -       |

**Returns:**

| Type                                           | Description               |
| ---------------------------------------------- | ------------------------- |
| <code>[SoundAPI](/globals/Sounds/Sound)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
newSound(name, base64Text)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| name       | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| base64Text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                           | Description               |
| ---------------------------------------------- | ------------------------- |
| <code>[SoundAPI](/globals/Sounds/Sound)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
local base64 =
    "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"

sounds:newSound("yes", base64)
sounds.yes:play()
```

---

### <code>getCustomSounds()</code> \{#getCustomSounds}

Returns a table with all registered custom sounds ids

```lua
getCustomSounds()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
sounds:getCustomSounds()
```

---

### <code>isPresent()</code> \{#isPresent}

Checks if this sound id is registered either by custom avatar sounds or a vanilla sound

```lua
isPresent(id)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| id   | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
sounds:isPresent("entity.bat.ambient")
```

---

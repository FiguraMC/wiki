import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API which is used to play Minecraft sounds

:::danger
This page is a WIP.
:::

Accessed using the name "sounds"

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
| sound | <code>[String](#)</code>                         | -           | -       |
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

| Name  | Type                     | Description | Default |
| ----- | ------------------------ | ----------- | ------- |
| sound | <code>[String](#)</code> | -           | -       |
| posX  | <code>[Number](#)</code> | -           | -       |
| posY  | <code>[Number](#)</code> | -           | -       |
| posZ  | <code>[Number](#)</code> | -           | -       |

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

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| sound  | <code>[String](#)</code>                         | -           | -       |
| pos    | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| volume | <code>[Number](#)</code>                         | -           | -       |
| pitch  | <code>[Number](#)</code>                         | -           | -       |
| loop   | <code>[Boolean](#)</code>                        | -           | -       |

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

| Name   | Type                      | Description | Default |
| ------ | ------------------------- | ----------- | ------- |
| sound  | <code>[String](#)</code>  | -           | -       |
| posX   | <code>[Number](#)</code>  | -           | -       |
| posY   | <code>[Number](#)</code>  | -           | -       |
| posZ   | <code>[Number](#)</code>  | -           | -       |
| volume | <code>[Number](#)</code>  | -           | -       |
| pitch  | <code>[Number](#)</code>  | -           | -       |
| loop   | <code>[Boolean](#)</code> | -           | -       |

**Returns:**

| Type                                  | Description |
| ------------------------------------- | ----------- |
| <code>[Sound](/globals/Sounds)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| id   | <code>[String](#)</code> | -           | -       |

**Returns:**

| Type                                           | Description               |
| ---------------------------------------------- | ------------------------- |
| <code>[SoundAPI](/globals/Sounds/Sound)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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

| Name      | Type                     | Description | Default |
| --------- | ------------------------ | ----------- | ------- |
| name      | <code>[String](#)</code> | -           | -       |
| byteArray | <code>[Table](#)</code>  | -           | -       |

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

| Name       | Type                     | Description | Default |
| ---------- | ------------------------ | ----------- | ------- |
| name       | <code>[String](#)</code> | -           | -       |
| base64Text | <code>[String](#)</code> | -           | -       |

**Returns:**

| Type                                           | Description               |
| ---------------------------------------------- | ------------------------- |
| <code>[SoundAPI](/globals/Sounds/Sound)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getCustomSounds()</code> \{#getCustomSounds}

Returns a table with all registered custom sounds ids

```lua
getCustomSounds()
```

**Returns:**

| Type                            | Description |
| ------------------------------- | ----------- |
| <code>[java.util.Set](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>isPresent()</code> \{#isPresent}

Checks if this sound id is registered either by custom avatar sounds or a vanilla sound

```lua
isPresent(id)
```

**Parameters:**

| Name | Type                     | Description | Default |
| ---- | ------------------------ | ----------- | ------- |
| id   | <code>[String](#)</code> | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Boolean](#)</code> | -           |

**Example:**

```lua
--todo
```

---

Represents a sound that can be played

Obtained by indexing the SoundAPI

Exists as an object-oriented alternative to sounds:playSound()

For the purposes of the examples assume:

```lua
local mySound = sounds["entity.bat.ambient"]
```

---

### `stop()` \{#stop}

Stops the sound

**Example**:

```lua
mySound:stop()
```

---

### `play()` \{#play}

Plays the sound

**Example**:

```lua
mySound:play()
```

---

### `pause()` \{#pause}

Pauses the sound

**Example**:

```lua
mySound:pause()
```

---

### `setPos(Vector3)` \{#setPos}

Sets the position of the sound

**Example**:

```lua
mySound:setPos(player:getPos())
```

---

### `getPos()` \{#getPos}

Gets the position of the sound as set by <code>setPos</code>

**Example**:

```lua
mySound:getPos()
```

---

### `isPlaying()` \{#isPlaying}

Gets if the sound is playing, but this is an unreliable function. A workaround is to stop the sound before you play it (even if it isn't playing) so you can reset the playing state.

:::caution

This function is unreliable and may not work as intended. A usable workaround is to stop the sound before you play it (even if it isn't playing) so you can reset the playing state.

:::

**Example**:

```lua
mySound:isPlaying()
```

---

### `setVolume(number)` \{#setVolume}

Sets the volume of the sound

**Example**:

```lua
mySound:setVolume(5)
```

---

### `getVolume()` \{#getVolume}

Gets the volume of the sound

**Example**:

```lua
mySound:getVolume()
```

---

### `setPitch(number)` \{#setPitch}

Sets the pitch of the sound

**Example**:

```lua
mySound:setPitch(5)
```

---

### `getPitch()` \{#getPitch}

Gets the pitch of the sound

**Example**:

```lua
mySound:getPitch()
```

---

### `setLoop(bool)` \{#setLoop}

Sets if the sound will loop or not

**Example**:

```lua
mySound:setLoop(true)
```

---

### `isLooping()` \{#isLooping}

Gets if the sound is set to loop or not

**Example**:

```lua
mySound:isLooping()
```

---

### `setAttenuation(number)` \{#setAttenuation}

Sets the attenuation of the sound

**Example**:

```lua
mySound:setAttenuation(5)
```

---

### `getAttenuation()` \{#getAttenuation}

Gets the attenuation of the sound

**Example**:

```lua
mySound:getAttenuation()
```

---

### `setSubtitle(string)` \{#setSubtitle}

Sets the subtitle (the name that Minecraft's subtitle function will call the sound)

**Example**:

```lua
mySound:setSubtitle("Bat ecolocates")
```

---

### `getSubtitle()` \{#getSubtitle}

Gets the subtitle

**Example**:

```lua
mySound:getSubtitle()
```

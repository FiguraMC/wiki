The global instance of SoundAPI

Any place where a sound is used, it can be either a Minecraft sound id or a custom sound id

---

### `playSound()` \{#playSound}

Plays the specified sound at the specified position with the given volume and pitch multipliers

The sound id is either an identifier or the custom sound name

Volume in Minecraft refers to how far away people can hear the sound from, not the actual loudness of it

If you don't give values for volume and pitch, the default values are 1

**Example**:

```lua
sounds:playSound("entity.bat.ambient", player:getPos(), 1, 1, false)
```

---

### `stopSound(string)` \{#stopSound}

Stops the playing sounds from this avatar

If an id is specified, it only stops the sounds from that id

```lua
sounds:stopSound()
```

---

### `isPresent(string)` \{#isPresent}

Checks if this sound id is registered either by custom avatar sounds or a vanilla sound

**Example**:

```lua
sounds:isPresent("entity.bat.ambient")
```

---

### `newSound(string,table)` \{#newSound}

Registers a new custom sound for this avatar

The first argument is the sound id while the second argument is either a byte array of the sound data, or a base64 string representation of the same

---

### `getCustomSounds()` \{#getCustomSounds}

Returns a table with all registered custom sounds ids

**Example**:

```lua
sounds:getCustomSounds()
```

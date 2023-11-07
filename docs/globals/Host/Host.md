The host API is accessed through the <code>host</code> global. Like so: <code>host:isFlying()</code>

Functions in the host API aren't synced, meaning to be useful in multiplayer their information will need to be synced via [pings](../tutorials/Pings).

---

### `isHost()` \{#isHost}

Returns true if this instance of the script is running on host

**Example**:

```lua
host:isHost()
```

---

## Player Data

---

### `isJumping()` \{#isJumping}

Checks if the jump key is being pressed.

**Example**:

```lua
host:isJumping()
```

---

### `isFlying()` \{#isFlying}

Checks if the player is currently creative flying

**Example**:

```lua
host:isFlying()
```

---

### `isContainerOpen()` \{#isContainerOpen}

Checks if the host has a container screen opened

**Example**:

```lua
host:isContainerOpen()
```

---

### `getAir()` \{#getAir}

Gets the remaining amount of air of the player. From 300 to -19, whenever you take damage from drowning it sets back to 0. Water breathing freezes the value when underwater. Respiration slows down how quickly the number goes down.

**Example**:

```lua
host:getAir()
```

---

### `getSlot(number or string)` \{#getSlot}

Gets an ItemStack for the item in the given slot

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

For the numerical id, 0-8 are the hotbar, 9-35 are the rest of the inventory starting from the top left slot, 99 is the offhand, and 100-103 are the armor slots from the boots to the helmet. <code>player:getItem()</code> is a better alternative for getting equipment slots.

**Example**:

```lua
host:getSlot(0)
```

---

### `setSlot(slot, item)` \{#setSlot}

Sets a slot with an ItemStack

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

Slot -1 uses the first available slot

Only runs for creative mode

**Example**:

```lua
host:setSlot(0, "apple")
-- setSlot also accepts an ItemStack retrieved from an actual item or world:newItem()
```

---

### `getScreenSlot(slot)` \{#getScreenSlot}

Gets the item in a screen slot

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

If the player is not currently in a screen, the screen has no slots, or the slot index is greater than the maximum, returns nil

**Example**:

```lua
host:getScreenSlot(0)
```

---

### `getScreenSlotCount()` \{#getScreenSlotCount}

Gets the number of slots in the screen the player is currently in

If the player is not currently in a screen or the screen has no slots, returns nil

**Example**:

```lua
host:getScreenSlotCount()
```

---

### `getScreen()` \{#getScreen}

Gets the class name of the screen the player is currently on. Class names are slightly obfuscated by Minecraft's code and will return a string ending in numbers that are the class' id. A list of class ids can be found in [GS' VSCode docs](https://github.com/GrandpaScout/FiguraRewriteVSDocs), or you can use a log to get the name of the screen you're accessing.

If the player is not currently in a screen, returns nil

**Example**:

```lua
host:getScreen()
```

---

### `getStatusEffects()` \{#getStatusEffects}

Returns a table of all of the player's status effects

The table contains sub-tables, each of which contains the name, amplifier, duration, and particle visibility of each status effect. To access a sub table index the effect table with the sub-table's name. Re the example below: <code>effect.name</code>

**Example**:

```lua
for _, effect in pairs(host:getStatusEffects()) do
    logTable(effect)
end
```

---

### `getAttackCharge()` \{#getAttackCharge}

Returns a fraction (0 to 1) of the charge of the player attack

If less than 1, every attack will result result in a weak attack

**Example**:

```lua
host:getAttackCharge()
```

---

### `getReachDistance()` \{#getReachDistance}

Returns the current reach distance of the player

**Example**:

```lua
host:getReachDistance()
```

---

### `getPickBlock()` \{#getPickBlock}

Returns the current targeted block set by the client

Returns a vararg of the block, the hit position and the block face the hit collided

[player:getTargetedBlock()](../globals/Player#getTargetedBlock) can be used as a synced alternative to this function.

**Example**:

```lua
host:getPickBlock()
```

---

### `getPickEntity()` \{#getPickEntity}

Returns the current targeted entity set by the client

[player:getTargetedEntity()](../globals/Player#getTargetedEntity) can be used as a synced alternative to this function.

**Example**:

```lua
host:getPickEntity()
```

---

## Chat

---

### `isChatOpen()` \{#isChatOpen}

Checks if the host has the chat screen opened

**Example**:

```lua
host:isChatOpen()
```

---

### `sendChatCommand(string)` \{#sendChatCommand}

Sends the given command in the chat

:::caution
In order to you this function you must turn the `Chat Messages` setting on in Figura's settings
:::

**Example**:

```lua
host:sendChatCommand("kill @a")
```

---

### `sendChatMessage(string)` \{#sendChatMessage}

Sends the given message in the chat

:::caution
In order to you this function you must turn the `Chat Messages` setting on in Figura's settings
:::

**Example**:

```lua
host:sendChatMessage("Hello World")
```

---

### `setChatMessage(number, string, Vector3)` \{#setChatMessage}

Modifies a chat message with the given text

Takes an index, were 1 means the last message on chat

Setting the message to nil will effectively remove it from the chat

The third arg is the background color of the message

**Example**:

```lua
host:setChatMessage(1, "Hi?", vec(1, 0, 0))
```

---

### `getChatMessage(number)` \{#getChatMessage}

Returns a table with information about a chat message

Takes an index, were 1 means the last message on chat

**Example**:

```lua
host:getChatMessage(1)
```

---

### `appendChatHistory(string)` \{#appendChatHistory}

Appends the message on the recent chat history

**Example**:

```lua
host:appendChatHistory("Hello World")
```

---

### `setChatText(string)` \{#setChatText}

Sets the text currently being typed in the chat window to the given string

:::caution
In order to use this function you must turn the `Chat Messages` setting on in Figura's settings
:::

**Example**:

```lua
host:setChatText("Hello World")
```

---

### `getChatText()` \{#getChatText}

Gets the text that is currently being typed into the chat window

**Example**:

```lua
host:getChatText("Hello World")
```

---

### `setChatColor(Vector3)` \{#setChatColor}

Sets the color of the text that is currently being typed into the chat window

**Example**:

```lua
host:setChatColor(0, 0, 1)
```

---

### `getChatColor()` \{#getChatColor}

Gets the chat window text color

**Example**:

```lua
host:getChatColor()
```

---

### `isChatVerified()` \{#isChatVerified}

Presumably gets if the messages being sent are verified by the Minecraft server (speculation)

**Example**:

```lua
host:isChatVerified()
```

---

## Other

---

### `swingArm(boolean)` \{#swingArm}

Animates swinging the player's arm

If the boolean is true, then the offhand is the one that swings

**Example**:

```lua
host:swingArm()
```

---

### `setTitle(string)` \{#setTitle}

Sets the current title to the given text

The text is given as json

**Example**:

```lua
host:setTitle("Hello World")
```

---

### `setSubtitle(string)` \{#setSubtitle}

Sets the current subtitle to the given text
The text is given as json

**Example**:

```lua
host:setSubtitle("Hello World")
```

---

### `setActionbar(string, boolean)` \{#setActionbar}

Sets the action bar message to the given text

The boolean parameter defaults to false and sets if the text will be animated

**Example**:

```lua
host:setActionbar("Hello World")
```

---

### `setTitleTimes(Vector3)` \{#setTitleTimes}

Sets the duration of the title on the screen, also its fade-in and fade-out durations.

The inputs for the Vector3 are ordered like-so: (fadeInTime, stayTime, fadeOutTime)

**Example**:

```lua
host:setTitleTimes(5, 5, 5)
```

---

### `clearTitle()` \{#clearTitle}

Clears the current title from the GUI

**Example**:

```lua
host:clearTitle()
```

---

### `setUnlockCursor(boolean)` \{#setUnlockCursor}

Toggles locking of your cursor, letting you move it freely on the screen instead of it controlling your player's rotation

**Example**:

```lua
host:setUnlockCursor(true)
```

---

### `isCursorUnlocked()` \{#isCursorUnlocked}

Checks if the cursor is currently unlocked

Only responds to your own changes in script, not anything done by Minecraft

**Example**:

```lua
host:isCursorUnlocked()
```

---

### `screenshot()` \{#screenshot}

Takes a screenshot from the current screen and returns a Texture of it

**Example**:

```lua
host:screenshot()
```

---

### `setClipboard(string)` \{#setClipboard}

Sets the clipboard text

**Example**:

```lua
host:setClipboard("Hello World")
```

---

### `getClipboard()` \{#getClipboard}

Gets the text from the clipboard

**Example**:

```lua
host:getClipboard()
```

---

### `isAvatarUploaded()` \{#isAvatarUploaded}

Checks if this avatar is currently uploaded

**Example**:

```lua
host:isAvatarUploaded()
```

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

A global API dedicated to specifically the host of the avatar

For other viewers, these do nothing

Functions in the host API aren't synced, meaning to be useful in multiplayer their information will need to be synced via [pings](../tutorials/Pings)

---

### <code>isHost()</code> \{#isHost}

Returns true if this instance of the script is running on host

```lua
isHost()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

## Player Data

### <code>isContainerOpen()</code> \{#isContainerOpen}

Checks if the host has a container screen opened

```lua
isContainerOpen()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>isFlying()</code> \{#isFlying}

Checks if the player is currently flying

```lua
isFlying()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>isJumping()</code> \{#isJumping}

Checks if the player is jumping

Note this is only true during the first tick the player started jumping

```lua
isJumping()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getAir()</code> \{#getAir}

Gets the remaining amount of air of the player

```lua
getAir()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Integer](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>setSlot()</code> \{#setSlot}

Sets a slot with an ItemStack

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

Slot -1 uses the first available slot

Only runs for creative mode

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setSlot(slot)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| slot | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setSlot(slot)
```

**Parameters:**
| Name | Type | Description | Default |
|------|---------------------------|-------------|---------|
| slot | <code>[Integer](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setSlot(slot, item)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| slot | <code>[String](#)</code> | - | - |
| item | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setSlot(slot, item)
```

**Parameters:**
| Name | Type | Description | Default |
|------|----------------------------------------------------|-------------|---------|
| slot | <code>[Integer](#)</code> | - | - |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getSlot()</code> \{#getSlot}

Gets an ItemStack for the item in the given slot

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getSlot(slot)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| slot | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|----------------------------------------------------|-------------|
| <code>[ItemStack](/globals/World/ItemStack)</code> | - |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getSlot(slot)
```

**Parameters:**
| Name | Type | Description | Default |
|------|---------------------------|-------------|---------|
| slot | <code>[Integer](#)</code> | - | - |

**Returns:**
| Type | Description |
|----------------------------------------------------|-------------|
| <code>[ItemStack](/globals/World/ItemStack)</code> | - |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getScreenSlot()</code> \{#getScreenSlot}

Gets the item in a screen slot

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

If the player is not currently in a screen, the screen has no slots, or the slot index is greater than the maximum, returns nil

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getScreenSlot(slot)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| slot | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|----------------------------------------------------|-------------|
| <code>[ItemStack](/globals/World/ItemStack)</code> | - |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getScreenSlot(slot)
```

**Parameters:**
| Name | Type | Description | Default |
|------|---------------------------|-------------|---------|
| slot | <code>[Integer](#)</code> | - | - |

**Returns:**
| Type | Description |
|----------------------------------------------------|-------------|
| <code>[ItemStack](/globals/World/ItemStack)</code> | - |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getScreenSlotCount()</code> \{#getScreenSlotCount}

Gets the number of slots in the screen the player is currently in

If the player is not currently in a screen or the screen has no slots, returns nil

```lua
getScreenSlotCount()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Integer](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getScreen()</code> \{#getScreen}

Gets the class name of the screen the player is currently on

If the player is not currently in a screen, returns nil

```lua
getScreen()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getStatusEffects()</code> \{#getStatusEffects}

Returns a table of all of the player's status effects

The table contains sub-tables, each of which contains the name, amplifier, duration, and particle visibility of each status effect

```lua
getStatusEffects()
```

**Returns:**
| Type | Description |
|-------------------------|-------------|
| <code>[Table](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getAttackCharge()</code> \{#getAttackCharge}

Returns a fraction (0 to 1) of the charge of the player attack

If less than 1, every attack will result in a weak attack

```lua
getAttackCharge()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getReachDistance()</code> \{#getReachDistance}

Returns the current reach distance of the player

```lua
getReachDistance()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[Number](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getPickBlock()</code> \{#getPickBlock}

Returns the current targeted block set by the client

Returns the block, the hit position, and the targeted block face as three separate values

```lua
getPickBlock()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Varargs](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>getPickEntity()</code> \{#getPickEntity}

Returns the currently targeted entity set by the client

```lua
getPickEntity()
```

**Returns:**
| Type | Description |
|--------------------------------------------------|-------------|
| <code>[EntityAPI](/globals/Player/Entity)</code> | - |

**Example:**

```lua
--todo
```

---

## Chat

### <code>isChatOpen()</code> \{#isChatOpen}

Checks if the host has the chat screen opened

```lua
isChatOpen()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>isChatVerified()</code> \{#isChatVerified}

figura.docs.host.is_chat_verified

```lua
isChatVerified()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>sendChatCommand()</code> \{#sendChatCommand}

Sends the given command in the chat

```lua
sendChatCommand(command)
```

**Parameters:**
| Name | Type | Description | Default |
|---------|--------------------------|-------------|---------|
| command | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>sendChatMessage()</code> \{#sendChatMessage}

Sends the given message in the chat

```lua
sendChatMessage(message)
```

**Parameters:**
| Name | Type | Description | Default |
|---------|--------------------------|-------------|---------|
| message | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>setChatColor()</code> \{#setChatColor}

**Aliases:** `chatColor()`

Sets the color of the text that is currently being typed into the chat window

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setChatColor(color)
```

**Parameters:**
| Name | Type | Description | Default |
|-------|--------------------------------------------------|-------------|---------|
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setChatColor(r, g, b)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| r | <code>[Number](#)</code> | - | - |
| g | <code>[Number](#)</code> | - | - |
| b | <code>[Number](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getChatColor()</code> \{#getChatColor}

Gets the chat window text color

```lua
getChatColor()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Integer](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>setChatMessage()</code> \{#setChatMessage}

Modifies a chat message with the given text

Takes an index, were 1 means the last message on chat

Setting the message to nil will effectively remove it from the chat

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setChatMessage(index)
```

**Parameters:**
| Name | Type | Description | Default |
|-------|---------------------------|-------------|---------|
| index | <code>[Integer](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setChatMessage(index, newMessage)
```

**Parameters:**
| Name | Type | Description | Default |
|------------|---------------------------|-------------|---------|
| index | <code>[Integer](#)</code> | - | - |
| newMessage | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setChatMessage(index, newMessage, backgroundColor)
```

**Parameters:**
| Name | Type | Description | Default |
|-----------------|--------------------------------------------------|-------------|---------|
| index | <code>[Integer](#)</code> | - | - |
| newMessage | <code>[String](#)</code> | - | - |
| backgroundColor | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getChatMessage()</code> \{#getChatMessage}

Returns a table with information about a chat message

Takes an index, where 1 means the last message on chat

```lua
getChatMessage(index)
```

**Parameters:**
| Name | Type | Description | Default |
|-------|---------------------------|-------------|---------|
| index | <code>[Integer](#)</code> | - | - |

**Returns:**
| Type | Description |
|-------------------------|-------------|
| <code>[Table](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>setChatText()</code> \{#setChatText}

**Aliases:** `chatText()`

Sets the text currently being typed in the chat window to the given string

```lua
setChatText(text)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| text | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getChatText()</code> \{#getChatText}

Gets the text that is currently being typed into the chat window

```lua
getChatText()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>appendChatHistory()</code> \{#appendChatHistory}

Appends the message on the recent chat history

```lua
appendChatHistory(message)
```

**Parameters:**
| Name | Type | Description | Default |
|---------|--------------------------|-------------|---------|
| message | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

## Other

### <code>setActionbar()</code> \{#setActionbar}

**Aliases:** `actionbar()`

Sets the action bar message to the given text

The boolean parameter defaults to false

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setActionbar(text)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| text | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setActionbar(text, animated)
```

**Parameters:**
| Name | Type | Description | Default |
|----------|---------------------------|-------------|---------|
| text | <code>[String](#)</code> | - | - |
| animated | <code>[Boolean](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>setClipboard()</code> \{#setClipboard}

**Aliases:** `clipboard()`

Sets the clipboard text

```lua
setClipboard(text)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| text | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getClipboard()</code> \{#getClipboard}

Gets the text from the clipboard

```lua
getClipboard()
```

**Returns:**
| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>setSubtitle()</code> \{#setSubtitle}

**Aliases:** `subtitle()`

Sets the current subtitle to the given text

The text is given as a JSON string

```lua
setSubtitle(text)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| text | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>setTitle()</code> \{#setTitle}

**Aliases:** `title()`

Sets the current title to the given text

The text is given as json

```lua
setTitle(text)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| text | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>setTitleTimes()</code> \{#setTitleTimes}

**Aliases:** `titleTimes()`

Sets the duration of the title on the screen, also its fade-in and fade-out durations

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setTitleTimes(timesData)
```

**Parameters:**
| Name | Type | Description | Default |
|-----------|--------------------------------------------------|-------------|---------|
| timesData | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setTitleTimes(fadeInTime, stayTime, fadeOutTime)
```

**Parameters:**
| Name | Type | Description | Default |
|-------------|---------------------------|-------------|---------|
| fadeInTime | <code>[Integer](#)</code> | - | - |
| stayTime | <code>[Integer](#)</code> | - | - |
| fadeOutTime | <code>[Integer](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>setUnlockCursor()</code> \{#setUnlockCursor}

Toggles locking of your cursor, letting you move it freely on the screen instead of it controlling your player's rotation

```lua
setUnlockCursor(boolean)
```

**Parameters:**
| Name | Type | Description | Default |
|---------|---------------------------|-------------|---------|
| boolean | <code>[Boolean](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>clearTitle()</code> \{#clearTitle}

Clears the current title from the GUI

```lua
clearTitle()
```

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>isAvatarUploaded()</code> \{#isAvatarUploaded}

Checks if this avatar is currently uploaded

```lua
isAvatarUploaded()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>isCursorUnlocked()</code> \{#isCursorUnlocked}

Checks if the cursor is currently unlocked

Only responds to your own changes in your script, not anything done by Minecraft itself

```lua
isCursorUnlocked()
```

**Returns:**
| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>screenshot()</code> \{#screenshot}

Takes a screenshot from the current screen and returns a Texture of it

```lua
screenshot(name)
```

**Parameters:**
| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| name | <code>[String](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------------------|-------------|
| <code>[Texture](/globals/Textures/Texture)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>swingArm()</code> \{#swingArm}

Animates swinging the player's arm

If the boolean is true, then the offhand is the one that swings

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
swingArm()
```

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
swingArm(offhand)
```

**Parameters:**
| Name | Type | Description | Default |
|---------|---------------------------|-------------|---------|
| offhand | <code>[Boolean](#)</code> | - | - |

**Returns:**
| Type | Description |
|---------------------------------------|---------------------------|
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

## Fields

### <code>unlockCursor</code> \{#unlockCursor}

Setting this value to true will unlock your cursor, letting you move it freely on the screen instead of it controlling your player's rotation

**Example:**

```lua
--todo
```

---

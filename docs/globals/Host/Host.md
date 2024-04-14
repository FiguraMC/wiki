import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
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

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isHost()
```

---

## Player Data

### <code>isContainerOpen()</code> \{#isContainerOpen}

Checks if the host has a container screen opened

```lua
isContainerOpen()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isContainerOpen()
```

---

### <code>isFlying()</code> \{#isFlying}

Checks if the player is currently flying

```lua
isFlying()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isFlying()
```

---

### <code>isJumping()</code> \{#isJumping}

Checks if the player is jumping

Note this is only true during the first tick the player started jumping

```lua
isJumping()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isJumping()
```

---

### <code>getAir()</code> \{#getAir}

Gets the remaining amount of air of the player

```lua
getAir()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
host:getAir()
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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setSlot(slot)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
setSlot(slot, item)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| item | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-4" label="Overload 4">

```lua
setSlot(slot, item)
```

**Parameters:**

| Name | Type                                               | Description | Default |
| ---- | -------------------------------------------------- | ----------- | ------- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code>   | -           | -       |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
host:setSlot(0, "apple")
-- setSlot also accepts an ItemStack retrieved from an actual item or world:newItem()
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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getSlot(slot)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
host:getSlot(0)
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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| slot | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getScreenSlot(slot)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| slot | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                               | Description |
| -------------------------------------------------- | ----------- |
| <code>[ItemStack](/globals/World/ItemStack)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
host:getScreenSlot(0)
```

---

### <code>getScreenSlotCount()</code> \{#getScreenSlotCount}

Gets the number of slots in the screen the player is currently in

If the player is not currently in a screen or the screen has no slots, returns nil

```lua
getScreenSlotCount()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
host:getScreenSlotCount()
```

---

### <code>getScreen()</code> \{#getScreen}

Gets the class name of the screen the player is currently on

If the player is not currently in a screen, returns nil

```lua
getScreen()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
host:getScreen()
```

---

### <code>getStatusEffects()</code> \{#getStatusEffects}

Returns a table of all of the player's status effects

The table contains sub-tables, each of which contains the name, amplifier, duration, and particle visibility of each status effect

```lua
getStatusEffects()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
for _, effect in pairs(host:getStatusEffects()) do
    logTable(effect) -- prints all the effect information into chat
    log(effect.name) -- gets the effect's name and prints it into chat
end
```

---

### <code>getAttackCharge()</code> \{#getAttackCharge}

Returns a fraction (0 to 1) of the charge of the player attack

If less than 1, every attack will result in a weak attack

```lua
getAttackCharge()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
host:getAttackCharge()
```

---

### <code>getReachDistance()</code> \{#getReachDistance}

Returns the current reach distance of the player

```lua
getReachDistance()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
host:getReachDistance()
```

---

### <code>getPickBlock()</code> \{#getPickBlock}

Returns the current targeted block set by the client

Returns the block, the hit position, and the targeted block face as three separate values

```lua
getPickBlock()
```

**Returns:**

| Type                                                 | Description         |
| ---------------------------------------------------- | ------------------- |
| <code>[BlockState](/globals/World/BlockState)</code> | Targeted block      |
| <code>[Vector3](/globals/Vectors/Vector3)</code>     | Hit position        |
| <code>[String](/tutorials/types/Strings)</code>      | Targeted block face |

**Example:**

```lua
local block, hitPos, side = host:getPickBlock()
```

---

### <code>getPickEntity()</code> \{#getPickEntity}

Returns the currently targeted entity set by the client

```lua
getPickEntity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[EntityAPI](/globals/Player/Entity)</code> | -           |

**Example:**

```lua
host:getPickEntity()
```

---

## Chat

### <code>isChatOpen()</code> \{#isChatOpen}

Checks if the host has the chat screen opened

```lua
isChatOpen()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isChatOpen()
```

---

### <code>isChatVerified()</code> \{#isChatVerified}

figura.docs.host.is_chat_verified

```lua
isChatVerified()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isChatVerified()
```

---

### <code>sendChatCommand()</code> \{#sendChatCommand}

Sends the given command in the chat

:::caution
In order to use this function you must turn the `Chat Messages` setting on in Figura's settings
:::

```lua
sendChatCommand(command)
```

**Parameters:**

| Name    | Type                                            | Description | Default |
| ------- | ----------------------------------------------- | ----------- | ------- |
| command | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:sendChatCommand("kill @a")
```

---

### <code>sendChatMessage()</code> \{#sendChatMessage}

Sends the given message in the chat

:::caution
In order to you this function you must turn the `Chat Messages` setting on in Figura's settings
:::

```lua
sendChatMessage(message)
```

**Parameters:**

| Name    | Type                                            | Description | Default |
| ------- | ----------------------------------------------- | ----------- | ------- |
| message | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:sendChatMessage("Hello World")
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

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setChatColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
host:setChatColor(0, 0, 1)
```

---

### <code>getChatColor()</code> \{#getChatColor}

Gets the chat window text color

```lua
getChatColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
host:getChatColor()
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

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setChatMessage(index, newMessage)
```

**Parameters:**

| Name       | Type                                             | Description | Default |
| ---------- | ------------------------------------------------ | ----------- | ------- |
| index      | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| newMessage | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
setChatMessage(index, newMessage, backgroundColor)
```

**Parameters:**

| Name            | Type                                             | Description | Default |
| --------------- | ------------------------------------------------ | ----------- | ------- |
| index           | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| newMessage      | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| backgroundColor | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
host:setChatMessage(1, "Hi?", vec(1, 0, 0))
```

---

### <code>getChatMessage()</code> \{#getChatMessage}

Returns a table with information about a chat message

Takes an index, where 1 means the last message on chat

```lua
getChatMessage(index)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
host:getChatMessage(1)
```

---

### <code>setChatText()</code> \{#setChatText}

**Aliases:** `chatText()`

Sets the text currently being typed in the chat window to the given string

:::caution
In order to use this function you must turn the `Chat Messages` setting on in Figura's settings
:::

```lua
setChatText(text)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:setChatText("Hello World")
```

---

### <code>getChatText()</code> \{#getChatText}

Gets the text that is currently being typed into the chat window

```lua
getChatText()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
host:getChatText() == "Hello World"
```

---

### <code>appendChatHistory()</code> \{#appendChatHistory}

Appends the message on the recent chat history

```lua
appendChatHistory(message)
```

**Parameters:**

| Name    | Type                                            | Description | Default |
| ------- | ----------------------------------------------- | ----------- | ------- |
| message | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:appendChatHistory("Hello World")
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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setActionbar(text, animated)
```

**Parameters:**

| Name     | Type                                              | Description | Default |
| -------- | ------------------------------------------------- | ----------- | ------- |
| text     | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| animated | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
host:setActionbar("Hello World")
```

---

### <code>setClipboard()</code> \{#setClipboard}

**Aliases:** `clipboard()`

Sets the clipboard text

```lua
setClipboard(text)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:setClipboard("Hello World")
```

---

### <code>getClipboard()</code> \{#getClipboard}

Gets the text from the clipboard

```lua
getClipboard()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
host:getClipboard()
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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:setSubtitle("Hello World")
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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:setTitle("Hello World")
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

| Name      | Type                                             | Description | Default |
| --------- | ------------------------------------------------ | ----------- | ------- |
| timesData | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
setTitleTimes(fadeInTime, stayTime, fadeOutTime)
```

**Parameters:**

| Name        | Type                                             | Description | Default |
| ----------- | ------------------------------------------------ | ----------- | ------- |
| fadeInTime  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| stayTime    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| fadeOutTime | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
host:setTitleTimes(5, 5, 5)
```

---

### <code>setUnlockCursor()</code> \{#setUnlockCursor}

Toggles locking of your cursor, letting you move it freely on the screen instead of it controlling your player's rotation

```lua
setUnlockCursor(boolean)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| boolean | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:setUnlockCursor(true)
```

---

### <code>clearTitle()</code> \{#clearTitle}

Clears the current title from the GUI

```lua
clearTitle()
```

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

**Example:**

```lua
host:clearTitle()
```

---

### <code>isAvatarUploaded()</code> \{#isAvatarUploaded}

Checks if this avatar is currently uploaded

```lua
isAvatarUploaded()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isAvatarUploaded()
```

---

### <code>isCursorUnlocked()</code> \{#isCursorUnlocked}

Checks if the cursor is currently unlocked

Only responds to your own changes in your script, not anything done by Minecraft itself

```lua
isCursorUnlocked()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
host:isCursorUnlocked()
```

---

### <code>screenshot()</code> \{#screenshot}

Takes a screenshot from the current screen and returns a Texture of it

```lua
screenshot(name)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

**Example:**

```lua
host:screenshot()
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

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
swingArm(offhand)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| offhand | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                  | Description               |
| ------------------------------------- | ------------------------- |
| <code>[HostAPI](/globals/Host)</code> | Returns self for chaining |

</TabItem>
</Tabs>

**Example:**

```lua
host:swingArm()
```

---

## Fields

### <code>unlockCursor</code> \{#unlockCursor}

Setting this value to true will unlock your cursor, letting you move it freely on the screen instead of it controlling your player's rotation

See [`setUnlockCursor`](#setUnlockCursor) for an example of how to set it.

---

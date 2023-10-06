The host API is accessed through the <code>host</code> global. Like so: <code>host:isFlying()</code>

Functions in the host API aren't synced, meaning to be useful in multiplayer their information will need to be synced via [pings](../tutorials/Pings).

### isHost

Returns true if this instance of the script is running on host

## Player Data

### isJumping

Checks if the jump key is being pressed.

### isFlying

Checks if the player is currently creative flying

### isContainerOpen

Checks if the host has a container screen opened

### getAir

Gets the remaining amount of air of the player. From 300 to -19, whenever you take damage from drowning it sets back to 0. Water breathing freezes the value when underwater. Respiration slows down how quickly the number goes down.

### getSlot(integer or string)

Gets an ItemStack for the item in the given slot

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

For the numerical id, 0-8 are the hotbar, 9-35 are the rest of the inventory starting from the top left slot, 99 is the offhand, and 100-103 are the armor slots from the boots to the helmet. <code>player:getItem()</code> is a better alternative for getting equipment slots.

### setSlot(slot,item)

Sets a slot with an ItemStack

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

Slot -1 uses the first available slot

Only runs for creative mode

### getScreenSlot(slot)

Gets the item in a screen slot

The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command

If the player is not currently in a screen, the screen has no slots, or the slot index is greater than the maximum, returns nil

### getScreenSlotCount

Gets the number of slots in the screen the player is currently in

If the player is not currently in a screen or the screen has no slots, returns nil

### getScreen

Gets the class name of the screen the player is currently on. Class names are slightly obfuscated by Minecraft's code and will return a string ending in numbers that are the class' id. A list of class ids can b found in [GS' VSCode docs](https://github.com/GrandpaScout/FiguraRewriteVSDocs), or you can use a log to get the name of the screen you're accessing.

If the player is not currently in a screen, returns nil

### getStatusEffects

Returns a table of all of the player's status effects

The table contains sub-tables, each of which contains the name, amplifier, duration, and particle visibility of each status effect. To access a sub table index the effect table with the sub-table's name. Re the example below: <code>effect.name</code>

```lua
for _, effect in pairs(host:getStatusEffects()) do
    logTable(effect)
end
```

### getAttackCharge

Returns a fraction (0 to 1) of the charge of the player attack

If less than 1, every attack will result result in a weak attack

### getReachDistance

Returns the current reach distance of the player

### getPickBlock

Returns the current targeted block set by the client

Returns a vararg of the block, the hit position and the block face the hit collided

### getPickEntity

Returns the current targeted entity set by the client

## Chat

### isChatOpen

Checks if the host has the chat screen opened

### sendChatCommand(string)

Sends the given command in the chat

### setChatMessage(integer,string,vec3)

Modifies a chat message with the given text

Takes an index, were 1 means the last message on chat

Setting the message to nil will effectively remove it from the chat

### sendChatMessage

Sends the given message in the chat

### getChatMessage(integer)

Returns a table with information about a chat message

Takes an index, were 1 means the last message on chat

### appendChatHistory(string)

Appends the message on the recent chat history

### setChatText

Sets the text currently being typed in the chat window to the given string

### getChatText

Gets the text that is currently being typed into the chat window

### setChatColor(vec3)

Sets the color of the text that is currently being typed into the chat window

### getChatColor

Gets the chat window text color

### isChatVerified

Presumably gets if the messages being sent are verified by the Minecraft server (speculation)

## Other

### swingArm(bool)

Animates swinging the player's arm

If the boolean is true, then the offhand is the one that swings

### setTitle(string)

Sets the current title to the given text

The text is given as json

### setSubtitle(string)

Sets the current subtitle to the given text
The text is given as json

### setActionbar(string,bool)

Sets the action bar message to the given text

The boolean parameter defaults to false and sets if the text will be animated

### setTitleTimes(vec3)

Sets the duration of the title on the screen, also its fade-in and fade-out durations.

The inputs for the vec3 are order like-so: (fadeInTime, stayTime, fadeOutTime)

### clearTitle

Clears the current title from the GUI

### setUnlockCursor(bool)

Toggles locking of your cursor, letting you move it freely on the screen instead of it controlling your player's rotation

### isCursorUnlocked

Checks if the cursor is currently unlocked

Only responds to your own changes in script, not anything done by Minecraft

### screenshot

Takes a screenshot from the current screen and returns a Texture of it

### setClipboard

Sets the clipboard text

### getClipboard

Gets the text from the clipboard

### isAvatarUploaded

Checks if this avatar is currently uploaded

---
sidebar_position: 1
---

A global API that contains all of the figura Events

:::danger
This page is a WIP.
:::

Accessed using the name `events`

---

### Init

If code is run outside of any event or function that is the init phase, and it runs first before any other event. Calling the player API will error here, use entity_init instead.

---

### <code>getEvents()</code> \{#getEvents}

Returns a table with all events types

```lua
getEvents()
```

**Returns:**

| Type                                          | Description                 |
| --------------------------------------------- | --------------------------- |
| <code>[Table](/tutorials/types/Tables)</code> | Returns all the event types |

**Example:**

```lua
events:getEvents()
```

---

## Events

### <code>ENTITY_INIT()</code> \{#ENTITY_INIT}

The entity_init event runs when the avatar's entity (usually the player) first starts existing.

It runs once and has no arguments. Calling the player API is safe here, making it a player-oriented init method.

**Example:**

```lua
function events.entity_init()
    log("The player api has loaded!")
end
```

---

### <code>TICK()</code> \{#TICK}

The tick event runs every in-game tick if the avatar's entity (the player) exists. There are 20 ticks in a second. This is the most commonly used event.

Tick has no arguments and calling the player API is safe here.

**Example:**

```lua
function events.tick()
    log("A tick has passed")
end
```

---

### <code>WORLD_TICK()</code> \{#WORLD_TICK}

The world_tick event runs every in game tick. There are 20 ticks in a second.

World_tick has no arguments and calling the player API without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.world_tick()
    log("A tick has passed")
end
```

---

### <code>RENDER(delta,context,matrix)</code> \{#RENDER}

The render event runs once a frame before the avatar is rendered, after the avatar's entity exists. Calling the player is safe here.

Render has three parameters, all parameters are optional.

The first is delta, which is a number from 0 to 1 indicating the time between ticks (so at the start of a tick it always resets to 0). Delta is most often used to smooth values Minecraft updates once a tick.

The second parameter is the context of the current render mode. IE: If you're in first person you're viewing the FIRST_PERSON context, but if you have the paperdoll on you also have the PAPERDOLL context.

The third is the source matrix used to render the avatar. Because of a Minecraft bug this matrix will be NaN when moving very fast like when elytra flying.

**Example:**

```lua
function events.render(delta, context, matrix)
    -- careful this will spam your chat
    log("The render context is... " .. context)

    -- using delta to smoothly animate from a position calculated in tick
    models.myModel:setPos(oldPos, newPos, delta)
end
```

---

### <code>POST_RENDER(delta,context,matrix)</code> \{#POST_RENDER}

The render event runs once a frame after the avatar is rendered, after the avatar's entity exists. Calling the player is safe here.

It has the same parameters as render

**Example:**

```lua
function events.post_render(delta, context, matrix)
    -- careful this will spam your chat
    log("The render context is... " .. context)
end
```

---

### <code>WORLD_RENDER(delta)</code> \{#WORLD_RENDER}

The WORLD_RENDER event is run every frame before the world is rendered

Always runs when a world is visible, even when the avatar itself is not, so this runs even in first person

Takes a parameter delta, which is a number from 0 to 1 indicating the proportion of the way the game is between ticks

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.world_render(delta)
    -- careful this will spam your chat
    log("A frame has passed!")
end
```

---

### <code>POST_WORLD_RENDER(delta)</code> \{#POST_WORLD_RENDER}

The POST_WORLD_RENDER event runs every frame after the world is rendered

Always runs when a world is visible, even when the avatar itself is not, so this runs even in first person

Takes a parameter delta, which is a number from 0 to 1 indicating the proportion of the way the game is between ticks

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.post_world_render(delta)
    -- careful this will spam your chat
    log("A frame has passed!")
end
```

---

### <code>CHAT_SEND_MESSAGE(message)</code> \{#CHAT_SEND_MESSAGE}

The CHAT_SEND_MESSAGE event is run every time you send a message in chat

A string parameter is passed in, which contains the message that was sent

The return value is chained to the next events of the same type, whereas NIL cancels the message from being sent and any other value will modify the sent message (if allowed in the settings)

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.chat_send_message(msg)
    host:setActionbar(msg)
    -- returns the message, allowing it to be sent in chat
    return msg
end

function events.chat_send_message(msg)
    host:setActionbar(msg)
    -- return nil, not allowing the message to be sent
    return nil
end

function events.chat_send_message(msg)
    host:setActionbar(msg)
    -- return a modified message, makes sure you're always excited abotu everything
    return msg .. "!"
end
```

---

### <code>CHAT_RECEIVE_MESSAGE(raw,text)</code> \{#CHAT_RECEIVE_MESSAGE}

The CHAT_RECEIVE_MESSAGE event is run every time a message is received in chat

The first argument is the raw string of the received text

The second argument is a JSON string representation of the received text

If the first return value is not nil, the message will be replaced with that value

If the first return value is false, it will suppress adding this message

The second return value is, optionally, an RGB vector which will be used as the background color for this message

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.chat_receive_message(raw, text)
    host:setActionbar(msg)
    -- Blocking any messages with my name so I can focus
    if raw:find("joey") then
        return nil
    end
    return text
end

function events.chat_receive_message(raw, text)
    return text, vec(1, 0, 0) -- example of receiving the same message with a red background
end
```

---

### <code>SKULL_RENDER(delta,block,item,entity,mode)</code> \{#SKULL_RENDER}

Called on every one of your skull blocks placed in the world

It have 5 arguments, as listed below:

(number) - the tick delta

(blockstate) - the block, when rendered from a block

(itemstack) - the item, when rendered from an item

(entity) - the entity, when rendered from an entity

(string) - the type of the rendering (LEFT_HAND, HEAD, BLOCK, ΓÇª)

If the return value is true, the skull will not render

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.skull_render(delta, block, item, entity, mode)
    log("The rendering mode of this skull is... " .. mode)
end
```

---

### <code>MOUSE_SCROLL(delta)</code> \{#MOUSE_SCROLL}

The MOUSE_SCROLL event runs every time the mouse is scrolled

Takes a parameter delta, which is the direction of the scroll

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.mouse_scroll(delta)
    log(delta)
end
```

---

### <code>MOUSE_MOVE(x,y)</code> \{#MOUSE_MOVE}

The MOUSE_MOVE event runs every time the mouse is moved around

Takes two parameters, x and y, which is the difference from the mouse position based on the latest saved position

If returned true, the event cancels its vanilla function

Note that canceling the vanilla function also cancels saving the last mouse position

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.mouse_move(x, y)
    log(x, y)
end
```

---

### <code>MOUSE_PRESS(button,action,modifier)</code> \{#MOUSE_PRESS}

The MOUSE_PRESS event runs every time a mouse button is pressed

Takes three number parameters, a "button", which is the number id of the button that was been pressed, the "action", which is the status of the press event (0 for release, 1 for press, 2 for hold), and the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example)

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

The hold action is non-functional in mouse_press. Check the [keybind API](../tutorials/Keybinds) for an alternative to mouse_press.

**Example:**

```lua
function events.mouse_press(button, action, modifier)
    log(button)
end
```

---

### <code>KEY_PRESS(key,action,modifier)</code> \{#KEY_PRESS}

The KEY_PRESS event runs every time a keyboard key is pressed

Takes three number parameters, a "key", which is the number id of the key that was been pressed, the "action", which is the status of the press event (0 for release, 1 for press, 2 for hold), and the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example)

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

Check the [keybind API](../tutorials/Keybinds) for an alternative to key_press.

**Example:**

```lua
function events.key_press(key, action, modifier)
    log(key)
end
```

---

### <code>CHAR_TYPED(character,modifier,codepoint)</code> \{#CHAR_TYPED}

The CHAR_TYPED event runs every time a character is inputted

Takes three parameters, the resulting "string" after converting the code point, the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example), and the "codepoint" of the inputted char

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.char_typed(character, modifier, codepoint)
    log(character .. " was typed!")
end
```

---

### <code>USE_ITEM(item,action,particles)</code> \{#USE_ITEM}

The USE_ITEM event is run every time the entity uses an item

The item, action and amount of particles this item would produce is given as argument

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

Note: This event is several ticks slower than its alternative function in the [player API](../globals/Player#isusingitem): <code>player:isUsingItem()</code>

**Example:**

```lua
function events.use_item(item, action, particles)
    log(item)
end
```

---

### <code>ARROW_RENDER(delta,arrow)</code> \{#ARROW_RENDER}

The ARROW_RENDER event is run for every arrow entity shot by the Avatar owner

It takes two arguments, the tick delta, and the arrow entity

Returning "true" stops this arrow from rendering, including the Arrow parent parts

Requires the "Vanilla Model Change" permission

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.arrow_render(delta, arrow)
    log(arrow)
end
```

---

### <code>TRIDENT_RENDER(delta,trident)</code> \{#TRIDENT_RENDER}

figura.docs.events.trident_render

**Example:**

```lua
function events.trident_render(delta, trident)
    log(trident)
end
```

---

### <code>ITEM_RENDER(item,mode,pos,rot,scale,left)</code> \{#ITEM_RENDER}

Called on every one of your items that is being rendered

It takes six arguments: the item being rendered, the rendering mode, the position, rotation, and scale that would be applied to the item, and if it's being rendered in the left hand

Returning a ModelPart parented to Item stops the rendering of this item and will render the returned part instead

Calling the player without a <code>player:isLoaded()</code> check will error here.

See the [custom items page](../tutorials/Custom-Items) for a more in-depth explanation.

**Example:**

```lua
function events.item_render(item, mode, pos, rot, scale, left)
    log(item)
end
```

---

### <code>ON_PLAY_SOUND(id,pos,vol,pitch,loop,category,path)</code> \{#ON_PLAY_SOUND}

Called every time a new sound is played

Takes the following as arguments: the sound's ID, its world position, volume, pitch, if the sound should loop, the sound's category, and the sound's file path

Return true to prevent this sound from playing

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.on_play_sound(id, pos, vol, pitch, loop, category)
    -- make sure the player is loaded
    if not player:isLoaded() then return end
    -- do our best to block only our own footsteps
    return id:find("step") and category == "PLAYERS" and (pos - player:getPos()):length() < 1
end
```

---

### <code>RESOURCE_RELOAD()</code> \{#RESOURCE_RELOAD}

Called every time that the client resources are reloaded, allowing you to re-create or update resource texture references

Calling the player without a <code>player:isLoaded()</code> check will error here.

**Example:**

```lua
function events.resource_reload()
    log("Resources reloaded")
end
```

---

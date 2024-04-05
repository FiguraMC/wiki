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

The ENTITY_INIT event is run once this avatar's entity exists

**Example:**

```lua
function events.entity_init()
end
```

---

### <code>TICK()</code> \{#TICK}

The TICK event is run every tick in-game if this avatar's entity exists

**Example:**

```lua
function events.tick()
end
```

---

### <code>WORLD_TICK()</code> \{#WORLD_TICK}

The WORLD_TICK event is run every in-game tick

**Example:**

```lua
function events.world_tick()
end
```

---

### <code>RENDER(delta,context,matrix)</code> \{#RENDER}

The RENDER event is run every frame, before the avatar is rendered

Takes a parameter delta, which is a number from 0 to 1 indicating the proportion of the way the game is between ticks

A second parameter, giving out context of the current RenderMode, with is a string with the name of the source of this render event

And a third paramenter, being the source matrix used to render the Avatar

**Example:**

```lua
function events.render(delta, context, matrix)
end
```

---

### <code>POST_RENDER(delta,context,matrix)</code> \{#POST_RENDER}

The POST_RENDER event runs every frame after the avatar is rendered

Takes a parameter delta, which is a number from 0 to 1 indicating the proportion of the way the game is between ticks

A second parameter, giving out context of the current RenderMode, with is a string with the name of the source of this render event

And a third parameter, being the source matrix used to render the Avatar

**Example:**

```lua
function events.post_render(delta, context, matrix)
end
```

---

### <code>WORLD_RENDER(delta)</code> \{#WORLD_RENDER}

The WORLD_RENDER event is run every frame before the world is rendered

Always runs when a world is visible, even when the avatar itself is not, so this runs even in first person

Takes a parameter delta, which is a number from 0 to 1 indicating the proportion of the way the game is between ticks

**Example:**

```lua
function events.world_render(delta)
end
```

---

### <code>POST_WORLD_RENDER(delta)</code> \{#POST_WORLD_RENDER}

The POST_WORLD_RENDER event runs every frame after the world is rendered

Always runs when a world is visible, even when the avatar itself is not, so this runs even in first person

Takes a parameter delta, which is a number from 0 to 1 indicating the proportion of the way the game is between ticks

**Example:**

```lua
function events.post_world_render(delta)
end
```

---

### <code>CHAT_SEND_MESSAGE(message)</code> \{#CHAT_SEND_MESSAGE}

The CHAT_SEND_MESSAGE event is run every time you send a message in chat

A string parameter is passed in, which contains the message that was sent

The return value is chained to the next events of the same type, whereas NIL cancels the message from being sent and any other value will modify the sent message (if allowed in the settings)

**Example:**

```lua
function events.chat_send_message(message)
    return message -- example of returning the message so it's sent
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

**Example:**

```lua
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

**Example:**

```lua
function events.skull_render(delta, block, item, entity, mode)
end
```

---

### <code>MOUSE_SCROLL(delta)</code> \{#MOUSE_SCROLL}

The MOUSE_SCROLL event runs every time the mouse is scrolled

Takes a parameter delta, which is the direction of the scroll

If returned true, the event cancels its vanilla function

**Example:**

```lua
function events.mouse_scroll(delta)
end
```

---

### <code>MOUSE_MOVE(x,y)</code> \{#MOUSE_MOVE}

The MOUSE_MOVE event runs every time the mouse is moved around

Takes two parameters, x and y, which is the difference from the mouse position based on the latest saved position

If returned true, the event cancels its vanilla function

Note that canceling the vanilla function also cancels saving the last mouse position

**Example:**

```lua
function events.mouse_move(x, y)
end
```

---

### <code>MOUSE_PRESS(button,action,modifier)</code> \{#MOUSE_PRESS}

The MOUSE_PRESS event runs every time a mouse button is pressed

Takes three number parameters, a "button", which is the number id of the button that was been pressed, the "action", which is the status of the press event (0 for release, 1 for press, 2 for hold), and the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example)

If returned true, the event cancels its vanilla function

**Example:**

```lua
function events.mouse_press(button, action, modifier)
end
```

---

### <code>KEY_PRESS(key,action,modifier)</code> \{#KEY_PRESS}

The KEY_PRESS event runs every time a keyboard key is pressed

Takes three number parameters, a "key", which is the number id of the key that was been pressed, the "action", which is the status of the press event (0 for release, 1 for press, 2 for hold), and the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example)

If returned true, the event cancels its vanilla function

**Example:**

```lua
function events.key_press(key, action, modifier)
end
```

---

### <code>CHAR_TYPED(character,modifier,codepoint)</code> \{#CHAR_TYPED}

The CHAR_TYPED event runs every time a character is inputted

Takes three parameters, the resulting "string" after converting the code point, the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example), and the "codepoint" of the inputted char

**Example:**

```lua
function events.char_typed(character, modifier, codepoint)
end
```

---

### <code>USE_ITEM(item,action,particles)</code> \{#USE_ITEM}

The USE_ITEM event is run every time the entity uses an item

The item, action and amount of particles this item would produce is given as argument

If returned true, the event cancels its vanilla function

**Example:**

```lua
function events.use_item(item, action, particles)
end
```

---

### <code>ARROW_RENDER(delta,arrow)</code> \{#ARROW_RENDER}

The ARROW_RENDER event is run for every arrow entity shot by the Avatar owner

It takes two arguments, the tick delta, and the arrow entity

Returning "true" stops this arrow from rendering, including the Arrow parent parts

Requires the "Vanilla Model Change" permission

**Example:**

```lua
function events.arrow_render(delta, arrow)
end
```

---

### <code>TRIDENT_RENDER(delta,trident)</code> \{#TRIDENT_RENDER}

figura.docs.events.trident_render

**Example:**

```lua
function events.trident_render(delta, trident)
end
```

---

### <code>ITEM_RENDER(item,mode,pos,rot,scale,left)</code> \{#ITEM_RENDER}

Called on every one of your items that is being rendered

It takes six arguments: the item being rendered, the rendering mode, the position, rotation, and scale that would be applied to the item, and if it's being rendered in the left hand

Returning a ModelPart parented to Item stops the rendering of this item and will render the returned part instead

**Example:**

```lua
function events.item_render(item, mode, pos, rot, scale, left)
end
```

---

### <code>ON_PLAY_SOUND(id,pos,vol,pitch,loop,category,path)</code> \{#ON_PLAY_SOUND}

Called every time a new sound is played

Takes the following as arguments: the sound's ID, its world position, volume, pitch, if the sound should loop, the sound's category, and the sound's file path

Return true to prevent this sound from playing

**Example:**

```lua
function events.on_play_sound(id, pos, vol, pitch, loop, category, path)
end
```

---

### <code>RESOURCE_RELOAD()</code> \{#RESOURCE_RELOAD}

Called every time that the client resources are reloaded, allowing you to re-create or update resource texture references

**Example:**

```lua
function events.resource_reload()
end
```

---

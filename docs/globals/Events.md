Events are special functions that run at specific times or from specific triggers.

### Init

If code is run outside of any event or function that is the <code>init</code> phase, and it runs first before any other event. Calling the player API will error here, use entity_init instead.

### Entity Init

The entity_init event runs when the avatar's entity (usually the player) first starts existing.

It runs once and has no arguments. Calling the player API is safe here, making it a player-oriented init method.

```lua
function events.entity_init()
    log("The player api has loaded!")
end
```

### Tick

The tick event runs every in-game tick if the avatar's entity (the player) exists. There are 20 ticks in a second. This is the most commonly used event.

Tick has no arguments and calling the player API is safe here.

```lua
function events.tick()
    log("A tick has passed")
end
```

### World Tick

The world_tick event runs every in game tick. There are 20 ticks in a second.

World_tick has no arguments and calling the player API without a <code>player:isLoaded()</code> check will error here.

```lua
function events.world_tick()
    log("A tick has passed")
end
```

### Render

The render event runs once a frame before the avatar is rendered, after the avatar's entity exists. Calling the player is safe here.

Render has three parameters, all parameters are optional.

The first is delta, which is a number from 0 to 1 indicating the time between ticks (so at the start of a tick it always resets to 0). Delta is most often used to smooth values Minecraft updates once a tick.

The second parameter is the context of the current render mode. IE: If you're in first person you're viewing the FIRST_PERSON context, but if you have the paperdoll on you also have the PAPERDOLL context.

The third is the source matrix used to render the avatar. Because of a Minecraft bug this matrix will be NaN when moving very fast like when elytra flying.

```lua
function events.render(delta,context,matrix)
    log("The render context is... "..context)
end
```

### Post Render

The render event runs once a frame after the avatar is rendered, after the avatar's entity exists. Calling the player is safe here.

It has the same parameters as render

```lua
function events.post_render(delta,context,matrix)
    log("The render context is... "..context)
end
```

### World Render

The world_render event is run every frame before the world is rendered. Calling the player without a <code>player:isLoaded()</code> check will error here.

Its only parameter is delta

```lua
function events.world_render(delta)
    log("A frame has passed!")
end
```

### Post World Render

The world_render event is run every frame after the world is rendered. Calling the player without a <code>player:isLoaded()</code> check will error here.

Its only parameter is delta

```lua
function events.post_world_render(delta)
    log("A frame has passed!")
end
```

### Chat Send Message

The CHAT_SEND_MESSAGE event is run every time you send a message in chat

A string parameter is passed in, which contains the message that was sent

The return value is chained to the next events of the same type, whereas NIL cancels the message from being sent and any other value will modify the sent message (if allowed in the settings)

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.chat_send_message(msg)
    host:setActionbar(msg)
    return true
    -- allows the message to be sent
end
```

### Chat Receive Message

The CHAT_RECEIVE_MESSAGE event is run every time a message is received in chat

The first argument is the raw string of the received text

The second argument is a JSON string representation of the received text

If the first return value is not nil, the message will be replaced with that value

If the first return value is false, it will suppress adding this message

The second return value is, optionally, a RGB vector which will be used as background color for this message

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.chat_receive_message(raw,text)
    host:setActionbar(raw)
    -- logs are useful for visualizing when an event is running but doing it here is a bad idea
end
```

### Skull Render

Called on every one of your skull blocks placed in the world

Calling the player without a <code>player:isLoaded()</code> check will error here.

It have 5 arguments, as listed below:

(number) - the tick delta

(blockstate) - the block, when rendered from a block

(itemstack) - the item, when rendered from an item

(entity) - the entity, when rendered from a entity

(string) - the type of the rendering (LEFT_HAND, HEAD, BLOCK, ...)

If the return value is true, the skull will not render

```lua
function events.skull_render(delta,block,item,entity,mode)
   log("The rendering mode of this skull is... "..mode)
end
```

### Mouse Scroll

The MOUSE_SCROLL event runs every time the mouse is scrolled

Takes a parameter delta, which is the direction of the scroll

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.mouse_scroll(delta)
    log(delta)
end
```

### Mouse Move

The MOUSE_MOVE event runs every time the mouse is moved around

Takes two parameters, x and y, which is the difference from the mouse position based on the latest saved position

If returned true, the event cancels its vanilla function

Note that cancelling the vanilla function also cancels saving the last mouse position

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.mouse_move(x,y)
    log(x,y)
end
```

### Mouse Press

The MOUSE_PRESS event runs every time a mouse button is pressed

Takes three number parameters, a "button", which is the number id of the button that was been pressed, the "action", which is the status of the press event (0 for release, 1 for press, 2 for hold), and the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example)

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

The hold action is non-functional in mouse_press. Check the [keybind API](../tutorials/Keybinds) for an alternative to mouse_press.

```lua
function events.mouse_press(button,action,modifier)
    log(button)
end
```

### Key Press

The key_press event runs every time a keyboard key is pressed
Takes three number parameters, a "key", which is the number id of the key that was been pressed, the "action", which is the status of the press event (0 for release, 1 for press, 2 for hold), and the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example)

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

Check the [keybind API](../tutorials/Keybinds) for an alternative to key_press.

```lua
function events.key_press(key,action,modifier)
    log(key)
end
```

### Char Typed

The char_typed event runs every time a character is inputted

Takes three parameters, the resulting "string" after converting the code point, the "modifier", which is a bitmask number detecting if you have any modifier keys being pressed (like shift or alt, for example), and the "codepoint" of the inputted char

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.char_typed(character,modifier,codepoint)
    log(character.." was typed!")
end
```

### Use Item

The use_item event is run every time the entity uses an item

The item, action and amount of particles this item would produce is given as argument

If returned true, the event cancels its vanilla function

Calling the player without a <code>player:isLoaded()</code> check will error here.

Note: This event is several ticks slower than its alternative function in the [player API](../globals/Player#isusingitem): <code>player:isUsingItem()</code>

```lua
function events.use_item(item,action,particles)
   log(item)
end
```

### Arrow Render

The ARROW_RENDER event is run for every arrow entity shot by the Avatar owner

It takes two arguments, the tick delta, and the arrow entity- which contains all of the arrow's information like its position, or its type.

Returning "true" stops this arrow from rendering, including the Arrow parent parts

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.arrow_render(delta,arrow)
    log(arrow)
end
```

### Item Render

Called on every one of your items that is being rendered

It takes six arguments, the item, the rendering mode, the position, rotation and scale that it would be applied, and if its being rendered from the left hand

Returning a ModelPart parented to Item, stops the rendering of this item and will render the returned part instead.

Calling the player without a <code>player:isLoaded()</code> check will error here.

See the [custom items page](../tutorials/Custom-Items) for a more in-depth explanation.

```lua
function events.item_render(item,mode,pos,rot,scale,left)
    log(item)
end
```

### On Play Sound

The on_play_sound event runs every time you hear a sound.

Take as arguments, the sound ID, its world position, volume, pitch, if the sound should loop, the sound category, and the sound file path.

The file path will always be nil when hearing sounds played by Figura avatars.

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.on_play_sound(id,pos,vol,pitch,loop,category,path)
    log(id)
end
```

### Resource Reload

Called every time that the client resources are reloaded, allowing you to re-create or update resource texture references.

Calling the player without a <code>player:isLoaded()</code> check will error here.

```lua
function events.resource_reload()
    log("Resources reloaded")
end
```

### Safely Calling Player

The easiest way to blanket-protect an entire event (or any function like a ping) against the entity init error caused by calling the player API when it doesn't exist is to exit the function at the beginning of the event with this:

<code>if not player:isLoaded() then return end</code>

```lua
function events.item_render()
    if not player:isLoaded() then return end
    log("An item is being held (and the player API has loaded)")
end
```

Otherwise you can use an if statement if you want to protect only a portion of the code.

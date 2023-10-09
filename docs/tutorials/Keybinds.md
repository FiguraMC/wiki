Through Figura's keybind API you can have the script listen for key presses to make things happen. Common uses are to trigger animations or toggle modelParts on and off.

Keybinds are unsynced information, meaning that without a ping other players cannot know that you pressed a key at all. This guide will be using pings with all the example keybinds.

**Note: Keybinds can be used while the player is unloaded (aka you are out of render distance), if the player API is called during this time your script will error.** You can protect yourself from these errors by adding this check: <code>if not player:isLoaded() then return end</code> as the first line of code run **_inside the ping._**

## Example Keybind

First things first, you need to initialize the keybind

```lua
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
```

At this point, the keybind will show up in the avatar's keybind list- accessible via the Figura menu- with the name Keybind Name and assigned to the letter H. But pressing H won't do anything yet.

More keybinds ids can be found in the Keybinds: Enums page

There are multiple ways to detect keybinds, but the most common is through <code>press</code> and <code>release</code> as they are easiest to ping. If you're not familiar with pings see [Pings](./Pings).

Underneath creating the key we will be tying the press of the key to a ping function. It's done underneath as the code is read top-down and the key must exist first.

```lua
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h", false)
exampleKey.press = pings.examplePing
```

This itself won't do anything until we create the function pings.examplePing, this must be done above where press is assigned to the ping function, because the ping function will need to exist before it can be assigned. If it's done beneath nothing will happen.

The false at the end decides whether or not the keybind will function while a gui like the inventory is opening. It can be skipped and the value will be considered false. If it's set to true then this keybind will run even while any gui is open or closed.

```lua
function pings.examplePing()
    log("Pressed!")
end
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
exampleKey.press = pings.examplePing
```

And there we have it! Now this keybind will send Pressed! in chat every time H is pressed. At this point you could put whatever lines of code you wish into the ping function and it will be synced.

Alternatively, <code>release</code> will run the keybind when the key is released rather than when it is first pressed.

## Toggling With A Keybind

This is going to look extremely similar to the last example, but we are going to add in a boolean that we're toggling

```lua
local keybindState = true
-- Here the keybindState is true, meaning the first press will swap it to false
-- If you wish the first press to swap to false, change the true to false above
function pings.examplePing(state)
    log("state is " .. tostring(state))
    models:setVisible(state)
    -- This will toggle the visibility of all or models, add in a model path to turn on/off specific modelParts
    -- animations.bbmodelName.animationName:setPlaying(not state)
    -- And this is an example of toggling an animation on/off, I'm using not state here because the first press will set this toggle to false and thusly stop the animation, swapping the boolean value like this will make the first press play it
end
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
exampleKey.press = function()
    keybindState = not keybindState
    -- This not is flipping the boolean value between true and false
    pings.examplePing(keybindState)
end
-- This time .press is being tied to a function that is then calling the ping, instead of being 'attached' to it directly.
```

## Detecting When A Key Is Held Down

If you have the know-how it is possible to use the <code>isPressed()</code> function to detect when a key is being held down, but it's not recommended, as using press and release in conjunction is far more effective.

```lua
local keybindState = false
-- keybindState is the variable you will be using to keep track of the pressed-ness of the keybind
function pings.examplePing(state)
    keybindState = state
    -- keybindState is made equivalent to the state sent by press or release for use in other parts of the script
end
local exampleKey = keybinds:newKeybind("Keybind Name", "key.keyboard.h")
exampleKey.press = function()
    pings.examplePing(true)
end
-- Here, examplePing is sending the boolean value true to the ping function
exampleKey.release = function()
    pings.examplePing(false)
end
-- When it's released, the boolean value false will be sent, indicating that the key is no longer being pressed

-- This is unnecessary, but can be used to track the state of keybindState so you can see it working, at this point you can use keybindState wherever and however you wish- as long as it's in the same script file
function events.tick()
    log(keybindState)
end
```

## Using A Vanilla Keybind

If you want to detect a vanilla action like attacking or walking forwards but want it to be compatible in the case that someone bound forward to an arrow key you can directly get the vanilla keybind and use it. There's multiple ways to accomplish this but we'll use the same method as previous examples.

```lua
local exampleKey = keybinds:newKeybind("Keybind Name", keybinds:getVanillaKey("key.forward"))
```

This will now detect the forward key regardless of what it's bound to. <code>getVanillaKey()</code> is going to need a key id from a specific list of ids that all correspond to a vanilla keybind. They can be found in the keyIDs enum.

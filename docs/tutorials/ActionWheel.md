The Action Wheel is a GUI element provided by Figura that allows for adding highly customizable actions that can provide additional functionality to your avatar.

The action wheel works with a system of pages, of which only one can be active at a time.

Each page can have an unlimited number of actions, but the action wheel can only render eight at a time. While a page with more than 8 actions is active, you can use the scroll wheel to move between the groups of 8 actions within the page.

The documentation page for the [Action Wheel](../globals/action-wheel) has more examples for specific action wheel functions

## Example Action Wheel

The first step is to create the page that will hold the actions. This is done with the `newPage` function.

```lua
local mainPage = action_wheel:newPage()
```

This creates a new page, but that's it. If you save and try to open the action wheel, bound to B by default, you will see a message stating that there is no active page. We can use the `setPage` function while providing a reference to a page object to set the active page.

```lua
action_wheel:setPage(mainPage)
```

Tada. New blank page, and Figura isn't screaming at us. Now for some actions. You can call the `newAction` function on a page object. This will create a new Action _and_ add it to the page.

You technically do not need to store the action in a variable. If you do, please give it a unique variable name. Using the same variable name for all actions can cause issues when doing more advanced stuff.

```lua
local action = mainPage:newAction()
```

New action, but it really doesn't look like much. Let's add a title, a display item, and perhaps change the color that appears when the action is hovered over.

One thing to remember is that all action functions return themselves. This allows functions to be chained together, always modifying the same action.

<!-- prettier-ignore -->
```lua
local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
```

Pretty, but functionally useless. Lets add a function to the `leftClick` field. When the Action is left clicked, the function stored in the Action's `leftClick` field gets invoked.

<!-- prettier-ignore -->
```lua
local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    -- the onLeftClick function just sets the Action's leftClick field
    :onLeftClick(function()
        print("Hello World!")
    end)
```

Now we have an action that does stuff. You may not notice anything, but there is a glaring issue with the current code.

The issue is that the leftClick code will only execute on your computer.

As described in [pings](./Pings), Figura is completely client-side. The action wheel is a feature added by Figura, meaning it will never be synced between clients via the Minecraft server. Instead, we must use pings that utilize Figura's backend to sync data between clients.

The first step is to take the code that would be executed on leftClick, and turn it into a ping function. Then, instead of assigning an anonymous function to `leftClick`, we assign the ping function itself to `leftClick`

:::tip

All ping functions must have unique names.

Ideally, they should also be named in a way that describes what they do to avoid confusion later on. Examples of good naming may include `pings.playEmote1` or `pings.setArmorVisibility`.

:::

<!-- prettier-ignore -->
```lua
-- Create ping function that does the same thing the Action would have done.
-- It must be defined above the Action.
function pings.actionClicked()
    print("Hello World!")
end

local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    -- Pass in the ping function itself into onLeftClick
    :onLeftClick(pings.actionClicked)
```

And there you have it, an action that correctly executes its contents across all clients.

While this will correctly sync the timing of the execution of the ping function with all clients, it needs a slight modification if you want to send arguments with the ping.

<!-- prettier-ignore -->
```lua
function pings.actionClicked(a)
  print("Hello World!", a)
end

local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    :onLeftClick(function()
        pings.actionClicked(math.random())
    end)
```

What we are doing is wrapping the call to the ping function inside another function.

:::tip

The code below is a common mistake beginners can fall into.

<!-- prettier-ignore -->
```lua
mainPage:newAction()
    :onLeftClick(pings.actionClicked2(math.random()))
    -- This code will not work.
```

While the code might look correct at first, what it actually does is immediately invoke `pings.actionClicked2` with a random number as an argument. It then attempts to assign whatever this function returns to the `onLeftClick` event. Since `pings.actionClicked2` is a ping function, which never return a value, `onLeftClick` receives `nil`, effectively assigning nothing. This results in no action being performed when the action is clicked.

:::

Here is a complete example of an action wheel.

<!-- prettier-ignore -->
```lua
local mainPage = action_wheel:newPage()
action_wheel:setPage(mainPage)

function pings.actionClicked()
    print("Hello World!")
end

local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    :onLeftClick(pings.actionClicked)
```

### Further Reading

Go [here](../globals/Action-Wheel/Action.md) for more information on actions, like [making your action toggleable](../globals/Action-Wheel/Action.md#setOnToggle).

## Advanced Action Wheel

### Multi-Page Setup

Creating a network of pages can be overwhelming. Let's try to rectify that.

This method for creating a page network divides the pages into separate, isolated files. These files return an action that can be added to a different page. This action will set the current page to the page in the file, but it first stores a reference to the page it came from. That way, when you want to go back to the previous page, it's as simple as setting the current page to the stored page.

This structure allows pages to be modular and easily reorganized if necessary; more importantly, it can help make multiple pages less overwhelming.

```lua title="ActionWheel.lua"
-- This file controls the root Page. All Pages are 'children' of this Page.
local mainPage = action_wheel:newPage()
-- setAction is used to add an Action that already exists to this Page
-- You need to specify the slot the Action wil go into, but -1 can be used to put it in the next available slot.
mainPage:setAction(-1, require("Page1"))
mainPage:setAction(-1, require("Page2"))
action_wheel:setPage(mainPage)
```

<!-- prettier-ignore -->
```lua title="Page1.lua"
-- Create the Page
local page = action_wheel:newPage()
-- Define the Actions within the Page (These are dummy example Actions)
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()

-- This variable stores the Page to go back to when done with this Page
local prevPage
-- This Action just sets the stored page as active
page:newAction()
    :title("GoBack")
    :item("minecraft:barrier")
    :onLeftClick(function()
        action_wheel:setPage(prevPage)
    end)

-- Page:newAction automatically adds the Action to the Page.
-- This is unwanted, so action_wheel:newAction() is used so just make an Action.
-- This is the Action that will be returned by require and will be used to navigate to this file's Page
return action_wheel:newAction()
    :title("Page1")
    :onLeftClick(function()
        -- store the current active page so that we can set it back as active later
        prevPage = action_wheel:getCurrentPage()
        -- set this file's page as active
        action_wheel:setPage(page)
    end)
```

<!-- prettier-ignore -->
```lua title="Page2.lua"
-- Page2 is just to show that the entire process can be repeated verbatim, so long as the variables are local.
local page = action_wheel:newPage()
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()
page:newAction():title():color():onLeftClick()

local prevPage
page:newAction()
    :title("GoBack")
    :item("minecraft:barrier")
    :onLeftClick(function()
        action_wheel:setPage(prevPage)
    end)

return action_wheel:newAction()
    :title("Page2")
    :onLeftClick(function()
        prevPage = action_wheel:getCurrentPage()
        action_wheel:setPage(page)
    end)
```

### Setting Default State of Toggle Action

This primarily utilizes calling a ping function without the network code, which is explained [here](./Pings#ping-on-init)

This example will correctly set the default visibility of a theoretical jetpack model

<!-- prettier-ignore -->
```lua
-- This variable's initial value will control the default state of the togglable thing.
local jetpackEnabled = true
local jetpackModel = models.model.Body.Jetpack -- reference a ModelPart for convenience
local function setJetpack(bool)
    jetpackEnabled = bool -- this will be a ping function, so we still need to set the client's variable for when it is used in the toggle.
    jetpackModel:setVisible(bool)
end
pings.setJetpack = setJetpack -- we now have a normal function and a ping function that calls the normal function after network stuff
-- This event controls the particle effect of the jetpack
function events.tick()
    -- once every 4 ticks while the jetpack is visible
    if jetpackEnabled and world.getTime() % 4 == 0 then
        -- spawn particles relative to the model itself in the world
        local partMatrix = jetpackModel:partToWorldMatrix()
        particles:newParticle("minecraft:flame", partMatrix:apply(3, -6, 0))
        particles:newParticle("minecraft:flame", partMatrix:apply(-3, -6, 0))
    end
end

-- Page boilerplate
local mainPage = action_wheel:newAction()
action_wheel:setPage(mainPage)

-- calling a ping in the script initialization is a bad idea, hence why the reference to the normal function is needed
setJetpack(jetpackEnabled)
mainPage:newAction()
    :title("Enable Jetpack")
    :toggleTitle("Disable Jetpack")
    :onToggle(pings.setJetpack) -- use the ping for the action toggle, as that is still needs to be pinged
    :toggled(jetpackEnabled) -- the toggled function sets the internal state of the Toggle Action. It *does not* call toggle or untoggle.
```

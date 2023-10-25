The Action Wheel is a gui element provided by Figura that allows for adding highly customizable Actions that can provide additional functionality to your avatar.

The Action Wheel operates on Pages. Only a single Page can be active at a time.<br/>
Pages contain Actions. A Page can have an unlimited amount of Actions, but the Action Wheel can only render 8 at a time. While a Page with more than 8 Actions is active, you can use the scroll wheel to move between the groups of 8 Actions within the Page.

The docs page for the [Action Wheel](../globals/action-wheel) has more examples for specific action wheel functions

## Example Action Wheel

First step is to create the Page that will hold the Actions. This is done via the <code>newPage</code> function.

```lua
local mainPage = action_wheel:newPage()
```

This creates a new page, but thats it. If you save and try to open the Action Wheel (Default Keybind B), you will see a message stating that there is no active page. We can use the <code>setPage</code> function while providing a reference to a Page object to set the active page.

```lua
action_wheel:setPage(mainPage)
```

Tada. New blank page and Figura isnt screaming at us. Now for some actions.<br/>
You can call the <code>newAction</code> function on a Page object. This will create a new Action _and_ add it to the Page.

You technically do not need to store the Action in a variable. If you do, please give it a unique variable name. Using the same variable name for all actions can cause issues when doing more advanced stuff.

```lua
local action = mainPage:newAction()
```

New Action, but it really doesn't look like much. Lets add a title, a display item, and perhaps change the color that appears when the Action is hovered over.

One thing to remember is that all Action functions return itself. This allows for functions to be chained together, always modifying the same action

<!-- prettier-ignore -->
```lua
local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
```

Pretty, but functionally useless. Lets add a function to the <code>leftClick</code> field. When the Action is left clicked, the function stored in the Action's <code>leftClick</code> field gets invoked.

<!-- prettier-ignore -->
```lua
local action = mainPage:newAction()
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    -- the <code>onLeftClick</code> function just sets the Action's <code>leftClick</code> field
    :onLeftClick(function()
        print("Hello World!")
    end)
```

Now we have an Action that does stuff. You may not notice anything, but there is a glaring issue with the current code.

The issue is that the leftClick code will only execute on your computer.

As described in [Pings](./Pings), Figura is completely clientside. The Action Wheel is a feature added by Figura, meaning it will never be synced between clients via the Minecraft Server. So instead, we must use Pings that utilize Figura's Backend to sync data between clients.

First step is to take the code that would be executed on leftClick, and turn it into a ping function. Then, instead of assigning an anonymous function to <code>leftClick</code>, we assign the ping function itself to <code>leftClick</code>

**_IMPORTANT: ALL PING FUNCTIONS MUST HAVE UNIQUE NAMES_**<br/>
Also, please name your ping function so that it describes what it does. I _hate_ seeing <code>pings.actionClicked</code> in the hellp channel in discord. Do something like <code>pings.playEmote1</code> or <code>pings.setArmorVisibility</code>.

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
    -- Pass in the ping function itself into <code>onLeftClick</code>
    :onLeftClick(pings.actionClicked)
```

And there you have it. An Action that correctly executes it's contents across all clients.

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

The code below is a common mistake beginners can fall into.<br/>
While the code might seem correct to those less code literate, it translates to "call the ping function, then assign the return result to the <code>leftClick</code> field".<br/>
A ping will never have a return value, meaning <code>leftClick</code> is being assigned the value <code>nil</code>, meaning nothing.

<!-- prettier-ignore -->
```lua
mainPage:newAction()
    :onLeftClick(pings.actionClicked2(math.random()))
    -- Do not do use this code. It will not work.
```

Here is the full copy paste for an example Action Wheel

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

Go [here](../globals/Action-Wheel/Action.md) for more information on Actions, like making your action [toggleable](../globals/Action-Wheel/Action.md#setOnToggle).

## Advanced Action Wheel

### Multi Page Setup

Creating a network of Pages can be overwhelming. Lets try to rectify that.

This method for creating a Page Network divides the Pages into seperate, isolated files. These files return an Action that can be added to a different page. This Action will set the cuurrent page to the page in the file, but it first stores a reference to the Page it came from. That way when you want to go back to the previous page, its as simple as setting the current page to the stored Page.

This allows Pages to be modular and easily reorganized if needed. More importantly, it can help make multiple pages less overwhelming.

```lua
--ActionWheel.lua
-- This file controls the root Page. All Pages are 'children' of this Page.
local mainpage = action_wheel:newPage()
-- <code>setAction</code> is used to add an Action that already exists to this Page
-- You need to specify the slot the Action wil go into, but <code>-1</code> can be used to put it in the next available slot.
mainpage:setAction(-1, require("Page1"))
mainpage:setAction(-1, require("Page2"))
action_wheel:setPage(mainpage)
```

<!-- prettier-ignore -->
```lua
--Page1.lua
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

-- <code>Page:newAction</code> automatically adds the Action to the Page.
-- This is unwanted, so <code>action_wheel:newAction()</code> is used so just make an Action.
-- This is the Action that will be returned by <code>require</code> and will be used to navigate to this file's Page
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
```lua
--Page2.lua
-- Page2 is just to show that the entire process can be repeated verbatum, so long as the variables are <code>local</code>.
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
local jetpackModel = models.model.Body.Jetpack -- reference a ModelPart for convinience
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
local mainpage = action_wheel:newAction()
action_wheel:setPage(mainpage)

-- calling a ping in the script initialization is a bad idea, hence why the reference to the normal function is needed
setJetpack(jetpackEnabled)
mainpage:newAction()
    :title("Enable Jetpack")
    :toggleTitle("Disable Jetpack")
    :onToggle(pings.setJetpack) -- use the ping for the action toggle, as that is still needs to be pinged
    :toggled(jetpackEnabled) -- the <code>toggled</code> function sets the internal <code>state</code> of the Toggle Action. It *does not* call <code>toggle</code> or <code>untoggle</code>.
```

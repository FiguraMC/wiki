---
title: Action Wheel Advanced
unlisted: true
---

Advanced action wheel tutorial

If you haven't read and understood the beginner action wheel tutorial, start [there](../tutorials/ActionWheel.md).

## Multi Page Setup

Creating a network of Pages can be overwhelming. Lets try to rectify that.

This method for creating a Page Network divides the Pages into seperate, isolated files. These files return an Action that can be added to a different page. This Action will set the cuurrent page to the page in the file, but it first stores a reference to the Page it came from. That way when you want to go back to the previous page, its as simple as setting the current page to the stored Page.

This allows Pages to be modular and easily reorganized if needed. More importantly, it can help make multiple pages less overwhelming.

```lua
--ActionWheel.lua
-- This file controls the root Page. All Pages are 'children' of this Page.
local mainpage = action_wheel:newPage()
-- setAction is used to add an Action that already exists to this Page
-- You need to specify the slot the Action wil go into, but -1 can be used to put it in the next available slot.
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
```lua
--Page2.lua
-- Page2 is just to show that the entire process can be repeated verbatum, so long as the variables are local.
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

## Setting Default State of Toggle Action

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
    :toggled(jetpackEnabled) -- the toggled function sets the internal state of the Toggle Action. It *does not* call toggle or untoggle.
```

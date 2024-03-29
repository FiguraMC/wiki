---
title: Action Wheel
---

If you're just here to copy-paste something without the tutorial go [here](./ActionWheel/#here-is-the-full-copy-paste-for-an-example-action-wheel)

The Action Wheel is a gui element provided by Figura that allows for adding highly customizable Actions that can provide additional functionality to your avatar.

The Action Wheel operates on Pages. Only a single Page can be active at a time.<br/>
Pages contain Actions. A Page can have an unlimited amount of Actions, but the Action Wheel can only render 8 at a time. While a Page with more than 8 Actions is active, you can use the scroll wheel to move between the groups of 8 Actions within the Page.

The docs page for the [Action Wheel](../globals/action-wheel) has more examples for specific action wheel functions

## Example Action Wheel

The first step is to create the Page that will hold the Actions. This is done via the <code>newPage</code> function.

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
    -- the onLeftClick function just sets the Action's leftClick field
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
    -- Pass in the ping function itself into onLeftClick
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

#### Here is the full copy paste for an example Action Wheel

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

### Toggle Example

This is an exmaple of the onToggle function, which swaps between two states. It does not work on its own as it doesn't have a page.

<!-- prettier-ignore -->
```lua
function pings.toggling(state)
    models:setVisible(state)
end

local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("disabled")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    :setOnToggle(pings.toggling)
```

### Multiple Actions Example

When working with multiple actions, it's important to give the actions and pings unique names

<!-- prettier-ignore -->
```lua
local mainPage = action_wheel:newPage()
action_wheel:setPage(mainPage)

function pings.actionClicked() -- this ping is named actionClicked
    print("Hello World!")
end

local action = mainPage:newAction()
    -- this action is saved to action
    :title("My Action")
    :item("minecraft:stick")
    :hoverColor(1, 0, 1)
    :onLeftClick(pings.actionClicked)
    -- this calls the ping named actionClicked


function pings.toggling(state)
    -- this ping is named toggling. it's important that all pings have unique names
    models:setVisible(state)
end

local toggleaction = mainPage:newAction()
    -- this action is saved to toggleaction. it's important that actions are saved to unique variables
    :title("disabled")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    :setOnToggle(pings.toggling) 
    -- this calls the ping named toggling
```

### Multiple Pages Example

<!-- prettier-ignore -->
```lua
local mainPage = action_wheel:newPage()
local secondPage = action_wheel:newPage() -- make sure you save the pages to unique variables
action_wheel:setPage(mainPage) -- this is setting the page you'll see when you first open the wheel to mainPage
local toSecond = mainPage:newAction()
    :title("Change To Second Page")
    :item("item_frame")
    :onLeftClick(function()
    -- this is a new action on mainPage. its purpose will be to swap to secondPage
    -- this doesn't need to be pinged
    log("Swapped to the second page")
    action_wheel:setPage(secondPage)
end)

local toMain = secondPage:newAction()
    :title("Change To Main Page")
    :item("glow_item_frame")
    :onLeftClick(function()
    -- this is a new action on secondPage. its purpose will be to swap to mainPage
    log("Swapped to the main page")
    action_wheel:setPage(mainPage)
    end)

local newAction = secondPage:newAction()
    :title("Hello")
    :item("zombie_head")
    :onLeftClick(function()
    -- this is a second action on the second page just to show it can be done
    log("Hello World")
    end)
```

## Further Reading

Go [here](../globals/Action-Wheel/Action.md) for more information on Actions. Go [here](../globals/Action-Wheel/Page.md) for more information on Pages.

## Advanced Action Wheel

Go [here](../tutorials/ActionWheel-Advanced) for an advanced action wheel tutorial.

#### For when you want to skip the tutorials altogether

If you scrolled to the bottom of the page just to copy-paste something without the tutorial go [here](./ActionWheel/#here-is-the-full-copy-paste-for-an-example-action-wheel)

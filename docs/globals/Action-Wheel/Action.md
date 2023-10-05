This page is a WIP!

## Action Events
Technically they are "callbacks" and not "events" as you can only assign a single function, but eh.
It's common practice to pass pings to these functions since interacting with the action_wheel is not sync'd between clients. Checkout the [`onToggle`](#onToggle) function to see an example.

### `onLeftClick()` {#onLeftClick}
Sets the function that is executed when the left mouse button is clicked
The function have one argument
The first argument is this action itself

**Example**:
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :onLeftClick(function()
        print('I left clicked this button!')
    end)
// highlight-end
```
<br/>


### `onRightClick(fn)` {#onRightClick}
Sets the function that is executed when the right mouse button is clicked
The function have one argument
The first argument is this action itself

**Example**:
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :onRightClick(function()
        print('I right clicked this button!')
    end)
// highlight-end
```
<br/>

### `onToggle(fn)` {#onToggle}
When the Action is assigned a function to the <code>toggle</code> field, it becomes a Toggle Action. Figura passes the Toggle Action's internal <code>state</code> variable as the first parameter, and the Action itself as the second.

**Example**:
```lua
function pings.setVisible(state)
    models:setVisible(state)
end

local myPage = action_wheel:newPage()
myPage:newAction()
    :title("disabled")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    // highlight-next-line
    :onToggle(pings.setVisible)
```
<br/>

### `onUnToggle(fn)` {#onUnToggle}
Unlike Toggle which gets executed when the Action is toggled on or off, UnToggle only gets executed when the Action is toggled off. Figura passes the Toggle Action's internal <code>state</code> variable as the first parameter (which is always false due to the nature of UnToggle), and the Action itself as the second.

**Example**:
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :onUnToggle(function(bool)
        print('This is always false: ' .. bool)
    end)
// highlight-end
```
<br/>

### `onScroll(fn)` {#onScroll}
This will execute when the mouse wheel scrolls while hovering over the Action. The first parameter is the direction the mouse scrolled (1 for scroll up, -1 for scroll down. Can be more than 1 for non-standard mouse wheels). The second paremeter is the Action itself

**Example**:
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :onScroll(function(dir)
        print('Scrolled in this direction: ' .. dir)
    end)
// highlight-end
```

An action in the [`Action Wheel`](.). Actions are either interacted with by clicking or scrolling. Actions can either run an action on interaction or when toggled.

## Appearance

Functions to modify how your Action looks.

---

### `setTitle(string)` {#setTitle}

Sets the title of the Action.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-next-line
    :setTitle('Click me!')
```

---

### `getTitle()` {#getTitle}

Gets the Action's title. Returns a `string`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction()
    :setTitle('Click me!')

// highlight-next-line
print(myAction:getTitle())
```

---

### `setItem(ItemStack)` {#setItem}

Sets an item to display on the Acton. Takes an `ItemStack`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-next-line
    :setItem('minecraft:stone')
```

---

### `setColor(Vector3)` {#setColor}

Sets the color of the Action. Takes a `Vector3` of rgb values or a number per value. The rgb values are between 0 and 1.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-next-line
    :setColor(255 / 255, 192 / 155, 203 / 255)
```

---

### `getColor()` {#getColor}

Gets the Action's color. Returns a `Vector3`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setColor(255 / 255, 192 / 155, 203 / 255)

// highlight-next-line
print(myAction:getColor())
```

---

### `setTexture(Texture, number?, number?, number?, number?, number?)` {#setTexture}

Sets the texture of the Action. All parameters other than `Texture` are optional.

**Parameters**:

-   The `Texture` to set the action to
-   `U` of the `UV`. Default: 0
-   `V` of the `UV`. Default: 0
-   `width` in pixels. Default: `Texture`'s width
-   `height` in pixels. Default: `Texture`'s height
-   `scale`. Default: 1

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()

-- basic
myPage:newAction()
// highlight-next-line
    :setTexture(textures['myTexture'])

-- advanced
myPage:newAction()
// highlight-next-line
    :setTexture(textures['myTexture'], 16, 32, nil, nil, 2)

```

---

### `setHoverColor(Vector3)` {#setHoverColor}

Sets the color of the Action when it's being hovered. Takes a `Vector3` of rgb values or a number per value. The rgb values are between 0 and 1.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-next-line
    :setHoverColor(255 / 255, 192 / 155, 203 / 255)
```

### `getHoverColor()` {#getHoverColor}

Gets the Action's hover color. Returns a `Vector3`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setHoverColor(255 / 255, 192 / 155, 203 / 255)

// highlight-next-line
print(myAction:getHoverColor())
```

---

### `setHoverTexture(Texture, number?, number?, number?, number?, number?)` {#setTexture}

Sets the texture of the Action when it's hovered. All parameters other than `Texture` are optional.

**Parameters**:

-   The `Texture` to set the action to
-   `U` of the `UV`. Default: 0
-   `V` of the `UV`. Default: 0
-   `width` in pixels. Default: `Texture`'s width
-   `height` in pixels. Default: `Texture`'s height
-   `scale`. Default: 1

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()

-- basic
myPage:newAction()
// highlight-next-line
    :setHoverTexture(textures['myTexture'])

-- advanced
myPage:newAction()
// highlight-next-line
    :setHoverTexture(textures['myTexture'], 16, 32, nil, nil, 2)

```

---

## Toggle Specific

When the Action is assigned a function to the <code>[toggle](#setToggleTitle)</code> field, it becomes a Toggle Action. These functions apply to those Actions.

---

### `setToggleTitle(string)` {#setToggleTitle}

Sets the title of the Action when toggled.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setTitle('Sit')
    :setOnToggle(pings.sit)
// highlight-next-line
    :setToggleTitle('Stand')
```

---

### `getToggleTitle()` {#getToggleTitle}

Gets the Action's title when toggled. Returns a `string`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-next-line
    :setToggleTitle('Stand')

// highlight-next-line
print(myAction:getToggleTitle())
```

---

### `setToggleItem(ItemStack)` {#setToggleItem}

Sets an item to display on the Acton when toggled. Takes an `ItemStack`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setTitle('Sit')
    :setItem('spruce_stairs')
    :setOnToggle(pings.sit)
    :setToggleTitle('Stand')
// highlight-next-line
    :setToggleItem('armor_stand')
```

---

### `setToggleColor(Vector3)` {#setToggleColor}

Sets the color of the Action when toggled. Takes a `Vector3` of rgb values or a number per value. The rgb values are between 0 and 1.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setColor(255 / 255, 192 / 255, 203 / 255)
// highlight-next-line
    :setToggleColor(0, 128 / 255, 128 / 255)
```

---

### `getToggleColor()` {#getToggleColor}

Gets the Action's color when toggled. Returns a `Vector3`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setToggleColor(255 / 255, 192 / 155, 203 / 255)

// highlight-next-line
print(myAction:getToggleColor())
```

---

### `setToggleTexture(Texture, number?, number?, number?, number?, number?)` {#setToggleTexture}

Sets the texture of the Action when toggled. All parameters other than `Texture` are optional.

**Parameters**:

-   The `Texture` to set the action to
-   `U` of the `UV`. Default: 0
-   `V` of the `UV`. Default: 0
-   `width` in pixels. Default: `Texture`'s width
-   `height` in pixels. Default: `Texture`'s height
-   `scale`. Default: 1

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()

-- basic
myPage:newAction()
    :setTexture(textures['myTexture'])
// highlight-next-line
    :setToggleTexture(textures['myToggleTexture'])

-- advanced
myPage:newAction()
    :setTexture(textures['myTexture'], 0, 32, nil, nil, 2)
// highlight-next-line
    :setToggleTexture(textures['myTexture'], 16, 32, nil, nil, 2)

```

---

### `setToggled(boolean)` {#setToggled}

Sets the toggle state of the Action.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction()
    :setOnToggle(function(b) print('Toggled: ' .. b) end)

local t = 0

function events.tick()
    if t % 20 == 0 then
        local wasToggled = myAction:isToggled()
// highlight-next-line
        myAction:setToggled(not wasToggled)
    end
    t = t + 1
end
```

---

### `isToggled()` {#isToggled}

Checks if the action is toggled or not. Returns a `boolean`.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction()
    :setOnToggle(function(b) print('Toggled: ' .. b) end)

local t = 0

function events.tick()
    if t % 20 == 0 then
// highlight-next-line
        local wasToggled = myAction:isToggled()
        myAction:setToggled(not wasToggled)
    end
    t = t + 1
end
```

---

## Action Events

Technically they are "callbacks" and not "events" as you can only assign a single function, but eh.
It's common practice to pass pings to these functions since interacting with the action_wheel is not sync'd between clients. Checkout the [`setOnToggle`](#setOnToggle) function to see an example.

---

### `setOnLeftClick()` {#setOnLeftClick}

Sets the function that is executed when the left mouse button is clicked
The function have one argument
The first argument is this action itself

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :setOnLeftClick(function()
        print('I left clicked this button!')
    end)
// highlight-end
```

---

### `setOnRightClick(fn)` {#setOnRightClick}

Sets the function that is executed when the right mouse button is clicked
The function have one argument
The first argument is this action itself

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :setOnRightClick(function()
        print('I right clicked this button!')
    end)
// highlight-end
```

---

### `setOnToggle(fn)` {#setOnToggle}

When the Action is assigned a function to the <code>toggle</code> field, it becomes a Toggle Action. Figura passes the Toggle Action's internal <code>state</code> variable as the first parameter, and the Action itself as the second.

**Example**:

<!-- prettier-ignore -->
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
    :setOnToggle(pings.setVisible)
```

---

### `setOnUnToggle(fn)` {#setOnUnToggle}

Unlike Toggle which gets executed when the Action is toggled on or off, UnToggle only gets executed when the Action is toggled off. Figura passes the Toggle Action's internal <code>state</code> variable as the first parameter (which is always false due to the nature of UnToggle), and the Action itself as the second.

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :setOnUnToggle(function(bool)
        print('This is always false: ' .. bool)
    end)
// highlight-end
```

---

### `setOnScroll(fn)` {#setOnScroll}

This will execute when the mouse wheel scrolls while hovering over the Action. The first parameter is the direction the mouse scrolled (1 for scroll up, -1 for scroll down. Can be more than 1 for non-standard mouse wheels). The second paremeter is the Action itself

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
// highlight-start
    :setOnScroll(function(dir)
        print("Scrolled in this direction: " .. dir)
    end)
// highlight-end
```

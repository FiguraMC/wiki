An action in the [`Action Wheel`](.). Actions are either interacted with by clicking or scrolling. Actions can either run an action on interaction or when toggled.

## Appearance

Functions to modify how your Action looks.

---

### <code>setTitle(title: string): [Action](./Action)</code> \{#setTitle}

Sets the title of the Action.

**Parameters**

| Name  | Type     | Description                                            |
| ----- | -------- | ------------------------------------------------------ |
| title | `string` | The title that displays when you hover over the Action |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
-- highlight-next-line
    :setTitle('Click me!')
```

---

### <code>getTitle(): string</code> \{#getTitle}

Gets the Action's title.

**Returns**

| Name  | Type     | Description                |
| ----- | -------- | -------------------------- |
| title | `string` | The Action's current title |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction()
    :setTitle('Click me!')

-- highlight-next-line
print(myAction:getTitle())
```

---

### <code>setItem(item: [ItemStack](../World/ItemStack)): [Action](./Action)</code> \{#setItem}

Sets an item to display on the Acton.

**Parameters**

| Name | Type                                         | Description                          |
| ---- | -------------------------------------------- | ------------------------------------ |
| item | <code>[ItemStack](../World/ItemStack)</code> | The item to set the Action's icon to |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
-- highlight-next-line
    :setItem('minecraft:stone')
```

---

### <code>setColor(color: [Vector3](../Vectors/Vector3)): [Action](./Action)</code> \{#setColor}

Sets the color of the Action. Takes a `Vector3` of rgb values or a number per value. The rgb values are between 0 and 1.

**Parameters**

| Name  | Type                                       | Description            |
| ----- | ------------------------------------------ | ---------------------- |
| color | <code>[Vector3](../Vectors/Vector3)</code> | A vector of rgb values |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
-- highlight-next-line
    :setColor(255 / 255, 192 / 155, 203 / 255)
```

---

### <code>getColor(): [Vector3](../Vectors/Vector3)</code> \{#getColor}

Gets the Action's color. Returns a `Vector3`.

**Returns**

| Name  | Type                                       | Description            |
| ----- | ------------------------------------------ | ---------------------- |
| color | <code>[Vector3](../Vectors/Vector3)</code> | A vector of rgb values |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setColor(255 / 255, 192 / 155, 203 / 255)

-- highlight-next-line
print(myAction:getColor())
```

---

### <code>setTexture(texture: [Texture](../textures/Texture), U: number?, V: number?, width: number?, height: number?, scale: number?): [Action](./Action)</code> \{#setTexture}

Sets the texture of the Action. All parameters other than `Texture` are optional.

**Parameters**

| Name    | Type                                        | Description                          | Default          |
| ------- | ------------------------------------------- | ------------------------------------ | ---------------- |
| texture | <code>[Texture](../textures/Texture)</code> | The item to set the Action's icon to |                  |
| U       | `number`                                    | The U value of the UV                | 0                |
| V       | `number`                                    | The V value of the UV                | 0                |
| width   | `number`                                    | The width to set the texture to      | texture's width  |
| height  | `number`                                    | The height to set the texture to     | texture's height |
| scale   | `number`                                    | The scale to set the texture to      | 1                |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()

-- basic
myPage:newAction()
-- highlight-next-line
    :setTexture(textures['myTexture'])

-- advanced
myPage:newAction()
-- highlight-next-line
    :setTexture(textures['myTexture'], 16, 32, nil, nil, 2)

```

---

### <code>setHoverColor(color: [Vector3](../Vectors/Vector3)): [Action](./Action)</code> \{#setHoverColor}

Sets the color of the Action when it's being hovered. Takes a `Vector3` of rgb values or a number per value. The rgb values are between 0 and 1.

**Parameters**

| Name  | Type                                       | Description            |
| ----- | ------------------------------------------ | ---------------------- |
| color | <code>[Vector3](../Vectors/Vector3)</code> | A vector of rgb values |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
-- highlight-next-line
    :setHoverColor(255 / 255, 192 / 155, 203 / 255)
```

---

### <code>getHoverColor(): [Vector3](../Vectors/Vector3)</code> \{#getHoverColor}

Gets the Action's hover color. Returns a `Vector3`.

**Returns**

| Name  | Type                                       | Description            |
| ----- | ------------------------------------------ | ---------------------- |
| color | <code>[Vector3](../Vectors/Vector3)</code> | A vector of rgb values |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setHoverColor(255 / 255, 192 / 155, 203 / 255)

-- highlight-next-line
print(myAction:getHoverColor())
```

---

### <code>setHoverTexture(texture: [Texture](../textures/Texture), U: number?, V: number?, width: number?, height: number?, scale: number?): [Action](./Action)</code> \{#setTexture}

Sets the texture of the Action when it's hovered. All parameters other than `Texture` are optional.

**Parameters**

| Name    | Type                                        | Description                          | Default          |
| ------- | ------------------------------------------- | ------------------------------------ | ---------------- |
| texture | <code>[Texture](../textures/Texture)</code> | The item to set the Action's icon to |                  |
| U       | `number`                                    | The U value of the UV                | 0                |
| V       | `number`                                    | The V value of the UV                | 0                |
| width   | `number`                                    | The width to set the texture to      | texture's width  |
| height  | `number`                                    | The height to set the texture to     | texture's height |
| scale   | `number`                                    | The scale to set the texture to      | 1                |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()

-- basic
myPage:newAction()
-- highlight-next-line
    :setHoverTexture(textures['myTexture'])

-- advanced
myPage:newAction()
-- highlight-next-line
    :setHoverTexture(textures['myTexture'], 16, 32, nil, nil, 2)

```

---

## Toggle Specific

When the Action is assigned a function to the <code>[toggle](#setToggleTitle)</code> field, it becomes a Toggle Action. These functions apply to those Actions.

---

### <code>setToggleTitle(title: string): [Action](./Action)</code> \{#setToggleTitle}

Sets the title of the Action when toggled.

**Parameters**

| Name  | Type     | Description                                                                |
| ----- | -------- | -------------------------------------------------------------------------- |
| title | `string` | The title that displays when you hover over the Action while it is toggled |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setTitle('Sit')
    :setOnToggle(pings.sit)
-- highlight-next-line
    :setToggleTitle('Stand')
```

---

### <code>getToggleTitle(): string</code> \{#getToggleTitle}

Gets the Action's title when toggled.

**Returns**

| Name  | Type     | Description                              |
| ----- | -------- | ---------------------------------------- |
| title | `string` | The Action's current title while toggled |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
-- highlight-next-line
    :setToggleTitle('Stand')

-- highlight-next-line
print(myAction:getToggleTitle())
```

---

### <code>setToggleItem(item: [ItemStack](../World/ItemStack)): [Action](./Action)</code> \{#setToggleItem}

Sets an item to display on the Acton when toggled.

**Parameters**

| Name | Type                                         | Description                                        |
| ---- | -------------------------------------------- | -------------------------------------------------- |
| item | <code>[ItemStack](../World/ItemStack)</code> | The item to set the Action's icon to while toggled |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setTitle('Sit')
    :setItem('spruce_stairs')
    :setOnToggle(pings.sit)
    :setToggleTitle('Stand')
-- highlight-next-line
    :setToggleItem('armor_stand')
```

---

### <code>setToggleColor(color: [Vector3](../Vectors/Vector3)): [Action](./Action)</code> \{#setToggleColor}

Sets the color of the Action when toggled. Takes a `Vector3` of rgb values or a number per value. The rgb values are between 0 and 1.

**Parameters**

| Name  | Type                                       | Description            |
| ----- | ------------------------------------------ | ---------------------- |
| color | <code>[Vector3](../Vectors/Vector3)</code> | A vector of rgb values |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setColor(255 / 255, 192 / 255, 203 / 255)
-- highlight-next-line
    :setToggleColor(0, 128 / 255, 128 / 255)
```

---

### <code>getToggleColor(): [Vector3](../Vectors/Vector3)</code> \{#getToggleColor}

Gets the Action's color when toggled. Returns a `Vector3`.

**Returns**

| Name  | Type                                       | Description            |
| ----- | ------------------------------------------ | ---------------------- |
| color | <code>[Vector3](../Vectors/Vector3)</code> | A vector of rgb values |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
myPage:newAction()
    :setToggleColor(255 / 255, 192 / 155, 203 / 255)

-- highlight-next-line
print(myAction:getToggleColor())
```

---

### <code>setToggleTexture(texture: [Texture](../textures/Texture), U: number?, V: number?, width: number?, height: number?, scale: number?): [Action](./Action)</code> \{#setToggleTexture}

Sets the texture of the Action when toggled. All parameters other than `Texture` are optional.

**Parameters**

| Name    | Type                                        | Description                          | Default          |
| ------- | ------------------------------------------- | ------------------------------------ | ---------------- |
| texture | <code>[Texture](../textures/Texture)</code> | The item to set the Action's icon to |                  |
| U       | `number`                                    | The U value of the UV                | 0                |
| V       | `number`                                    | The V value of the UV                | 0                |
| width   | `number`                                    | The width to set the texture to      | texture's width  |
| height  | `number`                                    | The height to set the texture to     | texture's height |
| scale   | `number`                                    | The scale to set the texture to      | 1                |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()

-- basic
myPage:newAction()
    :setTexture(textures['myTexture'])
-- highlight-next-line
    :setToggleTexture(textures['myToggleTexture'])

-- advanced
myPage:newAction()
    :setTexture(textures['myTexture'], 0, 32, nil, nil, 2)
-- highlight-next-line
    :setToggleTexture(textures['myTexture'], 16, 32, nil, nil, 2)

```

---

### <code>setToggled(state: boolean): [Action](./Action)</code> \{#setToggled}

Sets the toggle state of the Action.

**Parameters**

| Name  | Type      | Description                             |
| ----- | --------- | --------------------------------------- |
| state | `boolean` | Changes the current state of the toggle |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

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
-- highlight-next-line
        myAction:setToggled(not wasToggled)
    end
    t = t + 1
end
```

---

### <code>isToggled(): boolean</code> \{#isToggled}

Checks if the action is toggled or not. Returns a `boolean`.

**Returns**

| Name  | Type      | Description                          |
| ----- | --------- | ------------------------------------ |
| state | `boolean` | Whether or not the Action is toggled |

**Example**:

<!-- prettier-ignore -->
```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction()
    :setOnToggle(function(b) print('Toggled: ' .. b) end)

local t = 0

function events.tick()
    if t % 20 == 0 then
-- highlight-next-line
        local wasToggled = myAction:isToggled()
        myAction:setToggled(not wasToggled)
    end
    t = t + 1
end
```

---

For this entire page assume:

```lua
local myPage = action_wheel:newPage()
action_wheel:setPage(myPage)
```

## Action Events

Technically they are "callbacks" and not "events" as you can only assign a single function, but eh.
It's common practice to pass pings to these functions since interacting with the action_wheel is not sync'd between clients. Checkout the [`setOnToggle`](#setOnToggle) function to see an example.

---

### `leftClick` \{#leftClick}

The field that holds the callback for when the left mouse button is clicked on the Action. The type of this field is <code>fun(action: [Action](./Action))</code>. This type will be referred to as `LeftFunction` elsewhere in the wiki.

**Parameters**

| Name   | Type                            | Description                           |
| ------ | ------------------------------- | ------------------------------------- |
| action | <code>[Action](./Action)</code> | The action the callback was called by |

---

### <code>setOnLeftClick(leftFunction: [LeftFunction](#leftClick)): [Action](./Action)</code> \{#setOnLeftClick}

Sets the function that is executed when the left mouse button is clicked. Figura passes the Action itself as the first parameter.

**Parameters**

| Name         | Type                                              | Description                                           |
| ------------ | ------------------------------------------------- | ----------------------------------------------------- |
| leftFunction | <code>[LeftFuncton](./Action#LeftFunction)</code> | The function that runs when you left click the Action |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
myPage:newAction()
-- highlight-start
    :setOnLeftClick(function()
        print('I left clicked this button!')
    end)
-- highlight-end
```

---

### `rightClick` \{#rightClick}

The field that holds the callback for when the right mouse button is clicked on the Action. The type of this field is <code>fun(action: [Action](./Action))</code>. This type will be referred to as `RightFunction` elsewhere in the wiki.

**Parameters**

| Name   | Type                            | Description                           |
| ------ | ------------------------------- | ------------------------------------- |
| action | <code>[Action](./Action)</code> | The action the callback was called by |

---

### <code>setOnRightClick(rightFunction: [RightFunction](#rightClick)): [Action](./Action)</code> \{#setOnRightClick}

Sets the function that is executed when the right mouse button is clicked. Figura passes the Action itself as the first parameter.

**Parameters**

| Name          | Type                                                | Description                                            |
| ------------- | --------------------------------------------------- | ------------------------------------------------------ |
| rightFunction | <code>[RightFuncton](./Action#RightFunction)</code> | The function that runs when you right click the Action |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
myPage:newAction()
-- highlight-start
    :setOnRightClick(function()
        print('I right clicked this button!')
    end)
-- highlight-end
```

---

### `toggle` \{#toggle}

The field that holds the callback for when the Action is toggled. The type of this field is <code>fun(state: boolean, action: [Action](./Action))</code>. This type will be referred to as `ToggleFunction` elsewhere in the wiki.

**Parameters**

| Name   | Type                            | Description                              |
| ------ | ------------------------------- | ---------------------------------------- |
| state  | boolean                         | Whether the action was toggled on or off |
| action | <code>[Action](./Action)</code> | The action the callback was called by    |

---

### <code>setOnToggle(toggleFunction: [ToggleFunction](#ToggleFunction)): [Action](./Action)</code> \{#setOnToggle}

When the Action is assigned a function to the <code>toggle</code> field, it becomes a Toggle Action. Figura passes the Toggle Action's internal <code>state</code> variable as the first parameter, and the Action itself as the second.

**Parameters**

| Name           | Type                                           | Description                                       |
| -------------- | ---------------------------------------------- | ------------------------------------------------- |
| toggleFunction | <code>[ToggleFunction](#ToggleFunction)</code> | The function that runs when you toggle the Action |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
function pings.setVisible(state)
    models:setVisible(state)
end

myPage:newAction()
    :title("disabled")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    -- highlight-next-line
    :setOnToggle(pings.setVisible)
```

---

### `Untoggle`

The field that holds the callback for when the Action is untoggled. The type of this field is <code>fun(state: boolean, action: [Action](./Action))</code>. This type will be referred to as `UntoggleFunction` elsewhere in the wiki.

**Parameters**

| Name   | Type                            | Description                                                                |
| ------ | ------------------------------- | -------------------------------------------------------------------------- |
| state  | boolean                         | Whether the action was toggled on or off. In this case, it is always false |
| action | <code>[Action](./Action)</code> | The action the callback was called by                                      |

---

### <code>setOnUntoggle(untoggleFunction: [UntoggleFunction](#Untoggle)): [Action](./Action)</code> \{#setOnUnToggle}

Unlike Toggle which gets executed when the Action is toggled on or off, `UnToggle` only gets executed when the Action is toggled off. Figura passes the Toggle Action's internal <code>state</code> variable as the first parameter (which is always false due to the nature of UnToggle), and the Action itself as the second.

:::info

`setOnUntoggle` is redundant because [`setOnToggle`](#setOnToggle) will also work when the action is untoggled if there is no `OnUntoggle` function set.

:::

**Parameters**

| Name           | Type                                       | Description                                         |
| -------------- | ------------------------------------------ | --------------------------------------------------- |
| toggleFunction | <code>[UntoggleFunction](#Untoggle)</code> | The function that runs when you untoggle the Action |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
myPage:newAction()
    :setOnToggle(function(bool)
        print('This is always true: ', .. bool)
    end)
-- highlight-start
    :setOnUntoggle(function(bool)
        print('This is always false: ' .. bool)
    end)
-- highlight-end
```

---

### `scroll`

The field that holds the callback for when the Action is scrolled. The type of this field is <code>fun(dir: number, action: [Action](./Action))</code>. This type will be referred to as `ScrollFunction` elsewhere in the wiki.

**Parameters**

| Name   | Type                            | Description                                                                     |
| ------ | ------------------------------- | ------------------------------------------------------------------------------- |
| dir    | number                          | The direction the scrollwheel was moved. Positive for up and negative for down. |
| action | <code>[Action](./Action)</code> | The action the callback was called by                                           |

---

### <code>setOnScroll(onScroll: [ScrollFunction](#scroll)): [Action](./Action)</code> \{#setOnScroll}

This will execute when the mouse wheel scrolls while hovering over the Action. The first parameter is the direction the mouse scrolled (1 for scroll up, -1 for scroll down. Can be more than 1 for non-standard mouse wheels). The second paremeter is the Action itself.

**Parameters**

| Name           | Type                                   | Description                                          |
| -------------- | -------------------------------------- | ---------------------------------------------------- |
| toggleFunction | <code>[ScrollFunction](#scroll)</code> | The function that runs when you scroll on the Action |

**Returns**

| Name   | Type                            | Description                                                  |
| ------ | ------------------------------- | ------------------------------------------------------------ |
| action | <code>[Action](./Action)</code> | The Action you called this function on to allow for chaining |

**Example**:

<!-- prettier-ignore -->
```lua
myPage:newAction()
-- highlight-start
    :setOnScroll(function(dir)
        print("Scrolled in this direction: " .. dir)
    end)
-- highlight-end
```

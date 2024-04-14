import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

An action in the Figura Action Wheel

Actions are either interacted by clicking and scrolling, which also being able to be toggleable

For the entire page assume:

```lua
local myPage = action_wheel:newPage()
local myAction = myPage:newAction()
```

---

## Action Events

### <code>setOnLeftClick()</code> \{#setOnLeftClick}

**Aliases:** `onLeftClick()`

Sets the function that is executed when the left mouse button is clicked

The function has one argument

The first argument is this action itself

See the [action wheel tutorial](/tutorials/ActionWheel#here-is-the-full-copy-paste-for-an-example-action-wheel) for a full example.

```lua
setOnLeftClick(leftFunction)
```

**Parameters:**

| Name         | Type                                                | Description                                                   | Default  |
| ------------ | --------------------------------------------------- | ------------------------------------------------------------- | -------- |
| leftFunction | <code>[Function](/tutorials/types/Functions)</code> | The function that will be run when the action is left clicked | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.lefty()
    print("I left clicked this button!")
end

-- highlight-next-line
myAction:setOnLeftClick(pings.lefty)
```

---

### <code>setOnRightClick()</code> \{#setOnRightClick}

**Aliases:** `onRightClick()`

Sets the function that is executed when the right mouse button is clicked

The function has one argument

The first argument is this action itself

```lua
setOnRightClick(rightFunction)
```

**Parameters:**

| Name          | Type                                                | Description                                                    | Default  |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------- | -------- |
| rightFunction | <code>[Function](/tutorials/types/Functions)</code> | The function that will be run when the action is right clicked | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.righty()
    print("I right clicked this button!")
end

-- highlight-next-line
myAction:setOnRightClick(pings.righty)
```

---

### <code>setOnToggle()</code> \{#setOnToggle}

**Aliases:** `onToggle()`

Sets the function that is executed when the Action is toggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

See the [action wheel tutorial](/tutorials/ActionWheel#toggle-example) for a full example.

```lua
setOnToggle(toggleFunction)
```

**Parameters:**

| Name           | Type                                                | Description                                              | Default  |
| -------------- | --------------------------------------------------- | -------------------------------------------------------- | -------- |
| toggleFunction | <code>[Function](/tutorials/types/Functions)</code> | The function that will be run when the action is toggled | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.setVisible(state)
    models:setVisible(state) -- toggles the visibility of the entire avatar because state swaps between true and false every click
end

myAction:setOnToggle(pings.setVisible)
```

---

### <code>setOnUntoggle()</code> \{#setOnUntoggle}

**Aliases:** `onUntoggle()`

:::warning
This method is a noob trap, anything it can do setOnToggle does better because setOnToggle also runs its function when untoggled
:::

Sets the function that is executed when the Action is untoggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

```lua
setOnUntoggle(toggleFunction)
```

**Parameters:**

| Name           | Type                                                | Description                                                | Default  |
| -------------- | --------------------------------------------------- | ---------------------------------------------------------- | -------- |
| toggleFunction | <code>[Function](/tutorials/types/Functions)</code> | The function that will be run when the action is untoggled | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.toggley(bool)
    print('This is always true: ', .. bool) -- this is always true because setOnUnToggle changes the behavior of setOnToggle. Without setOnUnToggle this would swap between true and false
end

function pings.untoggley(bool)
    print('This is always false: ' .. bool)
end

local myAction = myPage:newAction()
    :setOnToggle(pings.toggley)
-- highlight-start
    :setOnUntoggle(pings.untoggley)
-- highlight-end
```

---

### <code>setOnScroll()</code> \{#setOnScroll}

**Aliases:** `onScroll()`

Sets the function that is executed when the mouse is scrolled

The function has two arguments

The first argument is mouse wheel direction

The second argument is this action itself

```lua
setOnScroll(scrollFunction)
```

**Parameters:**

| Name           | Type                                                | Description                                                    | Default  |
| -------------- | --------------------------------------------------- | -------------------------------------------------------------- | -------- |
| scrollFunction | <code>[Function](/tutorials/types/Functions)</code> | The function that will be run when the action is scrolled over | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.scrolling(dir)
    log(dir)
    if dir > 0 then
        log("Scrolled up")
    else
        log("Scrolled down")
    end
end

-- highlight-start
myAction:setOnScroll(pings.scrolling)
-- highlight-end
```

---

## Appearance

### <code>setColor()</code> \{#setColor}

**Aliases:** `color()`

Sets the background color of the Action

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setColor(color)
```

**Parameters:**

| Name  | Type                                             | Description                                                      | Default      |
| ----- | ------------------------------------------------ | ---------------------------------------------------------------- | ------------ |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | The RGB value of the background, with each value between 0 and 1 | `vec(0,0,0)` |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description                                        | Default |
| ---- | ----------------------------------------------- | -------------------------------------------------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | The red value of the background, between 0 and 1   | `0`     |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | The green value of the background, between 0 and 1 | `0`     |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | The blue value of the background, between 0 and 1  | `0`     |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example (Overload 2):**

```lua
myAction:setColor(255 / 255, 192 / 155, 203 / 255)
```

---

### <code>getColor()</code> \{#getColor}

Gets this Action's background color

```lua
getColor()
```

**Returns:**

| Type                                             | Description                              |
| ------------------------------------------------ | ---------------------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | The RGB background color for this action |

**Example:**

```lua
myAction:getColor()
```

---

### <code>setHoverColor()</code> \{#setHoverColor}

**Aliases:** `hoverColor()`

Sets the background color of the Action when it is being hovered

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setHoverColor(color)
```

**Parameters:**

| Name  | Type                                             | Description                                                      | Default      |
| ----- | ------------------------------------------------ | ---------------------------------------------------------------- | ------------ |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | The RGB value of the background, with each value between 0 and 1 | `vec(0,0,0)` |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setHoverColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description                                        | Default |
| ---- | ----------------------------------------------- | -------------------------------------------------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | The red value of the background, between 0 and 1   | `0`     |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | The green value of the background, between 0 and 1 | `0`     |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | The blue value of the background, between 0 and 1  | `0`     |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
myAction:setHoverColor(255 / 255, 192 / 155, 203 / 255)
```

---

### <code>getHoverColor()</code> \{#getHoverColor}

Gets this Action's background hover color

```lua
getHoverColor()
```

**Returns:**

| Type                                             | Description                                    |
| ------------------------------------------------ | ---------------------------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | The RGB background hover color for this action |

**Example:**

```lua
myAction:getHoverColor()
```

---

### <code>setHoverItem()</code> \{#setHoverItem}

**Aliases:** `hoverItem()`

Sets the item of the Action when it is being hovered

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setHoverItem(item)
```

**Parameters:**

| Name | Type                                               | Description                         | Default |
| ---- | -------------------------------------------------- | ----------------------------------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | The item that's shown in the action | `nil`   |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
setHoverItem(item)
```

**Parameters:**

| Name | Type                                            | Description                        | Default           |
| ---- | ----------------------------------------------- | ---------------------------------- | ----------------- |
| item | <code>[String](/tutorials/types/Strings)</code> | The item id for the item to be set | `"minecraft:air"` |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example (Overload 2):**

```lua
myAction:setHoverItem("diamond")
```

---

### <code>setHoverTexture()</code> \{#setHoverTexture}

**Aliases:** `hoverTexture()`

Sets a Custom Texture to render while this Action is being hovered

All values are measured in pixels

Default UV is 0, 0, the default dimensions are the texture dimensions and the default scale of 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setHoverTexture(texture)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setHoverTexture(texture, u, v)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`      |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`      |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setHoverTexture(texture, u, v, width, height)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | The width of the uv                    | Texture width  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | The height of the uv                   | Texture height |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setHoverTexture(texture, u, v, width, height, scale)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | The width of the uv                    | Texture width  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | The height of the uv                   | Texture height |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | The scale of the texture               | `1`            |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- basic
myAction:setHoverTexture(textures["myTexture"])

-- advanced
myAction:setHoverTexture(textures["myTexture"], 16, 32, nil, nil, 2)
```

---

### <code>setItem()</code> \{#setItem}

**Aliases:** `item()`

Sets the item of the Action

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setItem(item)
```

**Parameters:**

| Name | Type                                               | Description                         | Default |
| ---- | -------------------------------------------------- | ----------------------------------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | The item that's shown in the action | `nil`   |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
setItem(item)
```

**Parameters:**

| Name | Type                                            | Description                        | Default           |
| ---- | ----------------------------------------------- | ---------------------------------- | ----------------- |
| item | <code>[String](/tutorials/types/Strings)</code> | The item id for the item to be set | `"minecraft:air"` |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example (Overload 2):**

```lua
myAction:setItem("minecraft:stone")
```

---

### <code>setTexture()</code> \{#setTexture}

**Aliases:** `texture()`

Sets a Custom Texture to render in this Action

All values are measured in pixels

Default UV is 0, 0, the default dimensions are the texture dimensions and the default scale of 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setTexture(texture)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setTexture(texture, u, v)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`      |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`      |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setTexture(texture, u, v, width, height)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | The width of the uv                    | Texture width  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | The height of the uv                   | Texture height |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setTexture(texture, u, v, width, height, scale)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | The width of the uv                    | Texture width  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | The height of the uv                   | Texture height |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | The scale of the texture               | `1`            |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- basic
myAction:setTexture(textures["myTexture"])

-- advanced
myAction:setTexture(textures["myTexture"], 16, 32, nil, nil, 2)
```

---

### <code>setTitle()</code> \{#setTitle}

**Aliases:** `title()`

Sets the title of the Action

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setTitle()
```

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
setTitle(title)
```

**Parameters:**

| Name  | Type                                            | Description                                                    | Default |
| ----- | ----------------------------------------------- | -------------------------------------------------------------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | The title of the action, shown when the action is hovered over | `nil`   |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example (Overload 2):**

```lua
myAction:setTitle("Click me!")
```

---

### <code>getTitle()</code> \{#getTitle}

Gets this Action title

```lua
getTitle()
```

**Returns:**

| Type                                            | Description                                                    |
| ----------------------------------------------- | -------------------------------------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | The title of the action, shown when the action is hovered over |

**Example:**

```lua
myAction:getTitle()
```

---

## Toggle Specific

### <code>setToggleColor()</code> \{#setToggleColor}

**Aliases:** `toggleColor()`

Sets the color of the Action when it is toggled

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setToggleColor(color)
```

**Parameters:**

| Name  | Type                                             | Description                                                             | Default     |
| ----- | ------------------------------------------------ | ----------------------------------------------------------------------- | ----------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | The RGB value of the toggle background, with each value between 0 and 1 | `vec(0,0,0) |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
setToggleColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description                                               | Default |
| ---- | ----------------------------------------------- | --------------------------------------------------------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | The red value of the toggle background, between 0 and 1   | `0`     |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | The green value of the toggle background, between 0 and 1 | `0`     |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | The blue value of the toggle background, between 0 and 1  | `0`     |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
myAction:setToggleColor(0, 128 / 255, 128 / 255)
```

---

### <code>getToggleColor()</code> \{#getToggleColor}

Gets this Action toggled color

```lua
getToggleColor()
```

**Returns:**

| Type                                             | Description                                                             |
| ------------------------------------------------ | ----------------------------------------------------------------------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | The RGB value of the toggle background, with each value between 0 and 1 |

**Example:**

```lua
myAction:getToggleColor()
```

---

### <code>setToggleItem()</code> \{#setToggleItem}

**Aliases:** `toggleItem()`

Sets the item of the Action when it is toggled

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setToggleItem(item)
```

**Parameters:**

| Name | Type                                               | Description                     | Default |
| ---- | -------------------------------------------------- | ------------------------------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | The item to be set when toggled | `nil`   |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
setToggleItem(item)
```

**Parameters:**

| Name | Type                                            | Description                                     | Default           |
| ---- | ----------------------------------------------- | ----------------------------------------------- | ----------------- |
| item | <code>[String](/tutorials/types/Strings)</code> | The item id for the item to be set when toggled | `"minecraft:air"` |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example (Overload 2):**

```lua
myAction:setToggleItem("armor_stand")
```

---

### <code>setToggleTexture()</code> \{#setToggleTexture}

**Aliases:** `toggleTexture()`

Sets a Custom Texture to render in this Action when it is toggled

All values are measured in pixels

Default UV is 0, 0, the default dimensions are the texture dimensions and the default scale of 1

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setToggleTexture(texture)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setToggleTexture(texture, u, v)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default  |
| ------- | ------------------------------------------------- | -------------------------------------- | -------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`      |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`      |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setToggleTexture(texture, u, v, width, height)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | The width of the uv                    | Texture width  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | The height of the uv                   | Texture height |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setToggleTexture(texture, u, v, width, height, scale)
```

**Parameters:**

| Name    | Type                                              | Description                            | Default        |
| ------- | ------------------------------------------------- | -------------------------------------- | -------------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | The texture that's shown in the action | Required       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | The u position of the uv               | `0`            |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | The v position of the uv               | `0`            |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | The width of the uv                    | Texture width  |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | The height of the uv                   | Texture height |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | The scale of the texture               | `1`            |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- basic
myAction:setToggleTexture(textures["myToggleTexture"])

-- advanced
myAction:setToggleTexture(textures["myTexture"], 16, 32, nil, nil, 2)
```

---

### <code>setToggleTitle()</code> \{#setToggleTitle}

**Aliases:** `toggleTitle()`

Sets the title of the Action when it is toggled

```lua
setToggleTitle(title)
```

**Parameters:**

| Name  | Type                                            | Description                                                    | Default |
| ----- | ----------------------------------------------- | -------------------------------------------------------------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | The title of the action, shown when the action is hovered over | `nil`   |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
myAction:setToggleTitle("Stand")
```

---

### <code>getToggleTitle()</code> \{#getToggleTitle}

Gets this Action toggled title

```lua
getToggleTitle()
```

**Returns:**

| Type                                            | Description                                                    |
| ----------------------------------------------- | -------------------------------------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | The title of the action, shown when the action is hovered over |

**Example:**

```lua
myAction:getToggleTitle()
```

---

### <code>setToggled()</code> \{#setToggled}

**Aliases:** `toggled()`

Sets the toggle state of the Action

```lua
setToggled(bool)
```

**Parameters:**

| Name | Type                                              | Description                                                | Default |
| ---- | ------------------------------------------------- | ---------------------------------------------------------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | If true the toggle will be on, and if false it will be off | `false` |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
myAction:setToggled(true)
```

---

### <code>isToggled()</code> \{#isToggled}

Checks if the Action is toggled or not

```lua
isToggled()
```

**Returns:**

| Type                                              | Description                                      |
| ------------------------------------------------- | ------------------------------------------------ |
| <code>[Boolean](/tutorials/types/Booleans)</code> | If true the toggle is on, and if false it is off |

**Example:**

```lua
myAction:isToggled()
```

---

## Fields

### <code>leftClick</code> \{#leftClick}

Function that is executed when the left mouse button is clicked

The function has one argument

The first argument is this action itself

**Examples:**

```lua
-- pingless example
function myAction.leftClick()
    log("Left click")
end
```

```lua
-- pinged example
function pings.example()
    log("Left click")
end

myAction.leftClick = pings.example
```

---

### <code>rightClick</code> \{#rightClick}

Function that is executed when the right mouse button is clicked

The function has one argument

The first argument is this action itself

**Example:**

```lua
function myAction.rightClick()
    log("Right click")
end
```

---

### <code>toggle</code> \{#toggle}

Function that is executed when the Action is toggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

**Example:**

```lua
function myAction.toggle(bool)
    log("The toggle is " .. tostring(bool))
end
```

---

### <code>untoggle</code> \{#untoggle}

Function that is executed when the Action is untoggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

**Example:**

```lua
function myAction.untoggle(bool)
    log("The toggle is " .. tostring(bool))
end
```

---

### <code>scroll</code> \{#scroll}

Function that is executed when the mouse is scrolled

The function has two arguments

The first argument is mouse wheel direction

The second argument is this action itself

**Example:**

```lua
function myAction.scroll(dir)
    log(dir)
    if dir > 0 then
        log("Scrolling up")
    else
        log("Scrolling down")
    end
end
```

---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

An action in the Figura Action Wheel

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

Actions are either interacted by clicking and scrolling, which also being able to be toggleable

---

## Action Events

### <code>setOnLeftClick()</code> \{#setOnLeftClick}

**Aliases:** `onLeftClick()`

Sets the function that is executed when the left mouse button is clicked

The function has one argument

The first argument is this action itself

```lua
setOnLeftClick(leftFunction)
```

**Parameters:**

| Name         | Type                                                | Description | Default |
| ------------ | --------------------------------------------------- | ----------- | ------- |
| leftFunction | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.lefty()
    print("I left clicked this button!")
end

local myAction = myPage:newAction():setOnLeftClick(pings.lefty)
-- highlight-next-line
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

| Name          | Type                                                | Description | Default |
| ------------- | --------------------------------------------------- | ----------- | ------- |
| rightFunction | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.righty()
    print("I right clicked this button!")
end

local myAction = myPage:newAction():setOnRightClick(pings.righty)
-- highlight-next-line
```

---

### <code>setOnToggle()</code> \{#setOnToggle}

**Aliases:** `onToggle()`

Sets the function that is executed when the Action is toggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

```lua
setOnToggle(leftFunction)
```

**Parameters:**

| Name         | Type                                                | Description | Default |
| ------------ | --------------------------------------------------- | ----------- | ------- |
| leftFunction | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.setVisible(state)
    models:setVisible(state)
end

local myAction = myPage:newAction():title("disabled"):toggleTitle("enabled"):item("red_wool"):toggleItem(
    "green_wool"
    -- highlight-next-line
):setOnToggle(pings.setVisible)
```

---

### <code>setOnUntoggle()</code> \{#setOnUntoggle}

**Aliases:** `onUntoggle()`

Sets the function that is executed when the Action is untoggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

```lua
setOnUntoggle(rightFunction)
```

**Parameters:**

| Name          | Type                                                | Description | Default |
| ------------- | --------------------------------------------------- | ----------- | ------- |
| rightFunction | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
function pings.toggley(bool)
    print('This is always true: ', .. bool)
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

| Name           | Type                                                | Description | Default |
| -------------- | --------------------------------------------------- | ----------- | ------- |
| scrollFunction | <code>[Function](/tutorials/types/Functions)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
local current = 0

function pings.scrolling(dir)
    print("Scrolled in this direction: " .. dir)
end

local myAction = myPage:newAction():title(
    "Current: ",
    current
    -- highlight-start
):setOnScroll(function(dir, self)
    pings.scrolling(dir)
    current = current + dir
    self:title("Current: ", current)
end)
-- highlight-end
```

---

## Appearance

### <code>setColor()</code> \{#setColor}

**Aliases:** `color()`

Sets the color of the Action

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setColor(color)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setColor(255 / 255, 192 / 155, 203 / 255)
-- highlight-next-line
```

---

### <code>getColor()</code> \{#getColor}

Gets this Action color

```lua
getColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setColor(255 / 255, 192 / 155, 203 / 255)

-- highlight-next-line
print(myAction:getColor())
```

---

### <code>setHoverColor()</code> \{#setHoverColor}

**Aliases:** `hoverColor()`

Sets the color of the Action when it is being hovered

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setHoverColor(color)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

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

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setHoverColor(255 / 255, 192 / 155, 203 / 255)
-- highlight-next-line
```

---

### <code>getHoverColor()</code> \{#getHoverColor}

Gets this Action hover color

```lua
getHoverColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setHoverColor(255 / 255, 192 / 155, 203 / 255)

-- highlight-next-line
print(myAction:getHoverColor())
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

| Name | Type                                               | Description | Default |
| ---- | -------------------------------------------------- | ----------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setHoverItem(item)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| item | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- basic
local myAction = myPage:newAction():setHoverTexture(textures["myTexture"])
-- highlight-next-line

-- advanced
local myAction = myPage:newAction():setHoverTexture(textures["myTexture"], 16, 32, nil, nil, 2)
-- highlight-next-line
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

| Name | Type                                               | Description | Default |
| ---- | -------------------------------------------------- | ----------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setItem(item)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| item | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setItem("minecraft:stone")
-- highlight-next-line
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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- basic
local myAction = myPage:newAction():setTexture(textures["myTexture"])
-- highlight-next-line

-- advanced
local myAction = myPage:newAction():setTexture(textures["myTexture"], 16, 32, nil, nil, 2)
-- highlight-next-line
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
    <TabItem value="overload-2" label="Overload 2">

```lua
setTitle(title)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setTitle("Click me!")
-- highlight-next-line
```

---

### <code>getTitle()</code> \{#getTitle}

Gets this Action title

```lua
getTitle()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
local myAction = myPage:newAction():setTitle("Click me!")

-- highlight-next-line
print(myAction:getTitle())
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

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setToggleColor(r, g, b)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| r    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| g    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |
| b    | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setColor(
    255 / 255,
    192 / 255,
    203 / 255
    -- highlight-next-line
):setToggleColor(0, 128 / 255, 128 / 255)
```

---

### <code>getToggleColor()</code> \{#getToggleColor}

Gets this Action toggled color

```lua
getToggleColor()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Vector3](/globals/Vectors/Vector3)</code> | -           |

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setToggleColor(255 / 255, 192 / 155, 203 / 255)

-- highlight-next-line
print(myAction:getToggleColor())
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

| Name | Type                                               | Description | Default |
| ---- | -------------------------------------------------- | ----------- | ------- |
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setToggleItem(item)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| item | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setTitle("Sit"):setItem("spruce_stairs"):setOnToggle(pings.sit):setToggleTitle(
    "Stand"
    -- highlight-next-line
):setToggleItem("armor_stand")
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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |

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

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |
| u       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| v       | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |
| width   | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| height  | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| scale   | <code>[Number](/tutorials/types/Numbers)</code>   | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
-- basic
local myAction = myPage:newAction():setTexture(
    textures["myTexture"]
    -- highlight-next-line
):setToggleTexture(textures["myToggleTexture"])

-- advanced
local myAction = myPage:newAction():setTexture(
    textures["myTexture"],
    0,
    32,
    nil,
    nil,
    2
    -- highlight-next-line
):setToggleTexture(textures["myTexture"], 16, 32, nil, nil, 2)
```

---

### <code>setToggleTitle()</code> \{#setToggleTitle}

**Aliases:** `toggleTitle()`

Sets the title of the Action when it is toggled

```lua
setToggleTitle(title)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setTitle("Sit"):setOnToggle(
    pings.sit
    -- highlight-next-line
):setToggleTitle("Stand")
```

---

### <code>getToggleTitle()</code> \{#getToggleTitle}

Gets this Action toggled title

```lua
getToggleTitle()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
local myPage = action_wheel:new_page()
local myAction = myPage:newAction():setToggleTitle("Stand")
-- highlight-next-line

-- highlight-next-line
print(myAction:getToggleTitle())
```

---

### <code>setToggled()</code> \{#setToggled}

**Aliases:** `toggled()`

Sets the toggle state of the Action

```lua
setToggled(bool)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                                | Description               |
| --------------------------------------------------- | ------------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
local myAction = myPage:newAction():setOnToggle(function(b)
    print("Toggled: " .. b)
end)

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

### <code>isToggled()</code> \{#isToggled}

Checks if the Action is toggled or not

```lua
isToggled()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
local myAction = myPage:newAction():setOnToggle(function(b)
    print("Toggled: " .. b)
end)

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

## Fields

### <code>leftClick</code> \{#leftClick}

Function that is executed when the left mouse button is clicked

The function has one argument

The first argument is this action itself

See [`onLeftClick`](#onLeftClick) to see how to set it

---

### <code>rightClick</code> \{#rightClick}

Function that is executed when the right mouse button is clicked

The function has one argument

The first argument is this action itself

See [`onRightClick`](#onRightClick) to see how to set it

---

### <code>toggle</code> \{#toggle}

Function that is executed when the Action is toggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

See [`setOnToggle`](#setOnToggle) to see how to set it

---

### <code>untoggle</code> \{#untoggle}

Function that is executed when the Action is untoggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

See [`setOnUntoggle`](#setOnUntoggle) to see how to set it

---

### <code>scroll</code> \{#scroll}

Function that is executed when the mouse is scrolled

The function has two arguments

The first argument is mouse wheel direction

The second argument is this action itself

See [`setOnScroll`](#setOnScroll) to see how to set it

---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

:::danger
This page is a WIP.
:::

An action in the Figura Action Wheel

Actions are either interacted by clicking and scrolling, which also being able to be toggleable

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

| Name | Type | Description | Default |
|--------------|----------------------------|-------------|---------|
| leftFunction | <code>[Function](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|---------------|----------------------------|-------------|---------|
| rightFunction | <code>[Function](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|--------------|----------------------------|-------------|---------|
| leftFunction | <code>[Function](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|---------------|----------------------------|-------------|---------|
| rightFunction | <code>[Function](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|----------------|----------------------------|-------------|---------|
| scrollFunction | <code>[Function](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|-------|--------------------------------------------------|-------------|---------|
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setColor(r, g, b)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| r | <code>[Number](#)</code> | - | - |
| g | <code>[Number](#)</code> | - | - |
| b | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getColor()</code> \{#getColor}

Gets this Action color

```lua
getColor()
```

**Returns:**

| Type | Description |
|--------------------------------------------------|-------------|
| <code>[Vector3](/globals/Vectors/Vector3)</code> | - |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|-------|--------------------------------------------------|-------------|---------|
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setHoverColor(r, g, b)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| r | <code>[Number](#)</code> | - | - |
| g | <code>[Number](#)</code> | - | - |
| b | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getHoverColor()</code> \{#getHoverColor}

Gets this Action hover color

```lua
getHoverColor()
```

**Returns:**

| Type | Description |
|--------------------------------------------------|-------------|
| <code>[Vector3](/globals/Vectors/Vector3)</code> | - |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|------|----------------------------------------------------|-------------|---------|
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setHoverItem(item)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| item | <code>[String](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
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

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setHoverTexture(texture, u, v)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setHoverTexture(texture, u, v, width, height)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |
| width | <code>[Integer](#)</code> | - | - |
| height | <code>[Integer](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setHoverTexture(texture, u, v, width, height, scale)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |
| width | <code>[Integer](#)</code> | - | - |
| height | <code>[Integer](#)</code> | - | - |
| scale | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|------|----------------------------------------------------|-------------|---------|
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setItem(item)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| item | <code>[String](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setTexture(texture, u, v)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setTexture(texture, u, v, width, height)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |
| width | <code>[Integer](#)</code> | - | - |
| height | <code>[Integer](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setTexture(texture, u, v, width, height, scale)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |
| width | <code>[Integer](#)</code> | - | - |
| height | <code>[Integer](#)</code> | - | - |
| scale | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setTitle(title)
```

**Parameters:**

| Name | Type | Description | Default |
|-------|--------------------------|-------------|---------|
| title | <code>[String](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getTitle()</code> \{#getTitle}

Gets this Action title

```lua
getTitle()
```

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|-------|--------------------------------------------------|-------------|---------|
| color | <code>[Vector3](/globals/Vectors/Vector3)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setToggleColor(r, g, b)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| r | <code>[Number](#)</code> | - | - |
| g | <code>[Number](#)</code> | - | - |
| b | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getToggleColor()</code> \{#getToggleColor}

Gets this Action toggled color

```lua
getToggleColor()
```

**Returns:**

| Type | Description |
|--------------------------------------------------|-------------|
| <code>[Vector3](/globals/Vectors/Vector3)</code> | - |

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|------|----------------------------------------------------|-------------|---------|
| item | <code>[ItemStack](/globals/World/ItemStack)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setToggleItem(item)
```

**Parameters:**

| Name | Type | Description | Default |
|------|--------------------------|-------------|---------|
| item | <code>[String](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setToggleTexture(texture, u, v)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
setToggleTexture(texture, u, v, width, height)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |
| width | <code>[Integer](#)</code> | - | - |
| height | <code>[Integer](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
setToggleTexture(texture, u, v, width, height, scale)
```

**Parameters:**

| Name | Type | Description | Default |
|---------|---------------------------------------------------|-------------|---------|
| texture | <code>[Texture](/globals/Textures/Texture)</code> | - | - |
| u | <code>[Number](#)</code> | - | - |
| v | <code>[Number](#)</code> | - | - |
| width | <code>[Integer](#)</code> | - | - |
| height | <code>[Integer](#)</code> | - | - |
| scale | <code>[Number](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>setToggleTitle()</code> \{#setToggleTitle}

**Aliases:** `toggleTitle()`

Sets the title of the Action when it is toggled

```lua
setToggleTitle(title)
```

**Parameters:**

| Name | Type | Description | Default |
|-------|--------------------------|-------------|---------|
| title | <code>[String](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getToggleTitle()</code> \{#getToggleTitle}

Gets this Action toggled title

```lua
getToggleTitle()
```

**Returns:**

| Type | Description |
|--------------------------|-------------|
| <code>[String](#)</code> | - |

**Example:**

```lua
--todo
```

---

### <code>setToggled()</code> \{#setToggled}

**Aliases:** `toggled()`

Sets the toggle state of the Action

```lua
setToggled(bool)
```

**Parameters:**

| Name | Type | Description | Default |
|------|---------------------------|-------------|---------|
| bool | <code>[Boolean](#)</code> | - | - |

**Returns:**

| Type | Description |
|-----------------------------------------------------|---------------------------|
| <code>[Action](/globals/Action-Wheel/Action)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>isToggled()</code> \{#isToggled}

Checks if the Action is toggled or not

```lua
isToggled()
```

**Returns:**

| Type | Description |
|---------------------------|-------------|
| <code>[Boolean](#)</code> | - |

**Example:**

```lua
--todo
```

---

## Fields

### <code>leftClick</code> \{#leftClick}

Function that is executed when the left mouse button is clicked

The function has one argument

The first argument is this action itself

**Example:**

```lua
--todo
```

---

### <code>rightClick</code> \{#rightClick}

Function that is executed when the right mouse button is clicked

The function has one argument

The first argument is this action itself

**Example:**

```lua
--todo
```

---

### <code>toggle</code> \{#toggle}

Function that is executed when the Action is toggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

**Example:**

```lua
--todo
```

---

### <code>untoggle</code> \{#untoggle}

Function that is executed when the Action is untoggled

The function has two arguments

The first argument is toggle state of this action

The second argument is this action itself

**Example:**

```lua
--todo
```

---

### <code>scroll</code> \{#scroll}

Function that is executed when the mouse is scrolled

The function has two arguments

The first argument is mouse wheel direction

The second argument is this action itself

**Example:**

```lua
--todo
```

---

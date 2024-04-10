---
sidebar_position: 1
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Action Wheel

A global API which is used for customizing your player's Action Wheel

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

## Page

For more on pages go to [Page](./Page.md)

### <code>newPage()</code> \{#newPage}

Creates a new Page for the action wheel

A Title can be given to store this page internally

If no Title is given, the Page will just be returned from this function

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
newPage()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
newPage(title)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| title | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
local myPage = action_wheel:newPage()
```

---

### <code>setPage()</code> \{#setPage}

Sets the Page of the action wheel to the given Title or Page

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setPage(pageTitle)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| pageTitle | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                 | Description               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
setPage(page)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| page | <code>[Page](/globals/Action-Wheel/Page)</code> | -           | -       |

**Returns:**

| Type                                                 | Description               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
action_wheel:setPage(myPage)
```

---

### <code>getPage()</code> \{#getPage}

Returns a stored Page by the given title

If no title is given, returns a table with all registered Pages

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getPage()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getPage(pageTitle)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| pageTitle | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
action_wheel:newPage("myPage")
-- highlight-next-line
action_wheel:getPage("myPage")
-- because getPage needs a string you can only use getPage on pages with titles
```

---

### <code>getCurrentPage()</code> \{#getCurrentPage}

Returns the current set Page from the Action Wheel, or NIL if no Page has been set

```lua
getCurrentPage()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | -           |

**Example:**

```lua
action_wheel:getCurrentPage()
```

---

## Action

For more on pages go to [Action](./Action.md)

### <code>newAction()</code> \{#newAction}

Creates a new Action that is not automatically assigned to a Page

```lua
newAction()
```

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | -           |

**Example:**

```lua
local myAction = action_wheel:newAction()
```

---

### <code>getSelectedAction()</code> \{#getSelectedAction}

Returns the Action that is currently selected in the Action Wheel

```lua
getSelectedAction()
```

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | -           |

**Example:**

```lua
action_wheel:getSelectedAction()
```

---

### <code>getSelected()</code> \{#getSelected}

Returns the index of the currently selected action

```lua
getSelected()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
action_wheel:getSelected()
```

---

## Wheel

### <code>execute()</code> \{#execute}

Executes the action of the given index

If the index is null, it will execute the last selected action

A second parameter can be given to specify if it should be executed the left or right action

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
execute()
```

**Returns:**

| Type                                                 | Description               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
execute(index)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                 | Description               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
execute(index, rightClick)
```

**Parameters:**

| Name       | Type                                              | Description | Default |
| ---------- | ------------------------------------------------- | ----------- | ------- |
| index      | <code>[Integer](/tutorials/types/Numbers)</code>  | -           | -       |
| rightClick | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                                 | Description               |
| ---------------------------------------------------- | ------------------------- |
| <code>[ActionWheelAPI](/globals/Action-Wheel)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
action_wheel:execute(1, false)
```

---

### <code>isEnabled()</code> \{#isEnabled}

Returns if the Action Wheel is being currently rendered or not

```lua
isEnabled()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
action_wheel:isEnabled()
```

---

## Fields

### <code>leftClick</code> \{#leftClick}

Function that is executed when the left mouse button is clicked

**Example:**

```lua
function action_wheel.leftClick()
    log("Left click")
end
```

---

### <code>rightClick</code> \{#rightClick}

Function that is executed when the right mouse button is clicked

**Example:**

```lua
function action_wheel.rightClick()
    log("Right click")
end
```

---

### <code>scroll</code> \{#scroll}

Function that is executed when the mouse is scrolled

**Example:**

```lua
function action_wheel.scroll()
    log("Scrolled")
end
```

---

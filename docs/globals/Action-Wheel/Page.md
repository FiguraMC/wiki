import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

An Action Wheel container which is used to store up to 8 actions

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

### <code>getTitle()</code> \{#getTitle}

Returns the title of this Page

```lua
getTitle()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
local myAction = myPage:newAction()
```

---

## Action

### <code>newAction()</code> \{#newAction}

Adds a new Action on the selected Page's index

If no index is given it is added in the first available index

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
newAction()
```

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
newAction(index)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
local myAction = myPage:newAction()
```

---

### <code>getAction()</code> \{#getAction}

Gets an Action from the Page's given index

```lua
getAction(index)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | -           |

**Example:**

```lua
myPage:getAction(1)
```

---

### <code>getActions()</code> \{#getActions}

Gets a table of the Actions shifted by the given number

If no shift is specified, it returns all Actions from this page

Note that the table is indexed as its slot number as key, so blank slots will result in nil values

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
getActions()
```

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getActions(shift)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| shift | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                 | Description |
| -------------------- | ----------- |
| <code>AnyType</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
myPage:getActions()
```

---

### <code>setAction()</code> \{#setAction}

**Aliases:** `action()`

Sets an Action in the Page's given index

If index is -1, the action will be set in the latest empty index

```lua
setAction(index, action)
```

**Parameters:**

| Name   | Type                                                | Description | Default |
| ------ | --------------------------------------------------- | ----------- | ------- |
| index  | <code>[Integer](/tutorials/types/Numbers)</code>    | -           | -       |
| action | <code>[Action](/globals/Action-Wheel/Action)</code> | -           | -       |

**Returns:**

| Type                                            | Description               |
| ----------------------------------------------- | ------------------------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | Returns self for chaining |

**Example:**

```lua
local myAction = action_wheel:newAction()
myPage:setAction(-1, myAction)
```

---

## Slot

### <code>setKeepSlots()</code> \{#setKeepSlots}

Sets if this page's current slots should be reset when adding this page on the Action Wheel

```lua
setKeepSlots(bool)
```

**Parameters:**

| Name | Type                                              | Description | Default |
| ---- | ------------------------------------------------- | ----------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | -           | -       |

**Returns:**

| Type                                            | Description               |
| ----------------------------------------------- | ------------------------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | Returns self for chaining |

**Example:**

```lua
myPage:setKeepSlots(true)
```

---

### <code>setSlotsShift()</code> \{#setSlotsShift}

**Aliases:** `slotsShift()`

Sets this page's current slots shift

The value is the current shown slots, divided by 8, rounded up

```lua
setSlotsShift(shift)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| shift | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description               |
| ----------------------------------------------- | ------------------------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | Returns self for chaining |

**Example:**

```lua
myPage:setSlotsShift(1)
```

---

### <code>getSlotsShift()</code> \{#getSlotsShift}

Gets this page's current slots shift

This value is the current shown slots, divided by 8, rounded up

```lua
getSlotsShift()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
myPage:getSlotsShift()
```

---

### <code>shouldKeepSlots()</code> \{#shouldKeepSlots}

Gets if this page's current slots should be reset when adding this page on the Action Wheel

```lua
shouldKeepSlots()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
myPage:shouldKeepSlots()
```

---

## Fields

### <code>keepSlots</code> \{#keepSlots}

Whether or not this page's current slots should be reset when adding this page on the Action Wheel

See [`setKeepSlots`](#setKeepSlots) for an example of how to set it

---

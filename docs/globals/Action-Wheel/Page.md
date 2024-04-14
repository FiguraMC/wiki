import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

An Action Wheel container which is used to store up to 8 actions

For the entire page assume:

```lua
local myPage = action_wheel:newPage()
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

| Type                                                | Description            |
| --------------------------------------------------- | ---------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | An action wheel action |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
newAction(index)
```

**Parameters:**

| Name  | Type                                             | Description                   | Default |
| ----- | ------------------------------------------------ | ----------------------------- | ------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | The slot to set the action to | `nil`   |

**Returns:**

| Type                                                | Description            |
| --------------------------------------------------- | ---------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | An action wheel action |

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

| Name  | Type                                             | Description                     | Default  |
| ----- | ------------------------------------------------ | ------------------------------- | -------- |
| index | <code>[Integer](/tutorials/types/Numbers)</code> | The slot to get the action from | Required |

**Returns:**

| Type                                                | Description            |
| --------------------------------------------------- | ---------------------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | An action wheel action |

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

| Type                                          | Description                                   |
| --------------------------------------------- | --------------------------------------------- |
| <code>[Table](/tutorials/types/Tables)</code> | A table that contains all actions in the page |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
getActions(shift)
```

**Parameters:**

| Name  | Type                                             | Description                        | Default |
| ----- | ------------------------------------------------ | ---------------------------------- | ------- |
| shift | <code>[Integer](/tutorials/types/Numbers)</code> | The page shift to get actions from | `nil`   |

**Returns:**

| Type                                          | Description                                                      |
| --------------------------------------------- | ---------------------------------------------------------------- |
| <code>[Table](/tutorials/types/Tables)</code> | A table that contains all actions in the page's given slot shift |

</TabItem>
</Tabs>

**Example (Overload 1):**

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

| Name   | Type                                                | Description                               | Default  |
| ------ | --------------------------------------------------- | ----------------------------------------- | -------- |
| index  | <code>[Integer](/tutorials/types/Numbers)</code>    | The slot on the page to set the action to | Required |
| action | <code>[Action](/globals/Action-Wheel/Action)</code> | An action wheel action                    | Required |

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

| Name | Type                                              | Description                                          | Default |
| ---- | ------------------------------------------------- | ---------------------------------------------------- | ------- |
| bool | <code>[Boolean](/tutorials/types/Booleans)</code> | If true the slots won't be reset, if false they will | `false` |

**Returns:**

| Type                                            | Description               |
| ----------------------------------------------- | ------------------------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | Returns self for chaining |

**Example:**

```lua
myPage:setKeepSlots(true)
```

---

### <code>shouldKeepSlots()</code> \{#shouldKeepSlots}

Gets if this page's current slots should be reset when adding this page on the Action Wheel

```lua
shouldKeepSlots()
```

**Returns:**

| Type                                              | Description                                          |
| ------------------------------------------------- | ---------------------------------------------------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | If true the slots won't be reset, if false they will |

**Example:**

```lua
myPage:shouldKeepSlots(true)
```

---

### <code>setSlotsShift()</code> \{#setSlotsShift}

**Aliases:** `slotsShift()`

Sets this page's current slots shift

Slots 1-8 are shift 1, slots 9-16 are 2, etc

```lua
setSlotsShift(shift)
```

**Parameters:**

| Name  | Type                                             | Description                         | Default |
| ----- | ------------------------------------------------ | ----------------------------------- | ------- |
| shift | <code>[Integer](/tutorials/types/Numbers)</code> | The page shift that will be visible | `1`     |

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

Slots 1-8 are shift 1, slots 9-16 are 2, etc

```lua
getSlotsShift()
```

**Returns:**

| Type                                             | Description                    |
| ------------------------------------------------ | ------------------------------ |
| <code>[Integer](/tutorials/types/Numbers)</code> | The page shift that is visible |

**Example:**

```lua
myPage:getSlotsShift()
```

---

## Misc

### <code>getTitle()</code> \{#getTitle}

Returns the title of this Page

```lua
getTitle()
```

**Returns:**

| Type                                            | Description                                   |
| ----------------------------------------------- | --------------------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | The name for the page that is used internally |

**Example:**

```lua
myPage:getTitle()
```

---

## Fields

### <code>keepSlots</code> \{#keepSlots}

Whether or not this page's current slots should be reset when adding this page on the Action Wheel

See [`setKeepSlots`](#setKeepSlots) for an example of how to set it

**Example:**

```lua
myPage.keepSlots = true
```

---

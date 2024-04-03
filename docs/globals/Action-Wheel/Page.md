import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

An Action Wheel container which is used to store up to 8 actions

:::danger
This page is a WIP.
:::

### <code>getTitle()</code> \{#getTitle}

Returns the title of this Page

```lua
getTitle()
```

**Returns:**

| Type                     | Description |
| ------------------------ | ----------- |
| <code>[String](#)</code> | -           |

**Example:**

```lua
--todo
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

| Name  | Type                      | Description | Default |
| ----- | ------------------------- | ----------- | ------- |
| index | <code>[Integer](#)</code> | -           | -       |

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>getAction()</code> \{#getAction}

Gets an Action from the Page's given index

```lua
getAction(index)
```

**Parameters:**

| Name  | Type                      | Description | Default |
| ----- | ------------------------- | ----------- | ------- |
| index | <code>[Integer](#)</code> | -           | -       |

**Returns:**

| Type                                                | Description |
| --------------------------------------------------- | ----------- |
| <code>[Action](/globals/Action-Wheel/Action)</code> | -           |

**Example:**

```lua
--todo
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

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[AnyType](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
getActions(shift)
```

**Parameters:**

| Name  | Type                      | Description | Default |
| ----- | ------------------------- | ----------- | ------- |
| shift | <code>[Integer](#)</code> | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[AnyType](#)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
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
| index  | <code>[Integer](#)</code>                           | -           | -       |
| action | <code>[Action](/globals/Action-Wheel/Action)</code> | -           | -       |

**Returns:**

| Type                                            | Description               |
| ----------------------------------------------- | ------------------------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

## Slot

### <code>setKeepSlots()</code> \{#setKeepSlots}

Sets if this page's current slots should be reset when adding this page on the Action Wheel

```lua
setKeepSlots(bool)
```

**Parameters:**

| Name | Type                      | Description | Default |
| ---- | ------------------------- | ----------- | ------- |
| bool | <code>[Boolean](#)</code> | -           | -       |

**Returns:**

| Type                                            | Description               |
| ----------------------------------------------- | ------------------------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | Returns self for chaining |

**Example:**

```lua
--todo
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

| Name  | Type                      | Description | Default |
| ----- | ------------------------- | ----------- | ------- |
| shift | <code>[Integer](#)</code> | -           | -       |

**Returns:**

| Type                                            | Description               |
| ----------------------------------------------- | ------------------------- |
| <code>[Page](/globals/Action-Wheel/Page)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>getSlotsShift()</code> \{#getSlotsShift}

Gets this page's current slots shift

This value is the current shown slots, divided by 8, rounded up

```lua
getSlotsShift()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Integer](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>shouldKeepSlots()</code> \{#shouldKeepSlots}

Gets if this page's current slots should be reset when adding this page on the Action Wheel

```lua
shouldKeepSlots()
```

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Boolean](#)</code> | -           |

**Example:**

```lua
--todo
```

---

## Fields

### <code>keepSlots</code> \{#keepSlots}

Whether or not this page's current slots should be reset when adding this page on the Action Wheel

**Example:**

```lua
--todo
```

---

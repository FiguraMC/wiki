# Action Wheel

The global instance of the ActionWheelAPI and its subtypes

## Page

For more on pages go to [Page](./action-wheel/Page)

### `newPage(string)` \{#newPage}

Creates a new Page for the action wheel

A Title can be given to store this page internally

If no Title is given, the Page will just be returned from this function

**Example**:

```lua
local myPage = action_wheel:newPage()
```

---

### `setPage()` \{#setPage}

Sets the Page of the action wheel to the given Title or Page

**Example**:

```lua
action_wheel:setPage(myPage)
```

---

### `getPage(string)` \{#getPage}

Sets the Page of the action wheel to the given Title or Page

**Example**:

```lua
action_wheel:newPage("myPage")
-- highlight-next-line
action_wheel:getPage("myPage")
-- because getPage needs a string you can only use getPage on pages with titles
```

---

### `getCurrentPage()` \{#getCurrentPage}

Returns the current set Page from the Action Wheel, or NIL if no Page has been set

**Example**:

```lua
action_wheel:getCurrentPage()
```

## Action

For more information on actions see [Action](./action-wheel/Action)

### `newAction()` \{#newAction}

Creates a new Action that is not automatically asigned to a Page

**Example**:

```lua
local myAction = action_wheel:newAction()
```

---

### `getSelectedAction()` \{#getSelectedAction}

Returns the Action that is currently selected in the Action Wheel

**Example**:

```lua
action_wheel:getSelectedAction()
```

---

### `getSelected()` \{#getSelected}

Returns the index of the currently selected action

**Example**:

```lua
action_wheel:getSelected()
```

## Wheel

### `isEnabled()` \{#isEnabled}

Returns if the Action Wheel is being currently rendered or not

**Example**:

```lua
action_wheel:isEnabled()
```

---

### `execute(int,bool)` \{#execute}

Executes the action of the given index, only if the action wheel is open

If the index is null, it will execute the last selected action

A second parameter can be given to specify if it should be executed the left or right action

**Example**:

```lua
action_wheel:execute(1, false)
```

---

### `leftClick` \{#leftClick}

Function that is executed when the left mouse button is clicked, only if the action wheel is open

**Example**:

```lua
function action_wheel.leftClick()
    log("Left click")
end
```

---

### `rightClick` \{#rightClick}

Function that is executed when the right mouse button is clicked, only if the action wheel is open

**Example**:

```lua
function action_wheel.rightClick()
    log("Right click")
end
```

---

### `scroll` \{#scroll}

Function that is executed when the mouse is scrolled, only if the action wheel is open

**Example**:

```lua
function action_wheel.scroll()
    log("Scrolled")
end
```

An Action Wheel container which is used to store store and run actions, it can display up to 8 at a time

For every example in this page assume:

```lua
local myPage = action_wheel:newPage()
```

---

### `getTitle` \{#getTitle}

Returns the title of this Page

**Example**:

```lua
myPage:getTitle()
```

## Action

For more information on actions see [Action](Action)

### `newAction(int)` \{#newAction}

Adds a new Action on the selected Page's index

If no index is given it is added in the first available index

**Example**:

```lua
local myAction = myPage:newAction()
```

---

### `getAction(int)` \{#getAction}

Gets an Action from the Page's given index

**Example**:

```lua
myPage:getAction(1)
```

---

### `getActions(int)` \{#getActions}

Gets a table of the Actions shifted by the given number

If no shift is specified, it returns all Actions from this page

Note that the table is indexed as its slot number as key, so blank slots will result in nil values

**Example**:

```lua
myPage:getActions()
```

---

### `setAction(int,action)` \{#setAction}

Sets an Action in the Page's given index

If index is -1, the action will be set in the latest empty index

**Example**:

```lua
local myAction = action_wheel:newAction()
myPage:setAction(-1, myAction)
```

## Slot

### `setSlotsShift(int)` \{#setSlotsShift}

Sets this page's current slots shift

The value is the current shown slots, divided by 8, rounded up

**Example**:

```lua
myPage:setSlotsShift(1)
```

---

### `getSlotsShift()` \{#getSlotsShift}

Gets this page's current slots shift

This value is the current shown slots, divided by 8, rounded up

**Example**:

```lua
myPage:getSlotsShift()
```

---

### `setKeepSlots(bool)` \{#setKeepSlots}

Gets this page's current slots shift

This value is the current shown slots, divided by 8, rounded up

**Example**:

```lua
myPage:setKeepSlots(true)
```

---

### `shouldKeepSlots()` \{#shouldKeepSlots}

Gets this page's current slots shift

This value is the current shown slots, divided by 8, rounded up

**Example**:

```lua
myPage:shouldKeepSlots()
```

---

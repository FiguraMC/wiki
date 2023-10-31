Represents a group of model parts in a vanilla model

Used for easy reference of normal parts

All changes also applies to all children parts

---

### `setVisible(bool)` \{#setVisible}

Sets this part and its children to be visible or invisible

**Example**:

```lua
vanilla_model.ALL:setVisible(false)
```

---

### `getVisible()` \{#getVisible}

Gets whether you have set this part to be visible or invisible

**Example**:

```lua
vanilla_model.ALL:getVisible()
```

---

### `setRot(Vector3)` \{#setRot}

Set this part and its children's rotation

**Example**:

```lua
vanilla_model.ALL:setRot(0, 90, 0)
```

---

### `getRot()` \{#getgetRotPos}

Get this part's set rotation

Returns the value set by the "set" function

**Example**:

```lua
vanilla_model.ALL:getRot()
```

---

### `setPos(Vector3)` \{#setPos}

Set this part and its children's position, preserving the previous values

**Example**:

```lua
vanilla_model.ALL:setPos(0, 10, 0)
```

---

### `getPos()` \{#getPos}

Get this part's set position

Returns the value set by the "set" function

**Example**:

```lua
vanilla_model.ALL:getPos()
```

---

### `setScale(Vector3)` \{#setScale}

Set this part and its children's scale

**Example**:

```lua
vanilla_model.ALL:setScale(2, 2, 2)
```

---

### `getScale()` \{#getScale}

Get this part's set scale

Returns the value set by the "set" function

**Example**:

```lua
vanilla_model.ALL:getScale()
```

---

### `setOffsetRot(Vector3)` \{#setOffsetRot}

Offsets this part and its children's rotation, adding on top of the vanilla values

**Example**:

```lua
vanilla_model.ALL:setOffsetRot(0, 90, 0)
```

---

### `getOffsetRot()` \{#getOffsetRot}

Gets this part's rotation offset

**Example**:

```lua
vanilla_model.ALL:getOffsetRot()
```

---

### `setOffsetScale(Vector3)` \{#setOffsetScale}

Offsets this part and its children's scale, multiplying with the vanilla values

**Example**:

```lua
vanilla_model.ALL:setOffsetScale(2, 2, 2)
```

---

### `getOffsetScale()` \{#getOffsetScale}

Gets this part's scale offset

**Example**:

```lua
vanilla_model.ALL:getOffsetScale()
```

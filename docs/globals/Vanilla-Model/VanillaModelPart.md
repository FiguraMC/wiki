Represents a model part in a vanilla model

Can be queried for vanilla transform values

---

### `setVisible(bool)` \{#setVisible}

Sets this part and its children to be visible or invisible

**Example**:

```lua
vanilla_model.HEAD:setVisible(false)
```

---

### `getVisible()` \{#getVisible}

Gets whether you have set this part to be visible or invisible

**Example**:

```lua
vanilla_model.HEAD:getVisible()
```

---

### `getOriginVisible()` \{#getOriginVisible}

Gets if this vanilla model part is visible or not, without interference from your script

**Example**:

```lua
vanilla_model.HEAD:getOriginVisible()
```

---

### `getOriginRot()` \{#getOriginRot}

Gets the rotation to this vanilla model part currently applied by Minecraft

**Example**:

```lua
vanilla_model.HEAD:getOriginRot()
```

---

### `getOriginPos()` \{#getOriginPos}

Gets the position offset to this vanilla model part currently applied by Minecraft

**Example**:

```lua
vanilla_model.HEAD:getOriginPos()
```

---

### `getOriginScale()` \{#getOriginScale}

Gets the scale to this vanilla model part currently applied by Minecraft

**Example**:

```lua
vanilla_model.HEAD:getOriginScale()
```

---

### `setRot(Vector3)` \{#setRot}

Set this part and its children's rotation

**Example**:

```lua
vanilla_model.HEAD:setRot(0, 90, 0)
```

---

### `getRot()` \{#getgetRotPos}

Get this part's set rotation

Returns the value set by the "set" function

**Example**:

```lua
vanilla_model.HEAD:getRot()
```

---

### `setPos(Vector3)` \{#setPos}

Set this part and its children's position, preserving the previous values

**Example**:

```lua
vanilla_model.HEAD:setPos(0, 10, 0)
```

---

### `getPos()` \{#getPos}

Get this part's set position

Returns the value set by the "set" function

**Example**:

```lua
vanilla_model.HEAD:getPos()
```

---

### `setScale(Vector3)` \{#setScale}

Set this part and its children's scale

**Example**:

```lua
vanilla_model.HEAD:setScale(2, 2, 2)
```

---

### `getScale()` \{#getScale}

Get this part's set scale

Returns the value set by the "set" function

**Example**:

```lua
vanilla_model.HEAD:getScale()
```

---

### `setOffsetRot(Vector3)` \{#setOffsetRot}

Offsets this part and its children's rotation, adding on top of the vanilla values

**Example**:

```lua
vanilla_model.HEAD:setOffsetRot(0, 90, 0)
```

---

### `getOffsetRot()` \{#getOffsetRot}

Gets this part's rotation offset

**Example**:

```lua
vanilla_model.HEAD:getOffsetRot()
```

---

### `setOffsetScale(Vector3)` \{#setOffsetScale}

Offsets this part and its children's scale, multiplying with the vanilla values

**Example**:

```lua
vanilla_model.HEAD:setOffsetScale(2, 2, 2)
```

---

### `getOffsetScale()` \{#getOffsetScale}

Gets this part's scale offset

**Example**:

```lua
vanilla_model.HEAD:getOffsetScale()
```

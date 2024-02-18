A task for rendering an Item from [newItem](.#newItem)

For this entire page assume:

```lua
local myItem = models:newItem("myCoolItemsName")
```

---

### <code>setItem(item: [ItemStack](../World/ItemStack)): [ItemTask](./ItemTask)</code> \{#setItem}

Sets the Item for this task render

**Example**:

```lua
myItem:setItem("slime_ball")
```

---

### <code>setDisplayMode(displayMode: [DisplayMode](../../enums/ItemDisplayModes)): [ItemTask](./ItemTask)</code> \{#setDisplayMode}

Sets the item [display mode](../../enums/ItemDisplayModes) for this task

**Example**:

```lua
myItem:setDisplayMode("GROUND")
```

---

### <code>getDisplayMode(): [DisplayMode](../../enums/ItemDisplayModes)</code> \{#getDisplayMode}

Gets this task item [display mode](../../enums/ItemDisplayModes)

**Example**:

```lua
myItem:getDisplayMode()
```

---

### <code>remove(): [ItemTask](./ItemTask)</code> \{#remove}

Removes this item task from the parent model part

**Example**:

```lua
myItem:remove()
```

---

### <code>getName(): string</code> \{#getName}

Get this task's name

**Example**:

```lua
myItem:getName()
```

---

### <code>setVisible(state: boolean): [ItemTask](./ItemTask)</code> \{#setVisible}

Sets whether or not this task should be rendered

**Example**:

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    myItem:setVisible(state)
end)
```

---

### <code>isVisible(): boolean</code> \{#isVisible}

Checks if this task is visible

**Example**:

```lua
if myItem:isVisible() then
    -- do something
end
```

---

### <code>setLight(blockLight: number?, skyLight: number?): [ItemTask](./ItemTask)</code> \{#setLight}

Sets the light override value of this task
Values are given from 0 to 15, indicating the block light and sky light levels you want to use
Passing nil will reset the lighting override for this task

**Example**:

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
myItem:setLight(blockLight, skyLight)
```

---

### <code>getLight(): [Vector2](../Vectors/Vector2)</code> \{#getLight}

Returns the light override value of this task

**Example**:

```lua
myItem:getLight()
```

---

### <code>setOverlay(whiteOverlay: number?, hurtOverlay: number?): [ItemTask](./ItemTask)</code> \{#setOverlay}

Sets the overlay override value of this task
Values you give are 0 to 15, indicating the white overlay and the damage overlay levels you want to use
Passing nil will reset the overlay override for this task

**Example**:

```lua
local hurt = player:getNbt.HurtTime > 0
myItem:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay(): [Vector2](../Vectors/Vector2)</code> \{#getOverlay}

Returns the overlay override value of this task

**Example**:

```lua
myItem:getOverlay()
```

---

### <code>setPos(pos: [Vector3](../Vectors/Vector3)): [ItemTask](./ItemTask)</code> \{#setPos}

Sets the position of the task, relative with its attached part
Uses model coordinates

**Example**:

```lua
myItem:setPos(0, 16, 0)
```

---

### <code>getPos(): [Vector3](../Vectors/Vector3)</code> \{#getPos}

Gets this task position

**Example**:

```lua
myItem:getPos()
```

---

### <code>setRot(rot: [Vector3](../Vectors/Vector3)): [ItemTask](./ItemTask)</code> \{#setRot}

Sets the rotation of the task, relative with its attached part

**Example**:

```lua
myItem:setRot(0, 45, 22.5)
```

---

### <code>getRot(): [Vector3](../Vectors/Vector3)</code> \{#getRot}

Gets this task rotation

**Example**:

```lua
myItem:getRot()
```

---

### <code>setScale(scale: [Vector3](../Vectors/Vector3)): [ItemTask](./ItemTask)</code> \{#setScale}

Sets the scale of the task, relative with its attached part

**Example**:

```lua
myItem:setScale(0.4, 0.4, 0.4) -- myItem:setScale(0.4) also works
```

---

### <code>getScale(): [ItemTask](./ItemTask)</code> \{#getScale}

Gets this task scale

**Example**:

```lua
myItem:getScale()
```

---

### <code>setMatrix(matrix: [Matrix4](../Matrices/Matrix4)): [ItemTask](./ItemTask)</code> \{#setMatrix}

Sets the given matrix as the position matrix for this item task
The normal matrix is automatically calculated as the inverse transpose of this matrix
Calling this DOES NOT CHANGE the values of position, rot, or scale in the item task
If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

**Example**:

```lua
myItem:setMatrix(matrices.mat4())
```

---

### <code>getPositionMatrix(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrix}

Recalculates the matrix for this item task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
myItem:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrixRaw}

Returns the position matrix for this item task
The Raw version of the function is different in that it doesn't recalculate the matrix before getting it

**Example**:

```lua
myItem:getPositionMatrixRaw()
```

---

### <code>getNormalMatrix(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrix}

Recalculates the normal matrix for this item task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
myItem:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this item task
The Raw version of the function is different in that it doesn't recalculate the matrix before returning it

**Example**:

```lua
myItem:getNormalMatrixRaw()
```

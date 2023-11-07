A task for rendering a Block from [newBlock](.#newBlock)

For this entire page assume:

```lua
local myBlock = models:newBlock("myCoolBlocksName")
```

---

### <code>setBlock(block: [BlockState](../World/BlockState)): [BlockTask](./BlockTask)</code> \{#setBlock}

Sets the Block for this task render

**Example**:

```lua
myBlock:setBlock("mycelium")
```

---

### <code>remove(): [BlockTask](./BlockTask)</code> \{#remove}

Removes this block task from the parent model part

**Example**:

```lua
myBlock:remove()
```

---

### <code>getName(): string</code> \{#getName}

Get this task's name

**Example**:

```lua
myBlock:getName()
```

---

### <code>setVisible(state: boolean): [BlockTask](./BlockTask)</code> \{#setVisible}

Sets whether or not this task should be rendered

**Example**:

```lua
local myPage = action_wheel.newPage()
myPage:newAction():setOnToggle(function(state)
    myBlock:setVisible(state)
end)
```

---

### <code>isVisible(): boolean</code> \{#isVisible}

Checks if this task is visible

**Example**:

```lua
if myBlock:isVisible() then
    -- do something
end
```

---

### <code>setLight(blockLight: number?, skyLight: number?): [BlockTask](./BlockTask)</code> \{#setLight}

Sets the light override value of this task
Values are given from 0 to 15, indicating the block light and sky light levels you want to use
Passing nil will reset the lighting override for this task

**Example**:

```lua
local blockLight = world.getLightLevel(player:getPos())
local skyLight = world.getSkyLightLevel(player:getPos())
myBlock:setLight(blockLight, skyLight)
```

---

### <code>getLight(): [Vector2](../Vectors/Vector2)</code> \{#getLight}

Returns the light override value of this task

**Example**:

```lua
myBlock:getLight()
```

---

### <code>setOverlay(whiteOverlay: number?, hurtOverlay: number?): [BlockTask](./BlockTask)</code> \{#setOverlay}

Sets the overlay override value of this task
Values you give are 0 to 15, indicating the white overlay and the damage overlay levels you want to use
Passing nil will reset the overlay override for this task

**Example**:

```lua
local hurt = player:getNbt.HurtTime > 0
myBlock:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay(): [Vector2](../Vectors/Vector2)</code> \{#getOverlay}

Returns the overlay override value of this task

**Example**:

```lua
myBlock:getOverlay()
```

---

### <code>setPos(pos: [Vector3](../Vectors/Vector3)): [BlockTask](./BlockTask)</code> \{#setPos}

Sets the position of the task, relative with its attached part
Uses model coordinates

**Example**:

```lua
myBlock:setPos(0, 16, 0)
```

---

### <code>getPos(): [Vector3](../Vectors/Vector3)</code> \{#getPos}

Gets this task position

**Example**:

```lua
myBlock:getPos()
```

---

### <code>setRot(rot: [Vector3](../Vectors/Vector3)): [BlockTask](./BlockTask)</code> \{#setRot}

Sets the rotation of the task, relative with its attached part

**Example**:

```lua
myBlock:setRot(0, 45, 22.5)
```

---

### <code>getRot(): [Vector3](../Vectors/Vector3)</code> \{#getRot}

Gets this task rotation

**Example**:

```lua
myBlock:getRot()
```

---

### <code>setScale(scale: [Vector3](../Vectors/Vector3)): [BlockTask](./BlockTask)</code> \{#setScale}

Sets the scale of the task, relative with its attached part

**Example**:

```lua
myBlock:setScale(0.4, 0.4, 0.4) -- myBlock:setScale(0.4) also works
```

---

### <code>getScale(): [BlockTask](./BlockTask)</code> \{#getScale}

Gets this task scale

**Example**:

```lua
myBlock:getScale()
```

---

### <code>setMatrix(matrix: [Matrix4](../Matrices/Matrix4)): [BlockTask](./BlockTask)</code> \{#setMatrix}

Sets the given matrix as the position matrix for this block task
The normal matrix is automatically calculated as the inverse transpose of this matrix
Calling this DOES NOT CHANGE the values of position, rot, or scale in the block task
If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

**Example**:

```lua
myBlock:setMatrix(matrices.mat4())
```

---

### <code>getPositionMatrix(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrix}

Recalculates the matrix for this block task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
myBlock:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrixRaw}

Returns the position matrix for this block task
The Raw version of the function is different in that it doesn't recalculate the matrix before getting it

**Example**:

```lua
myBlock:getPositionMatrixRaw()
```

---

### <code>getNormalMatrix(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrix}

Recalculates the normal matrix for this block task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
myBlock:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this block task
The Raw version of the function is different in that it doesn't recalculate the matrix before returning it

**Example**:

```lua
myBlock:getNormalMatrixRaw()
```

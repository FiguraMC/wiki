A task for rendering text from [newText](.#newText)

For this entire page assume:

```lua
local myText = models:newText("myCoolTextsName")
```

---

### <code>setText(text: string): [TextTask](./TextTask)</code> \{#setText}

Sets the Text for this task render

**Example**:

```lua
myText:setText("Hi mom!")
```

---

### <code>getText(): string</code> \{#getText}

Returns the Text from this task

**Example**:

```lua
myText:getText()
```

---

### <code>setAlignment(alignment: "LEFT" | "RIGHT" | "CENTER"): [TextTask](./TextTask)</code> \{#setAlignment}

Sets this Text alignment
Can be either "LEFT", "RIGHT" or "CENTER"
Default "LEFT"

**Example**:

```lua
myText:setAlignment("CENTER")
```

---

### <code>getAlignment(): "LEFT" | "RIGHT" | "CENTER"</code> \{#getAlignment}

Returns this Text alignment
Default "LEFT"

**Example**:

```lua
myText:getAlignment()
```

---

### <code>setShadow(shadow: boolean): [TextTask](./TextTask)</code> \{#setShadow}

Sets if the Text should render with a drop shadow
Not compatible with "Outline" mode

**Example**:

```lua
myText:setShadow(true)
```

---

### <code>hasShadow(): boolean</code> \{#hasShadow}

Checks if this task text has shadow

**Example**:

```lua
myText:hasShadow()
```

---

### <code>setOutline(outline: boolean): [TextTask](./TextTask)</code> \{#setOutline}

Toggles if the Text should render with a outline
Always renders at full bright
Not compatible with "Shadow" and "Emissive" modes

**Example**:

```lua
myText:setOutline(true)
```

---

### <code>hasOutline(): boolean</code> \{#hasOutline}

Checks if this task text has outline

**Example**:

```lua
myText:hasOutline()
```

---

### <code>setOutlineColor(color: [Vector3](../Vectors/Vector3)): [TextTask](./TextTask)</code> \{#setOutlineColor}

Sets the outline color this Text should render. Takes a `Vector3` of rgb values or a number per value. Only compatible with "Outline" mode.

**Example**:

```lua
myText:setOutline(true)
-- highlight-next-line
myText:setOutlineColor(255 / 255, 192 / 255, 203 / 255)
```

---

### <code>getOutlineColor(): [Vector3](../Vectors/Vector3)</code> \{#getOutlineColor}

Gets this tasks text outline color

**Example**:

```lua
myText:getOutlineColor()
```

---

### <code>setWidth(width: number): [TextTask](./TextTask)</code> \{#setWidth}

Sets this Text max width, wrapping the text into multiple lines
Width of 0 or less do not wraps the text
Default 0

**Example**:

```lua
myText:setWidth(1)
```

---

### <code>getWidth(): number</code> \{#getWidth}

Gets this Text max width
Default 0

**Example**:

```lua
myText:getWidth()
```

---

### <code>setWrap(wrap: boolean): [TextTask](./TextTask)</code> \{#setWrap}

Sets if this Text should wrap lines

**Example**:

```lua
myText:setWrap(true)
```

---

### <code>hasWrap(): boolean</code> \{#hasWrap}

Check if this Text should wrap lines

**Example**:

```lua
myText:hasWrap()
```

---

### <code>setSeeThrough(seeThrough: boolean): [TextTask](./TextTask)</code> \{#setSeeThrough}

Sets if this Text can be seen behind walls
Default false

**Example**:

```lua
myText:setSeeThrough(true)
```

---

### <code>isSeeThrough(): boolean</code> \{#isSeeThrough}

Check if this Text can be seen behind walls
Default false

**Example**:

```lua
myText:isSeeThrough()
```

---

### <code>setBackground(background: boolean): [TextTask](./TextTask)</code> \{#setBackground}

Sets if this Text should render its background
Default false

**Example**:

```lua
myText:setBackground(true)
```

---

### <code>hasBackground(): boolean</code> \{#hasBackground}

Check if this Text should render its background
Default false

**Example**:

```lua
myText:hasBackground()
```

---

### <code>setBackgroundColor(argb: [Vector4](../Vectors/Vector4)): [TextTask](./TextTask)</code> \{#setBackgroundColor}

Sets the background colour of this Text. Takes a `Vector4` of argb values or a number per value. If the alpha value is not given, it will uses the vanilla value (as in the accessibility settings).

**Example**:

```lua
myText:setBackgroundColor(63 / 255, 255 / 255, 192 / 255, 203 / 255)
```

---

### <code>getBackgroundColor(): [Vector4](../Vectors/Vector4)</code> \{#getBackgroundColor}

Gets the this Text background color

**Example**:

```lua
myText:getBackgroundColor()
```

---

### <code>setOpacity(opacity: number): [TextTask](./TextTask)</code> \{#setOpacity}

Sets the opacity of this text

**Example**:

```lua
myText:setOpacity(0.5)
```

---

### <code>getOpacity(): number</code> \{#getOpacity}

Gets the opacity of this text

**Example**:

```lua
myText:getOpacity()
```

---

### <code>remove(): [TextTask](./TextTask)</code> \{#remove}

Removes this text task from the parent model part

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

### <code>setVisible(state: boolean): [TextTask](./TextTask)</code> \{#setVisible}

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

### <code>setLight(blockLight: number?, skyLight: number?): [TextTask](./TextTask)</code> \{#setLight}

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

### <code>setOverlay(whiteOverlay: number?, hurtOverlay: number?): [TextTask](./TextTask)</code> \{#setOverlay}

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

### <code>setPos(pos: [Vector3](../Vectors/Vector3)): [TextTask](./TextTask)</code> \{#setPos}

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

### <code>setRot(rot: [Vector3](../Vectors/Vector3)): [TextTask](./TextTask)</code> \{#setRot}

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

### <code>setScale(scale: [Vector3](../Vectors/Vector3)): [TextTask](./TextTask)</code> \{#setScale}

Sets the scale of the task, relative with its attached part

**Example**:

```lua
myBlock:setScale(0.4, 0.4, 0.4) -- myBlock:setScale(0.4) also works
```

---

### <code>getScale(): [TextTask](./TextTask)</code> \{#getScale}

Gets this task scale

**Example**:

```lua
myBlock:getScale()
```

---

### <code>setMatrix(matrix: [Matrix4](../Matrices/Matrix4)): [TextTask](./TextTask)</code> \{#setMatrix}

Sets the given matrix as the position matrix for this text task
The normal matrix is automatically calculated as the inverse transpose of this matrix
Calling this DOES NOT CHANGE the values of position, rot, or scale in the text task
If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

**Example**:

```lua
myBlock:setMatrix(matrices.mat4())
```

---

### <code>getPositionMatrix(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrix}

Recalculates the matrix for this text task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
myBlock:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrixRaw}

Returns the position matrix for this text task
The Raw version of the function is different in that it doesn't recalculate the matrix before getting it

**Example**:

```lua
myBlock:getPositionMatrixRaw()
```

---

### <code>getNormalMatrix(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrix}

Recalculates the normal matrix for this text task, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
myBlock:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this text task
The Raw version of the function is different in that it doesn't recalculate the matrix before returning it

**Example**:

```lua
myBlock:getNormalMatrixRaw()
```

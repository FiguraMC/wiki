Represents a rendering task for Figura to complete each frame.
An abstract superclass of [ItemTask](./ItemTask), [BlockTask](./BlockTask), [TextTask](./TextTask), and [SpriteTask](./SpriteTask).

### <code>remove(): [RenderTask](./RenderTask)</code> \{#remove}

Removes this render task from the parent model part

---

### <code>getName(): string</code> \{#getName}

Get this task's name

---

### <code>setVisible(state: boolean): [RenderTask](./RenderTask)</code> \{#setVisible}

Sets whether or not this task should be rendered

---

### <code>isVisible(): boolean</code> \{#isVisible}

Checks if this task is visible

---

### <code>setLight(blockLight: number?, skyLight: number?): [RenderTask](./RenderTask)</code> \{#setLight}

Sets the light override value of this task
Values are given from 0 to 15, indicating the block light and sky light levels you want to use
Passing nil will reset the lighting override for this task

---

### <code>getLight(): [Vector2](../Vectors/Vector2)</code> \{#getLight}

Returns the light override value of this task

---

### <code>setOverlay(whiteOverlay: number?, hurtOverlay: number?): [RenderTask](./RenderTask)</code> \{#setOverlay}

Sets the overlay override value of this task
Values you give are 0 to 15, indicating the white overlay and the damage overlay levels you want to use
Passing nil will reset the overlay override for this task

---

### <code>getOverlay(): [Vector2](../Vectors/Vector2)</code> \{#getOverlay}

Returns the overlay override value of this task

---

### <code>setPos(pos: [Vector3](../Vectors/Vector3)): [RenderTask](./RenderTask)</code> \{#setPos}

Sets the position of the task, relative with its attached part
Uses model coordinates

---

### <code>getPos(): [Vector3](../Vectors/Vector3)</code> \{#getPos}

Gets this task position

---

### <code>setRot(rot: [Vector3](../Vectors/Vector3)): [RenderTask](./RenderTask)</code> \{#setRot}

Sets the rotation of the task, relative with its attached part

---

### <code>getRot(): [Vector3](../Vectors/Vector3)</code> \{#getRot}

Gets this task rotation

---

### <code>setScale(scale: [Vector3](../Vectors/Vector3)): [RenderTask](./RenderTask)</code> \{#setScale}

Sets the scale of the task, relative with its attached part

---

### <code>getScale(): [RenderTask](./RenderTask)</code> \{#getScale}

Gets this task scale

---

### <code>setMatrix(matrix: [Matrix4](../Matrices/Matrix4)): [RenderTask](./RenderTask)</code> \{#setMatrix}

Sets the given matrix as the position matrix for this render task
The normal matrix is automatically calculated as the inverse transpose of this matrix
Calling this DOES NOT CHANGE the values of position, rot, or scale in the render task
If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

---

### <code>getPositionMatrix(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrix}

Recalculates the matrix for this render task, based on its current position, rotation, scale, and pivot, then returns this matrix

---

### <code>getPositionMatrixRaw(): [Matrix4](../Matrices/Matrix4)</code> \{#getPositionMatrixRaw}

Returns the position matrix for this render task
The Raw version of the function is different in that it doesn't recalculate the matrix before getting it

---

### <code>getNormalMatrix(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrix}

Recalculates the normal matrix for this render task, based on its current position, rotation, scale, and pivot, then returns this matrix

---

### <code>getNormalMatrixRaw(): [Matrix3](../Matrices/Matrix3)</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this render task
The Raw version of the function is different in that it doesn't recalculate the matrix before returning it

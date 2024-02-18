The global instance of the Avatar Models and its subtypes

## Transformations

### <code>setVisible(bool)</code> \{#setVisible}

Sets this part to be visible or invisible

The default value is nil, meaning the part copies its visibility from its parent part

**Example**:

```lua
models:setVisible(false)
```

---

### <code>getVisible()</code> \{#getVisible}

Gets whether or not this model part is visible

The default value is nil, meaning it copies the visibility of its parent part during rendering

**Example**:

```lua
models:getVisible()
```

---

### <code>setRot(Vector3)</code> \{#setRot}

Sets the absolute rotation for this part

Nil values for rotation are assumed to be 0

Angles are given in degrees

For relative rotation values, check out the "offset" rot functions

**Example**:

```lua
models:setRot(0, 90, 0)
```

---

### <code>getRot()</code> \{#getRot}

Gets the rotation of the model part, including its rotation in blockbench

For relative rotation values, check out the "offset" rot functions

**Example**:

```lua
models:setRot()
```

---

### <code>setPos(Vector3)</code> \{#setPos}

Sets the position offset for this part from its blockbench position

Nil values for position are assumed to be 0

**Example**:

```lua
models:setPos(0, 5, 0)
```

---

### <code>getPos()</code> \{#getPos}

Gets the position of the model part, as an offset from its position in blockbench

Only changes from {0,0,0} when you call setPos()

**Example**:

```lua
models:getPos()
```

---

### <code>setScale(Vector3)</code> \{#setScale}

Sets the scale factor for this part

Nil values for scale are assumed to be 1

**Example**:

```lua
models:setScale(2, 2, 2)
```

---

### <code>getScale()</code> \{#getScale}

Gets the scale of the model part, as a multiple of its blockbench size

Only changes from {1,1,1} when you call setScale()

**Example**:

```lua
models:getScale()
```

---

### <code>setPivot(Vector3)</code> \{#setPivot}

Sets the absolute pivot for this part

Nil values are assumed to be 0

For relative pivot offsets, check out the "offset" pivot functions

**Example**:

```lua
models:setPivot(0, 5, 0)
```

---

### <code>getPivot()</code> \{#getPivot}

Gets the pivot point of the model part, including its pivot in blockbench

For relative values, check out the "offset" pivot functions

**Example**:

```lua
models:getPivot()
```

---

### <code>setOffsetRot(Vector3)</code> \{#setOffsetRot}

Sets the offset rotation for this part

Nil values for rotation are assumed to be 0

Angles are given in degrees

For absolute rotation values, check out the non-offset rot functions

**Example**:

```lua
models:setOffsetRot(0, 90, 0)
```

---

### <code>getOffsetRot()</code> \{#getOffsetRot}

Gets the offset rotation of the model part, offset from its rotation in blockbench

For absolute rotation values, check out the non-offset rot functions

**Example**:

```lua
models:getOffsetRot()
```

---

### <code>setOffsetScale(Vector3)</code> \{#setOffsetScale}

Sets the offset scale for this part

Nil values are assumed to be 1

For absolute scale values, check out the non-offset rot functions

**Example**:

```lua
models:setOffsetScale(2, 2, 2)
```

---

### <code>getOffsetScale()</code> \{#getOffsetScale}

Gets the offset scale of the model part, offset from its default scale

For absolute scale values, check out the non-offset rot functions

**Example**:

```lua
models:getOffsetScale()
```

---

### <code>setOffsetPivot(Vector3)</code> \{#setOffsetPivot}

Sets the offset pivot point for this part

Nil values are assumed to be 0

For absolute pivot point values, check out the non-offset pivot functions

**Example**:

```lua
models:setOffsetPivot(0, 5, 0)
```

---

### <code>getOffsetPivot()</code> \{#getOffsetPivot}

Gets the offset pivot of the model part, offset from its pivot in blockbench

For absolute pivot point values, check out the non-offset pivot functions

**Example**:

```lua
models:getOffsetPivot()
```

---

### <code>setMatrix(Matrix4)</code> \{#setMatrix}

Sets the given matrix as the position matrix for this model part

The normal matrix is automatically calculated as the inverse transpose of this matrix

Calling this DOES NOT CHANGE the values of position, rot, or scale in the model part

If you call setPos() or a similar function, the effects of setMatrix() will be overwritten

**Example**:

```lua
models:setMatrix(matrices.mat4())
```

---

### <code>getPositionMatrix()</code> \{#getPositionMatrix}

Recalculates the matrix for this model part, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
models:getPositionMatrix()
```

---

### <code>getPositionMatrixRaw()</code> \{#getPositionMatrixRaw}

Returns the position matrix for this model part

The Raw version of the function is different in that it doesn't recalculate the matrix before getting it

**Example**:

```lua
models:getPositionMatrixRaw()
```

---

### <code>getNormalMatrix()</code> \{#getNormalMatrix}

Recalculates the normal matrix for this model part, based on its current position, rotation, scale, and pivot, then returns this matrix

**Example**:

```lua
models:getNormalMatrix()
```

---

### <code>getNormalMatrixRaw()</code> \{#getNormalMatrixRaw}

Returns the normal matrix for this model part

The Raw version of the function is different in that it doesn't recalculate the matrix before returning it

**Example**:

```lua
models:getNormalMatrixRaw()
```

---

## Part Information

### `getName()` \{#getName}

The name of this model part

**Example**

```lua
models:getName()
```

---

### `getType()` \{#getType}

Returns whether this part is a "GROUP", a "CUBE", or a "MESH"
**Example**

```lua
models:getType()
```

---

### <code>getTrueRot()</code> \{#getTrueRot}

Gets the true rotation of this model part, which is a sum of the rotation, the offset rotation and the animation position

**Example**:

```lua
models:getTrueRot()
```

---

### <code>getTruePos()</code> \{#getTruePos}

Gets the true position of this model part, which is a sum of the position and the animation position

**Example**:

```lua
models:getTruePos()
```

---

### <code>getTrueScale()</code> \{#getTrueScale}

Gets the true scale of this model part, which is a sum of the scale, the offset scale and the animation scale

**Example**:

```lua
models:getTrueScale()
```

---

### <code>getTruePivot()</code> \{#getTruePivot}

Gets the true pivot of this model part, which is a sum of the pivot and the offset pivot

**Example**:

```lua
models:getTruePivot()
```

---

### <code>partToWorldMatrix()</code> \{#partToWorldMatrix}

Gets a matrix which transforms a point from this part's position to a world location

Recommended to use this in POST_RENDER, as by then the matrix is updated

In RENDER it will be 1 frame behind the part's visual position for that frame

Also, if the model is not rendered in-world, the part's matrix will not be updated

Paperdoll rendering and other UI rendering will not affect this matrix

**Example**:

```lua
models:partToWorldMatrix():apply()
```

---

## Rendering

### <code>setPrimaryRenderType(string)</code> \{#setPrimaryRenderType}

Sets the current primary render type of this model part

Nil by default, meaning the part copies the primary render type of its parent during rendering

Check the docs enum command for all render types

**Example**:

```lua
models:setPrimaryRenderType("END_PORTAL")
```

---

### <code>getPrimaryRenderType()</code> \{#getPrimaryRenderType}

Gets the current primary render type of this model part

Nil by default, meaning the part copies the primary render type of its parent

**Example**:

```lua
models:getPrimaryRenderType() == "TRANSLUCENT_CULL"
```

---

### <code>setSecondaryRenderType(string)</code> \{#setSecondaryRenderType}

Sets the current secondary render type of this model part

Nil by default, meaning the part copies the secondary render type of its parent during rendering

Check the docs enum command for all render types

**Example**:

```lua
models:setSecondaryRenderType("GLINT")
```

---

### <code>getSecondaryRenderType()</code> \{#getSecondaryRenderType}

Gets the current secondary render type of this model part

Nil by default, meaning the part copies the secondary render type of its parent

**Example**:

```lua
models:getSecondaryRenderType() == "LINES"
```

---

### <code>setOpacity(Number)</code> \{#setOpacity}

Sets the opacity multiplier of this part

Note that opacity settings will only take effect if the part has a suitable Render Type for them, mainly TRANSLUCENT

Check out modelPart.setPrimaryRenderType() for how to do this

**Example**:

```lua
models:setOpacity(0.5)
```

---

### <code>getOpacity()</code> \{#getOpacity}

Gets the opacity multiplier of this part

Note that opacity settings will only take effect if the part has a suitable Render Type for them, mainly TRANSLUCENT

Check out modelPart.setPrimaryRenderType() for how to do this

**Example**:

```lua
models:getOpacity()
```

---

### <code>setLight()</code> \{#setLight}

Sets the light level to be used when rendering this part

Values you give are 0 to 15, indicating the block light and sky light levels you want to use

Passing nil will reset the lighting override for this part

**Example**:

```lua
-- Example for mimicking vanilla lighting
local blockLight = world.getBlockLightLevel(player:getPos():add(0, .4, 0))
local skyLight = world.getSkyLightLevel(player:getPos():add(0, .4, 0))
models:setLight(blockLight, skyLight)
```

---

### <code>getLight()</code> \{#getLight}

Gets the light level you set earlier to this part

Does not interact with Minecraft's lighting system, only retrieving values you set earlier with setLight()

**Example**:

```lua
models:getOpacity()
```

---

### <code>setOverlay()</code> \{#setOverlay}

Sets the overlay color to be used when rendering this part

Values you give are 0 to 15, indicating the white overlay and the damage overlay levels you want to use

Passing nil will reset the overlay override for this part

**Example**:

```lua
-- Example for a hurt overlay
local hurt = player:getNbt().HurtTime > 0
models:setOverlay(hurt and 0 or nil, 1)
```

---

### <code>getOverlay()</code> \{#getOverlay}

Gets the overlay color you set earlier to this part

Does not interact with Minecraft's overlay system, only retrieving values you set earlier with setOverlay()

**Example**:

```lua
models:getOverlay()
```

---

### <code>setColor(Vector3)</code> \{#setColor}

Sets the color multiplier for this part for primary and secondary colors

Values are RGB from 0 to 1

**Example**:

```lua
models:setColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getColor()</code> \{#getColor}

Returns the average set color from this part, as adding the primary color with the secondary, then dividing them

Values are RGB from 0 to 1

**Example**:

```lua
models:getColor()
```

---

### <code>setPrimaryColor(Vector3)</code> \{#setPrimaryColor}

Sets the primary color multiplier for this part

Values are RGB from 0 to 1

**Example**:

```lua
models:setPrimaryColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getPrimaryColor()</code> \{#getPrimaryColor}

Gets the primary color multiplier of this part

Values are RGB from 0 to 1

**Example**:

```lua
models:getPrimaryColor()
```

---

### <code>setSecondaryColor(Vector3)</code> \{#setSecondaryColor}

Sets the secondary color multiplier for this part

Values are RGB from 0 to 1

**Example**:

```lua
models:setSecondaryColor(0 / 255, 0 / 255, 255 / 255)
```

---

### <code>getSecondaryColor()</code> \{#getSecondaryColor}

Gets the secondary color multiplier of this part

Values are RGB from 0 to 1

**Example**:

```lua
models:getSecondaryColor()
```

---

### <code>setPreRender(fun)</code> \{#setPreRender}

Sets a function to run before this part starts being rendered

### <code>setMidRender(fun)</code> \{#setMidRender}

Sets a function to run during the middle of this part's rendering, after its matrices are calculated

### <code>setPostRender(fun)</code> \{#setPostRender}

Sets a function to run after this part and its children is rendered

### <code>preRender</code> \{#preRender}

Function to run before this part starts being rendered

### <code>midRender</code> \{#midRender}

Function to run during the middle of this part's rendering, after its matrices are calculated

### <code>postRender</code> \{#postRender}

Function to run after this part and its children is rendered

## Animations

### <code>getAnimRot()</code> \{#getAnimRot}

Gets the rotation offset provided by the currently active animation of this model part

**Example**:

```lua
models:getAnimRot()
```

---

### <code>getAnimPos()</code> \{#getAnimPos}

Gets the position offset provided by the currently active animation of this model part

**Example**:

```lua
models:getAnimPos()
```

---

### <code>getAnimScale()</code> \{#getAnimScale}

Gets the scale multiplier provided by the currently active animation of this model part

**Example**:

```lua
models:getAnimScale()
```

---

### <code>overrideVanillaRot()</code> \{#overrideVanillaRot}

Returns if this part vanilla rotation is being overridden by an animation

**Example**:

```lua
models:overrideVanillaRot()
```

---

### <code>overrideVanillaPos()</code> \{#overrideVanillaPos}

Returns if this part vanilla position is being overridden by an animation

**Example**:

```lua
models:overrideVanillaPos()
```

---

### <code>overrideVanillaScale()</code> \{#overrideVanillaScale}

Returns if this part vanilla scale is being overridden by an animation

**Example**:

```lua
models:overrideVanillaScale()
```

---

## Texturing

### <code>setPrimaryTexture(string)</code> \{#setPrimaryTexture}

Sets the primary texture override of this part

Check the TextureType types in the enums

If using "resource", the second parameter should indicate the path to the Minecraft texture you want to use

If using "custom", the second parameter should indicate a texture object

**Example**:

```lua
-- Vanilla Skin
models:setPrimaryTexture("Skin")
-- Custom Texture
models:setPrimaryTexture("Custom", textures["myTexture"])
-- Minecraft Resource
models:setPrimaryTexture("Resource", "textures/entity/pig/pig.png")
```

---

### <code>getPrimaryTexture()</code> \{#getPrimaryTexture}

Gets the primary texture of this part

Returns two values, first being the override type, second being the value, if any.

**Example**:

```lua
models:getPrimaryTexture()
```

---

<!-- ### <code>getPrimaryDefinedTextures()</code> \{#getPrimaryDefinedTextures}

Gets the primary textures of this part

Returns a table of each texture for the specified face.

**Example**:

```lua

```

--- -->

### <code>setSecondaryTexture(string)</code> \{#setSecondaryTexture}

Sets the secondary texture override of this part

Check the TextureType types in the list docs

If using "resource", the second parameter should indicate the path to the Minecraft texture you want to use

If using "custom", the second parameter should indicate a texture object

**Example**:

```lua
-- Vanilla Skin
models:setSecondaryTexture("Skin")
-- Custom Texture
models:setSecondaryTexture("Custom", textures["myTexture"])
-- Minecraft Resource
models:setSecondaryTexture("Resource", "textures/entity/pig/pig.png")
```

---

### <code>getSecondaryTexture()</code> \{#getSecondaryTexture}

Gets the secondary texture of this part

Returns two values, first being the override type, second being the value, if any.

**Example**:

```lua
models:getSecondaryTexture()
```

---

<!--### <code>getSecondaryDefinedTextures()</code> \{#getSecondaryDefinedTextures}

Gets the secondary textures of this part

Returns a table of each texture for the specified face.

**Example**:

```lua

```

--- -->

### <code>getTextures()</code> \{#getTextures}

Returns a table with all textures used by this part

Do not include children textures, so groups usually will return an empty table

:::caution
This function is currently bugged, but it is mainly useless anyway
:::

**Example**:

```lua
models:getTextures()
```

---

### <code>getTextureSize()</code> \{#getTextureSize}

Gets the width, height of this part's texture in pixels

Throws an error if this part has multiple different-sized textures on it, or if the part is a Group

**Example**:

```lua
models:getTextureSize()
```

---

### <code>setUV(Vector2)</code> \{#setUV}

Sets the UV of this part

This function is normalized, meaning it works with values 0 to 1

If you say setUV(0.5, 0.25), for example, it will scroll by half of your texture width to the right, and one fourth of the texture width downwards

**Example**:

```lua
models:setUV(0.5, 0.5)
```

---

### <code>getUV()</code> \{#getUV}

Gets the UV of this part

This function is normalized, meaning it will return values between 0 to 1

**Example**:

```lua
models:getUV()
```

---

### <code>setUVPixels(Vector2)</code> \{#setUVPixels}

Sets the UV of this part in pixels

Automatically divides by the results of getTextureSize(), so you can just input the number of pixels you want the UV to scroll by

Errors if the part has multiple different-sized textures

If this part is a Group, it will attempt to setUVPixels on its children

**Example**:

```lua
models:setUVPixels(16.16)
```

---

### <code>getUVPixels()</code> \{#getUVPixels}

Gets the UV of this part

Automatically multiplies the result by getTextureSize()

Errors if the part has multiple different-sized textures of if the part is a Group

**Example**:

```lua
models:getUVPixels()
```

---

### <code>setUVMatrix(Matrix3)</code> \{#setUVMatrix}

Sets the UV matrix of this part

This matrix is applied to all UV points during the transform, with the UVs treated as homogeneous vectors

setUV() and setUVPixels() are actually just simpler ways of setting this matrix

**Example**:

```lua
models:setUVMatrix(matrices.mat3())
```

---

### <code>getUVMatrix()</code> \{#getUVMatrix}

Gets the UV matrix of this part

**Example**:

```lua
models:getUVMatrix()
```

---

## Render Tasks

### <code>newText(string)</code> \{#newText}

Adds a new Text Render Task on this part with the given name

The name is not visible in-game, set the text using `setText`

**Example**:

```lua
models:newText("Example")
```

---

### <code>newItem(string)</code> \{#newItem}

Adds a new Item Render Task on this part with the given name

**Example**:

```lua
models:newItem("Example")
```

---

### <code>newBlock(string)</code> \{#newBlock}

Adds a new Block Render Task on this part with the given name

**Example**:

```lua
models:newBlock("Example")
```

---

### <code>newSprite(string)</code> \{#newSprite}

Adds a new Sprite Render Task on this part with the given name

**Example**:

```lua
models:newSprite("Example")
```

---

### <code>newTask(renderTask)</code> \{#newTask}

Adds the given Render Task on this part, effectively duplicating it

---

### <code>getTask(string?)</code> \{#getTask}

Gets the Render Task with the given name from this part

Returns a table with all tasks if a name is not given

**Example**:

```lua
models:getTask()
```

---

### <code>removeTask(string?)</code> \{#removeTask}

Removes the Task with the given name from this part

Removes ALL tasks if a name is not given

**Example**:

```lua
models:removeTask()
```

---

## Misc

### <code>setParentType()</code> \{#setParentType}

Sets the parent type of the part

See the ParentType parts in the enums for legal types

**Example**:

```lua
models:setParentType("Head")
```

---

### <code>getParentType()</code> \{#getParentType}

Returns the current parent type of the part

**Example**:

```lua
models:getParentType()
```

---

### <code>getVertices(string)</code> \{#getVertices}

Return a table with all vertices from the given texture id

Returns nil if no vertices was found

**Example**:

```lua
models:getVertices("myTexture")
```

---

### <code>getAllVertices()</code> \{#getAllVertices}

Return a table of all texture ids and its vertices

**Example**:

```lua
models:getAllVertices()
```

---

### `getParent()` \{#getParent}

Gets the parent part of this part

If this part has no parent, returns nil

**Example**

```lua
models:getParent()
```

---

### <code>getChildren()</code> \{#getChildren}

Gets the children of this part, stored in a table

**Example**:

```lua
models:getChildren()
```

---

### <code>isChildOf(ModelPart)</code> \{#isChildOf}

Checks if this part is a child of the given part

**Example**:

```lua
models:isChildOf(models)
```

---

### <code>moveTo(ModelPart)</code> \{#moveTo}

Moves this part to be a child of the given part

**Example**:

```lua
-- error-next-line
models:moveTo(models)
-- This is recursive
```

---

### <code>addChild(ModelPart)</code> \{#addChild}

Adds the given part into this part's children list

**Example**:

```lua
-- error-next-line
models:addChild(models)
-- This is recursive
```

---

### <code>removeChild(ModelPart)</code> \{#removeChild}

Removes the given part from this part's children list

**Example**:

```lua
-- error-next-line
models:removeChild(models)
-- This is recursive
```

---

### <code>copy(string)</code> \{#copy}

Returns a copy of this part, with all customizations and vertices copied

Children parts are passed as reference, in a new list

**Example**:

```lua
models:copy("Example")
```

---

### <code>newPart(string,string?)</code> \{#newPart}

Creates a new, empty, group model part as a child of this part, at the same pivot point

Takes two arguments, the new part's name and optionally its parent type

**Example**:

```lua
-- Example with same parent type
models:newPart("Example")
-- Example with different parent type
models:newPart("Example", "Head")
```

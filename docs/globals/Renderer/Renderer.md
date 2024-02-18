The renderer API is accessed with the <code>renderer</code> global. Like so: <code>renderer:setRenderVehicle(false)</code>

## Altering the Camera

---

### `setOffsetCameraPivot(Vector3)` \{#setOffsetCameraPivot}

Sets the offset pivot for the camera

The pivot will also move the camera

Its values are relative to the world

Nil values for pivot are assumed to be 0

For absolute rotation values, check out the non-offset pivot function

**Example**:

```lua
renderer:setOffsetCameraPivot(0, 2, 0)
```

---

### `getCameraOffsetPivot()` \{#getCameraOffsetPivot}

Gets the offset pivot for the camera

**Example**:

```lua
renderer:getCameraOffsetPivot()
```

---

### `setCameraPivot(Vector3)` \{#setCameraPivot}

Sets the absolute pivot for the camera

The pivot will also move the camera

Its values are relative to the World

Nil values for pivot are assumed to be 0

For relative rotation values, check out the "offset" pivot function

**Example**:

```lua
rendereR:setCameraPivot(0, 2, 0)
```

---

### `getCameraPivot()` \{#getCameraPivot}

Gets the absolute pivot for the camera

**Example**:

```lua
renderer:getCameraPivot()
```

---

### `setCameraPos(Vector3)` \{#setCameraPos}

Sets the position offset for the camera

Nil values for position are assumed to be 0

**Example**:

```lua
renderer:setCameraPos(0, 2, 0)
```

---

### `getCameraPos()` \{#getCameraPos}

Gets the position offset for the camera

**Example**:

```lua
renderer:getCameraPos()
```

---

### `setOffsetCameraRot(Vector3)` \{#setOffsetCameraRot}

Sets the offset rotation for the camera

Nil values for rotation are assumed to be 0

Angles are given in degrees

For absolute rotation values, check out the non-offset rot function

**Example**:

```lua
renderer:setOffsetCameraRot(0, 90, 0)
```

---

### `getCameraOffsetRot()` \{#getCameraOffsetRot}

Gets the offset rotation for the camera

**Example**:

```lua
renderer:getCameraOffsetRot()
```

---

### `setCameraRot(Vector3)` \{#setCameraRot}

Sets the absolute rotation of the camera

The position is not taken into account for roll

Nil values for rotation are assumed to be 0

For relative rotation values, check out the "offset" rot function

**Example**:

```lua
renderer:setCameraRot(0, 90, 0)
```

---

### `getCameraRot()` \{#getCameraRot}

Gets the absolute rotation of the camera

**Example**:

```lua
renderer:getCameraRot()
```

---

### `setCameraMatrix(matrix4)` \{#setCameraMatrix}

Sets the camera matrix with the given matrix

---

### `getCameraMatrix()` \{#getCameraMatrix}

Returns the modified camera matrix

**Example**:

```lua
renderer:getCameraMatrix()
```

---

### `setCameraNormal(matrix3)` \{#setCameraNormal}

Sets the camera normal matrix with the given matrix

---

### `getCameraNormal()` \{#getCameraNormal}

Returns the modified camera normal matrix

**Example**:

```lua
renderer:getCameraNormal()
```

## Detecting Camera Information

---

### `isFirstPerson()` \{#isFirstPerson}

Checks if your camera is in the first person view

**Example**:

```lua
renderer:isFirstPerson()
```

---

### `isCameraBackwards()` \{#isCameraBackwards}

Checks if your camera is in the backwards third person view

## Element Rendering

**Example**:

```lua
renderer:isCameraBackwards()
```

---

### `setOutlineColor(Vector3)` \{#setOutlineColor}

Sets the glowing effect outline color

**Example**:

```lua
renderer:setOutlineColor(0, 0, 1)
```

---

### `getOutlineColor()` \{#getOutlineColor}

Gets the glowing effect outline color set by setOutlineColor

**Example**:

```lua
renderer:getOutlineColor()
```

---

### `setBlockOutlineColor(Vector4)` \{#setBlockOutlineColor}

Sets the color of the selected block outline

Default alpha is 0.4

Might not be compatible with shaders

**Example**:

```lua
renderer:setBlockOutlineColor(0, 0, 1, 0.4)
```

---

### `getBlockOutlineColor()` \{#getBlockOutlineColor}

Returns the set color for the selected block outline

**Example**:

```lua
renderer:getBlockOutlineColor()
```

---

### `setPrimaryFireTexture(string)` \{#setPrimaryFireTexture}

Sets a custom primary fire texture, to render while the entity is on fire

The effect is compound by two layers

The secondary layer is what renders in first person

The absence of a secondary layer uses the primary layer as fallback

The expected string is a resource path to a Minecraft block

**Example**:

```lua
renderer:setPrimaryFireTexture("textures/block/soul_fire_0")
```

---

### `getPrimaryFireTexture()` \{#getPrimaryFireTexture}

Gets the current custom primary fire texture

**Example**:

```lua
renderer:getPrimaryFireTexture()
```

---

### `setSecondaryFireTexture(string)` \{#setSecondaryFireTexture}

Sets a custom secondary fire texture, to render while the entity is on fire
The effect is compound by two layers

The secondary layer is what renders in first person

The absence of a secondary layer uses the primary layer as fallback

The expected string is a resource path to a Minecraft block

**Example**:

```lua
renderer:setSecondaryFireTexture("textures/block/soul_fire_1")
```

---

### `getSecondaryFireTexture()` \{#getSecondaryFireTexture}

Gets the current custom secondary fire texture

**Example**:

```lua
renderer:getSecondaryFireTexture()
```

---

### `setCrosshairOffset(Vector2)` \{#setCrosshairOffset}

Sets the offset of your crosshair

**Example**:

```lua
renderer:setCrosshairOffset(20, 20)
```

---

### `getCrosshairOffset()` \{#getCrosshairOffset}

Gets the offset of your crosshair

**Example**:

```lua
renderer:getCrosshairOffset()
```

---

### `setRenderCrosshair(bool)` \{#setRenderCrosshair}

Sets if your crosshair should be rendered

**Example**:

```lua
renderer:setRenderCrosshair(false)
```

---

### `shouldRenderCrosshair()` \{#shouldRenderCrosshair}

Check if your crosshair should be rendered

**Example**:

```lua
renderer:shouldRenderCrosshair()
```

---

### `setRenderVehicle(bool)` \{#setRenderVehicle}

Sets if your vehicle should be rendered

**Example**:

```lua
renderer:setRenderVehicle(false)
```

---

### `shouldRenderVehicle()` \{#shouldRenderVehicle}

Check if your vehicle should be rendered

**Example**:

```lua
renderer:shouldRenderVehicle()
```

---

### `setRenderFire(bool)` \{#setRenderFire}

Sets if the fire effect should be rendered

**Example**:

```lua
renderer:setRenderFire(false)
```

---

### `shouldRenderFire()` \{#shouldRenderFire}

Checks if the fire effect should be rendered

**Example**:

```lua
renderer:shouldRenderFire()
```

---

### `setRenderHUD(bool)` \{#setRenderHUD}

Sets if the vanilla HUD should be rendered

**Example**:

```lua
renderer:setRenderHUD(false)
```

---

### `shouldRenderHUD()` \{#shouldRenderHUD}

Checks if the vanilla HUD should be rendered

**Example**:

```lua
renderer:shouldRenderHUD()
```

---

### `setForcePaperdoll(bool)` \{#setForcePaperdoll}

Sets if the paperdoll should forcefully be rendered

**Example**:

```lua
renderer:setForcePaperdoll(true)
```

---

### `shouldForcePaperdoll()` \{#shouldForcePaperdoll}

Check if the paperdoll should forcefully be rendered

**Example**:

```lua
renderer:shouldForcePaperdoll()
```

---

### `setShadowRadius(number)` \{#setShadowRadius}

Sets the radius of your shadow

The default value is nil, which means to use the vanilla default of 0.5 for players

The maximum value is 12

**Example**:

```lua
renderer:setShadowRadius(12)
```

---

### `getShadowRadius()` \{#getShadowRadius}

Gets the radius of your shadow

**Example**:

```lua
renderer:getShadowRadius()
```

---

### `setUpsideDown(bool)` \{#setUpsideDown}

Sets if this entity will be rendered upside down

**Example**:

```lua
renderer:setUpsideDown(true)
```

---

### `isUpsideDown()` \{#isUpsideDown}

Checks if this entity should be rendered upside down

**Example**:

```lua
renderer:isUpsideDown()
```

---

### `setBlockOutlineColor(Vector4)` \{#setBlockOutlineColor}

Sets the color of the selected block outline

Default alpha is 0.4

Might not be compatible with shaders

**Example**:

```lua
renderer:setBlockOutlineColor(0, 0, 1, 0.4)
```

---

### `getBlockOutlineColor()` \{#getBlockOutlineColor}

Returns the set color for the selected block outline
Default nil

**Example**:

```lua
renderer:getBlockOutlineColor()
```

---

### `setPostEffect(string)` \{#setPostEffect}

Sets the current [rendering effect](../enums/PostEffects)

Same as the discontinued Super Secret Settings

**Example**:

```lua
renderer:setPostEffect("invert")
```

---

### `setFOV(number)` \{#setFOV}

Sets the multiplier of your fov
The default value is nil, which means no changes will be applied to your fov

**Example**:

```lua
renderer:setFOV(2)
```

---

### `getFOV()` \{#getFOV}

Gets the multiplier of your FOV, as set by setFOV

**Example**:

```lua
renderer:getFOV()
```

---

### `setRenderLeftArm(bool)` \{#setRenderLeftArm}

Toggle if the left arm should be rendered in first person, regardless if you are holding an item or not

**Example**:

```lua
renderer:setRenderLeftArm(true)
```

---

### `getRenderLeftArm()` \{#getRenderLeftArm}

Gets if the left arm should be rendered while in first person

**Example**:

```lua
renderer:getRenderLeftArm()
```

---

### `setRenderRightArm(bool)` \{#setRenderRightArm}

Toggle if the right arm should be rendered in first person, regardless if you are holding an item or not

**Example**:

```lua
renderer:setRenderRightArm(true)
```

---

### `getRenderRightArm()` \{#getRenderRightArm}

Gets if the right arm should be rendered while in first person

**Example**:

```lua
renderer:getRenderRightArm()
```

---

### `setEyeOffset(Vector3)` \{#setEyeOffset}

Sets an offset for the entity eye position, altering the targeted block and entity

:::caution

This function can be caught by anti-cheats and could get you banned from servers

:::

**Example**:

```lua
renderer:setEyeOffset(0, 2, 0)
```

---

### `getEyeOffset()` \{#getEyeOffset}

Returns the offset for the entity eye position, as set by setEyeOffset

**Example**:

```lua
renderer:getEyeOffset()
```

The renderer API is accessed with the <code>renderer</code> global. Like so: <code>renderer:setRenderVehicle(false)</code>

## Altering the Camera

### setOffsetCameraPivot(vec3)
Sets the offset pivot for the camera

The pivot will also move the camera

Its values are relative to the world

Nil values for pivot are assumed to be 0

For absolute rotation values, check out the non-offset pivot function

### getCameraOffsetPivot
Gets the offset pivot for the camera

### setCameraPivot(vec3)
Sets the absolute pivot for the camera

The pivot will also move the camera

Its values are relative to the World

Nil values for pivot are assumed to be 0

For relative rotation values, check out the "offset" pivot function

### getCameraPivot
Gets the absolute pivot for the camera

### setCameraPos(vec3)
Sets the position offset for the camera

Nil values for position are assumed to be 0

### getCameraPos
Gets the position offset for the camera

### setOffsetCameraRot(vec3)
Sets the offset rotation for the camera

Nil values for rotation are assumed to be 0

Angles are given in degrees

For absolute rotation values, check out the non-offset rot function

### getCameraOffsetRot
Gets the offset rotation for the camera

### setCameraRot(vec3)
Sets the absolute rotation of the camera

The position is not taken into account for roll

Nil values for rotation are assumed to be 0

For relative rotation values, check out the "offset" rot function

### getCameraRot
Gets the absolute rotation of the camera

### setCameraMatrix(matrix4)
Sets the camera matrix with the given matrix

### getCameraMatrix
Returns the modified camera matrix

### setCameraNormal(matrix3)
Sets the camera normal matrix with the given matrix

### getCameraNormal
Returns the modified camera normal matrix

## Detecting Camera Information

### isFirstPerson
Checks if your camera is in the first person view

### isCameraBackwards
Checks if your camera is in the backwards third person view

## Element Rendering

### setOutlineColor(vec3)
Sets the glowing effect outline color

### getOutlineColor
Gets the glowing effect outline color set by setOutlineColor

### setBlockOutlineColor(vec4)
Sets the color of the selected block outline

Default alpha is 0.4

Might not be compatible with shaders

### getBlockOutlineColor
Returns the set color for the selected block outline

### setPrimaryFireTexture(string)
Sets a custom primary fire texture, to render while the entity is on fire

The effect is compound by two layers

The secondary layer is what renders in first person

The absence of a secondary layer uses the primary layer as fallback

### getPrimaryFireTexture
Gets the current custom primary fire texture

### setSecondaryFireTexture(string)
Sets a custom secondary fire texture, to render while the entity is on fire
The effect is compound by two layers

The secondary layer is what renders in first person

The absence of a secondary layer uses the primary layer as fallback

### getSecondaryFireTexture
Gets the current custom secondary fire texture

### setCrosshairOffset(vec2)
Sets the offset of your crosshair

### getCrosshairOffset
Gets the offset of your crosshair

### setRenderCrosshair(bool)
Sets if your crosshair should be rendered

### shouldRenderCrosshair
Check if your crosshair should be rendered

### setRenderVehicle(bool)
Sets if your vehicle should be rendered

### shouldRenderVehicle
Check if your vehicle should be rendered

### setRenderFire(bool)
Sets if the fire effect should be rendered

### shouldRenderFire
Checks if the fire effect should be rendered

### setRenderHUD(bool)
Sets if the vanilla HUD should be rendered

### shouldRenderHUD
Checks if the vanilla HUD should be rendered

### setForcePaperdoll(bool)
Sets if the paperdoll should forcefully be rendered

### shouldForcePaperdoll
Check if the paperdoll should forcefully be rendered

### setShadowRadius(number)
Sets the radius of your shadow

The default value is nil, which means to use the vanilla default of 0.5 for players

The maximum value is 12

### getShadowRadius
Gets the radius of your shadow

### setUpsideDown(bool)
Sets if this entity will be rendered upside down

### isUpsideDown
Checks if this entity should be rendered upside down

### setBlockOutlineColor(vec4)
Sets the color of the selected block outline

Default alpha is 0.4

Might not be compatible with shaders

### getBlockOutlineColor
Returns the set color for the selected block outline
Default nil

### setPostEffect(string)
Sets the current [rendering effect](https://github.com/KitCat962/FiguraRewriteRewrite/wiki/PostEffects)

Same as the discontinued Super Secret Settings

### setFOV(number)
Sets the multiplier of your fov
The default value is nil, which means no changes will be applied to your fov

### getFOV
Gets the multiplier of your FOV, as set by setFOV

### setRenderLeftArm(bool)
Toggle if the left arm should be rendered in first person, regardless if you are holding an item or not

### getRenderLeftArm
Gets if the left arm should be rendered while in first person

### setRenderRightArm(bool)
Toggle if the right arm should be rendered in first person, regardless if you are holding an item or not

### getRenderRightArm
Gets if the right arm should be rendered while in first person

### setEyeOffset(vec3)
Sets an offset for the entity eye position, altering the targeted block and entity

***Note: This function can be caught by anti-cheats and could get you banned from servers***

### getEyeOffset
Returns the offset for the entity eye position, as set by setEyeOffset
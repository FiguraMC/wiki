import Emoji from '@site/src/components/Emoji';
import Image from '@site/src/components/Image';

Proper tutorials for Blockbench can be found online. This page just explains Figura specific stuff. This page assumes you are using the Desktop version of Blockbench, not the online app.

## Project Properties

This is the popup that appears when you create a Project. You can also get to this page via File->Project.

<Image src="/img/blockbench/project.png" width="400" />

Figura only accepts <Emoji icon="file/bbmodel"/> bbmodels in the Generic Model format. If your format is not Generic Model, Figura will refuse to load the avatar. To convert a project, File->Convert Project. Deselect `Create Copy`, ensure format is Generic Model, and press Confirm. If the popup does not go away after pressing Confirm, close it manually.

<Image src="/img/blockbench/convert_project.png" width="400" />

The `File Name` and `Model Identifier` fields are unused by Figura.

`UV Mode` determines how Blockbench handles how UVs are positioned. Figura will handle both `Box UV` and `Per-face UV`. Its up to you which you want. UVs determine where a 2D texture is applied to a 3D model. Each face has it's own UV coordinates which determines where on the 2D texture it will get it's pixels from.

<Image src="/img/blockbench/uvmode_box.png" width="200" className="float-right" />

`Box UV` forces each face of a cube to match how vanilla does UVs. If you have ever edited your own vanilla skin before, you will recognize the pattern. While this does simplify the texturing process, it limits what you can do. Also, all textures in the model must have the same size, as what is a pixel is determined by the project's global `Texture Size` instead of the size of the texture itself. Also, meshes cannot be used while using `Box UV`

<div className="clear-both" />

<Image src="/img/blockbench/uvmode_perface.png" width="200" className="float-right" />

`Per-face UV` allows full control over each face of the cube/mesh. Each face can be positioned, scaled, and rotated individually from each other. You can even set a different texture for each face, or remove a face to reduce clutter. While the pixel grid is effected by the project's global `Texture Size`, changing the `Texture Size` has zero effect on the UVs themselves, unlike `Box UV` which will have destructive effects when changing the project

<div className="clear-both" />

`Texture Size`.

The `Texture Size` field aids with UV calculation. In rendering, UVs are a float from 0-1 representing the percentage of the texture that this point is at. A UV of (0.5,0.5) represents the center of the texture, regardless of the texture's own size. A way of calculating this percentage is to take the pixel coordinate you want and divide it by the texture's size. (32,16)/(64,64)=(0.5,0.25). The `Texture Size` field determines this texture size globally. Blockbench never uses the texture's actual size, which causes issues when you have a model with textures of different sizes. Thankfully, changing it only has an effect om ModelParts that use `Box UV`, so when you need to edit ModelParts using a different sized texture, you can change this with no worries so long as you are using `Per-face UV`.

## ModelParts

### ParentTypes

If the name of a <Emoji icon="blockbench/group"/> group begins with a specific string, Figura will apply special effects to that group. Some examples include `Head`, `RightArm`, `World`. These are called [ParentTypes](../enums/ModelPartParentTypes).

### `Blank` Texture

ModelParts that use the Blockbench inbuilt `Blank` texture will not be loaded by Figura at all. If you want a Model to not have a texture and assign the texture via script, use the [`ignoredTextures` metadata customization](../tutorials/Avatar%20Metadata). The `Transparent` texture that can only be applied to individual faces in Per-face UV behave the same way. Figura will not load those faces.

### Meshes

<Emoji icon="blockbench/mesh"/> Meshes are allowed. Nothing special with Figura. This is just here for those that need to be explicitly told Meshes work.

## Textures

### Local/External Textures

In Blockbench, textures have 2 distinct states: local and external.

To determine the state your texture is in, Right Click a texture->Properties. An External texture will have a file path, while a Local one will not.

There is one key factor for a texture to be External, and that is for the file itself to be inside the avatar's folder. If the filepath does not lead to a file inside the avatar's folder, Figura will load it as a local file.

<Image src="/img/blockbench/texture_local.png" width="300" />

<Image src="/img/blockbench/texture_external.png" width="300" />

Whether a texture is Local or External will determine how Figura will load it which is important when getting a Texture in script.

The `Render Mode` field determines how the texture will be rendered. In Blockbench, this changes nothing visually.

**Figura ignores `Render Mode`.** The Primary Texture will always be `TRANSLUCENT` by default, and the Secondary Texture will always be `EMISSIVE` by default.

The `Render Sides` field determines if the cube should be rendered when looking at the back of a face.

**Figura ignores `Render Sides`.** To apply the same effect, use the `TRANSLUCENT_CULL` [RenderType](../enums/RenderTypes) in a script.

### Texture Suffix

In Blockbench, each cube (face) can only point to a single texture, which means that Figura needs to get creative when it wants to link multiple textures together for stuff like emissive textures.

When Figura loads a texture, it looks for another texture with the same name but with a specific suffix. Then for all ModelParts in Blockbench that use the texture, Figura will link the suffixed texture to that ModelPart as well.

List of suffixes used by Figura:

-   `\_e`: This texture will be used as the Secondary Texture, also known as the [Emissive Texture](../tutorials/Emissive%20Textures), of the ModelPart. The Secondary RenderType of a ModelPart is by default `EMISSIVE`, but can be changed in script.
-   `\_n`: This texture will be used as the [Normal Texture](https://en.wikipedia.org/wiki/Normal_mapping). **Do not confuse this with the Primary Texture**. "Normal" means something very specific in modeling. This suffix is used with Iris Shaders, and does nothing with vanilla rendering. **_This suffix currently does not function_**.
-   `\_s`: This texture will be used as the [Specular Texture](https://en.wikipedia.org/wiki/Specularity). This suffix is used with Iris Shaders, and does nothing with vanilla rendering. **_This suffix currently does not function_**.

An example is the <Emoji icon="blockbench/group"/> `Head`, <Emoji icon="file/texture"/> `skin`, and <Emoji icon="file/texture"/> `skin_e`. When the <Emoji icon="blockbench/group"/> `Head` uses the texture <Emoji icon="file/texture"/> `skin`, when the Avatar is loaded, <Emoji icon="file/texture"/> `skin_e` is used as the Secondary Texture, ie the Emissive Texture.

<Image src="/img/blockbench/settexture.png" width="300" />

For a texture to have the same name, they must both be either [Local or External](#localexternal-textures), and should they be external, they must be in the same folder. Otherwise, they will not have the same name internally.

For textures with file extensions, the suffix goes before the extension. <Emoji icon="file/texture"/> `skin_e.png`

## Animations

### Animation Properties

This popup appears when you create an animation. To get back to this popup, Right Click an Animation->Properties.

<Image src="/img/blockbench/animation_properties.png" width="500" />

`Name` is the animation's name. It is very important that you change this to something shorter. The entire textbox is the animation's name, so unless you want to refer to this animation in lua with `animations.player["animation.model.new"]`, change the name. An animation named just `new` is indexed via `animations.player.new`. Much nicer, right?

`Loop Mode` controls what happens when the animation stops. There are 3 valid loop modes: Play Once, Hold On Last Frame, and Loop.

-   Play Once: Stops the animation once the animation ends.
-   Hold On: Last Frame keeps the animation values from the end of the animation. The animation is still technically playing.
-   Loop: Sets the animation's time to 0, or to the animation's end if the animation is playing backwards.

`Override` determines if Mimic-type [ParentTypes](../enums/ModelPartParentTypes) will apply their transformations while this animation is playing. It only effects ModelParts that have a keyframe in this animation. Default `false`

`Snapping` determines the snapping distance for keyframes. Holding ctrl while moving a keyframe ignores this. **Figura does not care about this value**.

`Anim Time Update`. I have no clue what this does in Blockbench, but Figura uses this value for determining the start offset. In other words, when you call `play` this is the time that figura will start the animation at. This allows you to put keyframes behind the start of the animation which can help with Cubic Interpolation keyframes. Default is `0`.

`Blend Weight` is a multiplier for every single keyframe in the animation. Not very useful as a property, but it can be changed in script to raise or reduce the intensity of animations. Default is `1`.

`Start Delay` is the time it takes after calling `play` for the animation to actually start. Default is `0`.

`Loop Delay` is a property that only shows up with the Loop `Loop Mode`. It adds a delay between the animation ending, then starting again. Default is `0`.

### Keyframe Expressions

While Blockbench supports Molang, **Figura does not**.

To remedy this, Figura allows writing lua code into keyframe fields.

Figura provides data for the keyframe expression, which is accessible via the `...` variable.

It has 2 pieces of data, the keyframe time, and the Animation object of the animation itself.

Keyframe time is measured in percentage, not seconds. So assuming a step interpolation keyframe, `0` is at the time at the keyframe itself, and `1` is at the next keyframe. Keyframe time is only useful when the keyframe uses step interpolation.

When using other interpolation types, the expression will execute before it has reached the keyframe itself to interpolate. While this happens, it will give the Keyframe time of the previous keyframe and go back to zero once it reaches itself.

They can be extracted via the following line:

```lua
local time, anim = ...
```

Keyframe Expressions accept 2 different formats:

-   A single lua expression that evaluates to a number
-   A lua script that `returns` a number

`math.sin(world.getTime())` is a single lua expression, so it is a valid Keyframe Expression.

However, `local _, anim=... math.sin(anim:getTime())` is not a single lua expression and will need to have an explicit return value:

```lua
local _, anim = ...
return math.sin(anim:getTime())
```

Alternatively, you can rewrite it as a single lua expression: `math.sin({...}[2]:getTime())`. This deconstructs the `...` varargs into a table and grabs the second value.

### Instruction Keyframes

Instruction keyframes run lua code when the animation reaches that keyframe. This can be used to play sounds, spawn particles, literally anything. Remember that Lua code is what goes in this spot, not Molang.

You can access instruction keyframes via the magic wand icon. An effects timeline should appear along with the other ModelPart timelines.

### Unsupported Animation Features

Below are features provided by Blockbench Animations that Figura does not use when loading the bbmodel.

#### Variable Placeholders

<Image src="/img/blockbench/animation_variableplaceholders.png" width="200" />

This is completely ignored by Figura.

#### Inverse Kinematics

Don't bother. Not a thing in Figura.

#### Global Rotation

There is a toggle for Global Rotation next to the rotation timeline for ModelParts. Figura does not obey this, so keep it disabled.

#### Sound Keyframes

Figura does not read these. Use [Instruction Keyframes](#instruction-keyframes).

#### Particle Keyframes

Figura does not read these. Use [Instruction Keyframes](#instruction-keyframes).

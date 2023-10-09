import Emoji from '@site/src/components/Emoji';

Proper tutorials for blockbench can be found online. This page just explains Figura specific stuff. This page assumes you are using the Desktop version of BlockBench, not the online app.<br/>

## Project Properties

This is the popup that appears when you create a Project. You can also get to this page via File->Project.<br/>
<img src={require("@site/static/img/blockbench/project.png").default} width="400"></img><br/>
Figura only accepts <Emoji icon="file/bbmodel"/> bbmodels in the Generic Model format. If your format is not Generic Model, Figura will refuse to load the avatar. To convert a project, File->Convert Project. Deselect <code>Create Copy</code>, ensure format is Generic Model, and press Confirm. If the popup does not go away after pressing Confirm, close it manually.<br/>
<img src={require("@site/static/img/blockbench/convert_project.png").default} width="400"></img><br/>

The <code>File Name</code> and <code>Model Identifier</code> fields are unused by Figura.<br/>
<code>UV Mode</code> determines how BlockBench handles how UVs are positioned. Figura will handle both <code>Box UV</code> and <code>Per-face UV</code>. Its up to you which you want. UVs determine where a 2D texture is applied to a 3D model. Each face has it's own UV coordinates which determines where on the 2D texture it will get it's pixels from.<br/><br/>

<img src={require("@site/static/img/blockbench/uvmode_box.png").default} width="200" style={{"float":"right"}}></img>
<code>Box UV</code> forces each face of a cube to match how vanilla does UVs. If you have ever edited your own vanilla skin before, you will recognize the pattern. While this does simplify the texturing process, it limits what you can do. Also, all textures in the model must have the same size, as what is a pixel is determined by the project's global <code>Texture Size</code> instead of the size of the texture itself. Also, meshes cannot be used while using <code>Box UV</code><br/>

<div style={{"clear":"both"}}></div>

<img src={require("@site/static/img/blockbench/uvmode_perface.png").default} width="200" style={{"float":"right"}}></img>

<code>Per-face UV</code> allows full control over each face of the cube/mesh. Each face can be positioned, scaled, and rotated individually from each other. You can even set a different texture for each face, or remove a face to reduce clutter. While the pixel grid is effected by the project's global <code>Texture Size</code>, changing the <code>Texture Size</code> has zero effect on the UVs themselves, unlike <code>Box UV</code> which will have destructive effects when changing the project

<div style={{"clear":"both"}}></div>

<code>Texture Size</code>.<br/>

The <code>Texture Size</code> field aids with UV calculation. In rendering, UVs are a float from 0-1 representing the percentage of the texture that this point is at. A UV of (0.5,0.5) represents the center of the texture, regardless of the texture's own size. A way of calculating this percentage is to take the pixel coordinate you want and divide it by the texture's size. (32,16)/(64,64)=(0.5,0.25). The <code>Texture Size</code> field determines this texture size globally. BlockBench never uses the texture's actual size, which causes issues when you have a model with textures of different sizes. Thankfully, changing it only has an effect om ModelParts that use <code>Box UV</code>, so when you need to edit ModelParts using a different sized texture, you can change this with no worries so long as you are using <code>Per-face UV</code>.<br/>

## ModelParts

### ParentTypes

If the name of a <Emoji icon="blockbench/group"/> group begins with a specific string, Figura will apply special effects to that group. Some examples include <code>"Head"</code>, <code>"RightArm"</code>, <code>"World"</code>. These are called [ParentTypes](../enums/ModelPartParentTypes).

### <code>Blank</code> Texture

ModelParts that use the BlockBench inbuilt <code>Blank</code> texture will not be loaded by Figura at all. If you want a Model to not have a texture and assign the texture via script, use the [<code>ignoredTextures</code> metadata customization](../tutorials/Avatar%20Metadata). The <code>Transparent</code> texture that can only be applied to individual faces in Per-face UV behave the same way. Figura will not load those faces.

### Meshes

<Emoji icon="blockbench/mesh"/> Meshes are allowed. Nothing special with Figura. This is just here for those that need to be explicitly told Meshes work.

## Textures

### Local/External Textures

In BlockBench, textures have 2 distinct states: Local and External.<br/>
To determine the state your texture is in, Right Click a texture->Properties. An External texture will have a file path, while a Local one will not.<br/>There is one key factor for a texture to be External, and that is for the file itself to be inside the avatar's folder. If the filepath does not lead to a file inside the avatar's folder, Figura will load it as a Local file.<br/>
<img src={require("@site/static/img/blockbench/texture_local.png").default} width="300"></img><img src={require("@site/static/img/blockbench/texture_external.png").default} width="300"></img><br/>

Whether a texture is Local or External will determine how Figura will load it which is important when getting a Texture in script.<br/>

The <code>Render Mode</code> field determines how the texture will be rendered. In BlockBench, this changes nothing visually.<br/>
**Figura ignores <code>Render Mode</code>.** The Primary Texture will always be <code>"TRANSLUCENT"</code> by default, and the Secondary Texture will always be <code>"EMISSIVE"</code> by default.<br/>

The <code>Render Sides</code> field determines if the cube should be rendered when looking at the back of a face.<br/>
**Figura ignores <code>Render Sides</code>.** To apply the same effect, use the <code>"TRANSLUCENT_CULL"</code> [RenderType](../enums/RenderTypes) in a script.<br/>

### Texture Suffix

In BlockBench, each cube (face) can only point to a single texture, which means that Figura needs to get creative when it wants to link multiple textures together for stuff like emissive textures.<br/>
When Figura loads a texture, it looks for another texture with the same name but with a specific suffix. Then for all ModelParts in BlockBench that use the texture, Figura will link the suffixed texture to that ModelPart as well.

List of suffixes used by Figura:

-   <code>\_e</code>: This texture will be used as the Secondary Texture, also known as the [Emissive Texture](../tutorials/Emissive%20Textures), of the ModelPart. The Secondary RenderType of a ModelPart is by default <code>"EMISSIVE"</code>, but can be changed in script.
-   <code>\_n</code>: This texture will be used as the [Normal Texture](https://en.wikipedia.org/wiki/Normal_mapping). <b>Do not confuse this with the Primary Texture</b>. "Normal" means something very specific in modeling. This suffix is used with Iris Shaders, and does nothing with vanilla rendering. <b><i>This suffix currently does not function</i></b>.
-   <code>\_s</code>: This texture will be used as the [Specular Texture](https://en.wikipedia.org/wiki/Specularity). This suffix is used with Iris Shaders, and does nothing with vanilla rendering. <b><i>This suffix currently does not function</i></b>.

An example is the <Emoji icon="blockbench/group"/> <code>Head</code>, <Emoji icon="file/texture"/> <code>skin</code>, and <Emoji icon="file/texture"/> <code>skin_e</code>. When the <Emoji icon="blockbench/group"/> <code>Head</code> uses the texture <Emoji icon="file/texture"/> <code>skin</code>, when the Avatar is loaded, <Emoji icon="file/texture"/> <code>skin_e</code> is used as the Secondary Texture, ie the Emissive Texture.<br/>
<img src={require("@site/static/img/blockbench/settexture.png").default} width="300"></img><br/>

For a texture to have the same name, they must both be either [Local or External](#localexternal-textures), and should they be external, they must be in the same folder. Otherwise, they will not have the same name internally.<br/>
For textures with file extensions, the suffix goes before the extension. <Emoji icon="file/texture"/> <code>skin_e.png</code><br/>

## Animations

### Animation Properties

This popup appears when you create an animation. To get back to this popup, Right Click an Animation->Properties.<br/>

<img src={require("@site/static/img/blockbench/animation_properties.png").default} width="500"></img><br/>

<code>Name</code> is the animation's name. It is very important that you change this to something shorter. The entire textbox is the animation's name, so unless you want to refer to this animation in lua with <code>animations.player["animation.model.new"]</code>, change the name. An animation named just <code>"new"</code> is indexed via <code>animations.player.new</code>. Much nicer, right?
<br/><br/>

<code>Loop Mode</code> controls what happens when the animation stops. There are 3 valid loop modes: Play Once, Hold On Last Frame, and Loop.<br/>
Play Once stops the animation once the animation ends.<br/>
Hold On Last Frame keeps the animation values from the end of the animation. The animation is still technically playing.<br/>
Loop sets the animation's time to 0, or to the animation's end if the animation is playing backwards.
<br/><br/>

<code>Override</code> determines if Mimic-type <a href="../enums/ModelPartParentTypes">ParentTypes</a> will apply their transformations while this animation is playing. It only effects ModelParts that have a keyframe in this animation. Default <code>false</code>
<br/><br/>

<code>Snapping</code> determines the snapping distance for keyframes. Holding ctrl while moving a keyframe ignores this. <b>Figura does not care about this value</b>.
<br/><br/>

<code>Anim Time Update</code>. I have no clue what this does in blockbench, but figura uses this value for determining the start offset. In other words, when you call <code>play</code> this is the time that figura will start the animation at. This allows you to put keyframes behind the start of the animation which can help with Cubic Interpolation keyframes. Default is <code>0</code>.
<br/><br/>

<code>Blend Weight</code> is a multiplier for every single keyframe in the animation. Not very useful as a property, but it can be changed in script to raise or reduce the intensity of animations. Default is <code>1</code>.
<br/><br/>

<code>Start Delay</code> is the time it takes after calling <code>play</code> for the animation to actually start. Default is <code>0</code>.
<br/><br/>

<code>Loop Delay</code> is a property that only shows up with the Loop <code>Loop Mode</code>. It adds a delay between the animation ending, then starting again. Default is <code>0</code>.
<br/><br/>

### Keyframe Expressions

While blockbench supports Molang, **Figura does not**.<br/>
To remedy this, Figura allows writing lua code into keyframe fields.<br/>

Figura provides data for the keyframe expression, which is accessible via the `...` variable.

It has 2 pieces of data, the keyframe time, and the Animation object of the animation itself.<br/>
Keyframe time is measured in percentage, not seconds. So assuming a Step interpolation keyframe, `0` is at the time at the keyframe itself, and `1` is at the next keyframe. Keyframe time is only useful when the keyframe uses Step interpolation.<br/>When using other interpolation types, the expression will execute before it has reached the keyframe itself to interpolate. While this happens, it will give the Keyframe time of the previous keyframe and go back to zero once it reaches itself.

They can be extracted via the following line:

```lua
local time, anim = ...
```

Keyframe Expressions accept 2 different formats:

-   A single lua expression that evaluates to a number
-   A lua script that `returns` a number

`math.sin(world.getTime())` is a single lua expression, so it is a valid Keyframe Expression.<br/> However, `local _, anim=... math.sin(anim:getTime())` is not a single lua expression and will need to have an explicit return value:

```lua
local _, anim = ...
return math.sin(anim:getTime())
```

Alternatively, you can rewrite it as a single lua expression: `math.sin({...}[2]:getTime())`<br/>
This deconstructs the `...` varargs into a table and grabs the second value.

### Instruction Keyframes

Instruction Keyframes run lua code when the Animation reaches that keyframe. This can be used to play sounds, spawn particles, literally anything. Remember that Lua code is what goes in this spot, not Molang.<br/>
You can access Instruction Keyframes via the Magic Wand icon. An Effects timeline should appear along with the other ModelPart timelines.

### Animation Features That Figura Does Not Care About

Below are features provided by BlockBench Animations that figura does not use when loading the bbmodel.<br/>

**Variable Placeholders**<br/>
<img src={require("@site/static/img/blockbench/animation_variableplaceholders.png").default} width="200"></img><br/>
This is completely ignored by Figura.<br/>

**Inverse Kinematics**<br/>
Don't bother. Not a thing in Figura.

**Global Rotation**<br/>
There is a toggle for Global Rotation next to the Rotation timeline for ModelParts. Figura does not obey this, so keep it disabled.<br/>

**Sound Keyframes**<br/>
Figura does not read these. Use [Instruction Keyframes](#instruction-keyframes).<br/>

**Particle Keyframes**<br/>
Figura does not read these. Use [Instruction Keyframes](#instruction-keyframes).<br/>

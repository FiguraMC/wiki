import Emoji from '@site/src/components/Emoji';

This page describes everything to know about Emissive Textures.

## Defining a Texture as Emissive

Every ModelPart in BlockBench has a reference to a single texture. When Figura loads the avatar, Figura looks for a texture with the same name as the texture used by the ModelPart but with <code>\_e</code> added to the end of it. For example, the emissive texture used by ModelParts that use <Emoji icon="file/texture"/> <code>texture.png</code> will use <Emoji icon="file/texture"/> <code>texture_e.png</code> as their emissive texture.<br/>
<code>\_e</code> is one of the [texture suffixes](../start_here/BlockBench#texture-suffix) that Figura looks for when loading an avatar.

## Emissive Texture Behavior

<img src={require("@site/static/img/emissive-example/emissive.png").default} align="right"/>

The pixels on a Texture using the <code>"EMISSIVE"</code> [RenderType](../enums/RenderTypes) are not interpreted the same was as a regular texture.<br/>

First of all, the alpha values of pixels are ignored. This means that the emissive texture itself cannot be halfway visible. Its either the pixel is completely opaque, or completely gone. No in between.<br/>
On the texture below, both pixels will render the exact same. Even though they appear to be 2 distinct colors, the right color has an alpha value of <code>139</code> and is blending with the gray GitHub background. They have the exact same RGB values and will be rendered exactly the same under the <code>"EMISSIVE"</code> RenderType.<br/>
<img src={require("@site/static/img/emissive-example/alpha.png").default} width="40"/>

Second, the "brightness" of a pixel is what determines the intensity of the emissive glow. If you know HSV, its the Value that controls this property. Emissive Intensity controls how bright the pixel will render, but also how much of the pixel behind it will show through.<br/>
On the texture below, both pixels will render with the same color. The pixel on the left will render with max brightness, not allowing the pixels on the base texture to blend through. The pixel on the right won't glow as much, but allows the pixels on the base texture to blend through.<br/>
<img src={require("@site/static/img/emissive-example/brightness.png").default} width="40"/>

## Iris Emissives

If you use Iris, regardless of the fact of if you are currently using custom shaders, the <code>"EMISSIVE"</code> RenderType is modified to use the alpha value when rendering the emissive texture. How exactly is not known. Experimentation is required.

## Emissive Render Types

There are three emissive render types: EMISSIVE, EMISSIVE_SOLID, and EYES. All of these **require** the original \_e texture and will make the same pixels glow that are in the \_e texture.

### EMISSIVE

This is the default render type of the \_e texture.

### EMISSIVE_SOLID

Like EMISSIVE, but it doesn't allow transparency, transparent pixels will render as black.

### EYES

The render type as Enderman and Spider eyes. This will not make the glowing pixels visible while you are under the invisibility effect.

### Setting Render Type Example

To be clear: To use these you still need to have the \_e texture, this can simply change the rendering of it

You can set the render type to "Eyes" like this

```lua
models:setSecondaryRenderType("Eyes")
```

Note: The glow on the paperdoll and the skull may look slightly different.

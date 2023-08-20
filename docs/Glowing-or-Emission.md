How to make parts of your avatar glow!

Note: This glow is purely cosmetic. Some rendering mods like Iris or Sodium can change how the emission looks, and shaders definitely will.

# Emissive Texture
1. Make a copy of the texture
2. Add _e to the end of the name of the texture (texture to texture_e)
3. Open the _e texture in an image editor that supports transparency and erase every pixel you don't want to glow (This can also be done in Blockbench but watch out, as Blockbench doesn't save more than a few texture edits at a time)
4. If it isn't already, add the _e texture to the Blockbench file
That's it, have fun.

# Things To Note:
1. The brightness of the glow is dictated by the value (brightness) of the pixel, so white glows the brightest, and black doesn't glow at all
2. The final color of the glow is additive, meaning the color beneath the glow and the color above it will add their values together, this usually won't be noticeable unless you're using Iris/Sodium/shaders.

# Emissive Render Types
There are three emissive render types: EMISSIVE, EMISSIVE_SOLID, and EYES. All of these **require** the original _e texture and will make the same pixels glow that are in the _e texture.

## EMISSIVE
This is the default render type of the _e texture.

## EMISSIVE_SOLID
Like EMISSIVE, but it doesn't allow transparency, transparent pixels will render as black.

## EYES
The render type as Enderman and Spider eyes. This will not make the glowing pixels visible while you are under the invisibility effect.

## Setting Render Type Example
To be clear: To use these you still need to have the _e texture, this can simply change the rendering of it

If you want emissives to glow brightly on skulls or the paperdoll you can set the render type to "Eyes" like this
```lua
models:setSecondaryRenderType("Eyes")
```
Note: The glow on the paperdoll and the skull may look slightly different.
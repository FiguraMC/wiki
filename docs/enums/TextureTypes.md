Texture Types you can set using <code>setPrimaryTexture</code> and <code>setSecondaryTexture</code><br/>

**Example**:

```lua
models.myModel.root:setPrimaryTexture("SKIN")

models.myOtherModel:setSecondaryTexture("CUSTOM", textures["myTexture"])
```

---

## All Texture Types

| Type        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `SKIN`      | Your 64x64 Minecraft skin                                                |
| `CAPE`      | Your cape                                                                |
| `ELYTRA`    | Your elytra                                                              |
| `RESOURCE`  | A texture from Minecraft itself, compatible with resource packs          |
| `PRIMARY`   | The modelPart's original texture in Blockbench                           |
| `SECONDARY` | The modelPart's original secondary texture in Blockbench (if one exists) |
| `SPECULAR`  | Setting a specular map for rendering mods that use it                    |
| `NORMAL`    | Setting a normal map for rendering mods that use it                      |
| `CUSTOM`    | A texture object from Blockbench or one created via the Texture API      |

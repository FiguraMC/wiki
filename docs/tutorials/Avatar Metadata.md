import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

<Emoji icon="file/json"/> <code>avatar.json</code> is the file that contains Avatar Metadata. It tells Figura specific information about the avatar.

## Json Basics

The format that metadata is stored in is JSON. More specifically, a JSON object. It behaves very similar to a Lua table, it just uses different syntax. However, JSON has a very strict syntax and any errors will cause the avatar to fail to load.

JSON objects operate on key value pairs. Keys are separated from their values using colons (<code>:</code>), and entries are separated with commas (<code>,</code>). Unlike Lua tables, keys must be strings.

```json
{
    "key": "value",
    "stringKey,numberValue": 4,
    "objectValue": {
        "key, but of sub object": "value, but of sub object"
    },
    "arrayWooo": [1, 2, "stringlol", {}, "42"]
}
```

## Metadata Fields

Figura looks for specific keys in this JSON object and does things based on the value. Remember that all of these keys are optional. You only need to define the ones you care about.

### <code>"name"</code> : String

The value of this key determines the name of the avatar. This name is showed on the avatar information sidebar on the right of the Wardrobe, but also determines the name used to find the avatar on the left of the Wardrobe.<br/>
If this key is not present, the name of the folder containing the <Emoji icon="file/json"/><code>avatar.json</code> file is used.

```json
{
    "name": "Katt"
}
```

### <code>"description"</code> : String

The value of this key will appear below the avatar's name in the wardrobe.

```json
{
    "name": "Katt",
    "description": "Example avatar.json"
}
```

### <code>"authors"</code> : String[]

The value of this key is an array of strings. An array can contain many different values within itself, and Figura expects these values to be strings. The values are used in the Authors field in the avatar information sidebar.

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"]
}
```

### <code>"author"</code> : String

A place for a single author, should you dislike <code>"authors"</code>. Does the exact same thing as <code>"authors"</code> with only 1 element.<br/>
If the <code>"authors"</code> key is present, this key is ignored.

### <code>"version"</code> : String

A place to define a [Semantic Versioning](https://semver.org/) version. You can define the lowest possible Figura version that this avatar will run on. If another client uses a Figura version that is less than the version defined here, a <Emoji icon="badge/warning"/> warning badge will appear on your nameplate for them. If they hover over it, it will state that their Figura version is lower than what this avatar was designed to run on. If this key does not exist, Figura will use the version that was used to load the avatar.<br/>

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["KitCat962", "Katakana962"],
    "version": "0.1.0"
}
```

### <code>"color"</code> : String

This key defines the color of the <Emoji icon="badge/mark"/> Figura mark on your nameplate. It must be a string in the format of a 3 character hex code or a 6 character hex code. For example, both <code>"3ab"</code> and <code>"FF00FF"</code> are valid inputs. If this key does not exist, the color <code>"5AAAFF"</code> will be used.

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9"
}
```

### <code>"autoScripts"</code> : String[]

By default, every single <Emoji icon="file/lua"/> script file in the avatar will execute in an undefined order. The <code>require</code> function can be used to control when a script is first executed, but some may prefer to define the script order in the metadata. This key is an array of strings that define which scripts run and in which order. Scripts not defined here will not run by default on avatar init, but can still be ran via <code>require</code>. A script is specified via it's file name without the <code>.lua</code> extension. If a script is in a subfolder, that folder must also be defined, with the folder separator being a period (<code>.</code>).<br/>
Consider the following avatar:<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="halo.bbmodel" icon="file/bbmodel"/>
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel"/>
    </FileTreeNode>
    <FileTreeNode label="libs" icon="file/folder">
      <FileTreeNode label="armorAidLib.lua" icon="file/lua"/>
      <FileTreeNode label="RainbowNameplate.lua" icon="file/lua"/>
      <FileTreeNode label="JsonifyTextLib.lua" icon="file/lua"/>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="diamond_layer_1" icon="file/texture"/>
      <FileTreeNode label="diamond_layer_2" icon="file/texture"/>
    </FileTreeNode>
    <FileTreeNode label="script.lua" icon="file/lua"/>
    <FileTreeNode label="skin.png" icon="file/texture"/>
    <FileTreeNode label="skull.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

To make only <code>RainbowNameplate.lua</code> run on avatar init, the <code>autoScripts</code> would look like<br/>

```json
"autoScripts":["libs.RainbowNameplate"]
```

For our example metadata file, we will state that only <Emoji icon="file/lua"/> <code>script.lua</code> will run by default, and the script itself will call <code>require</code> on the library scripts which will "import" them into itself. You may be thinking "whats the point of <code>"autoScripts"</code> if <code>require</code> is objectively better at controlling script load order?", To which my response would be "I don't know". But if you give an empty array, then no script will run which can be useful for debugging.

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"]
}
```

### <code>"autoAnims"</code> : String[]

This key defines which animations should start playing when the avatar first loads. The string to reference an animation follows the pattern <code>"modelPath.animName"</code>.
Consider the following avatar:<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="halo.bbmodel" icon="file/bbmodel"/>
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel"/>
    </FileTreeNode>
    <FileTreeNode label="libs" icon="file/folder">
      <FileTreeNode label="armorAidLib.lua" icon="file/lua"/>
      <FileTreeNode label="RainbowNameplate.lua" icon="file/lua"/>
      <FileTreeNode label="JsonifyTextLib.lua" icon="file/lua"/>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="diamond_layer_1" icon="file/texture"/>
      <FileTreeNode label="diamond_layer_2" icon="file/texture"/>
    </FileTreeNode>
    <FileTreeNode label="script.lua" icon="file/lua"/>
    <FileTreeNode label="skin.png" icon="file/texture"/>
    <FileTreeNode label="skull.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

If we want the animation <code>"idle"</code> in the bbmodel <Emoji icon="file/bbmodel"/> <code>player.bbmodel</code>, we would include the string <code>"player.idle"</code> in the <code>"autoAnims"</code> array.<br/>
Folder seperation is done with a period (<code>.</code>) instead of slash (<code>/</code>).<br/>
If we want the animation <code>"spin"</code> in the model <Emoji icon="file/bbmodel"/> <code>halo.bbmodel</code>, we would include the string <code>"accessories.halo.spin"</code> in the <code>"autoAnims"</code> array.<br/>
This is not table indexing like how you would index the `animations` table to get an Animation. It is just string concatenation.<br/>
<code>autoAnims</code> has a very niche use case as 99% of the time you have animations that you only want playing sometimes or want to play on a trigger. The only real use case is for a constantly playing looping animation that you don't want to waste ~8 instructions on play at the beginning of a script, or perhaps you have an avatar that does not have any script files and you want to keep it that way.

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"],
    "autoAnims": ["player.idle", "accessories.halo.spin"]
}
```

### <code>"ignoredTextures"</code> : String[]

This key defines which textures should be ignored when loading the avatar. This is useful for when you have a cube that gets its texture set via code, but since all cubes must have a blockbench texture for Figura to even load the cube, you will either have to waste space with a dummy texture or use another texture in the model, which probably won't look good on the cube. This key allows you to have that dummy texture in blockbench without having to waste precious bytes on having that texture loaded with the avatar.<br/>
Referencing a texture is exactly the same format as getting a Texture object with the <code>textures</code> global.<br/>
Consider this avatar:<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="halo.bbmodel" icon="file/bbmodel"/>
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel"/>
    </FileTreeNode>
    <FileTreeNode label="libs" icon="file/folder">
      <FileTreeNode label="armorAidLib.lua" icon="file/lua"/>
      <FileTreeNode label="RainbowNameplate.lua" icon="file/lua"/>
      <FileTreeNode label="JsonifyTextLib.lua" icon="file/lua"/>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="diamond_layer_1" icon="file/texture"/>
      <FileTreeNode label="diamond_layer_2" icon="file/texture"/>
    </FileTreeNode>
    <FileTreeNode label="script.lua" icon="file/lua"/>
    <FileTreeNode label="skin.png" icon="file/texture"/>
    <FileTreeNode label="skull.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

Hypothetically, the armor of this avatar is being handled by <Emoji icon="file/lua"/> <code>armorAidLib.lua</code>. It changes the texture of cubes to the vanilla armor textures. There is no need to have the <Emoji icon="file/texture"/> <code>diamond_layer_1</code> and <Emoji icon="file/texture"/> <code>diamond_layer_2</code> textures in the bbmodel, but setting the cubes to use <Emoji icon="file/texture"/> <code>skin.png</code> will make editing the model a pain. So we remove both unused textures.

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"],
    "autoAnims": ["player.idle", "accessories.halo.spin"],
    "ignoredTextures": ["player.diamond_layer_1", "player.diamond_layer_2"]
}
```

### <code>"customizations"</code> : \{"ModelPart" : \{"Customization" : "String"}}

Does that Type identifier make any sense? Not really, but thats what the <code>"customizations"</code> property is.<br/>
<code>"customizations"</code> allows for modifications to ModelParts that cant be done in BlockBench. You can still do this stuff via script, but the intent is for an avatar that does not have a script to still have access to some functionality.<br/>
<code>"customizations"</code> itself is a JSON object. The keys of that object are references to ModelParts, with the values being another JSON object. _That_ object contains key value pairs that operate on the referenced ModelPart.<br/>
Consider the following avatar:<br/>

<FileTreeRoot>
  <FileTreeNode label="KattExampleAvatar" icon="file/folder">
    <FileTreeNode label="accessories" icon="file/folder">
      <FileTreeNode label="ribbon.bbmodel" icon="file/bbmodel">
        <FileTreeNode label="cube" icon="blockbench/cube"/>
      </FileTreeNode>
    </FileTreeNode>
    <FileTreeNode label="avatar.json" icon="file/json"/>
    <FileTreeNode label="player.bbmodel" icon="file/bbmodel">
      <FileTreeNode label="Head" icon="blockbench/group">
        <FileTreeNode label="Head" icon="blockbench/cube"/>
      </FileTreeNode>
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

To target the <Emoji icon="blockbench/group"/> <code>Head</code>, the correct key to use would be <code>"player.Head"</code>.<br/>
To target the <Emoji icon="file/bbmodel"/> <code>ribbon</code>, the correct key to use would be <code>"accessories.ribbon"</code>.<br/>

```json
{
    "customizations": {
        "player.Head": {},
        "accessories.ribbon": {}
    }
}
```

Now for the keys that work inside these sub-objects.

#### <code>"primaryRenderType"</code> : String

Sets the RenderType to use for the Primary/Default texture. The default primaryRenderType is <code>"TRANSLUCENT"</code>.

```json
{
    "customizations": {
        "player.Head": {},
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL"
        }
    }
}
```

#### <code>"secondaryRenderType"</code> : String

Sets the RenderType to use for the Secondary/Emissive/<code>\_e</code> texture. The default secondaryRenderType is <code>"EMISSIVE"</code>.

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL"
        }
    }
}
```

#### <code>"parentType"</code> : String

Keywords in BlockBench set the ParentType of the ModelPart. This key overrides that, or sets one if there is no Keyword. The default ParentType is <code>"None"</code>

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL"
        }
    }
}
```

#### <code>"moveTo"</code> : String

Forces the ModelPart reference given to be a child of this ModelPart. This is useful if you like to organize your avatar into separate bbmodels. You can use this to stitch them together.

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL",
            "moveTo": "player.Head"
        }
    }
}
```

#### <code>"visible"</code> : Boolean

Overrides the visibility defined in BlockBench. Useful to be able to hide ModelParts in BlockBench to edit the model more easily, without it affecting the final result of the Avatar.

```json
{
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL",
            "moveTo": "player.Head",
            "visible": true
        }
    }
}
```

#### <code>"remove"</code> : Boolean

This customization will prevent the targeted ModelPart from loading at all.<br/>

```json
{
    "customizations": {
        "accessories.exampleMesh": {
            "smooth": true
        }
    }
}
```

#### <code>"smooth"</code> : Boolean

This customization must be applied directly to a mesh object.<br/>
This will calculate the vertex normals so that the mesh appears smooth, reducing the visibility of individual triangles.

```json
{
    "customizations": {
        "accessories.exampleMesh": {
            "smooth": true
        }
    }
}
```

## Final Example <code>avatar.json</code>

```json
{
    "name": "Katt",
    "description": "Example avatar.json",
    "authors": ["@KitCat962", "KitCat#0962", "Katakana962"],
    "version": "0.1.0",
    "color": "fc5bd9",
    "autoScripts": ["script"],
    "autoAnims": ["player.idle", "accessories.halo.spin"],
    "ignoredTextures": ["player.diamond_layer_1", "player.diamond_layer_2"],
    "customizations": {
        "player.Head": {
            "secondaryRenderType": "GLINT",
            "parentType": "Body"
        },
        "accessories.ribbon": {
            "primaryRenderType": "END_PORTAL",
            "moveTo": "player.Head",
            "visible": true
        }
    }
}
```

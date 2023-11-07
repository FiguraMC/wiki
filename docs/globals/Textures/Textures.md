The global instance of the TextureAPI

---

### `getTextures(string,int,int)` \{#getTextures}

Returns a table with all textures used by this avatar

Do not include generated textures from this API

**Example**:

```lua
textures:getTextures()
```

---

### `newTexture(string,int,int)` \{#newTexture}

Creates a copy of the texture

The copy is registered with the given name

**Example**:

```lua
textures:newTexture("Name", 64, 64)
```

---

### `fromVanilla(string,string)` \{#fromVanilla}

Creates a copy of the texture

The copy is registered with the given name

**Example**:

```lua
textures:fromVanilla("Name", "textures/item/apple.png")
```

---

### `get(string)` \{#get}

Gets a registered texture based on its name, or nil if no texture was found with that name

**Example**:

```lua
textures:get("Name")
```

---

### `read(string)` \{#read}

Reads a texture from a base64 string or a byte array

---

### `copy(string,texture)` \{#copy}

Creates a copy of the texture

The copy is registered with the given name

**Example**:

```lua
textures:copy("Name", textures["myTexture"])
```

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API which allows for creating textures at runtime

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

### <code>get()</code> \{#get}

Gets a registered texture based on its name, or nil if no texture was found with that name

```lua
get(name)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getTextures()</code> \{#getTextures}

Returns a table with all textures used by this avatar

Do not include generated textures from this API

```lua
getTextures()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>copy()</code> \{#copy}

Creates a copy of the texture

The copy is registered with the given name

```lua
copy(name, texture)
```

**Parameters:**

| Name    | Type                                              | Description | Default |
| ------- | ------------------------------------------------- | ----------- | ------- |
| name    | <code>[String](/tutorials/types/Strings)</code>   | -           | -       |
| texture | <code>[Texture](/globals/Textures/Texture)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>fromVanilla()</code> \{#fromVanilla}

Returns a copy of a resource texture as a texture object for modifying

```lua
fromVanilla(name, path)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| name | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| path | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>newTexture()</code> \{#newTexture}

Creates a new texture with the given name, width and height

The texture is filled with a solid color

```lua
newTexture(name, width, height)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| name   | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |
| width  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| height | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>read()</code> \{#read}

Reads a texture from a base64 string or a byte array

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
read(name, base64Text)
```

**Parameters:**

| Name       | Type                                            | Description | Default |
| ---------- | ----------------------------------------------- | ----------- | ------- |
| name       | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| base64Text | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
read(name, byteArray)
```

**Parameters:**

| Name      | Type                                            | Description | Default |
| --------- | ----------------------------------------------- | ----------- | ------- |
| name      | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| byteArray | <code>[Table](/tutorials/types/Tables)</code>   | -           | -       |

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Texture](/globals/Textures/Texture)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

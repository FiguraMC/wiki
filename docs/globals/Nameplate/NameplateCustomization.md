A customization that can be applied to a nameplate

---

### <code>setText()</code> \{#setText}

The text to use in this nameplate

```lua
setText(text)
```

**Parameters:**

| Name | Type                                            | Description                       | Default |
| ---- | ----------------------------------------------- | --------------------------------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | The text to set your nameplate to | `nil`   |

**Returns:**

| Type                                                                             | Description               |
| -------------------------------------------------------------------------------- | ------------------------- |
| <code>[NameplateCustomization](/globals/Nameplate/NameplateCustomization)</code> | Returns self for chaining |

**Example:**

```lua
nameplate.ALL:setText("Steve")
```

---

### <code>getText()</code> \{#getText}

The text to use in this nameplate

```lua
getText()
```

**Returns:**

| Type                                            | Description                                        |
| ----------------------------------------------- | -------------------------------------------------- |
| <code>[String](/tutorials/types/Strings)</code> | The string you set your nameplate to using setText |

**Example:**

```lua
nameplate.ENTITY:getText()
```

---

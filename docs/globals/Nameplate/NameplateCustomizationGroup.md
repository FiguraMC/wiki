A customization that holds other nameplate customizations

### <code>setText()</code> \{#setText}

Sets the text for all its children customizations

```lua
setText(text)
```

**Parameters:**

| Name | Type                                            | Description                       | Default |
| ---- | ----------------------------------------------- | --------------------------------- | ------- |
| text | <code>[String](/tutorials/types/Strings)</code> | The text to set your nameplate to | `nil`   |

**Returns:**

| Type                                                                                       | Description               |
| ------------------------------------------------------------------------------------------ | ------------------------- |
| <code>[NameplateCustomizationGroup](/globals/Nameplate/NameplateCustomizationGroup)</code> | Returns self for chaining |

**Example:**

```lua
nameplate.All:setText('[{"color":"red","text":"Me"},{"text":"!","color":"#09ff71"}]')
```

---

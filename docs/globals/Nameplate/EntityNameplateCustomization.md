Nameplate customization that applies to Entity (the nameplate above your head)

### setText(string) \{#setText}

Sets the text of the nameplate

```lua
nameplate.Entity:setText("Hi")
```

---

### getText() \{#getText}

Gets the text of the nameplate as set by <code>setText</code>

```lua
nameplate.Entity:getText()
```

---

### setVisible(bool) \{#setVisible}

Sets the visibility of the nameplate

```lua
nameplate.Entity:setVisible(false)
```

---

### isVisible() \{#isVisible}

Gets the visibility of the nameplate

```lua
nameplate.Entity:isVisible()
```

---

### setPos(Vector3) \{#setPos}

Sets the position of the nameplate in blocks, this is an offset of the pivot location so 0,0,0 is the pivot's location

```lua
nameplate.Entity:setPos(0, 1, 0)
```

---

### getPos() \{#getPos}

Gets the position of the nameplate

```lua
nameplate.Entity:getPos()
```

---

### setScale(Vector3) \{#setScale}

Sets the scale of the nameplate

```lua
nameplate.Entity:setScale(2, 2, 2)
```

---

### getScale() \{#getScale}

Gets the scale of the nameplate

```lua
nameplate.Entity:getScale()
```

---

### setPivot(Vector3) \{#setPivot}

Sets the pivot of the nameplate

```lua
nameplate.Entity:setPivot(0, 3, 0)
```

---

### getPivot() \{#getPivot}

Gets the pivot of the nameplate

```lua
nameplate.Entity:getPivot()
```

---

### setLight(Vector2) \{#setLight}

Sets the brightness of the nameplate text, the first arg is blockLight and the second arg is skyLight

```lua
nameplate.Entity:setLight(15, 15)
```

---

### getLight() \{#getLight}

Gets the brightness of the nameplate text as set by <code>setLight</code>

```lua
nameplate.Entity:getLight()
```

---

### setOutline(bool) \{#setOutline}

Sets if the nameplate text should be outlined. Incompatible with <code>setShadow</code>

```lua
nameplate.Entity:setOutline(true)
```

---

### hasOutline() \{#hasOutline}

Gets if the nameplate has an outline

```lua
nameplate.Entity:hasOutline()
```

---

### setOutlineColor(Vector3) \{#setOutlineColor}

Sets the color used for the outline in rgb format and 0-1 ex: (100/255,100/255,100/255)

```lua
nameplate.Entity:setOutlineColor(100 / 255, 100 / 255, 100 / 255)
```

---

### setBackgroundColor(Vector4) \{#setBackgroundColor}

Sets the color of the nameplate background, in rgba format and 0-1 ex: (100/255,100/255,100/255,100/255)

```lua
nameplate.Entity:setBackgroundColor(100 / 255, 100 / 255, 100 / 255)
```

---

### getBackgroundColor() \{#getBackgroundColor}

Gets the color of the nameplate background as set by <code>setBackgroundColor</code>

```lua
nameplate.Entity:getBackgroundColor()
```

---

### setShadow(bool) \{#setShadow}

Sets if the nameplate text has a shadow

```lua
nameplate.Entity:setShadow(true)
```

---

### hasShadow() \{#hasShadow}

Gets if the nameplate has a shadow

```lua
nameplate.Entity:hasShadow()
```

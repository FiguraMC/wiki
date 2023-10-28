Modelpart render types that can be applied via <code>setPrimaryRenderType(string)</code> or <code>setSecondaryRenderType(string)</code>

There can only be one primary and secondary type applied to a cube at once, so you may get unwanted behavior if you make the primary render type `LINES` as all the pixels aside from the lines will vanish.

**Example**:

```lua
models.myModel:setPrimaryRenderType("END_PORTAL")
```

---

## All Render Types

| Render Type        | Description |
| ------------------ | ----------- |
| `NONE`             |             |
| `CUTOUT`           |             |
| `CUTOUT_CULL`      |             |
| `TRANSLUCENT`      |             |
| `TRANSLUCENT_CULL` |             |
| `EMISSIVE`         |             |
| `EMISSIVE_SOLID`   |             |
| `EYES`             |             |
| `END_PORTAL`       |             |
| `END_GATEWAY`      |             |
| `TEXTURED_PORTAL`  |             |
| `GLINT`            |             |
| `GLINT2`           |             |
| `TEXTURED_GLINT`   |             |
| `LINES`            |             |
| `LINES_STRIP`      |             |
| `SOLID`            |             |
| `BLURRY`           |             |

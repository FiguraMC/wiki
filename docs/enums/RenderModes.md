Render modes indicate what context the avatar is being rendered in.

**Example**:

```lua
function events.render(_, context)
    -- highlight-next-line
    models.myModel.World:setVisible(context ~= "FIRST_PERSON")
end
```

---

## All Render Modes

| Mode                 | Description                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FIGURA_GUI`         | This is in the Figura pause menu                                                                                                                          |
| `PAPERDOLL`          | Figura's paperdoll                                                                                                                                        |
| `MINECRAFT_GUI`      | The inventory menu                                                                                                                                        |
| `FIRST_PERSON`       | While in first person (contrary to some beliefs, this includes while holding an item in first person, even if your entire avatar is unloaded at the time) |
| `FIRST_PERSON_WORLD` | A world ModelPart rendering (specifically when this part is being rendered from the viewer's avatar)                                                      |
| `RENDER`             | While in third person (other players render the avatar in this mode)                                                                                      |
| `WORLD`              | A world ModelPart rendering                                                                                                                               |
| `OTHER`              | Other mods like shaders cause this context                                                                                                                |

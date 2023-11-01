Item Display Modes can be used to detect the display mode of an item through the `item_render` event, or it can be used to apply transformations to item tasks.

---

## Item Task Exclusive

When an item task's display mode is set, transformations will be applied to make the item appear as if it's rendering in that circumstance.

| Item Display Mode | Description                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| `GUI`             | The transformations used by the item when being displayed in a GUI (the player's inventory for example) |
| `GROUND`          | The transformations used by the item when it is dropped on the ground.                                  |
| `FIXED`           | The transformations used by the item while it is in an item frame.                                      |
| `NONE`            | Don't apply any transformations.                                                                        |

**Example**:

<!-- prettier-ignore -->
```lua
models:newItem('CarrotTask')
    :setItem('minecraft:carrot')
-- highlight-next-line
    :setDisplayMode('GROUND')
```

---

## Universal

| Item Display Mode         | Description                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| `FIRST_PERSON_RIGHT_HAND` | While in the first person right hand.                                                     |
| `FIRST_PERSON_LEFT_HAND`  | While in the first person left hand.                                                      |
| `THIRD_PERSON_RIGHT_HAND` | While in the third person right hand.                                                     |
| `THIRD_PERSON_LEFT_HAND`  | While in the third person left hand.                                                      |
| `HEAD`                    | While any item that isn't a head (player, mob, or dragon) or helmet is in your head slot. |

**Example**:

```lua
function events.item_render(item, mode, pos, rot, scale, lefty)
    -- highlight-next-line
    if mode == "HEAD" then
        return models.myModel.Item
    end
end
```

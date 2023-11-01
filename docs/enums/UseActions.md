What hold-right-click action an item you're using has. As this is for holding actions only, there are no use actions for single press actions like placing a block, feeding an animal, or using blocks like buttons, doors, or trapdoors.

**Example**:

```lua
function events.tick()
    -- highlight-next-line
    local isEating = player:getActiveItem():getUseAction() == "EAT"
    animations.myModel.eat:setPlaying(isEating)
end
```

---

## All Use Actions

| Action      | Description                                              |
| ----------- | -------------------------------------------------------- |
| `NONE`      | Not using any use action                                 |
| `EAT`       | Eating                                                   |
| `DRINK`     | Drinking                                                 |
| `BLOCK`     | Blocking                                                 |
| `BOW`       | Drawing back a bow                                       |
| `SPEAR`     | Preparing to throw a trident                             |
| `CROSSBOW`  | Loading a crossbow (not while holding a loaded crossbow) |
| `SPYGLASS`  | Peering through a spy glass                              |
| `TOOT_HORN` | Tooting a horn                                           |
| `BRUSH`     | Using a brush                                            |

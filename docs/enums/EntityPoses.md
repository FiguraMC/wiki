List of poses a living entity can have, as accessed by <code>:getPose()</code>

**Example**:

```lua
function events.tick()
    animations.myModel.sleep:setPlaying(player:getPose() == "SLEEPING")
end
```

---

## All Living Entity Poses

| Pose           | Description                                                                            | Entities       |
| -------------- | -------------------------------------------------------------------------------------- | -------------- |
| `STANDING`     | All entities (including players) are `STANDING` when outside of any of the other poses | All            |
| `FALL_FLYING`  | While elytra gliding                                                                   | Player         |
| `SLEEPING`     | While sleeping                                                                         | Player         |
| `SWIMMING`     | While in the swimming pose, which includes while crawling                              | Player         |
| `SPIN_ATTACK`  | While charging from a riptide enchanted trident                                        | Player         |
| `CROUCHING`    | While crouching                                                                        | Player         |
| `DYING`        | While dying                                                                            | All but player |
| `LONG_JUMPING` | While making a big 'ol goat jump                                                       | Goat           |
| `CROAKING`     | While going ribbit                                                                     | Frog           |
| `USING_TONGUE` | Just doing tongue stuff                                                                | Frog           |
| `SITTING`      | While having a little rest                                                             | Camel          |
| `ROARING`      | ROOOOAR                                                                                | Warden         |
| `SNIFFING`     | _sniff_                                                                                | Warden         |
| `EMERGING`     | Oh god oh no he's coming watch out                                                     | Warden         |
| `DIGGING`      | I'm a dwarf and I'm...                                                                 | Warden         |

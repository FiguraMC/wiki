# LoopModes

These are the loop modes a Blockbench animation can be set to. They can be initialized in Blockbench itself or changed in the code via `setLoop(String)`.

**Example**:

```lua
animations.myModel.myAnimation:setLoop("ONCE")
```

---

| Mode   | Description                                         |
| ------ | --------------------------------------------------- |
| `LOOP` | Plays again once it reaches the end of the timeline |
| `ONCE` | No looping                                          |
| `HOLD` | Stays on the last keyframe of an animation          |

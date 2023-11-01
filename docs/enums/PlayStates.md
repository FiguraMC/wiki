The play state of a Blockbench animation, detected with <code>getPlayState()</code>.

**Example**:

```lua
function events.tick()
    -- highlight-next-line
    local isDancing = animations.myModel.dance:getPlayState() == "PLAYING"
    models.myModel.discoBall:setVisible(isDancing)
end
```

---

## All Play States

| PlayState | Description                                   |
| --------- | --------------------------------------------- |
| `STOPPED` | The animation isn't playing                   |
| `PAUSED`  | The animation is paused on at a specific time |
| `PLAYING` | The animation is playing                      |

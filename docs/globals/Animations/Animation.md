A Blockbench animation

For all examples on this page assume

```lua
local myAnim = animations.myModel.myAnimation
```

(and that this is a valid animation path)

For an explanation on indexing animations, see the [Animations Tutorial](/tutorials/Animations)

## Play/Stop \{#Play-Stop}

### `play()` \{#play}

Initializes the animation

Resume the animation if it was paused

**Example**:

```lua
myAnim:play()
```

---

### `stop()` \{#stop}

Gets the animation's priority

**Example**:

```lua
myAnim:stop()
```

---

### `pause()` \{#pause}

Pause the animation's playback

**Example**:

```lua
myAnim:pause()
```

---

### `restart()` \{#restart}

Restarts the animation

Plays the animation if it was stopped

This behaviour can also be reproduced by stopping then playing the animation

**Example**:

```lua
myAnim:restart()
```

---

### `setPlaying(bool)` \{#setPlaying}

A function that merges "play" and "stop" together

Takes a boolean parameter, where if true, the animation will play, and when false, the animation will stop

**Example**:

```lua
myAnim:setPlaying(player:getPose() == "CROUCHING")
```

---

### `isPlaying()` \{#isPlaying}

Get if the animation is playing

**Example**:

```lua
myAnim:isPlaying()
```

---

### `isStopped()` \{#isStopped}

Get if the animation is stopped

**Example**:

```lua
myAnim:isStopped()
```

---

### `isPaused()` \{#isPaused}

Gets if the animation is paused

**Example**:

```lua
myAnim:isPaused()
```

---

### `getPlayState()` \{#getPlayState}

Get the animation's playback state

These will either be `"PLAYING"`, `"STOPPED"`, or `"PAUSED"`

**Example**:

```lua
myAnim:getPlayState() == "PLAYING"
```

## Timing \{#Timing}

### `setLength(number)` \{#setLength}

Gets the animation's length

**Example**:

```lua
myAnim:setLength(1)
```

---

### `getLength()` \{#getLength}

Gets the animation's length

**Example**:

```lua
myAnim:getLength()
```

---

### `setPriority(number)` \{#setPriority}

Sets the animation's priority

Instead of blending, low priority animations are overridden by high priority ones

Default priority is 0

**Example**:

```lua
myAnim:setPriority(1)
```

---

### `getPriority()` \{#getPriority}

Gets the animation's priority

**Example**:

```lua
myAnim:getPriority()
```

---

### `setOffset(number)` \{#setOffset}

Sets how much time to skip for the animation

The time is skipped on every loop

**Example**:

```lua
myAnim:setOffset(1)
```

---

### `getOffset()` \{#getOffset}

Gets the animation's offset time

**Example**:

```lua
myAnim:getOffset()
```

---

### `setTime(number)` \{#setTime}

Get the animation's playback current time
**Example**:

```lua
myAnim:setTime(1)
```

---

### `getTime()` \{#getTime}

Get the animation's playback current time
**Example**:

```lua
myAnim:getTime()
```

---

### `setLoop(bool)` \{#setLoop}

Sets the animation's loop mode

**Example**:

```lua
myAnim:setLoop(true)
```

---

### `getLoop()` \{#getLoop}

Gets the animation's loop mode
**Example**:

```lua
myAnim:getLoop()
```

---

### `setBlend(number)` \{#setBlend}

Sets the animation's keyframe blend factor

**Example**:

```lua
myAnim:setBlend(.5)
```

---

### `getBlend()` \{#getBlend}

Gets the animation's keyframe blend factor

**Example**:

```lua
myAnim:getBlend()
```

---

### `setStartDelay(number)` \{#setStartDelay}

Set how much time to wait before this animation is initialized

Note that while it is waiting, the animation is considered being played

**Example**:

```lua
myAnim:setStartDelay(1)
```

---

### `getStartDelay()` \{#getStartDelay}

Gets the animation's start delay

**Example**:

```lua
myAnim:getStartDelay()
```

---

### `setLoopDelay(number)` \{#setLoopDelay}

Set how much time to wait in between the loops of this animation

**Example**:

```lua
myAnim:setLoopDelay(1)
```

---

### `getLoopDelay()` \{#getLoopDelay}

Gets the animation's loop delay

**Example**:

```lua
myAnim:getLoopDelay()
```

---

### `setSpeed(number)` \{#setSpeed}

Sets the animation's playback speed

Negative numbers can be used for an inverted animation

**Example**:

```lua
myAnim:setSpeed(2)
```

---

### `getSpeed()` \{#getSpeed}

Gets the animation's speed

**Example**:

```lua
myAnim:getSpeed()
```

## Overriding \{#Overriding}

### `setOverride(bool)` \{#setOverride}

Set if this animation should override all of its parts vanilla transforms

Equivalent of calling "overrideRot", "overridePos" and "overrideScale" altogether

**Example**:

```lua
myAnim:setOverride()
```

---

### `setOverrideRot(bool)` \{#setOverrideRot}

Set if this animation should override its parts vanilla rotation

**Example**:

```lua
myAnim:setOverrideRot(true)
```

---

### `getOverrideRot()` \{#getOverrideRot}

Gets if this animation should override its parts vanilla rotation

**Example**:

```lua
myAnim:getOverrideRot()
```

---

### `setOverridePos(bool)` \{#setOverridePos}

Set if this animation should override its parts vanilla position

**Example**:

```lua
myAnim:setOverridePos(true)
```

---

### `getOverridePos()` \{#getOverridePos}

Gets if this animation should override its parts vanilla position

**Example**:

```lua
myAnim:getOverridePos()
```

---

### `setOverrideScale(bool)` \{#setOverrideScale}

Set if this animation should override its parts vanilla scale

**Example**:

```lua
myAnim:setOverrideScale(true)
```

---

### `getOverrideScale()` \{#getOverrideScale}

Gets if this animation should override its parts vanilla scale

**Example**:

```lua
myAnim:getOverrideScale()
```

## Misc \{#Misc}

### `getName()` \{#getName}

Returns this animation's name

**Example**:

```lua
myAnim:getName()
```

---

### `newCode(number,string)` \{#newCode}

Adds a string to run in a determinant time

If theres already code to run at that time, it is overridden

**Example**:

```lua
myAnim:newCode(1, "log('hi')")
```

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Methods for specific Blockbench animations

For all examples on this page assume

```lua
local myAnim = animations.myModel.myAnimation
```

(and that this is a valid animation path)

For an explanation on indexing animations, see the [Animations Tutorial](/tutorials/Animations)

## Play/Stop \{#Play-Stop}

### <code>play()</code> \{#play}

Initializes the animation

Resume the animation if it was paused

```lua
play()
```

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:play()
```

---

### <code>stop()</code> \{#stop}

Stop the animation

```lua
stop()
```

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:stop()
```

---

### <code>pause()</code> \{#pause}

Pause the animation's playback

```lua
pause()
```

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:pause()
```

---

### <code>restart()</code> \{#restart}

Restarts the animation

Plays the animation if it was stopped

This behavior can also be reproduced by stopping then playing the animation

```lua
restart()
```

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:restart()
```

---

### <code>setPlaying()</code> \{#setPlaying}

**Aliases:** `playing()`

A function that merges "play" and "stop" together

Takes a boolean parameter, where if true, the animation will play, and when false, the animation will stop

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
setPlaying()
```

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2" default>

```lua
setPlaying(bool)
```

**Parameters:**

| Name | Type                      | Description                                                          | Default |
| ---- | ------------------------- | -------------------------------------------------------------------- | ------- |
| bool | <code>[Boolean](#)</code> | True or false value that dictates if the animation will play or stop | `false` |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

    </TabItem>

</Tabs>

**Example (Overload 2):**

```lua
-- This example would be in a function like a tick event
local crouching = player:getPose() == "CROUCHING"
-- highlight-next-line
myAnim:setPlaying(crouching)
```

---

### <code>isPlaying()</code> \{#isPlaying}

Checks if the animation is playing

```lua
isPlaying()
```

**Returns:**

| Type                      | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| <code>[Boolean](#)</code> | Returns true if the animation is playing, and false if it isn't |

**Example:**

```lua
myAnim:isPlaying()
```

---

### <code>isStopped()</code> \{#isStopped}

Checks if the animation is stopped

```lua
isStopped()
```

**Returns:**

| Type                      | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| <code>[Boolean](#)</code> | Returns true if the animation is stopped, and false if it isn't |

**Example:**

```lua
myAnim:isStopped()
```

---

### <code>isPaused()</code> \{#isPaused}

Checks if the animation is paused

```lua
isPaused()
```

**Returns:**

| Type                      | Description                                                    |
| ------------------------- | -------------------------------------------------------------- |
| <code>[Boolean](#)</code> | Returns true if the animation is paused, and false if it isn't |

**Example:**

```lua
myAnim:isPaused()
```

---

### <code>getPlayState()</code> \{#getPlayState}

Get the animation's playback state

```lua
getPlayState()
```

**Returns:**

| Type                     | Description                                |
| ------------------------ | ------------------------------------------ |
| <code>[String](#)</code> | Returns the [PlayState](/enums/PlayStates) |

**Example:**

```lua
myAnim:getPlayState()
```

---

## Timing \{#Timing}

### <code>setSpeed()</code> \{#setSpeed}

**Aliases:** `speed()`

Sets the animation's playback speed

Negative numbers can be used for an inverted animation

Default speed is 1, 2 is twice the speed, and 0.5 is half the speed

```lua
setSpeed(speed)
```

**Parameters:**

| Name  | Type                     | Description                | Default |
| ----- | ------------------------ | -------------------------- | ------- |
| speed | <code>[Number](#)</code> | Sets the animation's speed | `1`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setSpeed(2)
```

---

### <code>getSpeed()</code> \{#getSpeed}

Gets the animation's speed

```lua
getSpeed()
```

**Returns:**

| Type                     | Description                       |
| ------------------------ | --------------------------------- |
| <code>[Number](#)</code> | The animation's speed as a number |

**Example:**

```lua
myAnim:getSpeed()
```

---

### <code>setLength()</code> \{#setLength}

**Aliases:** `length()`

Set the animation's length, in seconds

```lua
setLength(length)
```

**Parameters:**

| Name   | Type                     | Description                    | Default |
| ------ | ------------------------ | ------------------------------ | ------- |
| length | <code>[Number](#)</code> | The length of time, in seconds | `0`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setLength(2)
```

---

### <code>getLength()</code> \{#getLength}

Gets the animation's length, in seconds

```lua
getLength()
```

**Returns:**

| Type                     | Description                                |
| ------------------------ | ------------------------------------------ |
| <code>[Number](#)</code> | Returns the animation's length, in seconds |

**Example:**

```lua
myAnim:getLength()
```

---

### <code>setPriority()</code> \{#setPriority}

**Aliases:** `priority()`

Sets the animation's priority

Instead of blending, low priority animations are overridden by high priority ones

The default priority of animations is 0

```lua
setPriority(priority)
```

**Parameters:**

| Name     | Type                      | Description                                      | Default |
| -------- | ------------------------- | ------------------------------------------------ | ------- |
| priority | <code>[Integer](#)</code> | The priority of the animation, as a whole number | `0`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setPriority(1)
```

---

### <code>getPriority()</code> \{#getPriority}

Gets the animation's priority

```lua
getPriority()
```

**Returns:**

| Type                      | Description                             |
| ------------------------- | --------------------------------------- |
| <code>[Integer](#)</code> | Returns the animation's priority number |

**Example:**

```lua
myAnim:getPriority()
```

---

### <code>setTime()</code> \{#setTime}

**Aliases:** `time()`

Sets the animation's playback current time, in seconds

```lua
setTime(time)
```

**Parameters:**

| Name | Type                     | Description                                  | Default |
| ---- | ------------------------ | -------------------------------------------- | ------- |
| time | <code>[Number](#)</code> | The time to set the animation to, in seconds | `0`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setTime(1.5)
```

---

### <code>getTime()</code> \{#getTime}

Get the animation's playback current time, in seconds

```lua
getTime()
```

**Returns:**

| Type                     | Description                                |
| ------------------------ | ------------------------------------------ |
| <code>[Number](#)</code> | Returns the playback time of the animation |

**Example:**

```lua
myAnim:getTime()
```

---

### <code>setOffset()</code> \{#setOffset}

**Aliases:** `offset()`

Sets how much time to skip for the animation, in seconds

The time is skipped on every loop

```lua
setOffset(offset)
```

**Parameters:**

| Name   | Type                     | Description                           | Default |
| ------ | ------------------------ | ------------------------------------- | ------- |
| offset | <code>[Number](#)</code> | Time in seconds to skip for each loop | `0`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setOffset(1.75)
```

---

### <code>getOffset()</code> \{#getOffset}

Gets the animation's offset time, in seconds

```lua
getOffset()
```

**Returns:**

| Type                     | Description                                     |
| ------------------------ | ----------------------------------------------- |
| <code>[Number](#)</code> | The time that is skipped every loop, in seconds |

**Example:**

```lua
myAnim:getOffset()
```

---

### <code>setLoop()</code> \{#setLoop}

**Aliases:** `loop()`

Sets the animation's [loop mode](/enums/Loop-Modes)

```lua
setLoop(loop)
```

**Parameters:**

| Name | Type                     | Description                            | Default  |
| ---- | ------------------------ | -------------------------------------- | -------- |
| loop | <code>[String](#)</code> | Sets the [LoopMode](/enums/Loop-Modes) | Required |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setLoop("ONCE")
```

---

### <code>getLoop()</code> \{#getLoop}

Gets the animation's loop mode

```lua
getLoop()
```

**Returns:**

| Type                     | Description                               |
| ------------------------ | ----------------------------------------- |
| <code>[String](#)</code> | Returns the [LoopMode](/enums/Loop-Modes) |

**Example:**

```lua
myAnim:getLoop()
```

---

### <code>setBlend()</code> \{#setBlend}

**Aliases:** `blend()`

Sets the animation's keyframe blend factor, which is the strength of the animation

```lua
setBlend(blend)
```

**Parameters:**

| Name  | Type                     | Description                                  | Default |
| ----- | ------------------------ | -------------------------------------------- | ------- |
| blend | <code>[Number](#)</code> | Strength of the blend factor between 0 and 1 | `1`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setBlend(.5)
```

---

### <code>getBlend()</code> \{#getBlend}

Gets the animation's keyframe blend factor, which is the strength of the animation

```lua
getBlend()
```

**Returns:**

| Type                     | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| <code>[Number](#)</code> | Gets the strength of the blend factor between 0 and 1 |

**Example:**

```lua
myAnim:getBlend()
```

---

### <code>setStartDelay()</code> \{#setStartDelay}

**Aliases:** `startDelay()`

Set how much time to wait before this animation is initialized, in seconds

Note that while it is waiting, the animation is considered being played

```lua
setStartDelay(delay)
```

**Parameters:**

| Name  | Type                     | Description                             | Default |
| ----- | ------------------------ | --------------------------------------- | ------- |
| delay | <code>[Number](#)</code> | The time in seconds to set the delay to | `0`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setStartDelay(1)
```

---

### <code>getStartDelay()</code> \{#getStartDelay}

Gets the animation's start delay, in seconds

```lua
getStartDelay()
```

**Returns:**

| Type                     | Description                                 |
| ------------------------ | ------------------------------------------- |
| <code>[Number](#)</code> | The time in seconds that it's being delayed |

**Example:**

```lua
myAnim:getStartDelay()
```

---

### <code>setLoopDelay()</code> \{#setLoopDelay}

**Aliases:** `loopDelay()`

Set how much time to wait in between the loops of this animation, in seconds

```lua
setLoopDelay(delay)
```

**Parameters:**

| Name  | Type                     | Description                             | Default |
| ----- | ------------------------ | --------------------------------------- | ------- |
| delay | <code>[Number](#)</code> | The time in seconds to set the delay to | `0`     |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setLoopDelay(1)
```

---

### <code>getLoopDelay()</code> \{#getLoopDelay}

Gets the animation's loop delay, in seconds

```lua
getLoopDelay()
```

**Returns:**

| Type                     | Description                                 |
| ------------------------ | ------------------------------------------- |
| <code>[Number](#)</code> | The time in seconds that it's being delayed |

**Example:**

```lua
myAnim:getLoopDelay()
```

---

## Overriding \{#Overriding}

### <code>setOverride()</code> \{#setOverride}

**Aliases:** `override()`

Set if this animation should override all of its parts vanilla transforms

Equivalent of calling "overrideRot", "overridePos" and "overrideScale" altogether

```lua
setOverride(override)
```

**Parameters:**

| Name     | Type                      | Description                                                          | Default |
| -------- | ------------------------- | -------------------------------------------------------------------- | ------- |
| override | <code>[Boolean](#)</code> | True or false if it should or shouldn't override all transformations | `false` |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setOverride(true)
```

---

### <code>setOverrideRot()</code> \{#setOverrideRot}

**Aliases:** `overrideRot()`

Set if this animation should override its parts vanilla rotation

```lua
setOverrideRot(override)
```

**Parameters:**

| Name     | Type                      | Description                                               | Default |
| -------- | ------------------------- | --------------------------------------------------------- | ------- |
| override | <code>[Boolean](#)</code> | True or false if it should or shouldn't override rotation | `false` |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setOverrideRot(true)
```

---

### <code>getOverrideRot()</code> \{#getOverrideRot}

Gets if this animation should override its parts vanilla rotation

```lua
getOverrideRot()
```

**Returns:**

| Type                      | Description                                 |
| ------------------------- | ------------------------------------------- |
| <code>[Boolean](#)</code> | Returns if it should be overriding rotation |

**Example:**

```lua
myAnim:getOverrideRot()
```

---

### <code>setOverridePos()</code> \{#setOverridePos}

**Aliases:** `overridePos()`

Set if this animation should override its parts vanilla position

```lua
setOverridePos(override)
```

**Parameters:**

| Name     | Type                      | Description                                               | Default |
| -------- | ------------------------- | --------------------------------------------------------- | ------- |
| override | <code>[Boolean](#)</code> | True or false if it should or shouldn't override position | `false` |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setOverridePos(true)
```

---

### <code>getOverridePos()</code> \{#getOverridePos}

Gets if this animation should override its parts vanilla position

```lua
getOverridePos()
```

**Returns:**

| Type                      | Description                                 |
| ------------------------- | ------------------------------------------- |
| <code>[Boolean](#)</code> | Returns if it should be overriding position |

**Example:**

```lua
myAnim:getOverridePos()
```

---

### <code>setOverrideScale()</code> \{#setOverrideScale}

**Aliases:** `overrideScale()`

Set if this animation should override its parts vanilla scale

```lua
setOverrideScale(override)
```

**Parameters:**

| Name     | Type                      | Description                                            | Default |
| -------- | ------------------------- | ------------------------------------------------------ | ------- |
| override | <code>[Boolean](#)</code> | True or false if it should or shouldn't override scale | `false` |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:setOverrideScale(true)
```

---

### <code>getOverrideScale()</code> \{#getOverrideScale}

Gets if this animation should override its parts vanilla scale

```lua
getOverrideScale()
```

**Returns:**

| Type                      | Description                              |
| ------------------------- | ---------------------------------------- |
| <code>[Boolean](#)</code> | Returns if it should be overriding scale |

**Example:**

```lua
myAnim:getOverrideScale()
```

---

## Misc \{#Misc}

### <code>getName()</code> \{#getName}

Returns this animation's name

```lua
getName()
```

**Returns:**

| Type                     | Description                  |
| ------------------------ | ---------------------------- |
| <code>[String](#)</code> | Returns the animation's name |

**Example:**

```lua
myAnim:getName()
```

---

### <code>newCode()</code> \{#newCode}

Adds a string to run in a determinant time

If there's already code to run at that time, it is overwritten

```lua
newCode(time, code)
```

**Parameters:**

| Name | Type                     | Description                            | Default  |
| ---- | ------------------------ | -------------------------------------- | -------- |
| time | <code>[Number](#)</code> | The time in seconds to add the code to | `0`      |
| code | <code>[String](#)</code> | The code to run at that time           | Required |

**Returns:**

| Type                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| <code>[Animation](/globals/Animations/Animation)</code> | Returns the given animation for chaining |

**Example:**

```lua
myAnim:newCode(0.5, "log('Hello World')")
```

---

## Fields

### <code>name</code> \{#name}

This animation's name

**Example:**

```lua
myAnim.name
```

---

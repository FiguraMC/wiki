import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API used for control of Blockbench Animations

### <code>stopAll()</code> \{#stopAll}

Stops all playing (and paused) animations

```lua
stopAll()
```

**Returns**

| Type                                             | Description               |
| ------------------------------------------------ | ------------------------- |
| <code>[AnimationAPI](/globals/Animations)</code> | Returns self for chaining |

**Example**

```lua
animations:stopAll()
```

---

### <code>getPlaying()</code> \{#getPlaying}

Return a table with all playing animations

```lua
getPlaying()
```

**Returns**

| Type                                    | Description                                |
| --------------------------------------- | ------------------------------------------ |
| <code>[Table](/tutorials/Tables)</code> | A list of the currently playing animations |

**Example**

```lua
logTable(animations:getPlaying())
```

---

### <code>getAnimations()</code> \{#getAnimations}

Returns a table with all animations

```lua
getAnimations()
```

**Returns**

| Type                                    | Description                            |
| --------------------------------------- | -------------------------------------- |
| <code>[Table](/tutorials/Tables)</code> | A list of all animations in all models |

**Example**

```lua
logTable(animations:getAnimations())
```

---

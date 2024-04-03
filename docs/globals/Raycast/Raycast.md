import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A global API which provides functions for raycasting

:::danger
This page is a WIP.
:::

### <code>aabb()</code> \{#aabb}

Raycasts based on a start position, an end position, and an array of Axis Aligned Bounding Boxes defined by the player.

AABBs are encoded as a table with indicies 1 and 2 being a Vector3.

`\{vec(0,0,0),vec(1,0.5,1)}` is a valid AABB, with `\{ \{vec(0,0,0),vec(1,0.5,1)}, \{vec(0,0.5,0.5),vec(1,1,1)} }` being a valid AABB array.

This function returns the AABB table that was hit, the exact position hit as a Vector3, the side of the AABB hit as a string or nil if inside an AABB, and the index of the AABB that was hit in the array

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
aabb(startpos, endpos, aabbs)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| start | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| end   | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| aabbs | <code>[Table](#)</code>                          | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
aabb(startX, startY, startZ, endpos, aabbs)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| startX | <code>[Number](#)</code>                         | -           | -       |
| startY | <code>[Number](#)</code>                         | -           | -       |
| startZ | <code>[Number](#)</code>                         | -           | -       |
| end    | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| aabbs  | <code>[Table](#)</code>                          | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
aabb(startpos, endX, endY, endZ, aabbs)
```

**Parameters:**

| Name  | Type                                             | Description | Default |
| ----- | ------------------------------------------------ | ----------- | ------- |
| start | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| endX  | <code>[Number](#)</code>                         | -           | -       |
| endY  | <code>[Number](#)</code>                         | -           | -       |
| endZ  | <code>[Number](#)</code>                         | -           | -       |
| aabbs | <code>[Table](#)</code>                          | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
aabb(startX, startY, startZ, endX, endY, endZ, aabbs)
```

**Parameters:**

| Name   | Type                     | Description | Default |
| ------ | ------------------------ | ----------- | ------- |
| startX | <code>[Number](#)</code> | -           | -       |
| startY | <code>[Number](#)</code> | -           | -       |
| startZ | <code>[Number](#)</code> | -           | -       |
| endX   | <code>[Number](#)</code> | -           | -       |
| endY   | <code>[Number](#)</code> | -           | -       |
| endZ   | <code>[Number](#)</code> | -           | -       |
| aabbs  | <code>[Table](#)</code>  | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>block()</code> \{#block}

Raycasts a Block in the world.

If successful, returns the BlockState hit, the exact world position hit as a Vector3, and the side of the block that was hit.

When unsuccessful, returns nil.

blockCastType and fluidCastType determine how the raycast handles block shapes and fluids.

Will default to "COLLIDER" and "NONE" when nil

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
block(startpos, endpos, blockCastType, fluidCastType)
```

**Parameters:**

| Name          | Type                                             | Description | Default |
| ------------- | ------------------------------------------------ | ----------- | ------- |
| start         | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| end           | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| blockCastType | <code>[String](#)</code>                         | -           | -       |
| fluidCastType | <code>[String](#)</code>                         | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
block(startX, startY, startZ, endpos, blockCastType, fluidCastType)
```

**Parameters:**

| Name          | Type                                             | Description | Default |
| ------------- | ------------------------------------------------ | ----------- | ------- |
| startX        | <code>[Number](#)</code>                         | -           | -       |
| startY        | <code>[Number](#)</code>                         | -           | -       |
| startZ        | <code>[Number](#)</code>                         | -           | -       |
| end           | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| blockCastType | <code>[String](#)</code>                         | -           | -       |
| fluidCastType | <code>[String](#)</code>                         | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
block(startpos, endX, endY, endZ, blockCastType, fluidCastType)
```

**Parameters:**

| Name          | Type                                             | Description | Default |
| ------------- | ------------------------------------------------ | ----------- | ------- |
| start         | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| endX          | <code>[Number](#)</code>                         | -           | -       |
| endY          | <code>[Number](#)</code>                         | -           | -       |
| endZ          | <code>[Number](#)</code>                         | -           | -       |
| blockCastType | <code>[String](#)</code>                         | -           | -       |
| fluidCastType | <code>[String](#)</code>                         | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
block(startX, startY, startZ, endX, endY, endZ, blockCastType, fluidCastType)
```

**Parameters:**

| Name          | Type                     | Description | Default |
| ------------- | ------------------------ | ----------- | ------- |
| startX        | <code>[Number](#)</code> | -           | -       |
| startY        | <code>[Number](#)</code> | -           | -       |
| startZ        | <code>[Number](#)</code> | -           | -       |
| endX          | <code>[Number](#)</code> | -           | -       |
| endY          | <code>[Number](#)</code> | -           | -       |
| endZ          | <code>[Number](#)</code> | -           | -       |
| blockCastType | <code>[String](#)</code> | -           | -       |
| fluidCastType | <code>[String](#)</code> | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>entity()</code> \{#entity}

Raycasts an Entity in the world

If successful, returns the EntityAPI hit and the exact world position hit as a Vector3.

When unsuccessful, returns nil.

predicate is a function that prevents specific entities from being raycasted.

Takes in a single EntityAPI object. Return true for valid entities, false for invalid.

Marks all entities as valid when nil

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
entity(startpos, endpos, predicate)
```

**Parameters:**

| Name      | Type                                             | Description | Default |
| --------- | ------------------------------------------------ | ----------- | ------- |
| start     | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| end       | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| predicate | <code>[Function](#)</code>                       | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
entity(startX, startY, startZ, endpos, predicate)
```

**Parameters:**

| Name      | Type                                             | Description | Default |
| --------- | ------------------------------------------------ | ----------- | ------- |
| startX    | <code>[Number](#)</code>                         | -           | -       |
| startY    | <code>[Number](#)</code>                         | -           | -       |
| startZ    | <code>[Number](#)</code>                         | -           | -       |
| end       | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| predicate | <code>[Function](#)</code>                       | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-3" label="Overload 3">

```lua
entity(startpos, endX, endY, endZ, predicate)
```

**Parameters:**

| Name      | Type                                             | Description | Default |
| --------- | ------------------------------------------------ | ----------- | ------- |
| start     | <code>[Vector3](/globals/Vectors/Vector3)</code> | -           | -       |
| endX      | <code>[Number](#)</code>                         | -           | -       |
| endY      | <code>[Number](#)</code>                         | -           | -       |
| endZ      | <code>[Number](#)</code>                         | -           | -       |
| predicate | <code>[Function](#)</code>                       | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>
    <TabItem value="overload-4" label="Overload 4">

```lua
entity(startX, startY, startZ, endX, endY, endZ, predicate)
```

**Parameters:**

| Name      | Type                       | Description | Default |
| --------- | -------------------------- | ----------- | ------- |
| startX    | <code>[Number](#)</code>   | -           | -       |
| startY    | <code>[Number](#)</code>   | -           | -       |
| startZ    | <code>[Number](#)</code>   | -           | -       |
| endX      | <code>[Number](#)</code>   | -           | -       |
| endY      | <code>[Number](#)</code>   | -           | -       |
| endZ      | <code>[Number](#)</code>   | -           | -       |
| predicate | <code>[Function](#)</code> | -           | -       |

**Returns:**

| Type                      | Description |
| ------------------------- | ----------- |
| <code>[Varargs](#)</code> | -           |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

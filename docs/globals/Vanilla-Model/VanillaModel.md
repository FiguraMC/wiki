---
sidebar_position: 1
---

A global API that provides functions to interact with the vanilla player model and its parts

Accessed using the global field `vanilla_model`

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

## Groups

Go [here](VanillaModelGroup) for functions that effect these parts

### <code>ALL</code> \{#ALL}

Multi-part: The entirety of the vanilla model

**Example:**

```lua
vanilla_model.ALL:setVisible(false)
```

---

### <code>PLAYER</code> \{#PLAYER}

Multi-part: Both the outer and inner layers of the player's skin, as well as the cape

**Example:**

```lua
vanilla_model.PLAYER:setVisible(false)
```

---

### <code>OUTER_LAYER</code> \{#OUTER_LAYER}

Multi-part: The outer layer of the player

**Example:**

```lua
vanilla_model.OUTER_LAYER:setVisible(false)
```

---

### <code>INNER_LAYER</code> \{#INNER_LAYER}

Multi-part: The main body of the player, everything except the outer layer

**Example:**

```lua
vanilla_model.INNER_LAYER:setVisible(false)
```

---

### <code>CAPE</code> \{#CAPE}

Multi-part: The player's cape

**Example:**

```lua
vanilla_model.CAPE:setVisible(false)
```

---

### <code>ARMOR</code> \{#ARMOR}

Multi-part: All armor on the model

**Example:**

```lua
vanilla_model.ARMOR:setVisible(false)
```

---

### <code>HELMET</code> \{#HELMET}

Multi-part: The helmet model

**Example:**

```lua
vanilla_model.HELMET:setVisible(false)
```

---

### <code>CHESTPLATE</code> \{#CHESTPLATE}

Multi-part: The chestplate model

**Example:**

```lua
vanilla_model.CHESTPLATE:setVisible(false)
```

---

### <code>LEGGINGS</code> \{#LEGGINGS}

Multi-part: The leggings model

**Example:**

```lua
vanilla_model.LEGGINGS:setVisible(false)
```

---

### <code>BOOTS</code> \{#BOOTS}

Multi-part: The boots model

**Example:**

```lua
vanilla_model.BOOTS:setVisible(false)
```

---

### <code>ELYTRA</code> \{#ELYTRA}

Multi-part: The elytra model

**Example:**

```lua
vanilla_model.ELYTRA:setVisible(false)
```

---

### <code>HELD_ITEMS</code> \{#HELD_ITEMS}

Multi-part: Items in the player's hands

**Example:**

```lua
vanilla_model.HELD_ITEMS:setVisible(false)
```

---

### <code>PARROTS</code> \{#PARROTS}

Multi-part: Parrots on the player's shoulders

**Example:**

```lua
vanilla_model.PARROTS:setVisible(false)
```

---

## Parts

Go [here](VanillaModelPart) for functions that effect these parts

### <code>HEAD</code> \{#HEAD}

The head of the player, not including the hat

**Example:**

```lua
vanilla_model.HEAD:setVisible(false)
```

---

### <code>BODY</code> \{#BODY}

The body of the player, not including the outer layer

**Example:**

```lua
vanilla_model.BODY:setVisible(false)
```

---

### <code>LEFT_ARM</code> \{#LEFT_ARM}

The left arm of the player, not including the outer layer

**Example:**

```lua
vanilla_model.LEFT_ARM:setVisible(false)
```

---

### <code>RIGHT_ARM</code> \{#RIGHT_ARM}

The right arm of the player, not including the outer layer

**Example:**

```lua
vanilla_model.RIGHT_ARM:setVisible(false)
```

---

### <code>LEFT_LEG</code> \{#LEFT_LEG}

The left leg of the player, not including the outer layer

**Example:**

```lua
vanilla_model.LEFT_LEG:setVisible(false)
```

---

### <code>RIGHT_LEG</code> \{#RIGHT_LEG}

The right leg of the player, not including the outer layer

**Example:**

```lua
vanilla_model.RIGHT_LEG:setVisible(false)
```

---

### <code>HAT</code> \{#HAT}

The outer layer of the player's head

**Example:**

```lua
vanilla_model.HAT:setVisible(false)
```

---

### <code>JACKET</code> \{#JACKET}

The outer layer of the player's body

**Example:**

```lua
vanilla_model.JACKET:setVisible(false)
```

---

### <code>LEFT_SLEEVE</code> \{#LEFT_SLEEVE}

The outer layer of the player's left arm

**Example:**

```lua
vanilla_model.LEFT_SLEEVE:setVisible(false)
```

---

### <code>RIGHT_SLEEVE</code> \{#RIGHT_SLEEVE}

The outer layer of the player's right arm

**Example:**

```lua
vanilla_model.RIGHT_SLEEVE:setVisible(false)
```

---

### <code>LEFT_PANTS</code> \{#LEFT_PANTS}

The outer layer of the player's left leg

**Example:**

```lua
vanilla_model.LEFT_PANTS:setVisible(false)
```

---

### <code>RIGHT_PANTS</code> \{#RIGHT_PANTS}

The outer layer of the player's right leg

**Example:**

```lua
vanilla_model.RIGHT_PANTS:setVisible(false)
```

---

### <code>CAPE_MODEL</code> \{#CAPE_MODEL}

The vanilla cape model

**Example:**

```lua
vanilla_model.CAPE_MODEL:setVisible(false)
```

---

### <code>FAKE_CAPE</code> \{#FAKE_CAPE}

A custom copy of the cape, an attempt at storing its transformations as vanilla cape math is... weird

**Example:**

```lua
vanilla_model.FAKE_CAPE:setVisible(false)
```

---

### <code>HELMET_ITEM</code> \{#HELMET_ITEM}

The item on the armor head slot

**Example:**

```lua
vanilla_model.HELMET_ITEM:setVisible(false)
```

---

### <code>HELMET_HEAD</code> \{#HELMET_HEAD}

The head of the helmet model

**Example:**

```lua
vanilla_model.HELMET_HEAD:setVisible(false)
```

---

### <code>HELMET_HAT</code> \{#HELMET_HAT}

The hat of the helmet model

**Example:**

```lua
vanilla_model.HELMET_HAT:setVisible(false)
```

---

### <code>CHESTPLATE_BODY</code> \{#CHESTPLATE_BODY}

The body of the chestplate model

**Example:**

```lua
vanilla_model.CHESTPLATE_BODY:setVisible(false)
```

---

### <code>CHESTPLATE_LEFT_ARM</code> \{#CHESTPLATE_LEFT_ARM}

The left arm of the chestplate model

**Example:**

```lua
vanilla_model.CHESTPLATE_LEFT_ARM:setVisible(false)
```

---

### <code>CHESTPLATE_RIGHT_ARM</code> \{#CHESTPLATE_RIGHT_ARM}

The right arm of the chestplate model

**Example:**

```lua
vanilla_model.CHESTPLATE_RIGHT_ARM:setVisible(false)
```

---

### <code>LEGGINGS_BODY</code> \{#LEGGINGS_BODY}

The body of the leggings model

**Example:**

```lua
vanilla_model.LEGGINGS_BODY:setVisible(false)
```

---

### <code>LEGGINGS_LEFT_LEG</code> \{#LEGGINGS_LEFT_LEG}

The left leg of the leggings model

**Example:**

```lua
vanilla_model.LEGGINGS_LEFT_LEG:setVisible(false)
```

---

### <code>LEGGINGS_RIGHT_LEG</code> \{#LEGGINGS_RIGHT_LEG}

The right leg of the leggings model

**Example:**

```lua
vanilla_model.LEGGINGS_RIGHT_LEG:setVisible(false)
```

---

### <code>BOOTS_LEFT_LEG</code> \{#BOOTS_LEFT_LEG}

The left boot of the boots model

**Example:**

```lua
vanilla_model.BOOTS_LEFT_LEG:setVisible(false)
```

---

### <code>BOOTS_RIGHT_LEG</code> \{#BOOTS_RIGHT_LEG}

The right boot of the boots model

**Example:**

```lua
vanilla_model.BOOTS_RIGHT_LEG:setVisible(false)
```

---

### <code>LEFT_ELYTRA</code> \{#LEFT_ELYTRA}

The left wing of the elytra model

**Example:**

```lua
vanilla_model.LEFT_ELYTRA:setVisible(false)
```

---

### <code>RIGHT_ELYTRA</code> \{#RIGHT_ELYTRA}

The right wing of the elytra model

**Example:**

```lua
vanilla_model.RIGHT_ELYTRA:setVisible(false)
```

---

### <code>LEFT_ITEM</code> \{#LEFT_ITEM}

The item in the player's left hand

**Example:**

```lua
vanilla_model.LEFT_ITEM:setVisible(false)
```

---

### <code>RIGHT_ITEM</code> \{#RIGHT_ITEM}

The item in the player's right hand

**Example:**

```lua
vanilla_model.RIGHT_ITEM:setVisible(false)
```

---

### <code>LEFT_PARROT</code> \{#LEFT_PARROT}

The Parrot in the player's left shoulder

**Example:**

```lua
vanilla_model.LEFT_PARROT:setVisible(false)
```

---

### <code>RIGHT_PARROT</code> \{#RIGHT_PARROT}

The Parrot in the player's right shoulder

**Example:**

```lua
vanilla_model.RIGHT_PARROT:setVisible(false)
```

---

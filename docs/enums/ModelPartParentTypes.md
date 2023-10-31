import Emoji from '@site/src/components/Emoji';

ParentTypes are applied to ModelParts to apply specific transformations, or change how the ModelPart behaves.

## Applying ParentTypes via BlockBench

To apply a ParentType through BlockBench, the <Emoji icon="blockbench/group"/> group name must start with the ParentType. Only <Emoji icon="blockbench/group"/> groups can have ParentTypes applied via BlockBench.

:::tip

### Keywords

When setting the ParentType via group names, ParentTypes are commonly referred to as Keywords or BlockBench Keywords.

:::

**Examples**:

| Blockbench Name                               | `Head` ParentType | Reason                                                                            |
| --------------------------------------------- | :---------------: | --------------------------------------------------------------------------------- |
| <Emoji icon="blockbench/group"/> `Head`       |        ✔️         | Group's name starts with a ParentType.                                            |
| <Emoji icon="blockbench/group"/> `HeadPhones` |        ✔️         | Group's name starts with a ParentType.                                            |
| <Emoji icon="blockbench/group"/> `MagicHead`  |        ❌         | Group's name does not start with a ParentType.                                    |
| <Emoji icon="blockbench/group"/> `head`       |        ❌         | Group's name does not start with a ParentType. `head` is not an alias for `Head`. |
| <Emoji icon="blockbench/cube"/> `Head`        |        ❌         | ParentTypes can only be applied to groups in BlockBench                           |

---

## Applying ParentTypes via Script

To apply a ParentType through script, [index the ModelPart](../tutorials/ModelPart%20Indexing) you want to set the ParentType of, then call the <code>setParentType</code> method on it, passing in a ParentType as a string as the parameter.<br/>
After an avatar is loaded, there is no difference between <Emoji icon="blockbench/group"/> groups, <Emoji icon="blockbench/cube"/> cubes, or <Emoji icon="file/bbmodel"/> bbmodels. Everything is a ModelPart, meaning everything can have a ParentType.

**Example**:

```lua
models.myModel.myHat:setParentType("Head")
models.myOtherModel.Pet:setParentType("World")
```

---

## List of ParentTypes

All ParentTypes have an alternate way of spelling it, an alias, though internally they do the same thing. They will be listed just underneath what Figura considers to be the true ParentType.<br/>
Many ParentTypes share similar properties. You can roughly put them into 3 distinct groups: Mimic, Pivot, and Special. These groupings are not recognized by the mod itself and just serve to make explaining similar ParentTypes more convenient.<br/>

---

### `None` \{#None}

-   #### `NONE` \{#NONE}
-   #### `Model` \{#Model}
-   #### `MODEL` \{#MODEL}

The default ParentType.<br/>
Using this ParentType as a Keyword has no purpose, as <Emoji icon="blockbench/group"/> groups with no Keyword will have this ParentType, but it can still be used in scripts.

---

## Player Mimic Types

Player Mimic ParentTypes copy transformations (position, rotation, scale) from elsewhere, typically a Vanilla Part, and apply it to the ModelPart. This allows for a script-free way of making a ModelPart behave like a Vanilla Part. These transformations are added on top of any transformations set via script or transformations set via a BlockBench Animation. To prevent this ParentTypes transformations from being applied while a BlockBench Animation is playing, enable the [Animation's Override property](../start_here/BlockBench#animation-properties).

---

### `Head` \{#Head}

-   #### `HEAD` \{#HEAD}

Mimics the transformation offsets of the Vanilla <code>HEAD</code><br/>
If there is no ModelParts with the [Skull](#skull) ParentType, ModelParts with this ParentType will replace the Vanilla Skull.

---

### `Body` \{#Body}

-   #### `BODY` \{#BODY}

Mimics the transformation offsets of the Vanilla <code>BODY</code>

---

### `RightArm` \{#RightArm}

-   #### `RIGHT_ARM` \{#RIGHT_ARM}

Mimics the transformation offsets of the Vanilla <code>RIGHT_ARM</code><br/>
This ParentType will appear in First Person under the same conditions as the Vanilla RightArm.

---

### `LeftArm` \{#LeftArm}

-   #### `LEFT_ARM` \{#LEFT_ARM}

Mimics the transformation offsets of the Vanilla <code>LEFT_ARM</code><br/>
This ParentType will appear in First Person under the same conditions as the Vanilla LeftArm.

---

### `RightLeg` \{#RightLeg}

-   #### `RIGHT_LEG` \{#RIGHT_LEG}

Mimics the transformation offsets of the Vanilla <code>RIGHT_LEG</code>

---

### `LeftLeg` \{#LeftLeg}

-   #### `LEFT_LEG` \{#LEFT_LEG}

Mimics the transformation offsets of the Vanilla <code>LEFT_LEG</code>

---

### `RightElytra` \{#RightElytra}

-   #### `RIGHT_ELYTRA` \{#RIGHT_ELYTRA}
-   #### `RightElytron` \{#RightElytron}
-   #### `RIGHT_ELYTRON` \{#RIGHT_ELYTRON}

Mimics the transformation offsets of the Vanilla <code>RIGHT_ELYTRA</code><br/>
ModelParts with this ParentType are only visible while an Elytra is equipped.<br/>

---

### `LeftElytra` \{#LeftElytra}

-   #### `LEFT_ELYTRA` \{#LEFT_ELYTRA}
-   #### `LeftElytron` \{#LeftElytron}
-   #### `LEFT_ELYTRON` \{#LEFT_ELYTRON}

Mimics the transformation offsets of the Vanilla <code>LEFT_ELYTRA</code><br/>
ModelParts with this ParentType are only visible while an Elytra is equipped.<br/>

---

### `Cape` \{#Cape}

-   #### `CAPE` \{#CAPE}

Mimics the transformation offsets of the Vanilla <code>CAPE</code><br/>
This ParentType works even if you don't own a vanilla Cape.

---

## Special Types

Special ParentTypes are ParentTypes that provide unique rendering functionality that is either difficult or impossible to recreate with script alone.

---

### `World` \{#World}

-   #### `WORLD` \{#WORLD}

This ParentType will cause the ModelPart to be parented to the Minecraft World itself rather than your Player.<br/>
Position (0,0,0) will be at the world's origin. 1 block is 16 ModelPart units, so multiply the world coordinates by 16 before setting the position of a World ParentType ModelPart.<br/>
Rotation (0,0,0) will be facing South instead of what BlockBench defines as North.<br/>
ModelParts with this ParentType will be visible while in First Person.

---

### `Hud` \{#Hud}

-   #### `HUD` \{#HUD}
-   #### `HeadsUpDisplay` \{#HeadsUpDisplay}
-   #### `Gui` \{#Gui}
-   #### `GUI` \{#GUI}
-   #### `GraphicalUserInterface` \{#GraphicalUserInterface}
-   #### `JraficalUserInterface` \{#JraficalUserInterface}

This ParentType causes the ModelPart to render on the Hud instead of on your player. This only affects the owner's Hud, or players that spectate the owner of the avatar.<br/>
(0,0,0) is the top left of the screen. 1 ModelPart unit is 1 Minecraft Gui unit. -X moves the ModelPart Right on the screen, and -Y moves the ModelPart Down on the screen. The Z axis determines which ModelParts render on top of others, with -Z moving the ModelPart closer. You can even have ModelParts render on top of the vanilla GUI.

---

### `Camera` \{#Camera}

-   #### `CAMERA` \{#CAMERA}
-   #### `Billboard` \{#Billboard}
-   #### `BILLBOARD` \{#BILLBOARD}

This ParentType causes the ModelPart to _always_ face the camera. It behaves like the vanilla nameplate or particles.

---

### `Skull` \{#Skull}

-   #### `SKULL` \{#SKULL}
-   #### `☠️` \{#☠️}

This ParentType causes the ModelPart to replace the Vanilla Skull.

---

### `Portrait` \{#Portrait}

-   #### `PORTRAIT` \{#PORTRAIT}

This ParentType will change the player icon in the TAB LIST.<br/>
Blockbench 0, 0, 0 is the bottom center and the valid area extends 4 units horizontally on each since and 8 units up.<br/>

---

### `Arrow` \{#Arrow}

-   #### `ARROW` \{#ARROW}

This ParentType replaces the model of arrows fired by you. The pivot point of the ModelPart that has this ParentType does not matter.<br/>
(0,0,0) in BlockBench is the point on the vanilla arrow's shaft that is just before the arrow head.

---

### `Item` \{#Item}

-   #### `ITEM` \{#ITEM}

This ParentType designates a Custom Item Model that can be used in the ITEM_RENDER event.

---

## Pivot Types

Pivot ParentTypes move the location of specific Vanilla Parts to the pivot point of the ModelPart. If multiple of the same Pivot ParentType are in a bbmodel, multiple of them are rendered. These ParentTypes will only render their Vanilla Part if the part in the <code>vanilla_model</code> global is visible.

---

### `RightItemPivot` \{#RightItemPivot}

-   #### `RIGHT_ITEM_PIVOT` \{#RIGHT_ITEM_PIVOT}

This ParentType renders the right held item at the ModelPart's pivot point.

---

### `LeftItemPivot` \{#LeftItemPivot}

-   #### `LEFT_ITEM_PIVOT` \{#LEFT_ITEM_PIVOT}

This ParentType renders the left held item at the ModelPart's pivot point.

---

### `HelmetPivot` \{#HelmetPivot}

-   #### `HELMET_PIVOT` \{#HELMET_PIVOT}

This ParentType renders the helmet at the ModelPart's pivot point. For rendering an item in the helmet slot see [`HelmetItemPivot`](#HelmetItemPivot).

---

### `ChestplatePivot`

-   #### `CHESTPLATE_PIVOT`

This ParentType renders the chestplate at the ModelPart's pivot point.

---

### `LeftShoulderPivot`

-   #### `LEFT_SHOULDER_PIVOT`

This ParentType renders the left shoulder of the chestplate at the ModelPart's pivot point.

---

### `RightShoulderPivot`

-   #### `RIGHT_SHOULDER_PIVOT`

This ParentType renders the right shoulder of the chestplate at the ModelPart's pivot point.

---

### `LeggingsPivot`

-   #### `LEGGINGS_PIVOT`

This ParentType renders the leggings at the ModelPart's pivot point.

---

### `LeftLeggingPivot` \{#LeftLeggingPivot}

-   #### `LEFT_LEGGING_PIVOT` \{#LEFT_LEGGING_PIVOT}

This ParentType renders the left legging at the ModelPart's pivot point.

---

### `RightLeggingPivot` \{#RightLeggingPivot}

-   #### `RIGHT_LEGGING_PIVOT` \{#RIGHT_LEGGING_PIVOT}

This ParentType renders the right legging at the ModelPart's pivot point.

---

### `LeftBootPivot`

-   #### `LEFT_BOOT_PIVOT`

This ParentType renders the left boot at the ModelPart's pivot point.

---

### `RightBootPivot`

-   #### `RIGHT_BOOT_PIVOT`

This ParentType renders the right boot at the ModelPart's pivot point.

---

### `RightSpyglassPivot` \{#RightSpyglassPivot}

-   #### `RIGHT_SPYGLASS_PIVOT` \{#RIGHT_SPYGLASS_PIVOT}

This ParentType renders a spyglass at this ModelPart's pivot point when you are using a spyglass in the RightHand.

---

### `LeftSpyglassPivot` \{#LeftSpyglassPivot}

-   #### `LEFT_SPYGLASS_PIVOT` \{#LEFT_SPYGLASS_PIVOT}

This ParentType renders a spyglass at this ModelPart's pivot point when you are using a spyglass in the LeftHand.

---

### `HelmetItemPivot` \{#HelmetItemPivot}

-   #### `HELMET_ITEM_PIVOT` \{#HELMET_ITEM_PIVOT}

This ParentType renders the item that is currently in the Helmet slot. This is for stull like pumpkins, banners, bones. For rendering the vanilla helmet in a different location see see [`HelmetPivot`](#HelmetPivot).

---

### `RightParrotPivot` \{#RightParrotPivot}

-   #### `RIGHT_PARROT_PIVOT` \{#RIGHT_PARROT_PIVOT}

This ParentType renders the entity riding on your right shoulder at the ModelPart's pivot point. I say entity, but that entity will always be a parrot.

---

### `LeftParrotPivot` \{#LeftParrotPivot}

-   #### `LEFT_PARROT_PIVOT` \{#LEFT_PARROT_PIVOT}

This ParentType renders the entity riding on your left shoulder at the ModelPart's pivot point. I say entity, but that entity will always be a parrot.

Item Display Modes can be used to detect the display mode of an item through the item_render event, or it can be used to apply transformations to item tasks.

# Item Task Exclusive

When an item task's display mode is set transformations will be applied to make the item appear as if it's rendering in that circumstance. 

<code>GUI</code>: The transformations used by the item when being displayed in a GUI (the player's inventory for example)

<code>GROUND</code>: The transformations used by the item when it is dropped on the ground.

<code>FIXED</code>: The transformations used by the item while it is in an item frame.

<code>NONE</code>: Don't apply any transformations.

# Universal

<code>FIRST_PERSON_RIGHT_HAND</code>: While in the first person right hand

<code>FIRST_PERSON_LEFT_HAND</code>: While in the first person left hand

<code>THIRD_PERSON_RIGHT_HAND</code>: While in the third person right hand

<code>THIRD_PERSON_LEFT_HAND</code>: While in the third person left hand

<code>HEAD</code>: While any item that isn't a head (player, mob, or dragon) or helmet is in your head slot.
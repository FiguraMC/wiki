import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

# Custom Items

Using Figura you can make custom items that are visible in first and third person.

You'll need to use the Item [keyword](../enums/ModelPartParentTypes) and the item_render event combined.

## Item Keyword

If you give a Blockbench group the Item keyword (by starting the group name with <code>Item</code>) it will be primed and ready to be used as an item. Without the event the Item group will vanish- and so will every item you hold.

## Item Render Event

The item_render event runs once a frame for every item you're holding (so, a max of two) and do their own things in their version of the event.

In order to make the Item show up you must return it in the item_render event. This example assumes the bbmodel is named <code>model</code> and that the keyworded group is named Item. If you wish to test this change <code>model</code> to your bbmodel name and the Item group to your version.

```lua
function events.item_render()
    return models.model.Item
end
```

This will replace every single item you're holding with your custom item

## Replacing Specific Items

You can use the event's arguments to get different information from the item you're holding, and they are: the itemstack, rendering mode, position, rotation, scale, and if its in the left hand. [Possible item rendering modes.](../enums/ItemDisplayModes)

```lua
function events.item_render(item, mode, pos, rot, scale, left)
end
```

This is storing all the values you can get, but in most cases you only need item and sometimes mode. Let's replace bows, shields, and all swords. These are all for a blockbench model that looks like this:

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="ItemSword" icon="blockbench/group"/>
    <FileTreeNode label="ItemBow" icon="blockbench/group"/>
    <FileTreeNode label="ItemShield" icon="blockbench/group"/>
  </FileTreeNode>
</FileTreeRoot>

```lua
function events.item_render(item)
    if item.id == "minecraft:bow" then
        return models.model.ItemBow
    elseif item.id == "minecraft:shield" then
        return models.model.ItemShield
    elseif item.id:find("sword") then
        return models.model.ItemSword
    end
end
```

The find function is searching the id for the word 'sword' so you don't need to type in every single sword id. This also makes it compatible with modded swords.

## Things To Note

1. Do _not_ put the Item group inside any other group. The Blockbench outliner should look like this:

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="Item" icon="blockbench/group"/>
  </FileTreeNode>
</FileTreeRoot>

or

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="Item" icon="blockbench/group"/>
    <FileTreeNode label="Item2" icon="blockbench/group"/>
  </FileTreeNode>
</FileTreeRoot>

because you can have more than one of these keywords. Do **not** nest Item keywords inside another. And, do **not** have more than one custom item per instance of the Item keyword.

You **could** put your Item group in another group but be careful, doing so makes it easier to cause unwanted behavior. For example, if you put it into RightArm or LeftArm it will be force unrendered, defeating the point of it.

2. 0,0,0 in Blockbench is where the player will be holding the item in the world

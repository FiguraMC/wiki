import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

This page describes the process to access any ModelPart from the global ModelPart <code>models</code>

# Getting a ModelPart

A property of all ModelParts is that you can get a child ModelPart of a parent ModelPart by [indexing](../tutorials/Tables#generic-indexing) the parent with the child's name.<br/>
<code>models</code> itself is a ModelPart. All bbmodel files in the avatar act as child ModelParts to <code>models</code>.<br/>
Everything in the root of a Blockbench project is a child of the bbmodel ModelPart.<br/>
After that, parenting follows the parent structure as defined in the Blockbench OUTLINER.<br/>
For example the cube <Emoji icon="blockbench/cube"/> <code>RightArm</code>,<br/>

<FileTreeRoot>
  <FileTreeNode label="model.bbmodel" icon="file/bbmodel">
    <FileTreeNode label="Head" icon="blockbench/group">
      <FileTreeNode label="Head" icon="blockbench/cube"/>
      <FileTreeNode label="Head Layer" icon="blockbench/cube"/>
    </FileTreeNode>
    <FileTreeNode label="RightArm" icon="blockbench/group">
      <FileTreeNode label="RightArm" icon="blockbench/cube"/>
      <FileTreeNode label="RightArm Layer" icon="blockbench/cube"/>
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

Would be accessed via <code>models.model.RightArm.RightArm</code>

# Storing a ModelPart

As there is nothing special about indexing straight from <code>models</code> all the time (its just another ModelPart), if a specific ModelPart is used multiple times in a script we can store it in a variable for ease of access.

```lua
--sets a World parented part to match the player's position and body rotation
local worldPart = models.model.World
function events.RENDER(delta, context)
    worldPart:setPos(player:getPos(delta) * 16)
    worldPart:setRot(0, -player:getBodyYaw(delta) + 180, 0)
end
```

# BBmodels in subfolders

bbmodel files in subfolders are a special case. For them, the folder itself acts as another ModelPart.<br/>

<FileTreeRoot>
  <FileTreeNode label="subfolderA" icon="file/folder">
    <FileTreeNode label="Pet.bbmodel" icon="file/bbmodel"/>
    <FileTreeNode label="bow.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
  <FileTreeNode label="subfolderB" icon="file/folder">
    <FileTreeNode label="model.bbmodel" icon="file/bbmodel"/>
    <FileTreeNode label="bow.bbmodel" icon="file/bbmodel"/>
  </FileTreeNode>
</FileTreeRoot>

The bbmodel <Emoji icon="file/bbmodel"/> <code>Pet.bbmodel</code> would be accessed by <code>models.subfolderA.Pet</code>.<br/>

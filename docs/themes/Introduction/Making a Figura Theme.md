---
sidebar_position: 2
---
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

# Making a Figura Theme
:::warning
It is recommended to have a small understanding on how Minecraft Java Resource Packs work before going through this. You can learn how they work [in this tutorial](https://minecraft.wiki/w/Tutorials/Creating_a_resource_pack).
:::
---

Figura Themes work like normal Minecraft Resource Packs but now they modify the textures of Figura.

Here is the file structure of a Figura Theme:
<FileTreeRoot>
  <FileTreeNode label="assets">
  <FileTreeNode label="pack.png" icon="file/texture" />
  <FileTreeNode label="pack.mcmeta" icon="file/json" />
    <FileTreeNode label="figura">
      <FileTreeNode label="textures">
        <FileTreeNode label="avatar_wizard" />
        <FileTreeNode label="font" />
        <FileTreeNode label="gui">
            <FileTreeNode label="background" />
            <FileTreeNode label="toast" />
        </FileTreeNode>
        <FileTreeNode label="rainbow.png" icon="file/texture" />
      </FileTreeNode>
      <FileTreeNode label="font" />
      <FileTreeNode label="lang" />
      <FileTreeNode label="scripts" />
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

If you want to modify the look of Figura, you will only need to edit `assets/figura/textures` since it has all the textures used in Figura.

You can also change all the text used in Figura by editing `assets/figura/lang/en_US.lang`.

The `scripts` folder contains lua files like math.lua that avatars use, Figura Themes cannot modify these files.    

You can get the default Figura assets [in here](https://github.com/FiguraMC/Figura/tree/1.20/common/src/main/resources/assets/figura).

You can also see what each asset modifies in the [Assets](../../category/assets) page.

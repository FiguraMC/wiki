import Emoji from '@site/src/components/Emoji';
import FileTreeRoot from '@site/src/components/FileTree/Root';
import FileTreeNode from '@site/src/components/FileTree/Node';

Avatars are stored in `<minecraftDirectory>/figura/avatars`. You can get to this folder quickly via the <Emoji icon="figura/folder"/> button in the Figura Menu.

A Figura Avatar consists of a named <Emoji icon="file/folder"/> folder or a <Emoji icon="file/zip"/> zip file containing an <Emoji icon="file/json"/> `avatar.json` file. That is everything needed for an avatar to appear in Wardrobe.

<FileTreeRoot>
  <FileTreeNode label="avatars">
    <FileTreeNode label="<AvatarName>">
      <FileTreeNode label="avatar.json" icon="file/json" />
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

An <Emoji icon="file/json"/> `avatar.json` file is just a renamed text file which contains [Avatar Metadata](../tutorials/Avatar%20Metadata) in the form of a json object, but it can be empty. It's presence tells Figura that this folder is an Avatar.

Figura also looks for an image named <Emoji icon="file/texture"/> `avatar.png`. This will be used as the avatar's icon which will appear next to it's name in the Wardrobe.

<FileTreeRoot>
  <FileTreeNode label="avatars">
    <FileTreeNode label="<AvatarName>">
      <FileTreeNode label="avatar.json" icon="file/json" />
      <FileTreeNode label="avatar.png" icon="file/texture" />
    </FileTreeNode>
  </FileTreeNode>
</FileTreeRoot>

Additional files go either in the same folder as the <Emoji icon="file/json"/> `avatar.json`, or within a <Emoji icon="file/folder"/> subfolder.

-   All files with the extension <Emoji icon="file/lua"/> `.lua` will be treated as script files and executed when your avatar is loaded.
-   All files with the extension <Emoji icon="file/bbmodel"/> `.bbmodel` will be treated as model files. The minimum Blockbench version supported is `4.0`.
-   All files with the extension <Emoji icon="file/ogg"/> `.ogg` will be treated as sound files. They must be in Vorbis codec.

Stray <Emoji icon="file/texture"/> texture files in the avatar folder will not be loaded by Figura. For a texture to be loaded by Figura, it must be registered as a texture in a <Emoji icon="file/bbmodel"/> bbmodel file.

_ALL_ files that begin with a period (`.`) will be ignored when figura loads an avatar. Files that are not loaded by Figura are not accessible at all, so don't bother trying to get around the 100kb limit with this.

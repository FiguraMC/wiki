Here are some common issues new users encounter when working with Figura.

## Why is my vanilla model still showing?

By default, Figura will render both your vanilla player model and your custom model(s). This can be disabled with the function:

```lua
vanilla_model.PLAYER:setVisible(false)
```

There are other keywords you can use to disable other parts of the vanilla model:

```lua
-- disables the vanilla armor model
vanilla_model.ARMOR:setVisible(false)

-- disables the cape
vanilla_model.CAPE:setVisible(false)

-- disables the elytra
vanilla_model.LEFT_ELYTRA:setVisible(false)
vanilla_model.RIGHT_ELYTRA:setVisible(false)

-- disables held items
vanilla_model.HELD_ITEMS:setVisible(false)
```

## Why can't other players see my avatar?

There are multiple reasons this could occur.

1. Make sure you are all using the latest version of Figura. You can find the latest version on [Modrinth](https://modrinth.com/mod/figura) or [GitHub](https://github.com/FiguraMC/Figura/releases).
2. Make sure you have uploaded your avatar to the cloud. This is done by selecting the avatar you want to use and clicking the "upload" button (white arrow with an underline).
3. Make sure you are all connected to the same cloud. You can click the reset button in the settings to set it to the default. You should re-upload your avatar after resetting this option.
4. Importantly, **Figura does not work on cracked servers or accounts**. This is due to the way it assigns avatars to players by their UUID. Cracked accounts and servers have obfuscated UUIDs, which means that Figura cannot match players to avatars properly. Aternos also affects UUIDs which can cause similar issues.

## How do I hide armor from Trinkets or another mod?

This depends on how the mod in question handles custom armor. In the case of Trinkets, it handles armor in a way that is unsupported by Figura. There is nothing we can do about this. If this is a problem for you, please bring it up with the developers of the mod in question.

## Where do I put my avatars?

Figura avatars are located in `%AppData%/.minecraft/figura/avatars`. If you are using a third party launcher this may be in a different folder; in any case, it is in the same place you put your mods and resource packs. You should create one folder for each avatar within this folder.

## Why isn't my avatar updating when I edit it?

Figura normally updates avatars in real time if the avatar is being loaded from your computer rather than the cloud. If it is not updating automatically you may be saving your changes to the wrong place. Use your software's "save as" tool to make sure you're saving your changes to the right folder (as mentioned above).

## Where can I go to get support with Figura?

We have an active community on [Discord](https://discord.gg/figuramc) where you can go to ask any questions you may have.

---
sidebar_position: 1
---

# Making An Avatar

## The basics on making avatars

Figura avatars have the potential to be extremely complex creations that combine modelling, texturing, coding, and even music.

But, Figura avatars can also be extremely simple. You're first going to want to enter the in-game Figura menu.

In order to get into the Figura menu you need to join a world (single or multiplayer, it doesn't matter) and enter the pause menu. If Figura is installed and another mod/modpack isn't interferring, there will be a button with a triangle on the right side of the pause menu.

<img src={require("@site/static/img/making/pause.png").default} width="800" alt="The Minecraft pause menu with the Figura triangle to the right of the Open to LAN button"></img><br/>

After you're in the menu there is a plus button that will make the base of an avatar for you

<img src={require("@site/static/img/making/plus.png").default} width="800" alt="The Figura menu with the Create new Avatar button hovered over and surrounded by a red rectangle"></img><br/>

This will bring up the avatar wizard menu, once you give the avatar a name you'll have many more options pop up.

For your first avatar it is strongly suggested that you include a model and a script.

## Models

All Figura models are files from the program Blockbench which have the extension .bbmodel if you have a 3D model that isn't a .bbmodel file it can be imported into Blockbench.

See more on Blockbench models [here](./BlockBench). If you want to learn how to use Blockbench there are many tutorials on Youtube made by the Blockbench community. You can download Blockbench from its [website](https://www.blockbench.net/).

If you want your avatar to replace the vanilla model you'll want to select the Player Model option in the wizard (it becomes visible after selecting Include a Model). If you're going to be animating the custom player model it's suggested that you include all the other options under Include a Model.

## Scripts

Scripting, or coding, is where Figura gets most of its complexity from. Using Lua (which is a programming language) you can make your avatar do whatever you want. Some examples include custom animations, physics for tails or hair, custom armor, and much, much more.

All Figura scripts are in files that have the .lua extension.

More on what scripts can do can be found in the Tutorials and Globals section of this wiki, and the [Lua manual](https://www.lua.org/manual/5.2/).

Figura uses Lua 5.2.

It is strongly suggested that you include dummy events (the option becomes visible after selecting Include a Script). If you're going to be replacing the player model it's suggested to include Hide Vanilla Player (which becomes visible after selecting Player Model in the Include a Model section).

## avatar.json

When you press create in the avatar wizard it will open a folder with at least two files, one of which will be called avatar.json. This file is what's telling Figura that the stuff in that folder is a part of the same avatar.

You can find out more about the avatar.json file [here](../tutorials/Avatar-Metadata)

## avatar.png

If the avatar has a file named avatar.png in it, that png file will become the image shown next to the avatar's name in the Figura menu.

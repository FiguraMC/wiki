# How To Read Documentation

**This article is a WIP.**

As of writing this article, the GitHub wiki is not complete, but there are other sources of documentation for Figura out there. The most updated one is called Figs and it's made and managed by GitHub user applejuiceyy. [Here's a link](https://applejuiceyy.github.io/figs/).

User GrandpaScout has their [VSDocs](https://github.com/GrandpaScout/FiguraRewriteVSDocs) which are used in conjunction with the text/code editor Visual Studio Code. These docs will help autofill function names and blockbench model paths for you.

In-game, Figura has a custom command to find documentation. <code>/figura docs</code>

## The Basics

### Globals

Globals are where functions that allow you to access various information are stored. For instance, functions relating to player data are stored in the global <code>player</code>, and functions relating to the avatar's models are stored in the global <code>models</code>.

### Enums

Enums are not functions, but rather lists of key words a function may return or take as an argument. For example, the <code>ParentTypes</code> enums contains all the parent types you could set a modelPart to (which are equivalent to the Blockbench keywords). On the other hand, the <code>EntityPoses</code> enums contains all the entity poses (including non-player poses) that an entity can achieve, as returned by <code>getPose()</code>

## Reading Figs

This page will be providing a tutorial on how to find and use all of Figura's functions using Figs.

We will be viewing Figs in the 'experienced person' mode. By default Figs is in new person mode, to change this you can select the Preferences button in the upper right of the webpage.

Upon opening Figs you will be primarily presented the option to select your version, this is the version of Figura you are using. If you select the wrong one you may be missing functions or you may be seeing functions you can't actually use. If you skip selecting a version Figs will be showing you the functions in the latest version of Figura.

Regardless of if you select a version or not you will see a list of words on the left of the screen. The ones are the top are globals, and then you can scroll down that sidebar to see miscellaneous types and miscellaneous enums.

Figs has a search function which will find any word in the name or description of a function, so if you don't know what global a function is in, you can use the search function to keyword search for it. (For example, if you want to change the camera, search for camera and scroll)

Let's say we want to make a custom elytra that turns off/on depending on if we're wearing an elytra. We're a player, so all of our information is going to be in the player API. On the left sidebar scroll down until you find <code>player</code> underneath the globals section. Aside from scrolling through the entire player API list you could search for the word 'item' (as we are looking for item information) until you find <code>getItem()</code>

### How To Read What's Being Given

There's going to be some information there, and all of it is necessary. You can click on <code>PlayerAPI.getItem</code> to open the full page for the function (though this doesn't provide more information)

<code>PlayerAPI.getItem</code> tells us that the function <code>getItem</code> is in the PlayerAPI. Functions in the player API are accessed via the <code>player</code> global so the function can be accessed by writing <code>player:getItem()</code>. But it doesn't tell us how to get all the information we want out of it yet.

Look down until you see <code>overload 1:</code> this next bit of information is the second piece of the puzzle

<code>PlayerAPI:getItem(index: Integer): ItemStack</code> is giving us **four** very important pieces of information, the first two we've already gone over.

The third piece of information is what's inside the brackets <code>()</code>. In this case it's <code>index: Integer</code>. In this context, "index" refers to the item slot being checked. An integer is a whole number, so this tells us that the slot to check is determined by putting a whole number in the brackets.

Looking back up at the description of the item, Figs tells us <code>slots are indexed with 1 as the main hand, 2 as the off hand, and 3,4,5,6 as the 4 armor slots from the boots to the helmet</code>. In short, the integer we enter as an argument will dictate what slot it will search. Figs says 6 is the helmet and it goes down to the boots, and we want the chestplate slot so 5 is the integer we must give it.

At this point we have this: <code>player:getItem(5)</code> and we're going to test that it's working with a bit of code

```lua
function events.tick()
    log(player:getItem(5))
end
```

And... huzzah! Our game chat is being spammed by the log, and that log is telling us what's in our chestplate slot.

The game is telling us, at the end of the message, that this is an ItemStack. If you look back at figs' overload: <code>PlayerAPI:getItem(index: Integer): ItemStack</code> you'll notice that 'ItemStack' is after the parenthesis. That's because the information after the colon <code>:</code> is what the function is going to return. Essentially, what it's going to give back to us after it's done.

So now we can get information from the chesplate slot, but we're not doing anything with that information yet, we must dive into information given to us via the ItemStack.

In Figs, click on <code>ItemStack</code> and it will bring you to another page that has even more functions on it.

We want to know if this ItemStack is from an elytra. The best way to do this is via the item's id. If you've ever used the /give command, you give yourself an item via the item ID, and it looks like <code>minecraft:stick</code> or something similar. An item's id can also be viewed by turning advanced tooltips on using F3+H.

If you've searched the ItemStack page for id you will easily find the <code>getID()</code> function.

Its overload looks like this: <code>ItemStack:getID(): String</code>

Like before, getID() is in ItemStack, meaning it wants an ItemStack, but we don't have an ItemStack API like the player API, we can't do ItemStack:getID() because ItemStack is meaningless (it's not in the list of globals). However, <code>player:getItem(5)</code> returns an ItemStack which the <code>getID()</code> function can be used on directly. As such, we can use <code>player:getItem(5):getID()</code> which in our testing log looks like this:

```lua
function events.tick()
    log(player:getItem(5):getID())
end
```

You might be wondering about putting something in getID's parentehsis, so let's turn our attention back to the overload figs gives us. In <code>ItemStack:getID(): String</code> the parenthesis are empty here. That means no arguments are necessary and nothing should be put in the brackets. Anything given will be ignored.

Notably, it's returning a String which is quite literally a string of characters. Putting something in quotes makes it a string. So <code>true</code> is a boolean, but <code>"true"</code> is a string. In our case this string of characters is the id of the item in our chestplate slot. At this point we can compare the string of our item with the string of the elytra id.

```lua
function events.tick()
    log(player:getItem(5):getID() == "minecraft:elytra")
end
```

This statement is known as an evaluation. The doubled equals sign <code>==</code> tells the game to compare the two values on either side of it. In the case of functions, it will compare the value the function returns. If an elytra is worn then <code>player:getItem(5):getID()</code> will return <code>"minecraft:elytra</code>, which is equal to what we're checking for and as such the game will show <code>true</code>. The evaluation can be combined with other code to do more with it, such as store its value in a variable or put it in an if statement.

So, after all this, our elytra detection is <code>player:getItem(5):getID() == "minecraft:elytra"</code>. It's using the player API to run <code>getItem()</code> on the player, and then use <code>getID()</code> on the player's item, and then compare it's ID to that of the elytra to find out if we're wearing an elytra or not.

For clarification: The log is another function that we put the final result into. It serves to make the information we put in it as an argument to the chat. If you copied the log that will break things

## Using The In-Game Docs

WIP

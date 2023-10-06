The nameplate is split into four parts, all with different values you can change. These parts are

<code>CHAT</code> - This is your nameplate that shows up tied to your messages in the game chat.<br/>

<code>LIST</code> - This is your nameplate in the tab list<br/>

<code>ENTITY</code> - This is your nameplate above your head<br/>

<code>ALL</code> - This is for all of the above

## All

ALL has a single function, <code>setText</code>

```lua
nameplate.ALL:setText("Me")
```

## Chat

CHAT only has two functions: <code>getText</code> and <code>setText</code>

```lua
nameplate.CHAT:setText("Me")
nameplate.CHAT:getText()
```

<code>nameplate.ALL:getText()</code> only gets the nameplate changes made by <code>setText</code>, so if you haven't previously set the text, it will return nil. This is true for all permutations of <code>getText</code>

## List

CHAT and LIST have the same functions

```lua
nameplate.LIST:setText("Me")
nameplate.LIST:getText()
```

## Entity

The entity nameplate has far more functions, they are all accessed via ENTITY, here are some examples

```lua
nameplate.ENTITY:setText("Me")
nameplate.ENTITY:setPos(0, 1, 0)
nameplate.ENTITY:setShadow(true)
```

### setText(string)

Sets the text of the nameplate

### getText

Gets the text of the nameplate as set by <code>setText</code>

### setVisible(bool)

Sets the visibility of the nameplate

### isVisible

Gets the visibility of the nameplate

### setPos(vec3)

Sets the position of the nameplate in blocks, this is an offset of the pivot location so 0,0,0 is the pivot's location

### getPos

Gets the position of the nameplate

### setScale(vec3)

Sets the scale of the nameplate

### getScale

Gets the scale of the nameplate

### setPivot(vec3)

Sets the pivot of the nameplate

### getPivot

Gets the pivot of the nameplate

### setLight(vec2)

Sets the brightness of the nameplate text, the first arg is blockLight and the second arg is skyLight

### getLight

Gets the brightness of the nameplate text as set by <code>setLight</code>

### setOutline(bool)

Sets if the nameplate text should be outlined. Incompatible with <code>setShadow</code>

### hasOutline

Gets if the nameplate has an outline

### setOutlineColor(vec3)

Sets the color used for the outline in rgb format and 0-1 ex: (100/255,100/255,100/255)

### setBackgroundColor(vec4)

Sets the color of the nameplate background, in rgba format and 0-1 ex: (100/255,100/255,100/255,100/255)

### getBackgroundColor

Gets the color of the nameplate background as set by <code>setBackgroundColor</code>

### setShadow(bool)

Sets if the nameplate text has a shadow

### hasShadow

Gets if the nameplate has a shadow

## Using JSON

If you wish to change the properties of the text outside of just the text, you can use json to change things like color, boldness, or any other properties you can give text in Minecraft, including via the color codes. You can also use a json text generator from anywhere online.

```lua
nameplate.ENTITY:setText('[{"color":"red","text":"Me"},{"text":"!","color":"#09ff71"}]')
```

Here's an example, you **_must_** wrap all the json given in apostrophes (') like in this example. A json generator will not come with the apostrophes around it, you need to add those yourself

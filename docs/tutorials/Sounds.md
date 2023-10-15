Using Figura you can play custom sounds and sounds from Minecraft itself.

This article assumes you know to avoid calling the player in init.

## Playing A Sound

The most common way to play a sound is through the <code>playSound</code> function in the sound API.

```lua
sounds:playSound(soundID, position, volume, pitch, loop)
```

As you can see this function takes five arguments, the sound ID, the position it will be played, the volume (this dictates how close players need to be to hear the sound, default is 1), its pitch (default is 1), and whether or not it will start playing immediately after it ends (default is false).

For Minecraft sounds the sound ID is the internal name of the sound, you can find these on the [Minecraft Wiki](https://minecraft.wiki/w/Sounds.json/Java_Edition_values) under the Sound Event column. It will play one of the sounds associated with that ID at random.

Example, note that the id is a string because it's in quotes:

```lua
sounds:playSound("entity.bat.ambient", player:getPos())
```

For this example I'm supplying the player position as the location or else it will play at (0,0,0) in the world itself. Because I left out the volume, pitch, and loop, the default values of 1, 1, and false were filled in by Figura. Meaning, it will play with default pitch, default volume, and it won't loop.

Example with the other arguments filled:

```lua
sounds:playSound("entity.bat.ambient", player:getPos(), 1, 1, false)
```

## Custom Sounds

Playing a custom sound is exactly the same as playing a Minecraft sound, except the sound ID is now the name of the sound file.

Ex: If your file is <code>horn.ogg</code> then your playSound line would look like this:

```lua
sounds:playSound("horn", player:getPos())
```

Minecraft will only play specific sound files, namely sounds that are .ogg files. Here's an [online OGG converter](https://audio.online-convert.com/convert-to-ogg). You will want to change the audio channels setting to <code>mono</code> and the audio codec to <code>Vorbis</code> because Minecraft likes the Vorbic codec.

If your custom sound is stored in a subfolder in the avatar, the subfolder name gets added onto the sound name like this:

```lua
sounds:playSound("subfolder.horn", player:getPos())
```

### Mono vs Stereo Sounds

The audio channel type determines if the right and left ear will have two separate channels (meaning that the left and right ears can be different) or if they'll have the same channel for both ears.

Mono sounds are half the size of stereo when it comes to file size. Mono also acts like your average vanilla sound meaning only people near you will be able to hear the sound.

Stereo sounds are much bigger (and sounds are already quite big when it comes to file size) and will play for _everyone in the server_ similarly to activating an end portal. There's no way to get around that other than to swap the audio channels to mono.

## Alternative Ways To Play Sounds

If you want to make a long or looping sound follow your movement you're going to need to use a different method for playing sounds.

You have to store a reference to the sound in a variable so you can use it later

```lua
local wDeath = sounds["entity.wither.death"]
```

Now you have the wither death sound available for your use wherever within that local scope.

```lua
wDeath:play()
```

Will play the sound, but without a position it will be at (0,0,0) in the world.

```lua
function events.tick()
    wDeath:pos(player:getPos())
end
```

Full example:

```lua
local wDeath = sounds["entity.wither.death"]
wDeath:play()
function events.tick()
    wDeath:pos(player:getPos())
end
```

You can alter the volume, pitch, and loop with this method as well.

Figura comes with a small set of commands that can help you use Figura. As Figura is a client-side mod these only affect the client.

## Normal Commands

### Debug

Usage: `/figura debug`

Debug generates a file in your Figura directory that contains information about your Figura mod settings and the avatar you currently have equipped. This includes the file sizes of all of the elements in the avatar.

### Docs

Usage: `/figura docs`

Docs contains all of the documentation you can find in the Globals and Enums section of this wiki, simply use autofill to discover all of the options.

### Emojis

Usage: `/figura emojis`

Emojis contains a list of all the emojis added by Figura. `/figura emojis all` can show you all of them at once.

### Export

Usage: `/figura export avatar`

Export, as the name suggests, exports certain files to your Figura directory. The most useful is `/figura export avatar` which puts your currently worn avatar's moon file into your directory. If you've lost your avatar and it's still on Figura's backend, you can retrieve its .moon file with this command.

### Links

`/figura links`

Links contains all the links for various Figura pages.

### Load

[WIP]

### Reload

`/figura reload`

Reload reloads your currently equipped avatar.

### Run

Usage: `/figura run log("Hello World")`

Run runs whatever lua code you type after it.

## Debug Mode Commands

More commands can be unlocked by turning Debug Mode on in Figura's settings.

### Backend2

[WIP]

### Set_Avatar

Usage: `/figura set_avatar targetuuid sourceuuid`

Set_avatar can be used to set the avatar of an entity using its uuid. targetuuid is the entity whose avatar is being set, and sourceuuid is the entity from where the avatar is coming from. For example, if you were to set a cow to have the avatar you're wearing, the cow's uuid would be the targetuuid and your uuid would be the sourceuuid.

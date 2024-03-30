## The Cloud

The cloud (also referred to as the backend or the server) is where avatars are stored for use in multiplayer. You upload one avatar to the cloud, and that avatar is what other players see equipped to you. When you look at other players, if they uploaded an avatar to the cloud, that is the avatar you see.

### How to know you're connected

You have to be connected to the cloud to upload an avatar and to see other people’s avatars.

You can see if you're connected by looking at the fourth part of the avatar status bar.

<img src={require("@site/static/img/multiplayer/connected.png").default} width="400" alt="The cloud connection circle displaying that the cloud is connecyed"></img><br/>

If your fourth part is a red X, you’re not connected to the cloud.

<img src={require("@site/static/img/multiplayer/disconnected.png").default} width="400" alt="The cloud connection circle displaying that the cloud is disconnected"></img><br/>

### How to connect to the cloud

Figura will automatically attempt to connect you to the cloud when you join a server.

-   Check your internet connection
-   Press the reload button, this will attempt to get information from the cloud and may connect you
-   Leave and re-join the server, or restart Minecraft
-   Check the Discord’s announcements channel for information on if the cloud is offline

### Offline Mode Servers and Cracked Accounts

Figura uses a player’s UUID (a value unique to every valid Minecraft account) to identify players and entities and correctly apply avatars to them from the cloud.

Cracked (non-licensed/pirated) Minecraft accounts do not have a valid UUID of their own and as a result can’t use avatars from the cloud. There is no way around this.

Offline mode servers usually scramble the UUIDs of every account (cracked or licensed) logged onto the server. And because your UUID won’t match your username anymore, even licensed accounts can’t use avatars from the cloud while in an offline mode server. For licensed accounts there may be a work around if you connected to the server before it went into offline mode. Otherwise, a plugin that attempts to fix UUIDs like easyauth may be able to solve this problem.

Additionally, Aternos servers are known to mess with Figura’s multiplayer capabilities even when in online mode.

## Uploading an avatar

Equip the avatar you want to upload by selecting it in the avatar list, and then press the upload button.

<img src={require("@site/static/img/multiplayer/upload.png").default} width="40" alt="The Figura upload button"></img><br/>

This does two things:

1. It sends the avatar to the cloud
2. It then takes that cloud avatar (called the uploaded avatar) and equips it to you

:::warning
Many new users of Figura think they need to press the upload button every time they make changes to their avatar, but this is not the case. You do not need to press upload every time you save any of the avatar files, if you did not upload the avatar Figura will automatically reload the avatar and show the changes to you. If you uploaded the avatar it will stop following changes made to the files after it is uploaded.
:::

### The other buttons

<img src={require("@site/static/img/multiplayer/reload.png").default} width="40" alt="The Figura reload button"></img><br/>

The reload button unequips your avatar and reloads the avatar uploaded to the cloud, which it then equips to you.

:::warning
Many new users of Figura think they need to press the reload button every time they make changes to their avatar, but this is not the case. You do not need to press reload every time you save any of the avatar files, if you did not upload the avatar Figura will automatically reload the avatar and show the changes to you. This button will not show you any changes you have made to the avatar's files, and may even seemingly revert changes you have made as it reverts back to the last avatar you uploaded to the cloud.
:::

<img src={require("@site/static/img/multiplayer/delete.png").default} width="40" alt="The Figura delete button"></img><br/>

The delete button removes the uploaded avatar from the cloud.

## Local vs Uploaded Avatars

The local avatar is an avatar you have equipped that is directly linked to the files on your computer. Whenever you update one of the files on your computer the local avatar immediately updates itself to match the change.

An uploaded avatar is the avatar you have uploaded to the cloud. It is completely disconnected from the files you have on your computer. This avatar will be equipped to you when you press upload, press reload, or join a single or multiplayer server. Any changes you make to the files on your computer will not be made to the uploaded avatar.

## Permissions

This menu can be accessed via the Figura menu. It’s sometimes called the trust menu.

<img src={require("@site/static/img/multiplayer/permissions.png").default} width="800" alt="The Figura permissions menu, the button to access the advanced options is highlighted with a red square"></img><br/>

The button indicated near the bottom right corner of the screen pulls up a menu that lets you adjust permission levels. Alternatively, you can click and drag player names around to move them to different levels.

The permission levels and settings dictate how much of another player’s avatar you can see. The first time you see another player with a Figura avatar they’ll be put into the Default trust level. These settings are only for how YOU see other people’s avatars. Your settings will not affect how other players see your avatar.

The default level is going to be adequate for most avatars, but notably the “Nameplate Change” setting is set to disabled by default. This means, for every player in your default level you can’t see any changes they’ve made to their nameplate. This is so people can’t make completely invisible avatars in the default level.

Problems with permissions can be seen in someone's nameplate. A shield symbol pops up when someone's avatar is trying to do something that your permission settings for them don't allow. If you hover over it you can see which permissions are being blocked.

<img src={require("@site/static/img/multiplayer/nameplate.png").default} width="800" alt="Screenshot of a player nameplate that has the 'This Avatar utilizes a higher Permission category!' warning. The warnings are 'Could not edit nameplate' and 'Could not cancel a sound'"></img><br/>

## Script Errors

Like permission issues, script errors you might see on your friend's avatar are displayed in their nameplate. You can hover over the red X for more information.

<img src={require("@site/static/img/multiplayer/error.png").default} width="800" alt="Screenshot of a player nameplate that has the 'This Avatar contains an error!' warning. The error cause is 'Hi, this is a test error'"></img><br/>

Sometimes your script can error for other players, but appear fine for you. Sometimes this is caused by permissions, in which case they can simply bring your permission level to max and then reload your avatar.

Most of the time, however, it’s caused by an error in your script. You’ll have to work with your friend in order to diagnose and solve the script error. But in the meantime they can reload your avatar to hopefully temporarily dismiss the error.

The global instance of the NameplateAPI and its subtypes

### `Chat`

A customization for your nameplate in the chat

See [NameplateCustomization](../globals/Nameplate/NameplateCustomization) for `Chat` functions

---

### `Entity`

A customization for your nameplate above your head

See [EntityNameplateCustomization](../globals/Nameplate/EntityNameplateCustomization) for `Entity` functions

---

### `List`

A customization for your nameplate in the tab list

See [NameplateCustomization](../globals/Nameplate/NameplateCustomization) for `List` functions

---

### `All`

A group that manage all your nameplate customizations at once

See [NameplateCustomizationGroup](../globals/Nameplate/NameplateCustomizationGroup) for `All` functions

## Using JSON

If you wish to change the properties of the text outside of just the text, you can use json to change things like color, boldness, or any other properties you can give text in Minecraft, including via the color codes. You can also use a json text generator from anywhere online.

```lua
nameplate.All:setText('[{"color":"red","text":"Me"},{"text":"!","color":"#09ff71"}]')
```

Here's an example, you **_must_** wrap all the json given in apostrophes (') like in this example. A json generator will not come with the apostrophes around it, you need to add those yourself

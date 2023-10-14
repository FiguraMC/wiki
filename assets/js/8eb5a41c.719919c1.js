"use strict";(self.webpackChunkfigurawiki=self.webpackChunkfigurawiki||[]).push([[280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(n),g=i,p=u["".concat(o,".").concat(g)]||u[g]||d[g]||s;return n?l.createElement(p,a(a({ref:t},h),{},{components:n})):l.createElement(p,a({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=g;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[u]="string"==typeof e?e:i,a[1]=r;for(var c=2;c<s;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var l=n(7462),i=(n(7294),n(3905));const s={},a=void 0,r={unversionedId:"globals/Host/Host",id:"globals/Host/Host",title:"Host",description:"The host API is accessed through the host global. Like soisFlying()",source:"@site/docs/globals/Host/Host.md",sourceDirName:"globals/Host",slug:"/globals/Host/",permalink:"/globals/Host/",draft:!1,editUrl:"https://github.com/figuramc/wiki/tree/main/docs/globals/Host/Host.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/globals/Events/Event"},next:{title:"Keybinds",permalink:"/globals/Keybinds/"}},o={},c=[{value:"isHost",id:"ishost",level:3},{value:"Player Data",id:"player-data",level:2},{value:"isJumping",id:"isjumping",level:3},{value:"isFlying",id:"isflying",level:3},{value:"isContainerOpen",id:"iscontaineropen",level:3},{value:"getAir",id:"getair",level:3},{value:"getSlot(integer or string)",id:"getslotinteger-or-string",level:3},{value:"setSlot(slot,item)",id:"setslotslotitem",level:3},{value:"getScreenSlot(slot)",id:"getscreenslotslot",level:3},{value:"getScreenSlotCount",id:"getscreenslotcount",level:3},{value:"getScreen",id:"getscreen",level:3},{value:"getStatusEffects",id:"getstatuseffects",level:3},{value:"getAttackCharge",id:"getattackcharge",level:3},{value:"getReachDistance",id:"getreachdistance",level:3},{value:"getPickBlock",id:"getpickblock",level:3},{value:"getPickEntity",id:"getpickentity",level:3},{value:"Chat",id:"chat",level:2},{value:"isChatOpen",id:"ischatopen",level:3},{value:"sendChatCommand(string)",id:"sendchatcommandstring",level:3},{value:"setChatMessage(integer,string,vec3)",id:"setchatmessageintegerstringvec3",level:3},{value:"sendChatMessage",id:"sendchatmessage",level:3},{value:"getChatMessage(integer)",id:"getchatmessageinteger",level:3},{value:"appendChatHistory(string)",id:"appendchathistorystring",level:3},{value:"setChatText",id:"setchattext",level:3},{value:"getChatText",id:"getchattext",level:3},{value:"setChatColor(vec3)",id:"setchatcolorvec3",level:3},{value:"getChatColor",id:"getchatcolor",level:3},{value:"isChatVerified",id:"ischatverified",level:3},{value:"Other",id:"other",level:2},{value:"swingArm(bool)",id:"swingarmbool",level:3},{value:"setTitle(string)",id:"settitlestring",level:3},{value:"setSubtitle(string)",id:"setsubtitlestring",level:3},{value:"setActionbar(string,bool)",id:"setactionbarstringbool",level:3},{value:"setTitleTimes(vec3)",id:"settitletimesvec3",level:3},{value:"clearTitle",id:"cleartitle",level:3},{value:"setUnlockCursor(bool)",id:"setunlockcursorbool",level:3},{value:"isCursorUnlocked",id:"iscursorunlocked",level:3},{value:"screenshot",id:"screenshot",level:3},{value:"setClipboard",id:"setclipboard",level:3},{value:"getClipboard",id:"getclipboard",level:3},{value:"isAvatarUploaded",id:"isavataruploaded",level:3}],h={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The host API is accessed through the ",(0,i.kt)("code",null,"host")," global. Like so: ",(0,i.kt)("code",null,"host:isFlying()")),(0,i.kt)("p",null,"Functions in the host API aren't synced, meaning to be useful in multiplayer their information will need to be synced via ",(0,i.kt)("a",{parentName:"p",href:"../tutorials/Pings"},"pings"),"."),(0,i.kt)("h3",{id:"ishost"},"isHost"),(0,i.kt)("p",null,"Returns true if this instance of the script is running on host"),(0,i.kt)("h2",{id:"player-data"},"Player Data"),(0,i.kt)("h3",{id:"isjumping"},"isJumping"),(0,i.kt)("p",null,"Checks if the jump key is being pressed."),(0,i.kt)("h3",{id:"isflying"},"isFlying"),(0,i.kt)("p",null,"Checks if the player is currently creative flying"),(0,i.kt)("h3",{id:"iscontaineropen"},"isContainerOpen"),(0,i.kt)("p",null,"Checks if the host has a container screen opened"),(0,i.kt)("h3",{id:"getair"},"getAir"),(0,i.kt)("p",null,"Gets the remaining amount of air of the player. From 300 to -19, whenever you take damage from drowning it sets back to 0. Water breathing freezes the value when underwater. Respiration slows down how quickly the number goes down."),(0,i.kt)("h3",{id:"getslotinteger-or-string"},"getSlot(integer or string)"),(0,i.kt)("p",null,"Gets an ItemStack for the item in the given slot"),(0,i.kt)("p",null,"The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command"),(0,i.kt)("p",null,"For the numerical id, 0-8 are the hotbar, 9-35 are the rest of the inventory starting from the top left slot, 99 is the offhand, and 100-103 are the armor slots from the boots to the helmet. ",(0,i.kt)("code",null,"player:getItem()")," is a better alternative for getting equipment slots."),(0,i.kt)("h3",{id:"setslotslotitem"},"setSlot(slot,item)"),(0,i.kt)("p",null,"Sets a slot with an ItemStack"),(0,i.kt)("p",null,"The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command"),(0,i.kt)("p",null,"Slot -1 uses the first available slot"),(0,i.kt)("p",null,"Only runs for creative mode"),(0,i.kt)("h3",{id:"getscreenslotslot"},"getScreenSlot(slot)"),(0,i.kt)("p",null,"Gets the item in a screen slot"),(0,i.kt)("p",null,"The slot is either their numerical id (0 indexed) or the slot string, as used in the /item command"),(0,i.kt)("p",null,"If the player is not currently in a screen, the screen has no slots, or the slot index is greater than the maximum, returns nil"),(0,i.kt)("h3",{id:"getscreenslotcount"},"getScreenSlotCount"),(0,i.kt)("p",null,"Gets the number of slots in the screen the player is currently in"),(0,i.kt)("p",null,"If the player is not currently in a screen or the screen has no slots, returns nil"),(0,i.kt)("h3",{id:"getscreen"},"getScreen"),(0,i.kt)("p",null,"Gets the class name of the screen the player is currently on. Class names are slightly obfuscated by Minecraft's code and will return a string ending in numbers that are the class' id. A list of class ids can b found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GrandpaScout/FiguraRewriteVSDocs"},"GS' VSCode docs"),", or you can use a log to get the name of the screen you're accessing."),(0,i.kt)("p",null,"If the player is not currently in a screen, returns nil"),(0,i.kt)("h3",{id:"getstatuseffects"},"getStatusEffects"),(0,i.kt)("p",null,"Returns a table of all of the player's status effects"),(0,i.kt)("p",null,"The table contains sub-tables, each of which contains the name, amplifier, duration, and particle visibility of each status effect. To access a sub table index the effect table with the sub-table's name. Re the example below: ",(0,i.kt)("code",null,"effect.name")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"for _, effect in pairs(host:getStatusEffects()) do\n    logTable(effect)\nend\n")),(0,i.kt)("h3",{id:"getattackcharge"},"getAttackCharge"),(0,i.kt)("p",null,"Returns a fraction (0 to 1) of the charge of the player attack"),(0,i.kt)("p",null,"If less than 1, every attack will result result in a weak attack"),(0,i.kt)("h3",{id:"getreachdistance"},"getReachDistance"),(0,i.kt)("p",null,"Returns the current reach distance of the player"),(0,i.kt)("h3",{id:"getpickblock"},"getPickBlock"),(0,i.kt)("p",null,"Returns the current targeted block set by the client"),(0,i.kt)("p",null,"Returns a vararg of the block, the hit position and the block face the hit collided"),(0,i.kt)("h3",{id:"getpickentity"},"getPickEntity"),(0,i.kt)("p",null,"Returns the current targeted entity set by the client"),(0,i.kt)("h2",{id:"chat"},"Chat"),(0,i.kt)("h3",{id:"ischatopen"},"isChatOpen"),(0,i.kt)("p",null,"Checks if the host has the chat screen opened"),(0,i.kt)("h3",{id:"sendchatcommandstring"},"sendChatCommand(string)"),(0,i.kt)("p",null,"Sends the given command in the chat"),(0,i.kt)("h3",{id:"setchatmessageintegerstringvec3"},"setChatMessage(integer,string,vec3)"),(0,i.kt)("p",null,"Modifies a chat message with the given text"),(0,i.kt)("p",null,"Takes an index, were 1 means the last message on chat"),(0,i.kt)("p",null,"Setting the message to nil will effectively remove it from the chat"),(0,i.kt)("h3",{id:"sendchatmessage"},"sendChatMessage"),(0,i.kt)("p",null,"Sends the given message in the chat"),(0,i.kt)("h3",{id:"getchatmessageinteger"},"getChatMessage(integer)"),(0,i.kt)("p",null,"Returns a table with information about a chat message"),(0,i.kt)("p",null,"Takes an index, were 1 means the last message on chat"),(0,i.kt)("h3",{id:"appendchathistorystring"},"appendChatHistory(string)"),(0,i.kt)("p",null,"Appends the message on the recent chat history"),(0,i.kt)("h3",{id:"setchattext"},"setChatText"),(0,i.kt)("p",null,"Sets the text currently being typed in the chat window to the given string"),(0,i.kt)("h3",{id:"getchattext"},"getChatText"),(0,i.kt)("p",null,"Gets the text that is currently being typed into the chat window"),(0,i.kt)("h3",{id:"setchatcolorvec3"},"setChatColor(vec3)"),(0,i.kt)("p",null,"Sets the color of the text that is currently being typed into the chat window"),(0,i.kt)("h3",{id:"getchatcolor"},"getChatColor"),(0,i.kt)("p",null,"Gets the chat window text color"),(0,i.kt)("h3",{id:"ischatverified"},"isChatVerified"),(0,i.kt)("p",null,"Presumably gets if the messages being sent are verified by the Minecraft server (speculation)"),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("h3",{id:"swingarmbool"},"swingArm(bool)"),(0,i.kt)("p",null,"Animates swinging the player's arm"),(0,i.kt)("p",null,"If the boolean is true, then the offhand is the one that swings"),(0,i.kt)("h3",{id:"settitlestring"},"setTitle(string)"),(0,i.kt)("p",null,"Sets the current title to the given text"),(0,i.kt)("p",null,"The text is given as json"),(0,i.kt)("h3",{id:"setsubtitlestring"},"setSubtitle(string)"),(0,i.kt)("p",null,"Sets the current subtitle to the given text\nThe text is given as json"),(0,i.kt)("h3",{id:"setactionbarstringbool"},"setActionbar(string,bool)"),(0,i.kt)("p",null,"Sets the action bar message to the given text"),(0,i.kt)("p",null,"The boolean parameter defaults to false and sets if the text will be animated"),(0,i.kt)("h3",{id:"settitletimesvec3"},"setTitleTimes(vec3)"),(0,i.kt)("p",null,"Sets the duration of the title on the screen, also its fade-in and fade-out durations."),(0,i.kt)("p",null,"The inputs for the vec3 are order like-so: (fadeInTime, stayTime, fadeOutTime)"),(0,i.kt)("h3",{id:"cleartitle"},"clearTitle"),(0,i.kt)("p",null,"Clears the current title from the GUI"),(0,i.kt)("h3",{id:"setunlockcursorbool"},"setUnlockCursor(bool)"),(0,i.kt)("p",null,"Toggles locking of your cursor, letting you move it freely on the screen instead of it controlling your player's rotation"),(0,i.kt)("h3",{id:"iscursorunlocked"},"isCursorUnlocked"),(0,i.kt)("p",null,"Checks if the cursor is currently unlocked"),(0,i.kt)("p",null,"Only responds to your own changes in script, not anything done by Minecraft"),(0,i.kt)("h3",{id:"screenshot"},"screenshot"),(0,i.kt)("p",null,"Takes a screenshot from the current screen and returns a Texture of it"),(0,i.kt)("h3",{id:"setclipboard"},"setClipboard"),(0,i.kt)("p",null,"Sets the clipboard text"),(0,i.kt)("h3",{id:"getclipboard"},"getClipboard"),(0,i.kt)("p",null,"Gets the text from the clipboard"),(0,i.kt)("h3",{id:"isavataruploaded"},"isAvatarUploaded"),(0,i.kt)("p",null,"Checks if this avatar is currently uploaded"))}d.isMDXComponent=!0}}]);
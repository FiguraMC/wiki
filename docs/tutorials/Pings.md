With normal mods, there is comunication between the Minecraft Server and it's clients which allows everything to stay in sync. <br/>
Figura is completely client-side. It will never comunicate with the Minecraft Server you are connected to. Figura does not have a server-side component, meaning nothing will happen if you put the mod on a server.<br/>

What does this mean for you, the user? It means that certain functionality that only your client has access to will not be synced with other players.<br/>
Some examples:

-   Keybinds<br/>
    -   If the Minecraft Server tracked every single keystroke, it would be a major security issue. The exact keystrokes are never sent, only the result of those keystrokes.
-   Action Wheel<br/>
    -   The Action Wheel is a feature added by Figura. Remember how I said that Figura never comunicates with the Minecraft Server? It should be obvious why the Action Wheel isnt synced.
-   HostAPI<br/>
    -   The HostAPI exclusivly contains variables that only you, the owner of the avatar and the owner of the machine running Minecraft, has access to. All functions contained within are vanilla variables that are not synced with the Minecraft Server. They are wrapped in a nice, explicit package stating that they are never synced. This is unlike the PlayerAPI, which you can assume is always synced (to some extent (I'm looking at you <code>isGrounded</code>))

So how can we sync information with other players if we cannot do it through the Minecraft Server? The answer is Pings.<br/>

## General Pings

Pings utilize Figura's Backend to sync information with other clients.<br/>
Pings are functions that when called, triggers all other clients to call the same function for their instance of your avatar.

### Ping Rate Limiting

The backend restricts you on how much data you can send over a period of time.<br/>
The developer given limits are:

-   1024 bytes per second
-   32 pings per second

If either of these are reached, the backend will ignore any comunication from you for some amount of time.

### Pingable Values

Pings can send most primitive types and some userdata types.<br/>
All pingable types use a single byte to represent the type of data that is being sent. This byte is not included in the listed byte totals.

-   <code>nil</code> - 0 Bytes
    -   if a type that is not supported is used as a parameter, it will be replaced with <code>nil</code>.
-   <code>boolean</code> - 0 Bytes
-   <code>integear</code> - 1-4 Bytes
    -   <code>integears</code> only take up as many bytes as it needs.
    -   <code>integears</code> are signed. For example, to only use a single byte the value must be between -128 and 127.
-   <code>double</code> - 8 Bytes
    -   If the number has a decimal at all, or is outside the range of a 4 byte <code>integear</code>, it will be sent as a <code>double</code>.
-   <code>string</code> - 2+n Bytes
    -   <code>strings</code> will always use 2 bytes to store the length.
    -   Ascii characters will be a single byte each.
    -   UTF-8 characters will be multiple bytes per character.
    -   The absolute maximum size of string you can send is <code>65535</code> characters. If a larger string is sent, it will be truncated.
-   <code>table</code> - Too Many Bytes
    -   Every key and value is send as data, resulting in high byte costs.
    -   It is recommended to never send a table over pings.
-   <code>VectorN</code> - 1+8\*N Bytes
    -   Vectors have a single byte that stores the size of the Vector.
    -   Vectors are always assumed to store <code>doubles</code>. If you have a Vector of integears, I recommend sending them as 3 seperate arguments instead.
-   <code>MatrixN</code> - 2+8\*W\*H Bytes
    -   Matrices store both the width and height of the matrix, then every value as a <code>double</code>.

### Ping

Below is an example ping.

```lua
function pings.pingName(a)
    print("Ping")
    print(".")
    print("Data Recieved:", a)
    print(".")
    print("Pong")
end
```

It accepts a single variable, which it will print to the chat as an example.

To call it, just call it like any other lua function.

```lua
pings.pingName("This is a string wooooooooooooooooo")
```

When you as the host call the ping, the function will execute for all other clients, regardless of their current state.

Do note that if a non-host client reaches a line where a ping gets called, it is completely ignored. No data is sent to the backend, and the contents of the ping will not be executed.

Ping functions can be passed into functions that expect a function as a parameter, such as Action <code>onToggle</code>.

```lua
actionVariable:onToggle(pings.pingName)
```

Remember that we are passing the function itself as a variable. The below would be passing the _return result_ of the ping function, which is nigh guarenteed to be <code>nil</code> as Pings _should never_ return a value.

```lua
--do not do
actionVariable:onToggle(pings.pingName())
```

## Advanced Pings

Situational techniques that may be handy, depending on the use case.

### Ping on Init

Calling a ping function when the script is first loaded is a horrible idea. The ping will only ever execute for other clients when you, the host, load the avatar. Not only that, it may never be executed on other clients, as they might not have your avatar loaded by the time you broadcast the ping.

How do we get around this? Well, when you assign a function to an index in the <code>pings</code> table, the Lua Function gets replaced with a Java Function. This happens because of metatables, specifically the <code>\_\_newindex</code> metamethod. Functions cannot be modified, so if we store the function before assing it to the <code>pings</code> table, we can use it like a regular function, and use the same code as a ping function.

```lua
local function doThing(state)
    models.modelA:setVisible(state)
    models.modelB:setVisible(not state)
end
pings.doThing = doThing
-- doThing and pings.doThing are 2 completely seperate values at this point, as the pings table has replaced the index at pings.doThing with a Java Function that wraps the doThing Lua Function.
-- <code>doThing==pings.doThing</code> will return <code>false</code>
print(doThing, pings.doThing, doThing == pings.doThing)

local keybindState = false
-- I call the local doThing instead of pings.doThing, as pings.doThing is a function that invokes network code.
-- This ensures that the default state is set correctly. If this was a ping function, both models will be visible for other clients until you press the keybind.
doThing(keybindState)
local keyA = keybinds:newKeybind("KeybindName", "key.keyboard.k")
function keyA.press()
    keybindState = not keybindState
    -- We still need to call the ping function in the keybind.
    pings.doThing(keybindState)
end
```

The alternative is to reiterate the <code>models.modelA:setVisible(state) models.modelB:setVisible(not state)</code> part of the ping.<br/>
For larger pings it will be combersome to rewrite code that is already defined, which is why this technique is useful.

### Byte Array

There are some situations where you will want to send a large amount of raw bytes, and you need to do it efficiently. The most efficient way is to send a string.

Asside from the 2 constant bytes for the length, a string will always be 1 byte per ascii character (UTF-8 characters are multiple ascii characters, interpreted as a single character). This makes it very consistent in terms of bytes, making it easy to predict and avoid being rate limited.

Below is a basic conversion of a byte array to a string, ready to be pinged and converted back into a byte array on the client's end.

```lua
function pings.recieveData(str)
    local byteArray = table.pack(string.byte(str))
    printTable(byteArray)
end

local packet=[]
for i=1,20 do
    table.insert(packet, math.random(0,255))
end
local keyA = keybinds:newKeybind("KeybindName", "key.keyboard.k")
function keyA.press()
    local packedString = string.char(table.unpack(packet))
    pings.recieveData(packedString)
end

```

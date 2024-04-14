import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A byte buffer object

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

### <code>getLength()</code> \{#getLength}

Returns length of this buffer

```lua
getLength()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>getMaxCapacity()</code> \{#getMaxCapacity}

Returns max capacity this buffer can have

```lua
getMaxCapacity()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>setPosition()</code> \{#setPosition}

Sets current position of this buffer

```lua
setPosition(position)
```

**Parameters:**

| Name     | Type                                             | Description | Default |
| -------- | ------------------------------------------------ | ----------- | ------- |
| position | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>getPosition()</code> \{#getPosition}

Returns current position of this buffer

```lua
getPosition()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>available()</code> \{#available}

Returns amount of bytes available to read

```lua
available()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>clear()</code> \{#clear}

figura.docs.clear

```lua
clear()
```

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>close()</code> \{#close}

Closes this buffer, marking it's memory to be freed by garbage collector. After calling this function buffer cant be used anymore

```lua
close()
```

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>isClosed()</code> \{#isClosed}

Checks, is this buffer closed or not

```lua
isClosed()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>read()</code> \{#read}

Reads one byte from this buffer

```lua
read()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readBase64()</code> \{#readBase64}

Reads bytes from this buffer to a Base64 string. Length is amount of bytes to read, default length is 1024

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
readBase64()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
readBase64(length)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| length | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
-- example coming soon
```

---

### <code>readByteArray()</code> \{#readByteArray}

Reads bytes from this buffer to a string byte array. Length is amount of bytes to read, default length is 1024

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
readByteArray()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
readByteArray(length)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| length | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
-- example coming soon
```

---

### <code>readDouble()</code> \{#readDouble}

Reads double from this buffer

```lua
readDouble()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readDoubleLE()</code> \{#readDoubleLE}

Reads little endian double from this buffer

```lua
readDoubleLE()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readFloat()</code> \{#readFloat}

Reads float from this buffer

```lua
readFloat()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readFloatLE()</code> \{#readFloatLE}

Reads little endian float from this buffer

```lua
readFloatLE()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[Number](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readFromStream()</code> \{#readFromStream}

Reads data from provided input stream and writes it to buffer, returns amount of bytes wrote

```lua
readFromStream(stream, amount)
```

**Parameters:**

| Name   | Type                                                  | Description | Default |
| ------ | ----------------------------------------------------- | ----------- | ------- |
| stream | <code>[InputStream](/globals/Data/InputStream)</code> | -           | -       |
| amount | <code>[Integer](/tutorials/types/Numbers)</code>      | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readInt()</code> \{#readInt}

Reads integer from this buffer

```lua
readInt()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readIntLE()</code> \{#readIntLE}

Reads little endian integer from this buffer

```lua
readIntLE()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readLong()</code> \{#readLong}

Reads long from this buffer

```lua
readLong()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readLongLE()</code> \{#readLongLE}

Reads little endian long from this buffer

```lua
readLongLE()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readShort()</code> \{#readShort}

Reads short from this buffer

```lua
readShort()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readShortLE()</code> \{#readShortLE}

Reads little endian short from this buffer

```lua
readShortLE()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readString()</code> \{#readString}

Reads a string from this buffer. Default encoding is UTF8. Length is amount of bytes to read

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
readString()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
readString(length)
```

**Parameters:**

| Name   | Type                                             | Description | Default |
| ------ | ------------------------------------------------ | ----------- | ------- |
| length | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
<TabItem value="overload-3" label="Overload 3">

```lua
readString(length, encoding)
```

**Parameters:**

| Name     | Type                                             | Description | Default |
| -------- | ------------------------------------------------ | ----------- | ------- |
| length   | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |
| encoding | <code>[String](/tutorials/types/Strings)</code>  | -           | -       |

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
-- example coming soon
```

---

### <code>readUShort()</code> \{#readUShort}

Reads unsigned short from this buffer

```lua
readUShort()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readUShortLE()</code> \{#readUShortLE}

Reads little endian unsigned short from this buffer

```lua
readUShortLE()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>write()</code> \{#write}

Writes one byte to this buffer

```lua
write(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeBase64()</code> \{#writeBase64}

Writes bytes of Base64 string to this buffer and returns amount of bytes written.

```lua
writeBase64(base64)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| base64 | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeByteArray()</code> \{#writeByteArray}

Writes raw bytes of string to this buffer and returns amount of bytes written.

```lua
writeByteArray(array)
```

**Parameters:**

| Name  | Type                                            | Description | Default |
| ----- | ----------------------------------------------- | ----------- | ------- |
| array | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeDouble()</code> \{#writeDouble}

Writes double to this buffer

```lua
writeDouble(val)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeDoubleLE()</code> \{#writeDoubleLE}

Writes little endian double to this buffer

```lua
writeDoubleLE(val)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeFloat()</code> \{#writeFloat}

Writes float to this buffer

```lua
writeFloat(val)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeFloatLE()</code> \{#writeFloatLE}

Writes little endian float to this buffer

```lua
writeFloatLE(val)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| val  | <code>[Number](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeInt()</code> \{#writeInt}

Writes integer to this buffer

```lua
writeInt(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeIntLE()</code> \{#writeIntLE}

Writes little endian integer to this buffer

```lua
writeIntLE(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeLong()</code> \{#writeLong}

Writes long to this buffer

```lua
writeLong(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeLongLE()</code> \{#writeLongLE}

Writes little endian long to this buffer

```lua
writeLongLE(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeShort()</code> \{#writeShort}

Writes short to this buffer

```lua
writeShort(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeShortLE()</code> \{#writeShortLE}

Writes little endian short to this buffer

```lua
writeShortLE(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeString()</code> \{#writeString}

Writes a string to this buffer and returns amount of bytes written. Default encoding is UTF8.

<Tabs>
<TabItem value="overload-1" label="Overload 1">

```lua
writeString(val)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| val  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
<TabItem value="overload-2" label="Overload 2">

```lua
writeString(val, encoding)
```

**Parameters:**

| Name     | Type                                            | Description | Default |
| -------- | ----------------------------------------------- | ----------- | ------- |
| val      | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| encoding | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

</TabItem>
</Tabs>

**Example:**

```lua
-- example coming soon
```

---

### <code>writeToStream()</code> \{#writeToStream}

Writes data from this buffer to provided output stream

```lua
writeToStream(stream, amount)
```

**Parameters:**

| Name   | Type                                                    | Description | Default |
| ------ | ------------------------------------------------------- | ----------- | ------- |
| stream | <code>[OutputStream](/globals/Data/OutputStream)</code> | -           | -       |
| amount | <code>[Integer](/tutorials/types/Numbers)</code>        | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeUShort()</code> \{#writeUShort}

Writes unsigned short to this buffer

```lua
writeUShort(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>writeUShortLE()</code> \{#writeUShortLE}

Writes little endian unsigned short to this buffer

```lua
writeUShortLE(val)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| val  | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

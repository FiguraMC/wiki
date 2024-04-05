import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A builder for HTTP request

### <code>getBody()</code> \{#getBody}

figura.docs.http_request_builder.get_data

```lua
getBody()
```

**Returns:**

| Type                                | Description |
| ----------------------------------- | ----------- |
| <code>[java.util.Objects](#)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getHeaders()</code> \{#getHeaders}

Returns table with all headers set for this request

```lua
getHeaders()
```

**Returns:**

| Type                                          | Description |
| --------------------------------------------- | ----------- |
| <code>[Table](/tutorials/types/Tables)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getMethod()</code> \{#getMethod}

Returns method of this request

```lua
getMethod()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>getUri()</code> \{#getUri}

Returns URI of this request

```lua
getUri()
```

**Returns:**

| Type                                            | Description |
| ----------------------------------------------- | ----------- |
| <code>[String](/tutorials/types/Strings)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>body()</code> \{#body}

Sets body for this request, returns itself for chaining. If data is nil request will be sent without body

<Tabs>
    <TabItem value="overload-1" label="Overload 1">

```lua
body(data)
```

**Parameters:**

| Name | Type                                                  | Description | Default |
| ---- | ----------------------------------------------------- | ----------- | ------- |
| data | <code>[InputStream](/globals/Data/InputStream)</code> | -           | -       |

**Returns:**

| Type                                                               | Description               |
| ------------------------------------------------------------------ | ------------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | Returns self for chaining |

    </TabItem>
    <TabItem value="overload-2" label="Overload 2">

```lua
body(data)
```

**Parameters:**

| Name | Type                                        | Description | Default |
| ---- | ------------------------------------------- | ----------- | ------- |
| data | <code>[Buffer](/globals/Data/Buffer)</code> | -           | -       |

**Returns:**

| Type                                                               | Description               |
| ------------------------------------------------------------------ | ------------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | Returns self for chaining |

    </TabItem>

</Tabs>

**Example:**

```lua
--todo
```

---

### <code>header()</code> \{#header}

Sets header for this request, returns itself for chaining. If value is nil header will be removed

```lua
header(header, value)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| header | <code>[String](/tutorials/types/Strings)</code> | -           | -       |
| value  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                               | Description               |
| ------------------------------------------------------------------ | ------------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>method()</code> \{#method}

Sets method for this request, returns itself for chaining. If method is nil default value - "GET", will be used

```lua
method(method)
```

**Parameters:**

| Name   | Type                                            | Description | Default |
| ------ | ----------------------------------------------- | ----------- | ------- |
| method | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                               | Description               |
| ------------------------------------------------------------------ | ------------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

### <code>send()</code> \{#send}

Sends this request and returns Future object that will contain response object once request is done

```lua
send()
```

**Returns:**

| Type                                        | Description |
| ------------------------------------------- | ----------- |
| <code>[Future](/globals/Data/Future)</code> | -           |

**Example:**

```lua
--todo
```

---

### <code>uri()</code> \{#uri}

Sets URI for this request, returns itself for chaining

```lua
uri(uri)
```

**Parameters:**

| Name | Type                                            | Description | Default |
| ---- | ----------------------------------------------- | ----------- | ------- |
| uri  | <code>[String](/tutorials/types/Strings)</code> | -           | -       |

**Returns:**

| Type                                                               | Description               |
| ------------------------------------------------------------------ | ------------------------- |
| <code>[HttpRequestBuilder](/globals/Net/HttpRequestBuilder)</code> | Returns self for chaining |

**Example:**

```lua
--todo
```

---

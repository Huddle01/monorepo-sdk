---
sidebar_position: 3
---

# Hooks

<font color='red'> Add 2 lines on what hooks are what our hooks let you do</font>

## `useHuddleStore`

 <font color='red'> Add 2 lines on what this hook lets you do</font>


```jsx
// JavaScript | TypeScript
import { useHuddleStore } from "huddle01-client/hooks";

// Example
const isCamPaused = useHuddleStore((state) => state.isCamPaused);
```

## `getHuddleClient`

 <font color='red'> Add 2 lines on what this hook lets you do</font>

**Params**

| Param  | Type    | Required                                  |
| ------ | ------- | ----------------------------------------- |
| apiKey | string  | <font color="red">`required`</font>       |
| isBot  | boolean | <font color="lightblue">`optional`</font> |

```jsx
// JavaScript | TypeScript
import { getHuddleClient } from "huddle01-client/hooks";

const apiKey = "replace-with-your-api-key";
const huddleClient = getHuddleClient(apiKey);
```
 <font color='red'> Add the 2 pending hooks </font>

---

💡 For any help reach out to us on
[Discord](https://discord.com/invite/EYqfS32jYc)

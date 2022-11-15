---
sidebar_position: 3
---

# Hooks

## `useHuddleStore`

```jsx
// JavaScript | TypeScript
import { useHuddleStore } from "huddle01-client/hooks";

// Example
const isCamPaused = useHuddleStore((state) => state.isCamPaused);
```

## `getHuddleClient`

### Params

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

---

💡 For any help reach out to us on
[Discord](https://discord.com/invite/EYqfS32jYc)

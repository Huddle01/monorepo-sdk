---
sidebar_position: 3
---

# Client Media Hooks

## `useMeCamTrack`

Hook to access the camera track of the current user
<br/>
<font size="4"> **Return Type : `Promise<MediaTrack>`** </font>

```jsx
// JavaScript | TypeScript
import { useMeCamTrack } from "huddle01-client/hooks";

// Example
const myCam = useMeCamTrack();

```

## `useMeMicTrack`

Hook to access the mic track of the current user
<br/>

<font size="4"> **Return Type : `Promise<MediaTrack>`** </font>

```jsx
// JavaScript | TypeScript
import { useMeMicTrack } from "huddle01-client/hooks";

// Example
const myMic = useMeMicTrack();

```

## `useMeShareTrack`

Hook to access the screen share video track of the current user
<br/>

<font size="4"> **Return Type : `Promise<MediaTrack>`** </font>

```jsx
// JavaScript | TypeScript
import { useMeShareTrack } from "huddle01-client/hooks";

// Example
const shareVideoTrack = useMeShareTrack();

```

## `useMeShareAudioTrack`

Hook to access the screen share audio track of the current user
<br/>

<font size="4"> **Return Type : `Promise<MediaTrack>`** </font>

```jsx
// JavaScript | TypeScript
import { useMeShareTrack } from "huddle01-client/hooks";

// Example
const shareAudioTrack = useMeShareTrack();

```

💡 For any help reach out to us on
[Discord](https://discord.com/invite/EYqfS32jYc)

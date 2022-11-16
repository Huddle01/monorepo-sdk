---
sidebar_position: 2
---

# Client Methods

## <font color="yellow">async</font> `join()`

### Description

`Join()` is the first method to be invoked to join the room.
All other HuddleClient functions are only available after the `join()` method is invoked.

### Return Type : `Promise<Void>`

### Params

| Param      | Type                               | Required                            |
| ---------- | ---------------------------------- | ----------------------------------- |
| roomId     | string                             | <font color="red">`required`</font> |
| walletData | [`TWalletData`](types#twalletdata) | <font color="red">`required`</font> |

> NOTE: `roomID` is the unique identifier of the room to be joined, while joining more than one peer to the room make sure to use the same roomID.
>
> One is expected to use the same roomID for all the peers meant to be joining the room.

### Code Snippet

```jsx
await huddleClient.join("rDVjHUcf4X", // roomId
 {
  address: "0x15900c698ee356E6976e5645394F027F0704c8Eb", //walletAddress
  ens: "axit.eth", //ens name
});
```

## <font color="yellow">async</font> `enableWebcam()`

### Description

`enableWebcam()` to enable the webcam of the user.

### Return Type : `Promise<Void>`

### Code Snippet

```jsx
huddleClient.enableWebcam();
```

## <font color="yellow">async</font> `disableWebcam()`

### Description

`disableWebcam()` to disable the webcam of the user.

### Return Type : `Promise<Void>`

### Code Snippet

```jsx
huddleClient.disableWebcam();
```

## `getWebcams()`

### Description

`getWebcams()` to get the list of available webcams.

### Return Type : `MediaDeviceInfo[]`

### Code Snippet

```jsx
const webcamList = huddleClient.getWebcams();
```

## <font color="yellow">async</font> `changeWebcam()`

### Description

`changeWebcam()` to switch the webcam of the user. <br/>
To fetch the list of available webcams use `getWebcams()` which returns `MediaDeviceInfo[]`.

### Return Type : `Promise<Void>`

### Params

| Param       | Type            | Required                                  |
| ----------- | --------------- | ----------------------------------------- |
| mediaDevice | MediaDeviceInfo | <font color="lightblue">`optional`</font> |

### Code Snippet

```jsx
const webcamList = huddleClient.getWebcams();

await huddleClient.changeWebcam(webcamList[0]);

```

## <font color="yellow">async</font> `enableMic()`

### Description

`enableMic()` to enable the microphone of the user.

### Return Type : `Promise<Void>`

### Code Snippet

```jsx
huddleClient.enableMic();
```

## <font color="yellow">async</font> `disableMic()`

### Description

`disableMic()` to disable the microphone of the user.

> Note : This will stop the audio stream from the user's microphone and Mute the user.
> using `muteMic()` is preffered over `disableMic()` as it will not stop the audio stream from the user's microphone. <br/>`muteMic()` is generally faster and more efficient than `disableMic()` as the latter involves stopping the audio stream from the user's microphone.

### Return Type : `Promise<Void>`

### Code Snippet

```jsx
huddleClient.disableMic();
```

## `getMics()`

### Description

`getMics()` to get the list of available microphones.

### Return Type : `MediaDeviceInfo[]`

### Code Snippet

```jsx
const micList = huddleClient.getMics();
```

## <font color="yellow">async</font> `changeMic()`

### Description

`changeMic()` to switch the microphone of the user. <br/>
To fetch the list of available microphones use `getMics()` which returns `MediaDeviceInfo[]`.

### Params

| Param       | Type            | Required                                  |
| ----------- | --------------- | ----------------------------------------- |
| mediaDevice | MediaDeviceInfo | <font color="lightblue">`optional`</font> |

### Code Snippet

```jsx
const micList = huddleClient.getMics();

await huddleClient.changeMic(micList[0]);
```

## <font color="yellow">async</font> `muteMic()`

### Description

`muteMic()` to mute the microphone of the user.

> Note : This will stop the audio stream from the user's microphone and Mute the user.
> using `muteMic()` is preffered over `disableMic()` as it will not stop the audio stream from the user's microphone. <br/>`muteMic()` is generally faster and more efficient than `disableMic()` as the latter involves stopping the audio stream from the user's microphone.
> Use `muteMic()` and `unmuteMic()` when you want a quick mute/unmute functionality.

### Return Type : `Promise<Void>`

### Code Snippet

```jsx
await huddleClient.muteMic();
```

## `changeAvatarUrl()`

### Description

`changeAvatarUrl()` to change the avatar image URL of the user.

> NOTE : The avatar image URL should be a valid URL and should be accessible on the internet.<br/>
> Supported Image Formats : PNG, JPG, JPEG, SVG

### Params

| Param     | Type       | Required                            |
| --------- | ---------- | ----------------------------------- |
| avatarUrl | string url | <font color="red">`required`</font> |

### Code Snippet

```jsx
huddleClient.changeAvatarUrl(
  "https://openseauserdata.com/files/688ce238dd835db6fd8744b4a0f13eb8.svg"
);
```

## `sendDM()`

### Description

### Params

| Param   | Type   | Required                            |
| ------- | ------ | ----------------------------------- |
| message | string | <font color="red">`required`</font> |
| toId    | string | <font color="red">`required`</font> |
| fromId  | string | <font color="red">`required`</font> |

### Code Snippet

```jsx
huddleClient.sendDM("Hi! Welcome to Huddle01!", "rDVjHUcf4X", "zlQpt69c69");
```

## `toggleRaiseHand()`

### Description

### Params

| Param        | Type    | Required                            |
| ------------ | ------- | ----------------------------------- |
| isHandRaised | boolean | <font color="red">`required`</font> |

### Code Snippet

```jsx
huddleClient.changeAvatarUrl(
  "https://openseauserdata.com/files/688ce238dd835db6fd8744b4a0f13eb8.svg"
);
```

## `sendReaction()`

### Description

### Params

| Param    | Type                                                                                         | Required                            |
| -------- | -------------------------------------------------------------------------------------------- | ----------------------------------- |
| reaction | '', '😂', '😢', '😦', '😍', '🤔', '👀', '🙌', '👍', '👎', '🔥', '🍻', '🚀', '🎉', '❤️', '💯' | <font color="red">`required`</font> |

### Code Snippet

```jsx
huddleClient.sendReaction("🚀");
```

## `allowLobbyPeerToJoinRoom()`

### Description

### Params

| Param         | Type   | Required                            |
| ------------- | ------ | ----------------------------------- |
| peerIdToAdmit | string | <font color="red">`required`</font> |

### Code Snippet

```jsx
huddleClient.allowLobbyPeerToJoinRoom("rDVjHUcf4X");
```

## `allowAllLobbyPeersToJoinRoom()`

### Description

### Code Snippet

```jsx
huddleClient.allowAllLobbyPeersToJoinRoom();
```

## `disallowLobbyPeerFromJoiningRoom()`

### Description

### Params

| Param            | Type   | Required                            |
| ---------------- | ------ | ----------------------------------- |
| peerIdToDisallow | string | <font color="red">`required`</font> |

### Code Snippet

```jsx
huddleClient.disallowLobbyPeerFromJoiningRoom("rDVjHUcf4X");
```

## `disallowAllLobbyPeerFromJoiningRoom()`

### Description

### Code Snippet

```jsx
huddleClient.disallowAllLobbyPeerFromJoiningRoom();
```

---

💡 For any help reach out to us on
[Discord](https://discord.com/invite/EYqfS32jYc)

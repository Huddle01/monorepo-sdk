---
sidebar_position: 2
---

# Client Methods

## <font color="yellow">async</font> `join()`

`Join()` is the first method to be invoked to join the room.
All other HuddleClient functions are only available after the `join()` method is invoked.

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br /><br />
<font size="4"> Params </font>

| Param      | Type                               | Required                            |
| ---------- | ---------------------------------- | ----------------------------------- |
| roomId     | string                             | <font color="red">`required`</font> |
| walletData | [`TWalletData`](types#twalletdata) | <font color="red">`required`</font> |

> NOTE: `roomID` is the unique identifier of the room to be joined, while joining more than one peer to the room make sure to use the same roomID.
>
> One is expected to use the same roomID for all the peers meant to be joining the same room.

<br />
<font size="5"> **Code Snippet** </font>

```jsx
await huddleClient.join("rDVjHUcf4X", // roomId
 {
  address: "0x15900c698ee356E6976e5645394F027F0704c8Eb", //walletAddress
  ens: "axit.eth", //ens name
});
```

## <font color="yellow">async</font> `enableWebcam()`

`enableWebcam()` to enable the webcam of the user.

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.enableWebcam();
```

## <font color="yellow">async</font> `disableWebcam()`

`disableWebcam()` to disable the webcam of the user.

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.disableWebcam();
```

## `getWebcams()`

`getWebcams()` to get the list of available webcams.

<br />
<font size="5"> **Return Type : `MediaDeviceInfo[]`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
const webcamList = huddleClient.getWebcams();
```

## <font color="yellow">async</font> `changeWebcam()`

`changeWebcam()` to switch the webcam of the user. <br/>
To fetch the list of available webcams use `getWebcams()` which returns `MediaDeviceInfo[]`.

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br />
<font size="4"> **Params:** </font>

| Param       | Type            | Required                                  |
| ----------- | --------------- | ----------------------------------------- |
| mediaDevice | MediaDeviceInfo | <font color="lightblue">`optional`</font> |

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
const webcamList = huddleClient.getWebcams();

await huddleClient.changeWebcam(webcamList[0]);

```

## <font color="yellow">async</font> `enableMic()`

`enableMic()` to enable the microphone of the user.

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.enableMic();
```

## <font color="yellow">async</font> `disableMic()`

`disableMic()` to disable the microphone of the user.

> Note : This will stop the audio stream from the user's microphone and mute the user.
> Using `muteMic()` is preferred over `disableMic()` as it will not stop the audio stream from the user's microphone. <br/>`muteMic()` is generally faster and more efficient than `disableMic()` as the latter stops the audio stream from the user's microphone.

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.disableMic();
```

## `getMics()`

`getMics()` to get the list of available microphones.

<br />
<font size="5"> **Return Type : `MediaDeviceInfo[]`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
const micList = huddleClient.getMics();
```

## <font color="yellow">async</font> `changeMic()`

`changeMic()` to switch the microphone of the user. <br/>
To fetch the list of available microphones use `getMics()` which returns `MediaDeviceInfo[]`.

<br />
<font size="4"> **Params:** </font>

| Param       | Type            | Required                                  |
| ----------- | --------------- | ----------------------------------------- |
| mediaDevice | MediaDeviceInfo | <font color="lightblue">`optional`</font> |

<br />
<font size="5"> **Code Snippet** </font>

```jsx
const micList = huddleClient.getMics();

await huddleClient.changeMic(micList[0]);
```

## <font color="yellow">async</font> `muteMic()`

`muteMic()` to mute the microphone of the user.

> Note : This will stop the audio stream from the user's microphone and mute the user.
> Using `muteMic()` is preffered over `disableMic()` as it will not stop the audio stream from the user's microphone. <br/>`muteMic()` is generally faster and more efficient than `disableMic()` as the latter stops the audio stream from the user's microphone.
> Use `muteMic()` and `unmuteMic()` when you want a quick mute/unmute functionality.

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
await huddleClient.muteMic();
```

## `changeAvatarUrl()`

`changeAvatarUrl()` to change the avatar image URL of the user.

> NOTE : The avatar image URL should be a valid URL and should be accessible on the internet.<br/>
> Supported Image Formats : PNG, JPG, JPEG, SVG

<br />
<font size="4"> **Params:** </font>

| Param     | Type       | Required                            |
| --------- | ---------- | ----------------------------------- |
| avatarUrl | string url | <font color="red">`required`</font> |

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.changeAvatarUrl(
  "https://openseauserdata.com/files/688ce238dd835db6fd8744b4a0f13eb8.svg"
);
```

## <font color="yellow">async</font> `sendDM()`

`sendDM()` to send a direct message to a peer in the same room.

<br />
<font size="4"> **Params:** </font>

| Param   | Type   | Required                            |
| ------- | ------ | ----------------------------------- |
| message | string | <font color="red">`required`</font> |
| toId    | string | <font color="red">`required`</font> |
| fromId  | string | <font color="red">`required`</font> |

<br />
<font size="5"> **Return Type : `Promise<Void>`** </font>

<br /><br />
<font size="5"> **Code Snippet:** </font>

```jsx
await huddleClient.sendDM("Hi! Welcome to Huddle01!", // message string
"rDVjHUcf4X", // recipient's peerId / toId
 "zlQpt69c69" // sender's peerId / fromId
 );
```

## <font color="yellow">async</font> `toggleRaiseHand()`

<br />
<font size="4"> **Params:** </font>

| Param        | Type    | Required                            |
| ------------ | ------- | ----------------------------------- |
| isHandRaised | boolean | <font color="red">`required`</font> |

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.toggleRaiseHand(
  isHandRaised: true
);
```

## <font color="yellow">async</font> `sendReaction()`

<br />
<font size="4"> **Params:** </font>

| Param    | Type                                                                                         | Required                            |
| -------- | -------------------------------------------------------------------------------------------- | ----------------------------------- |
| reaction | '', '😂', '😢', '😦', '😍', '🤔', '👀', '🙌', '👍', '👎', '🔥', '🍻', '🚀', '🎉', '❤️', '💯' | <font color="red">`required`</font> |

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.sendReaction("🚀");
```

## <font color="yellow">async</font> `allowLobbyPeerToJoinRoom()`

`allowLobbyPeerToJoinRoom()` allows a peer in the lobby to join the room using the respective `peerId`.

<br />
<font size="4"> **Params:** </font>

| Param  | Type   | Required                            |
| ------ | ------ | ----------------------------------- |
| peerId | string | <font color="red">`required`</font> |

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.allowLobbyPeerToJoinRoom("rDVjHUcf4X"); // allow peer in lobby with peerId "rDVjHUcf4X" to join the room
```

## <font color="yellow">async</font> `allowAllLobbyPeersToJoinRoom()`

`allowAllLobbyPeersToJoinRoom()` to allow all peers in the lobby to join the room.

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.allowAllLobbyPeersToJoinRoom(); // allow all lobby peers in room
```

## <font color="yellow">async</font> `disallowLobbyPeerFromJoiningRoom()`

`disallowLobbyPeerFromJoiningRoom()` to disallow a peer in the lobby from joining the room using respective `peerId`.

<br />
<font size="4"> **Params:** </font>

| Param  | Type   | Required                            |
| ------ | ------ | ----------------------------------- |
| peerId | string | <font color="red">`required`</font> |

<br />
<font size="5"> **Code Snippet** </font>

```jsx
huddleClient.disallowLobbyPeerFromJoiningRoom("rDVjHUcf4X"); // disallow peer in lobby with peerId "rDVjHUcf4X" from joining the room
```

## `disallowAllLobbyPeerFromJoiningRoom()`

`disallowAllLobbyPeerFromJoiningRoom()` to disallow all peers in the lobby from joining the room.

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.disallowAllLobbyPeerFromJoiningRoom();
```

---

💡 For any help reach out to us on
[Discord](https://discord.com/invite/EYqfS32jYc)

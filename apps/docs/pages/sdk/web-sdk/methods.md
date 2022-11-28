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

| Param      | Type        | Required                            |
| ---------- | ----------- | ----------------------------------- |
| roomId     | string      | <font color="red">`required`</font> |
| walletData | TWalletData | <font color="red">`required`</font> |

`TWalletData`

```typescript
type TWalletData = {
  address: string;
  wallet: string; // metamask, walletConnect etc.
  ens: string;
};
```

- `address` Wallet Address of the user joined
- `wallet` Type of Wallet Used.
- `ens` ENS name used.

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

## <font color="yellow">async</font> `startRecording()`

We have abstracted out the recording process needed into our own micro service, as its our own service you cannot use the feature on localhost.
When you invoke this function we initate our service which spins up a bot to go to your link and record that website. After you stop the recording you can find the link inside the recording store states.<br />

Check out [Recording States](/sdk)

| Param     | Type   | Required                                  |
| --------- | ------ | ----------------------------------------- |
| address   | string | <font color="lightblue">`optional`</font> |
| sourceUrl | string | <font color="red">`required`</font>       |

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.startRecording({
  '0xHc6BW8hhYKpz6VUWEcp4dCi',
  "https://www.youtube.com/watch?v=fmNeDQxJBOU"
});
```

> **NOTE:** This will send request to our recording service to start a bot and send the bot to record the given youtube video.
> The wallet address sent will allow the person with this address to access the recording from [Huddle01 Dashboard](https://dashboard.huddle01.com/)

## <font color="yellow">async</font> `stopRecording()`

Invoking this function stops the recording, if you allow to upload the recording to IPFS we will handle all that for you.
You can find the recording on [Huddle01 Dashboard](https://dashboard.huddle01.com/)

Check out [Recording States](/sdk)

| Param | Type    | Required                            |
| ----- | ------- | ----------------------------------- |
| ipfs  | boolean | <font color="red">`required`</font> |

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.stopRecording({
  ipfs: true
});
```

> **NOTE:** The wallet address sent when starting the recording will allow the person with this address to access the recording from [Huddle01 Dashboard](https://dashboard.huddle01.com/)

## <font color="yellow">async</font> `startLiveStreaming()`

The ability to livestream a particular meeting is abstracted in the SDK, We can be livestream on `Youtube`, `Livepeer` & `Twitch`. Right now you cannot mutistream

Check out [Recording States](/sdk)

| Param     | Type                           | Required                                  |
| --------- | ------------------------------ | ----------------------------------------- |
| platform  | `yotube`, `livepeer`, `twitch` | <font color="red">`required`</font>       |
| streamObj | `TLiveStreamObject`            | <font color="lightblue">`optional`</font> |
| sourceUrl | string                         | <font color="lightblue">`optional`</font> |

```typescript
type TLiveStreamObject = {
  streamLink: string;
  streamKey: string;
  streamName: string;
};
```

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.startLiveStreaming({
  platform: 'youtube',
  streamObj: {
    streamLink: '...',
    streamKey: '...',
    streamName: '...'
  }
});
```

## <font color="yellow">async</font> `stopLiveStreaming()`

Invoking this function stops the livestreaming, upon doing this the livestreaming states are toggled and using this you can configure your logic

Checkout [Livestreaming States]()

| Param    | Type                           | Required                            |
| -------- | ------------------------------ | ----------------------------------- |
| platform | `yotube`, `livepeer`, `twitch` | <font color="red">`required`</font> |

```typescript
type TLiveStreamObject = {
  streamLink: string;
  streamKey: string;
  streamName: string;
};
```

<br />
<font size="5"> **Code Snippet:** </font>

```jsx
huddleClient.startLiveStreaming({
  platform: 'youtube',
  streamObj: {
    streamLink: '...',
    streamKey: '...',
    streamName: '...'
  }
});
```

---

💡 For any help reach out to us on
[Discord](https://discord.com/invite/EYqfS32jYc)
